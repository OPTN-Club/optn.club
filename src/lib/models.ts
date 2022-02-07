import makes from './makes';
import importedCars from './cars.json';
import { sortUsingProp } from './utils';

interface BaseCarModel {
  year: number;
  make: string;
  model: string;
}

interface CarModel extends BaseCarModel {
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
  specialAccess: string;
  dlcPack: string;
  rewardOrGift: string;
  directAccess: string;
  carValue: number | null;
  rarity: string;
  feBoost: string;
  carType: string;
  spec: string;
  class: string;
  pi: number | null;
  speed: number | null;
  handling: number | null;
  acceleration: number | null;
  launch: number | null;
  braking: number | null;
  offroad: number | null;
  hp: number | null;
  torque: number | null;
  weight: number | null;
  weightPerHp: number | null;
  weightDistribution: number | null;
  displ: number | null;
  aspiration: string;
  engineType: string;
  cylinders: number | string | null;
  enginePlacement: string;
  drive: string;
  rTireWidth: number | string | null;
  trackWidth: string;
  aeroorkitOptions: string;
  engineConversionsHp: number | string;
  pirwd: string | number | null;
  piawd: string | number | null;
  aspirationOptions: string;
  naturallyAspirated: string;
  region: string;
  country: string;
  modelFamily: string;
  openTop: string;
  doors: number | string | null;
  steering: string;
  wheels: number | null;
  nolights: string;
  carThemes: string;
  zeroToSixty: number | null;
  zeroToHundred: number | null;
  quarterMile: number | null;
  topSpeed: number | null;
  sixtyToZeroFeet: number | null;
  hundredToZeroFeet: number | null;
  gAtSixty: number | null;
  gAtHundred: number | null;
  sixtyToHundred: number | null;
  forzaDebut: string | null;
  unknown: number;
  latestgame: string;
  newtoForza: string;
  fh5: string;
  fh4: string;
  fm7: string;
  fh3: string;
  fm6: string;
  fh2: string;
  fm5: string;
  fh1: string;
  fm4: string;
  fm3: string;
  fm2: string;
  fm1: string;
  titlesCount: number | null;
  xboxgen: string | number;
}

const cars: Car[] = importedCars;

const byMake: Record<string, CarModel[]> = makes.reduce((acc, make) => ({
  ...acc,
  [make]: [],
}), {});

cars.forEach((car) => {
  if (car.fh5) {
    if (!(car.make in byMake)) console.log(`${car.make} not found in byMake`);
    byMake[car.make].push({
      year: car.year,
      make: car.make,
      model: car.model,
      fullname: car.fullname,
      shortname: `${car.year} ${car.model}`,
      sortname: `${car.model} ${car.year}`,
    });
  }
});

Object.keys(byMake).forEach((make) => {
  byMake[make] = sortUsingProp(byMake[make], 'sortname');
});

export default byMake;
