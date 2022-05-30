import React from "react";
import { candies } from "../types/candies";
import CandyNameList from "./candyshop/CandyNameList";
import CandyOnHandList from "./candyshop/CandyOnHandList";
import CandyPriceList from "./candyshop/CandyPriceList";

export default function CandyShopView() {
  return (
    <div className="container pt-3">
      <div className="row text-center">
        <div className="col-6">
          <h4>CandyName</h4>
        </div>
        <div className="col">
          <h4>On Hand</h4>
        </div>
        <div className="col">
          <h4>Price</h4>
        </div>
      </div>
      <div className="row pb-2">
        <div className="col-6">
          <CandyNameList candies={candies} />
        </div>
        <div className="col text-end">
          <CandyOnHandList />
        </div>
        <div className="col text-end">
          <CandyPriceList candies={candies} />
        </div>
      </div>
    </div>
  );
}
