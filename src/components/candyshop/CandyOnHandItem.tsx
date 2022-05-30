import React from "react";
import { usePlayerStoreContext } from "../../Store";
import Candy from "../../types/candy";

interface Props {
  candy: Candy;
}

export default function CandyOnHandItem(props: Props) {
  const { playerStore } = usePlayerStoreContext();

  const { candy } = props;
  return (
    <li className="list-group-item bg-dark text-white border-white">
      {playerStore.candiesOnHand.find((can) => can.candyName === candy.name) ? playerStore.candiesOnHand.find((can) => can.candyName === candy.name)?.amount : 0}
    </li>
  );
}
