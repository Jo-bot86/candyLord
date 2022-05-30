import React from "react";
import { candies } from "../../types/candies";
import CandyOnHandItem from "./CandyOnHandItem";

export default function CandyOnHandList() {

  return (
    <ul className="list-group ">
      {candies.map((candy, index) => (
        <CandyOnHandItem key={index} candy={candy} />
      ))}
    </ul>
  );
}
