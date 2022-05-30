import React, { useCallback, useState } from "react";
import { usePlayerStoreContext } from "../Store";
import { candies, createRandomPrice } from "../types/candies";
import Navigation from "./candyshop/Navigation";
import CandyShopView from "./CandyShopView";
import BuyDialog from "./dialog/BuyDialog";
import SellDialog from "./dialog/SellDialog";
import TravelDialog from "./dialog/TravelDialog";
import GameInfoView from "./GameInfoView";

export default function GamePanel() {
  const [buy, setBuy] = useState(false);
  const [sell, setSell] = useState(false);
  const [travel, setTravel] = useState(false);
  const { playerStore } = usePlayerStoreContext();

  const forceUpdate = useCallback(() => {
    let min = 900;
    let max = 1100;
    for (let i = 0; i < candies.length; i++) {
      candies[i].price = createRandomPrice(min, max);
      max -= 200;
      min -= 200;
    }
  }, []);

  return (
    <div className="container text-white border border-4 border-warning rounded">
      <div className="row text-center border-2 border-bottom p-3">
        <div className="col">Day {playerStore.dayCounter}, Max Candys...</div>
      </div>
      <div className="row ">
        <div className="col-md-8 col-sm-12">
          <CandyShopView />
        </div>
        <div className="col-md-4 text-center border-start">
          <GameInfoView />
        </div>
      </div>
      <div className="row border-top">
        {buy ? (
          <BuyDialog setBuy={setBuy} />
        ) : sell ? (
          <SellDialog setSell={setSell} />
        ) : travel ? (
          <TravelDialog setTravel={setTravel} forceUpdate={forceUpdate} />
        ) : (
          <Navigation
            buy={buy}
            setBuy={setBuy}
            sell={sell}
            setSell={setSell}
            travel={travel}
            setTravel={setTravel}
          />
        )}
      </div>
    </div>
  );
}
