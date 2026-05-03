# AGENTS.md

Workspace memory for AI agents working on **optn.club** — a Vue 3 + Vite single-page app for Forza Motorsport / Horizon tune sharing.

## Project basics

- **Framework:** Vue 3 (script setup, Composition API), TypeScript, Vite, Tailwind CSS.
- **Tests:** Vitest with `--environment jsdom`. The test suite is small (≈5 tests) and lives next to source as `*.spec.ts`.
- **Lint:** ESLint v8 with the legacy `.eslintrc.js` config (NOT flat config). `npm run lint` runs `eslint --fix`.
- **Build:** `npm run build` runs `vue-tsc --noEmit && vite build`. Output goes to **`docs/`** (not `dist/`).
- **Repo host:** GitHub — `git@github.com:OPTN-Club/optn.club.git`.
- **Node:** Pinned to LTS via `.nvmrc`. Currently Node 24 ("Krypton").

## Deployment model

- **No CI build.** Builds are produced **locally** and the resulting `docs/` folder is committed and pushed. The remote auto-deploys from `docs/`.
- A standalone commit named `chore: rebuild app` (or similar) is the convention for the rebuilt artifacts. Keep build output in its own commit, separate from source/lint changes, so reviewers can ignore it.
- The deploy workflow file at `.github/workflows/static.yml` exists but does not currently build the app.

## Conventions

- **Commit style:** Conventional Commits (`chore(deps):`, `fix:`, `feat:`, `style(lint):`, etc.). Authors do tend to keep deps, lint autofix, and rebuild as **three separate commits** during a maintenance pass.
- **Branch naming:** `chore/...`, `fix/...`, `feat/...`. Date-stamped chore branches are accepted (e.g. `chore/deps-refresh-2026-04`).
- **Dependency upgrades policy:** "No breaking changes" is the explicit baseline. When in doubt, hold back majors that require config rewrites or source changes, and flag them as follow-up PRs.

## Held-back majors as of April 2026

These are intentionally NOT bumped in the latest dep refresh because each requires real migration work. Treat them as known follow-up PRs, not bugs:

- ESLint 9 (flat config) — cascades to ~7 plugins
- Tailwind 4 — Oxide engine, CSS-first config
- Express 5, Stylelint 16+, Vitest 4, vue-tsc 3, change-case 5

## AI-assistance disclosure

The maintainers are comfortable with AI-assisted PRs as long as they're disclosed. Standard footer used in PR descriptions:

```
*Authored with AI assistance. Every change was reviewed, verified locally with the project's lint/test/build pipeline, and is the maintainer's responsibility.*
```

---

## Formatter architecture

The app has three formatters — **FH5** (Forza Horizon 5), **FM** (Forza Motorsport), and **FH6** (Forza Horizon 6) — that follow an identical layered pattern.

### Folder structure

```
src/components/formatter/
  useSetupForm.ts              ← generic form state manager (shared by FH5 + FM)
  horizon/                     ← FH5-specific
    FHFormatter.vue            ← top-level route component
    FHSetup.ts                 ← Setup type + default form factories
    useFHSetupForm.ts          ← provider/inject composable
    useFHEnabledControls.ts    ← computed show/hide rules (gear count, diff sections)
    useFHUnits.ts              ← unit conversion watchers
    fh-reddit-generator.ts     ← Reddit markdown output
    fh-discord-generator.ts    ← Discord text output
    FH*.vue                    ← form section components
  motorsport/                  ← FM-specific (same pattern)
    FMFormatter.vue
    FMSetup.ts
    useFMSetupForm.ts
    ...
  horizon6/                    ← FH6-specific (self-contained, does NOT use useSetupForm)
    FH6Formatter.vue
    FH6Setup.ts
    useFH6SetupForm.ts         ← provider composable with built-in prefix encoding + dialog
    useFH6EnabledControls.ts
    useFH6Units.ts             ← uses dialog instead of checkbox for conversion
    fh6-reddit-generator.ts
    fh6-discord-generator.ts
    FH6*.vue
    useFH6SetupForm.spec.ts
```

### Data flow

1. **Route** → `FHFormatter.vue` / `FMFormatter.vue` receive `version` and `encodedForm?` as props (defined in `src/router/index.ts`).
2. **Provider composable** (`useFHSetupFormProvider` / `useFMSetupFormProvider`) calls `useSetupForm(props, blankFormFactory)`, which:
   - Decodes `encodedForm` into a reactive `form` object.
   - Watches `form` and calls `router.replace({ params: { encodedForm: ... } })` whenever it changes — **the URL is the single source of truth**.
   - Exposes `{ form, encoded, globalUnits, reset }`.
3. The provider enriches this with game-specific computed state (`driveType`, `show`) and calls `provide(key, state)`.
4. **Child components** call `useFHSetupForm()` / `useFMSetupForm()` to `inject` the state — no prop drilling.

### URL encoding pipeline

```
form object
  → flattenObject()         nested object → flat dotted keys  e.g. "tune.tires.front"
  → sort keys alphabetically
  → mangleValue()           shorten enum strings & booleans   e.g. "Sport"→"sp", true→"t"
  → JSON.stringify(values)  position-indexed array of values
  → compressToBase64()      lz-string compression → URL-safe base64
```

