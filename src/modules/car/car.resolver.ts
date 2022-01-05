import { createHash } from 'crypto';
import { baseModelResolver } from '../base/base.resolver';
import { Car } from './car.model';

const cars: Car[] = [
  {
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    id: '9jks9900',
    model: 'RAV4',
    year: '2021',
    price: 30000,
    make: 'Toyota',
    image: 'https://www.pexels.com/photo/car-vehicle-luxury-pavement-9615358/',
    sn: '222222',

    attributes: {
      description: 'descripción',
      color: 'blue',
      plateNumber: 'MSB4563',
    },
  },
];

export function findAll(): Car[] {
  return cars;
}
export function findOne(id: string): Car | null {
  return cars[0];
}

export const resolver: Record<keyof Car, (parent: Car) => unknown> = {
  ...baseModelResolver,
  id: (parent) => parent.id,
  model: (parent) => parent.model,
  year: (parent) => parent.year,
  price: (parent) => parent.price,
  make: (parent) => parent.make,
  image: (parent) => parent.image,
  sn: (parent) => parent.sn,
  attributes: (parent) => ({
    description: parent.attributes.description,
    color: parent.attributes.color,
    plateNumber: parent.attributes.plateNumber,
  }),
};

export function createCar(
  parent: unknown,
  {
    data,
  }: {
    data: Pick<Car, 'model' | 'year' | 'price' | 'make' | 'image'> &
      Car['attributes'];
  }
): Car {
  const currentLength = cars.length;
  const newCar: Car = {
    id: String(currentLength + 1),
    sn: createHash('sha256')
      .update(data.model, 'utf8')
      .digest('base64')
      .slice(-6),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: undefined,
    model: data.model,
    year: data.year,
    make: data.make,
    price: data.price,
    image: data.image,
    attributes: {
      description: data.description,
      color: data.color,
      plateNumber: data.plateNumber,
    },
  };

  cars.push(newCar);
  return newCar;
}
