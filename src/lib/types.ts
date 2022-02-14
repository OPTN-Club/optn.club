export interface SelectOption<T = string> {
  value: T;
  label?: string;
}

export enum PressureUnit {
  bar = 'bar',
  psi = 'psi',
}

export enum ForceUnit {
  kgf = 'kgf/mm',
  lbs = 'lbs/in',
  nmm = 'n/mm',
}

export enum LengthUnit {
  cm = 'cm',
  in = 'in',
}

export interface ForceValues<T extends string | number> {
  kgf: T;
  lbs: T;
  newtons: T;
}

export interface PressureValues<T extends string | number> {
  bar: T;
  psi: T;
}

export interface LengthValues<T extends string | number> {
  cm: T;
  in: T;
}

export type UnitValues<T extends string | number> = ForceValues<T> | PressureValues<T> | LengthValues<T>;

export enum Upgrade {
  na = 'N/A',
  stock = 'Stock',
  street = 'Street',
  sport = 'Sport',
  race = 'Race',
}

export enum LimitedUpgrade {
  na = 'N/A',
  stock = 'Stock',
  sport = 'Sport',
  race = 'Race',
}

export enum FullUpgrade {
  na = 'N/A',
  stock = 'Stock',
  street = 'Street',
  sport = 'Sport',
  race = 'Race',
  rally = 'Rally',
  drift = 'Drift',
  offroad = 'Offroad',
}

export enum TransmissionUpgrade {
  stock = 'Stock',
  sport = 'Sport',
  street = 'Street',
  race = 'Race',
  raceSix = 'Race Six Speed',
  raceSeven = 'Race Seven Speed',
  raceEight = 'Race Eight Speed',
  raceNine = 'Race Nine Speed',
  raceTen = 'Race Ten Speed',
}

export enum TireCompound {
  stock = 'Stock',
  street = 'Street',
  sport = 'Sport',
  semiSlick = 'Semi-Slick',
  slick = 'Slick',
  drift = 'Drift',
  rally = 'Rally',
  offroad = 'Offroad',
  snow = 'Snow',
  drag = 'Drag',
}

export enum RimStyleType {
  stock = 'Stock',
  sport = 'Sport',
  multiPiece = 'Multi Piece',
  specialized = 'Specialized',
}

export enum DriveType {
  na = '',
  fwd = 'FWD',
  rwd = 'RWD',
  awd = 'AWD',
}

export interface FrontAndRearSettings {
  front: string;
  rear: string;
}

export type UnitOfMeasure = PressureUnit | ForceUnit | LengthUnit;

export interface FrontAndRearWithUnits<U extends UnitOfMeasure = UnitOfMeasure> extends FrontAndRearSettings {
  units: U;
}

export interface DifferentialTuneSettings {
  front: {
    accel: string;
    decel: string;
  },
  rear: {
    accel: string;
    decel: string;
  },
  center: string;
}

export interface TuneSettings {
  tires: FrontAndRearWithUnits<PressureUnit>;
  gears: string[],
  camber: FrontAndRearSettings;
  toe: FrontAndRearSettings;
  caster: string;
  arb: FrontAndRearSettings;
  springs: FrontAndRearWithUnits<ForceUnit>;
  rideHeight: FrontAndRearWithUnits<LengthUnit>;
  damping: FrontAndRearSettings;
  bump: FrontAndRearSettings;
  aero: FrontAndRearWithUnits<ForceUnit>;
  brake: {
    bias: string;
    pressure: string;
  },
  diff: DifferentialTuneSettings,
}

export interface BuildSettings {
  conversions: {
    engine: string;
    drivetrain: DriveType;
    aspiration: string;
    bodyKit: string;
  };
  engine: {
    intake: Upgrade;
    fuelSystem: Upgrade;
    ignition: LimitedUpgrade; // sport and race only
    exhaust: Upgrade;
    camshaft: Upgrade;
    valves: Upgrade;
    displacement: Upgrade;
    pistons: Upgrade;
    turbo: LimitedUpgrade; // sport and race only
    twinTurbo: LimitedUpgrade; // sport and race only
    supercharger: LimitedUpgrade; // sport and race only
    centrifigulSupercharger: LimitedUpgrade; // sport and race only
    intercooler: LimitedUpgrade; // sport and race only
    oilCooling: LimitedUpgrade; // sport and race only
    flywheel: Upgrade;
  };
  platformAndHandling: {
    brakes: Upgrade;
    springs: FullUpgrade;
    frontArb: Upgrade;
    rearArb: Upgrade; // sport and race only
    chassisReinforcement: Upgrade; // sport and race only
    weightReduction: Upgrade;
  };
  drivetrain: {
    clutch: Upgrade;
    transmission: TransmissionUpgrade;
    driveline: Upgrade;
    differential: FullUpgrade;
  };
  tiresAndRims: {
    compound: TireCompound;
    width: FrontAndRearSettings; // always mm
    rimStyle: {
      type: RimStyleType;
      name: string;
    };
    rimSize: FrontAndRearSettings;
  };
  aeroAndAppearance: {
    frontBumper: string;
    rearBumper: string;
    rearWing: string;
    sideSkirts: string;
  };
}

export interface SettingsForm {
  make: string;
  model: string;
  tune: TuneSettings;
  build: BuildSettings;
}

interface BaseCarModel {
  year: number;
  make: string;
  model: string;
}

export interface CarModel extends BaseCarModel {
  fullname: string;
  shortname: string;
  sortname: string;
}

export interface Car {
  fullname: string;
  nickname: string;
  year: number;
  make: string;
  model: string;
  specialAccess?: string;
  dlcPack?: string;
  rewardOrGift?: string;
  directAccess?: string;
  carValue?: number | null;
  rarity?: string;
  feBoost?: string;
  carType?: string;
  spec?: string;
  class?: string;
  pi?: number | null;
  speed?: number | null;
  handling?: number | null;
  acceleration?: number | null;
  launch?: number | null;
  braking?: number | null;
  offroad?: number | null;
  hp?: number | null;
  torque?: number | null;
  weight?: number | null;
  weightPerHp?: number | null;
  weightDistribution?: number | null;
  displ?: number | null;
  aspiration: string;
  engineType: string;
  cylinders: number | string | null;
  enginePlacement?: string;
  drive: string;
  rTireWidth: number | string | null;
  trackWidth: string;
  aeroorkitOptions: string;
  engineConversionsHp?: number | string;
  pirwd?: string | number | null;
  piawd?: string | number | null;
  aspirationOptions: string;
  naturallyAspirated: string;
  region?: string;
  country?: string;
  modelFamily?: string;
  openTop?: string;
  doors?: number | string | null;
  steering?: string;
  wheels?: number | null;
  nolights?: string;
  carThemes?: string;
  zeroToSixty?: number | null;
  zeroToHundred?: number | null;
  quarterMile?: number | null;
  topSpeed?: number | null;
  sixtyToZeroFeet?: number | null;
  hundredToZeroFeet?: number | null;
  gAtSixty?: number | null;
  gAtHundred?: number | null;
  sixtyToHundred?: number | null;
  forzaDebut?: string | null;
  unknown?: number;
  latestgame?: string;
  newtoForza?: string;
  fh5?: string;
  fh4?: string;
  fm7?: string;
  fh3?: string;
  fm6?: string;
  fh2?: string;
  fm5?: string;
  fh1?: string;
  fm4?: string;
  fm3?: string;
  fm2?: string;
  fm1?: string;
  titlesCount?: number | null;
  xboxgen?: string | number;
}
