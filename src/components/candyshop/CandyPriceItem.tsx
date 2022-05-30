import React from "react";
import Candy from "../../types/candy";

interface Props {
  candy: Candy;
}

export default function CandyPriceItem(props: Props) {
  const { candy } = props;
  return (
    <>
      <li
        className="list-group-item bg-dark text-white border-white "
      >
        $ {candy.price}
      </li>
    </>
  );
}
