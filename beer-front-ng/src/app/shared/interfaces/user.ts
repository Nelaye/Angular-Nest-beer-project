import {Beer} from './beer';

export interface User {
  firstname: string;
  lastname: string,
  email: string,
  beers: Beer[];
}
