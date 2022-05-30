import React from "react";
import { candies } from "../../types/candies";
import CandyButtonList from "./CandyButtonList";

interface Props {
  setSell: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SellDialog(props: Props) {
  const { setSell } = props;

  const handleBackClick = () => {
    setSell(false);
  };

  return <CandyButtonList handleBackClick={handleBackClick} isBuyDialog={false} />;
}
