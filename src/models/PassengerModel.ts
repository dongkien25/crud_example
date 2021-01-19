import {Airline} from './AirlineModel'  
export interface Passenger {
    _id?: string;
  name: string;
  trips: number;
  Airline?: Airline;
  airlineID?: number;
}