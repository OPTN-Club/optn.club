import { diff } from 'deep-object-diff';
import getDefaultForm from './defaultForm';
import {
  PressureUnit,
  SpringRateUnit,
  LengthUnit,
  DriveType,
  Upgrade,
  LimitedUpgrade,
  FullUpgrade,
  TransmissionUpgrade,
  TireCompound,
  RimStyleType,
  SettingsForm,
  TrackWidthType,
  ForceUnit,
  PIClass,
} from './types';

const mangleLookup: any = {
  make: 'mk',
  model: 'md',
  tune: 't',
  build: 'b',
  stats: 's',
  tires: 'tr',
  front: 'f',
  rear: 'r',
  units: 'u',
  ratios: 'rt',
  na: 'n',
  springs: 'sp',
  rideHeight: 'rh',
  damping: 'd',
  bump: 'bm',
  type: 'tp',
  name: 'nm',
  aero: 'a',
  brake: 'br',
  diff: 'di',
  accel: 'ac',
  decel: 'dc',
  center: 'c',
  conversions: 'cn',
  engine: 'e',
  intake: 'i',
  intakeManifold: 'im',
  carburator: 'ca',
  fuelSystem: 'fs',
  ignition: 'ig',
  exhaust: 'ex',
  camshaft: 'cm',
  valves: 'v',
  displacement: 'ds',
  pistons: 'p',
  turbo: 'tb',
  twinTurbo: 'tt',
  supercharger: 'sc',
  centrifugalSupercharger: 'cs',
  intercooler: 'in',
  oilCooling: 'o',
  flywheel: 'fw',
  platformAndHandling: 'ph',
  brakes: 'brk',
  frontArb: 'fa',
  rearArb: 'ra',
  chassisReinforcement: 'cr',
  weightReduction: 'wr',
  drivetrain: 'dt',
  clutch: 'cl',
  transmission: 'trm',
  driveline: 'dl',
  differential: 'df',
  tiresAndRims: 'tar',
  compound: 'cmp',
  width: 'wd',
  rimStyle: 'rs',
  rimSize: 'rsz',
  trackWidth: 'tw',
  aeroAndAppearance: 'aa',
  frontBumper: 'fb',
  rearBumper: 'rb',
  rearWing: 'rw',
  sideSkirts: 'sk',
  hood: 'h',
  pi: 'pi',
  classification: 'cls',
  hp: 'hp',
  torque: 'trq',
  weight: 'wg',
  balance: 'bl',
  topSpeed: 'ts',
  zeroToSixty: 'zs',
  zeroToHundred: 'zh',
  shareCode: 'scd',
  gears: 'g',
  length: 'l',
  camber: 'cmb',
  caster: 'cst',
  bias: 'bs',
  pressure: 'ps',
  aspiration: 'ap',
  bodyKit: 'bk',
};

// Reverse mangleLookup
const unmangleLookup: any = Reflect.ownKeys(mangleLookup).reduce(
  (prev, cur) => Object.assign(prev, { [mangleLookup[cur]]: cur }),
  {},
);

// Replace the objects keys with abbreviations to save characters, reducing the base64 strings length
function mangleObject(object: any, reverse = false): any {
  const lookup = reverse ? unmangleLookup : mangleLookup;
  const mangled: any = {};
  const keys = Reflect.ownKeys(object);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const isObject =
      typeof object[key] === 'object' && !Array.isArray(object[key]);
    const mangledKey = lookup[key] || key;

    if (isObject) {
      mangled[mangledKey] = mangleObject(object[key], reverse);
    } else {
      mangled[mangledKey] = object[key];
    }
  }

  return mangled;
}

export function getBase64FromForm(form: SettingsForm) {
  const formDiff: any = diff(getDefaultForm(), form);

  // diff will convert arrays to objects, we need to revert that by replacing it with the original values
  if (formDiff.tune?.gears?.ratios) {
    formDiff.tune.gears.ratios = form.tune.gears.ratios;
  }

  const mangled = mangleObject(formDiff);
  return window.btoa(JSON.stringify(mangled));
}

