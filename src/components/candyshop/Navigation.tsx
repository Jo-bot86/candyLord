import React from "react";

interface Props {
  buy: boolean;
  setBuy: React.Dispatch<React.SetStateAction<boolean>>;
  sell: boolean;
  setSell: React.Dispatch<React.SetStateAction<boolean>>;
  travel: boolean;
  setTravel: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation(props: Props) {
  const { buy, setBuy, sell, setSell, travel, setTravel } = props;

  const handleBuyClick = () => {
    setBuy(!buy);
  };

  const handleSellClick = () => {
    setSell(!sell);
  };

  const handleTravelClick = () => {
    setTravel(!travel);
  };

  return (
    <>
      <div className="col-4 text-center">
        <button
          className="btn btn-lg btn-outline-warning my-3"
          onClick={handleBuyClick}
        >
          Buy
        </button>
      </div>
      <div className="col-4 text-center">
        <button
          className="btn btn-outline-warning btn-lg btn my-3"
          onClick={handleSellClick}
        >
          Sell
        </button>
      </div>
      <div className="col-4 text-center">
        <button
          className="btn btn-lg btn-outline-warning my-3"
          onClick={handleTravelClick}
        >
          Travel
        </button>
      </div>
    </>
  );
}
