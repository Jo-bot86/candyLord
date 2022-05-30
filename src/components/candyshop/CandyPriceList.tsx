import React from "react";
import Candy from "../../types/candy";
import CandyPriceItem from "./CandyPriceItem";

interface Props {
  // hängt von der currentLocation ab
  candies: Candy[];
}

export default function CandyPriceList(props: Props) {
  const { candies } = props;

  return (
    <>
      <ul className="list-group">
        {candies.map((candy, index) => (
          <CandyPriceItem key={index} candy={candy} />
        ))}
      </ul>
    </>
  );
}
