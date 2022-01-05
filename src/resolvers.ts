import * as car from './modules/car/car.resolver';
import * as scalars from './modules/base/scalars.model';

export default {
  ...scalars,
  Query: {
    car: car.findOne,
    cars: car.findAll,
  },
  Mutation: {
    createCar: car.createCar,
  },
  Car: car.resolver,
};
