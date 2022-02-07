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
  sport = 'Sport',
  street = 'Street',
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

export enum Drivetrain {
  na = '',
  fwd = 'FWD',
  rwd = 'RWD',
  awd = 'AWD',
}

export interface FrontAndRearSettings {
  front: string;
  rear: string;
}

export interface FrontAndRearWithUnits<U extends PressureUnit | ForceUnit | LengthUnit> extends FrontAndRearSettings {
  units: U;
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
  diff: {
    front: {
      accel: string;
      decel: string;
    },
    rear: {
      accel: string;
      decel: string;
    },
    center: string;
  },
}

export interface BuildSettings {
  conversions: {
    engine: string;
    drivetrain: Drivetrain;
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
