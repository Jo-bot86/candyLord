import { EnumDeclaration, EnumMember, EnumType } from "typescript";

export default interface Candy {
  name: CandyName;
  price: number;
  thumbnail?: string;
}

export type CandyName =
  | "Brownie"
  | "Cookie"
  | "Lolli"
  | "Chew Gum"
  | "Ginger Bread"
  | "";


export enum CandyNameEnum{
  brownie = "Brownie",
  cookie = "Cookie",
  lolli = "Lolli"
}



