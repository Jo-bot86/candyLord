import React, { ChangeEvent, useState } from "react";
import Candy, { CandyName } from "../../types/candy";
import { candies } from "../../types/candies";
import AmountForm from "./AmountForm";

interface Props {
  handleBackClick: () => void;
  isBuyDialog: boolean;
}
export default function CandyButtonList(props: Props) {
  const { handleBackClick, isBuyDialog } = props;

  const [amount, setAmount] = useState("");

  const [selectedCandy, setSelectedCandy] = useState<CandyName>("");

  const [showAmount, setShowAmount] = useState(false);

  const handleSelectionClick = (candy: Candy) => {
    setShowAmount(true);
    setSelectedCandy(candy.name);
  };

  const handleCancelClick = () => {
    setShowAmount(false);
  };

  const handleAmountSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setAmount(e.currentTarget.value);
  };

  const handler = { handleAmountSelection, handleCancelClick, handleBackClick };

  
  return (
    <>
      {!showAmount ? (
        <>
          {isBuyDialog ? <h4 className="text-center">Buy something</h4> : <h4 className="text-center">Sell something</h4>}
          <span className="text-center">
            {candies.map((candy, index) => (
              <button
                key={index}
                className="btn btn-outline-warning mx-2 mt-2 "
                onClick={() => handleSelectionClick(candy)}
              >
                {candy.name}
              </button>
            ))}
          </span>
          <button className="btn btn-danger mt-2" onClick={handleBackClick}>
            Back
          </button>
        </>
      ) : (
        <AmountForm
          {...handler}
          amount={amount}
          selectedCandy={selectedCandy}
          isBuyDialog={isBuyDialog}
        />
      )}
    </>
  );
}
