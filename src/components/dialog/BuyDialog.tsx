import React from "react";
import CandyButtonList from "./CandyButtonList";

interface Props {
  setBuy: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BuyDialog(props: Props) {
  const { setBuy } = props;

  const handleBackClick = () => {
    setBuy(false);
  };

  return <CandyButtonList handleBackClick={handleBackClick} isBuyDialog={ true} />;
}
