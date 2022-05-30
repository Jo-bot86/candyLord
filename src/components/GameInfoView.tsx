import React from "react";
import { usePlayerStoreContext } from "../Store";

export default function GameInfoView() {
  const { playerStore } = usePlayerStoreContext();
  return (
    <div className="pt-3">
      <h3>GameInfo</h3>
      <div className="container my-2">
        <div className="row">
          <div className="col">
            <span className="mx"> current location</span>
          </div>
          <div className="col">{playerStore.currentLocation}</div>
        </div>
        <div className="row">
          <div className="col">
            <span className="mx-2"> Cash On Hand</span>
            <img
              src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-11/512/Cash-icon.png"
              alt="money icon"
              className="img-thumbnail p-0 bg-dark "
              style={{ width: "1.2em", border: "none" }}
            />
          </div>
          <div className="col">$ {playerStore.cashOnHand}</div>
        </div>
      </div>
    </div>
  );
}
