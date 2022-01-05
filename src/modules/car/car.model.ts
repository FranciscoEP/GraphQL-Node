import { BaseModel } from '../base/base.model';

export type Attributes = {
  description: string | null;
  color: string | null;
  plateNumber: string | null;
};

export type Car = BaseModel & {
  id: string;
  model: string;
  year: string;
  price: number;
  make: string;
  image: string;
  sn: string;
  attributes: Attributes;
};