Decoding is the exact reverse. The current generic implementation is **`src/lib/useFormEncoder.ts`** (used by both formatters). The legacy **`src/lib/base64Form.ts`** is the older FH5-only class — kept for reference but superseded.

**Mangle maps** live in `src/lib/mangle-lookup.ts`:

- `mangleKeyMap` — property name abbreviations (kept for reference; not used in the position-indexed encoding).
- `mangleValueMap` — value abbreviations (`"Stock"→"s"`, `"N/A"→"na"`, `true→"t"`, `false→"f"`, etc.).

**Legacy deserialization:** FH5 passes `useLegacyDeserialization: true` to `useSetupForm`. This splices in default values at known positions when decoding old URLs that pre-date field additions:

- Tire Profile Size: 2 values spliced at index 38 (when array length is 98).
- Motor & Battery: 1 value spliced at index 24 (when array length is 100).

FM does not need this — it is a newer formatter with no legacy URLs to support.

### Versioning

Versions are URL route params (e.g. `/formatter/forza/horizon5/v1/`, `/formatter/forza/motorsport/v3/`).

| Formatter | Versions   | Notes                                                                                                            |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| FH5       | `v1` only  | Single version; `getLatestDefaultForm = getFHDefaultFormV1`                                                      |
| FM        | `v2`, `v3` | `v3` adds `rotorsAndCompression` to engine upgrades; `getFMDefaultFormV3` mutates a v2 default form and casts it |
| FH6       | `v1` only  | New formatter, no legacy URLs; `getLatestDefaultForm = getFH6DefaultFormV1`                                      |

The version param selects the `blankFormFactory` (the default form shape used for both decoding and encoding). **Adding a new version:**

1. Add a new `getFMDefaultFormVN()` (or `getFHDefaultFormVN()`) factory in the relevant `*Setup.ts`.
2. Register it in `defaultFormMap`.
3. Update the router's default `version` param if it should become the new canonical URL.

### Shared vs game-specific

**Shared** (`src/lib/types.ts`):

- All unit enums: `PressureUnit`, `SpringRateUnit`, `LengthUnit`, `SpeedUnit`, `PowerUnit`, `TorqueUnit`, …
- All upgrade enums: `Upgrade`, `FullUpgrade`, `LimitedUpgrade`, `TransmissionUpgrade`, `TurboUpgrade`, `RestrictorUpgrade`, …
- Shared interfaces: `FrontAndRearSettings`, `AccelDecelSettings`, `DifferentialTuneSettings`, `ConversionSettings`, `AeroAndAppearanceUpgrades`, `FormattingFormProps`

**Shared UI components** (accept generic types, reused by all formatters):
`AccelDecelInputs.vue`, `FrontRearInputs.vue`, `FrontRearSelects.vue`, `SetHeader.vue`, `UpgradeSelect.vue`, `CounterInput.vue`, `EnumSelect.vue`, `NumberInput.vue`, etc.

**Game-specific differences:**

|                        | FH5                                            | FM                                                        | FH6                                                                  |
| ---------------------- | ---------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------- |
| Route path             | `forza/horizon5/:version`                      | `forza/motorsport/:version`                               | `forza/horizon6/:version`                                            |
| Build section          | `build` (conversions + upgrade categories)     | `upgrades` (performance upgrades)                         | `build` (same shape as FH5)                                          |
| Car stats              | `make`, `model`                                | `year`, `make`, `model`                                   | `make`, `model`                                                      |
| `driveType` source     | derived via `getDrivetrain(form.build)` helper | read directly from `form.upgrades.conversions.drivetrain` | derived via `getDrivetrain(form.build)` helper                       |
| Steering wheel         | ✗                                              | ✓ `SteeringWheelTuneSettings`                             | ✗                                                                    |
| Rim style              | single shared `rimStyle: { type, name }`       | n/a                                                       | per-axle `rimStyle: { front: { type, name }, rear: { type, name } }` |
| PI classes             | D/500…X/999 (7 classes)                        | custom per car                                            | D/400…X/999 (8 classes, adds **R/998**)                              |
| Unit prefix in URL     | ✗                                              | ✗                                                         | ✓ `M:<base64>` / `I:<base64>`                                        |
| Unit conversion UI     | checkbox ("Convert values when changed")       | checkbox                                                  | Headless UI Dialog                                                   |
| Global unit select     | `GlobalUnitSelect.vue` (with checkbox)         | `GlobalUnitSelect.vue` (with checkbox)                    | `FH6GlobalUnitSelect.vue` (no checkbox)                              |
| Uses `useSetupForm`    | ✓                                              | ✓                                                         | ✗ (self-contained in `useFH6SetupForm.ts`)                           |
| Legacy deserialization | ✓                                              | ✗                                                         | ✗                                                                    |
| Nav link visibility    | always                                         | always                                                    | hidden until 2026-05-15 (date-gated in `AppHeader.vue`)              |
| Versions               | `v1`                                           | `v2`, `v3`                                                | `v1`                                                                 |

### FH6-specific details

**URL prefix encoding:** `useFH6SetupFormProvider` in `useFH6SetupForm.ts` prepends `M:` or `I:` to the base64 form string in the URL. On load, the prefix is stripped before decoding, and the embedded unit is applied to `globalUnits.value.globalUnit` in-memory **without** persisting to `localStorage` (so the user's own stored preference is unchanged). The URL is kept in sync via a single `watch` on a `prefixedEncoded` computed ref.
