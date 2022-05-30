import React from "react";
import Candy from "../../types/candy";
import CandyNameItem from "./CandyNameItem";

interface Props {
  candies: Candy[];
}

export default function CandyNameList(props: Props) {
  const { candies } = props;

  return (
    <ul className="list-group ">
      {candies.map((candy, index) => (
        <CandyNameItem key={index} candy={candy} />
      ))}
    </ul>
  );
}
