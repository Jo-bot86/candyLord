import React, { ChangeEvent, useContext } from "react";
import { PlayerStoreContextProvider, usePlayerStoreContext } from "../../Store";
import { CandyName } from "../../types/candy";
import { cities } from "../../types/cities";

interface Props {
  handleAmountSelection: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleCancelClick: () => void;
  handleBackClick: () => void;
  amount: string;
  selectedCandy: CandyName;
  isBuyDialog: boolean;
}

export default function AmountForm(props: Props) {
  const {
    handleAmountSelection,
    handleCancelClick,
    handleBackClick,
    amount,
    selectedCandy,
    isBuyDialog,
  } = props;

  const { playerStore, dispatch } = usePlayerStoreContext();

  const calculateMaxBuyAmount = () => {
    let candyAmountOnHand;
    playerStore.candiesOnHand.length > 0
      ? (candyAmountOnHand = playerStore.candiesOnHand
          .map((candy) => candy.amount)
          .reduce((acc, el) => acc + el))
      : (candyAmountOnHand = 0);
    const cityIndex = cities
      .map((city) => city.name)
      .indexOf(playerStore.currentLocation);
    const candyIndex = cities[cityIndex].candies
      .map((candy) => candy.name)
      .findIndex((candyName) => candyName === selectedCandy);

    return Math.min(
      Math.floor(
        playerStore.cashOnHand / cities[cityIndex].candies[candyIndex].price
      ),
      10 - candyAmountOnHand
    );
  };

  const calculateMaxSellAmount = () => {
    const candyIndex = playerStore.candiesOnHand.findIndex(
      (candy) => candy.candyName === selectedCandy
    );
    if (playerStore.candiesOnHand[candyIndex]) {
      return playerStore.candiesOnHand[candyIndex].amount;
    } else {
      return 0;
    }
  };

  const calculateMaxAmount = () => {
    console.log(isBuyDialog);
    isBuyDialog ? calculateMaxBuyAmount() : calculateMaxSellAmount();
  };

  const getArrayOfMaxAmountSize = () => {
    if (isBuyDialog) {
      return Array.from(Array(calculateMaxBuyAmount()).keys());
    } else {
      return Array.from(Array(calculateMaxSellAmount()).keys());
    }
  };

  const handleConfirm = () => {
    isBuyDialog
      ? dispatch({
          type: "ADD_CANDY",
          candyName: selectedCandy,
          amount: Number(amount),
      })
      : dispatch({
          type: "REMOVE_CANDY",
          candyName: selectedCandy,
          amount: Number(amount),
      });
    handleBackClick();
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col text-center">
          <label htmlFor="qty" className="mx-3">
            Menge:
          </label>
          <select id="qty" value={amount} onChange={handleAmountSelection}>
            <option value="0">0</option>
            {getArrayOfMaxAmountSize().map((posAmount) => (
              <option key={posAmount} value={posAmount + 1}>
                {posAmount + 1}
              </option>
            ))}
          </select>
          <br />

          <div className="btn-group mt-2">
            <button
              className="btn btn-outline-success"
              disabled={amount && amount !== "0" ? false : true}
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button
              className="btn btn-outline-danger mx-2"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
