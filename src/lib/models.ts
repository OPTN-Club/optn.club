import makes from './makes';
import importedCars from './cars';
import { sortUsingProp } from './utils';
import { Car, CarModel } from './types';

const cars: Car[] = importedCars;

const byFullname: Map<string, Car> = new Map();

const byMake: Map<string, CarModel[]> = new Map();
makes.forEach((make) => {
  byMake.set(make, []);
});
cars.forEach((car) => {
  byFullname.set(car.fullname, car);
  if (car.fh5) {
    if (!(car.make in byMake)) console.log(`${car.make} not found in byMake`);
    const m = byMake.get(car.make);
    if (m) {
      m.push({
        year: car.year,
        make: car.make,
        model: car.model,
        fullname: car.fullname,
        shortname: `${car.year} ${car.model}`,
        sortname: `${car.model} ${car.year}`,
      });
    }
  }
});

Object.keys(byMake).forEach((make) => {
  const m = byMake.get(make) || [];
  byMake.set(make, sortUsingProp(m, 'sortname'));
});

export {
  byFullname,
  byMake,
};