export function getFormFromBase64(base64Tune: string): SettingsForm {
  const json = window.atob(base64Tune);
  const parsed = JSON.parse(json);
  const form = mangleObject(parsed, true);

  if (!form || !Reflect.ownKeys(form).length) {
    throw new Error('Undefined or empty object.');
  }

  return {
    make: form.make || '',
    model: form.model || '',
    tune: {
      tires: {
        front: form.tune?.tires?.front || '2',
        rear: form.tune?.tires?.rear || '2',
        units: (form.tune?.tires?.units as PressureUnit) || PressureUnit.bar,
      },
      gears: {
        ratios: form.tune?.gears?.ratios || [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        na: form.tune?.gears?.na === undefined ? true : form.tune?.gears?.na,
      },
      camber: {
        front: form.tune?.camber?.front || '-1',
        rear: form.tune?.camber?.rear || '-1',
      },
      toe: {
        front: form.tune?.toe?.front || '0',
        rear: form.tune?.toe?.rear || '0',
      },
      caster: form.tune?.caster || '5',
      arb: {
        front: form.tune?.arb.front || '',
        rear: form.tune?.arb.rear || '',
        na: form.tune?.arb?.na === undefined ? true : form.tune?.arb?.na,
      },
      springs: {
        front: form.tune?.springs?.front || '',
        rear: form.tune?.springs?.rear || '',
        units:
          (form.tune?.springs?.units as SpringRateUnit) || SpringRateUnit.kgf,
        na:
          form.tune?.springs?.na === undefined ? true : form.tune?.springs?.na,
      },
      rideHeight: {
        front: form.tune?.rideHeight?.front || '',
        rear: form.tune?.rideHeight?.rear || '',
        units: (form.tune?.rideHeight?.units as LengthUnit) || LengthUnit.cm,
        na:
          form.tune?.rideHeight?.na === undefined
            ? true
            : form.tune?.rideHeight?.na,
      },
      damping: {
        front: form.tune?.damping?.front || '',
        rear: form.tune?.damping?.rear || '',
        na:
          form.tune?.damping?.na === undefined ? true : form.tune?.damping?.na,
      },
      bump: {
        front: form.tune?.bump?.front || '',
        rear: form.tune?.bump?.rear || '',
        na: form.tune?.bump?.na === undefined ? true : form.tune?.bump?.na,
      },
      aero: {
        front: form.tune?.aero?.front || '',
        rear: form.tune?.aero?.rear || '',
        units: (form.tune?.aero?.units as ForceUnit) || ForceUnit.kgf,
        na: form.tune?.aero?.na === undefined ? true : form.tune?.aero?.na,
      },
      brake: {
        na: form.tune?.brake?.na === undefined ? true : form.tune?.brake?.na,
        bias: form.tune?.brake?.bias || '50',
        pressure: form.tune?.brake?.pressure || '100',
      },
      diff: {
        front: {
          accel: form.tune?.diff?.front?.accel || '',
          decel: form.tune?.diff?.front?.decel || '',
        },
        rear: {
          accel: form.tune?.diff?.rear?.accel || '',
          decel: form.tune?.diff?.rear?.decel || '',
        },
        center: form.tune?.diff?.center || '',
        na: form.tune?.diff?.na === undefined ? true : form.tune?.diff?.na,
      },
    },
    build: {
      conversions: {
        engine: form.build?.conversions?.engine || 'Stock',
        drivetrain:
          (form.build?.conversions?.drivetrain as DriveType) || DriveType.awd,
        aspiration: form.build?.conversions?.aspiration || 'Stock',
        bodyKit: form.build?.conversions?.bodyKit || '',
      },
      engine: {
        intake: (form.build?.engine?.intake as Upgrade) || Upgrade.stock,
        intakeManifold:
          (form.build?.engine?.intakeManifold as Upgrade) || Upgrade.na,
        carburator: (form.build?.engine?.carburator as Upgrade) || Upgrade.na,
        fuelSystem:
          (form.build?.engine?.fuelSystem as Upgrade) || Upgrade.stock,
        ignition:
          (form.build?.engine?.ignition as LimitedUpgrade) ||
          LimitedUpgrade.stock,
        exhaust: (form.build?.engine?.exhaust as Upgrade) || Upgrade.stock,
        camshaft: (form.build?.engine?.camshaft as Upgrade) || Upgrade.stock,
        valves: (form.build?.engine?.valves as Upgrade) || Upgrade.stock,
        displacement:
          (form.build?.engine?.displacement as Upgrade) || Upgrade.stock,
        pistons: (form.build?.engine?.pistons as Upgrade) || Upgrade.stock,
        turbo:
          (form.build?.engine?.turbo as LimitedUpgrade) || LimitedUpgrade.na,
        twinTurbo:
          (form.build?.engine?.twinTurbo as LimitedUpgrade) ||
          LimitedUpgrade.na,
        supercharger:
          (form.build?.engine?.supercharger as LimitedUpgrade) ||
          LimitedUpgrade.na,
        centrifugalSupercharger:
          (form.build?.engine?.centrifugalSupercharger as LimitedUpgrade) ||
          LimitedUpgrade.na,
        intercooler:
          (form.build?.engine?.intercooler as LimitedUpgrade) ||
          LimitedUpgrade.stock,
        oilCooling:
          (form.build?.engine?.oilCooling as Upgrade) || Upgrade.stock,
        flywheel: (form.build?.engine?.flywheel as Upgrade) || Upgrade.stock,
      },
      platformAndHandling: {
        brakes:
          (form.build?.platformAndHandling?.brakes as Upgrade) || Upgrade.stock,
        springs:
          (form.build?.platformAndHandling?.springs as FullUpgrade) ||
          FullUpgrade.race,
        frontArb:
          (form.build?.platformAndHandling?.frontArb as Upgrade) ||
          Upgrade.race,
        rearArb:
          (form.build?.platformAndHandling?.rearArb as Upgrade) || Upgrade.race,
        chassisReinforcement:
          (form.build?.platformAndHandling?.chassisReinforcement as Upgrade) ||
          Upgrade.stock,
        weightReduction:
          (form.build?.platformAndHandling?.weightReduction as Upgrade) ||
          Upgrade.stock,
      },
      drivetrain: {
        clutch: (form.build?.drivetrain?.clutch as Upgrade) || Upgrade.stock,
        transmission:
          (form.build?.drivetrain?.transmission as TransmissionUpgrade) ||
          TransmissionUpgrade.stock,
        driveline:
          (form.build?.drivetrain?.driveline as Upgrade) || Upgrade.stock,
        differential:
          (form.build?.drivetrain?.differential as FullUpgrade) ||
          FullUpgrade.race,
      },
      tiresAndRims: {
        compound:
          (form.build?.tiresAndRims?.compound as TireCompound) ||
          TireCompound.stock,
        width: {
          front: form.build?.tiresAndRims?.width?.front || 'Stock',
          rear: form.build?.tiresAndRims?.width?.rear || 'Stock',
        },
        rimStyle: {
          type:
            (form.build?.tiresAndRims?.rimStyle?.type as RimStyleType) ||
            RimStyleType.stock,
          name: form.build?.tiresAndRims?.rimStyle?.name || '',
        },
        rimSize: {
          front: form.build?.tiresAndRims?.rimSize?.front || 'Stock',
          rear: form.build?.tiresAndRims?.rimSize?.rear || 'Stock',
        },
        trackWidth: {
          front:
            (form.build?.trackWidth?.front as TrackWidthType) ||
            TrackWidthType.stock,
          rear:
            (form.build?.trackWidth?.rear as TrackWidthType) ||
            TrackWidthType.stock,
        },
      },
      aeroAndAppearance: {
        frontBumper: form.build?.aeroAndAppearance?.frontBumper || 'Stock',
        rearBumper: form.build?.aeroAndAppearance?.rearBumper || 'N/A',
        rearWing: form.build?.aeroAndAppearance?.rearWing || 'Stock',
        sideSkirts: form.build?.aeroAndAppearance?.sideSkirts || 'N/A',
        hood: form.build?.aeroAndAppearance?.hood || 'N/A',
      },
    },
    stats: {
      pi: form.stats?.pi || 0,
      classification: (form.stats?.classification as PIClass) || PIClass.A,
      hp: form.stats?.hp || 0,
      torque: form.stats?.torque || 0,
      weight: form.stats?.weight || 0,
      balance: form.stats?.balance || 0,
      topSpeed: form.stats?.topSpeed || 0,
      zeroToSixty: form.stats?.zeroToSixty || 0,
      zeroToHundred: form.stats?.zeroToHundred || 0,
      shareCode: form.stats?.shareCode || '',
    },
  };
}
