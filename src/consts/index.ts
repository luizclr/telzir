import { ICombination } from "../interfaces";

export const CITY_CODE: number[] = [11, 16, 17, 18];

export const DEFAULT_EXTRA_TAX = 1.1;

export const TAX_BY_COMBINATION = {
  //
  '11-16': 1.9,
  '16-11': 2.9,
  //
  '11-17': 1.7,
  '17-11': 2.7,
  //
  '11-18': 0.9,
  '18-11': 1.9,
};

export const CITIES_COMBINATION: ICombination[] = [
  //
  { name: '11-16', value: 1.9 },
  { name: '16-11', value: 2.9 },
  //
  { name: '11-17', value: 1.7 },
  { name: '17-11', value: 2.7 },
  //
  { name: '11-18', value: 0.9 },
  { name: '18-11', value: 1.9 },
];
