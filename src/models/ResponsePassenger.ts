import { Passenger } from "./PassengerModel";
export interface ResponsePassenger {
  totalPassengers: number;
  totalPages: number;
  data: Passenger[];
}
