import Candy from "./candy";

export default interface City {
  name: CityName;
  candies: Candy[];
  travelCosts?: number;
  coordinate: Point;
}

export type CityName =
  | "Chicago"
  | "Bronx"
  | "Central Park"
  | "Ghetto"
  | "Manhatten"
  | "Brooklyn"
  | "Manhattan"
  |"";

export interface Point {
  x: number;
  y: number;
}
