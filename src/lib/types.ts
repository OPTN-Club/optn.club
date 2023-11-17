export type GlobalUnit = 'Metric' | 'Imperial';

export interface FormattingFormProps {
  encodedForm?: string;
}

export interface SelectOption<T = string> {
  value: T;
  label?: string;
}

export enum PressureUnit {
  bar = 'bar',
  psi = 'psi',
}

export enum ForceUnit {
  kgf = 'kgf',
  lbf = 'lbf',
}

export enum WeightUnit {
  kg = 'kg',
  lbs = 'lbs',
}

export enum SpringRateUnit {
  kgfmm = 'kgf/mm',
  lbfin = 'lbf/in',
}

export enum LengthUnit {
  cm = 'cm',
  in = 'in',
}

export enum SpeedUnit {
  kph = 'kph',
  mph = 'mph',
}

export enum PowerUnit {
  kw = 'kW',
  hp = 'HP',
}

export enum TorqueUnit {
  nm = 'N·m',
  lbfft = 'lbf·ft',
}

export type UnitOfMeasureValues<U extends UnitOfMeasure, T extends string | number> = {
  [key in U]: T;
};

export interface ForceValues<T extends string | number> {
  kgf: T;
  lbf: T;
}

export interface SpringRateValues<T extends string | number> {
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

export interface SpeedValues<T extends string | number> {
  kph: T;
  mph: T;
}

export interface PowerValues<T extends string | number> {
  hp: T;
  kw: T;
}

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

export enum TurboUpgrade {
  na = 'N/A',
  stock = 'Stock',
  sport = 'Sport',
  race = 'Race',
  antilag = 'Race Anti-lag',
}

export enum RestrictorUpgrade {
  na = 'N/A',
  stock = 'Stock Restrictor Plate',
  none = 'No Restrictor Plate',
  removed = 'Remove Restrictor',
}

export enum FMFullUpgrade {
  na = 'N/A',
  stock = 'Stock',
  street = 'Street',
  sport = 'Sport',
  race = 'Race',
  drift = 'Drift',
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
  drift = 'Drift Four Speed',
}

export enum LimitedTransmissionUpgrade {
  stock = 'Stock',
  sport = 'Sport',
  street = 'Street',
  race = 'Race',
}

export enum FMTireCompound {
  stock = 'Stock',
  street = 'Street',
  sport = 'Sport',
  race = 'Race',
  drag = 'Drag',
  vintage = 'Vintage',
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
  whitewall = 'Vintage Whitewall',
  vintage = 'Vintage Race',
}

export enum RimStyleType {
  stock = 'Stock',
  sport = 'Sport',
  multiPiece = 'Multi Piece',
  specialized = 'Specialized',
}

export enum TrackWidthType {
  stock = 'Stock',
  first = 'First',
  second = 'Second',
  third = 'Third',
}

export enum DriveType {
  stock = 'Stock',
  fwd = 'FWD',
  rwd = 'RWD',
  awd = 'AWD',
}

export enum BallastType {
  none = 'None',
  extraLight = 'Extra Light',
  light = 'Light',
  medium = 'Medium',
  heavy = 'Heavy',
  extraHeavy = 'Extra Heavy',
}

export interface FrontAndRearSettings<T = string> {
  front: T;
  rear: T;
  na?: boolean;
}

export type UnitOfMeasure =
  | PressureUnit
  | SpringRateUnit
  | LengthUnit
  | ForceUnit
  | SpeedUnit
  | PowerUnit
  | TorqueUnit
  | WeightUnit;

export interface FrontAndRearWithUnits<U extends UnitOfMeasure = UnitOfMeasure, T = string>
  extends FrontAndRearSettings<T> {
  units: U;
}

export interface AccelDecelSettings {
  accel: string;
  decel: string;
}

export interface DifferentialTuneSettings {
  front: AccelDecelSettings;
  rear: AccelDecelSettings;
  center: string;
  na?: boolean;
}

export interface GearTuneSettings {
  na?: boolean;
  ratios: string[];
}

export interface BrakeTuneSettings {
  na: boolean;
  bias: string; // balance in FM
  pressure: string;
}

export interface ConversionSettings {
  engine: string;
  drivetrain: DriveType;
  aspiration: string;
  bodyKit: string;
}

export interface AeroAndAppearanceUpgrades {
  frontBumper: string;
  rearBumper: string;
  rearWing: string;
  sideSkirts: string;
  hood: string;
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
  displ: number | null;
  aspiration: string;
  engineType: string;
  cylinders: number | string | null;
  enginePlacement: string;
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
  fh5: string;
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
