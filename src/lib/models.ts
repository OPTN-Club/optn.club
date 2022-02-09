import makes from './makes';
import importedCars from './cars';
import { sortUsingProp } from './utils';
import { Car, CarModel } from './types';

const cars: Car[] = importedCars;

const byFullname: Record<string, Car> = {};
const byMake: Record<string, CarModel[]> = makes.reduce((acc, make) => ({
  ...acc,
  [make]: [],
}), {});

cars.forEach((car) => {
  byFullname[car.fullname] = car;
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

export {
  byFullname,
  byMake,
};
