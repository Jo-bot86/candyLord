import React from "react";
import Candy from "../../types/candy";

interface Props {
  candy: Candy;
}

export default function CandyNameItem(props: Props) {
  const { candy } = props;
  return (
    <li className="list-group-item bg-dark text-white border-white">
      {candy.name}
      <img
        src={candy.thumbnail}
        className="img-thumbnail p-0 bg-dark mx-2"
        alt={candy.name}
        style={{ width: "1.2em", border: "none" }}
      />
    </li>
  );
}
