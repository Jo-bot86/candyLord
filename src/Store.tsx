import React, { Dispatch, ReactElement, useContext, useReducer } from "react";
import { CityName } from "./types/city";
import { CandyName } from "./types/candy";
import { cities } from "./types/cities";

export interface PlayerStore {
  currentLocation: CityName;
  cashOnHand: number;
  candiesOnHand: { candyName: CandyName; amount: number }[];
  dayCounter: number;
}

export const initialPlayerStore: PlayerStore = {
  currentLocation: cities.map((city) => city.name)[
    Math.floor(Math.random() * cities.length)
  ],
  cashOnHand: 5000,
  candiesOnHand: [],
  dayCounter: 0
};

export interface TravelTo {
  type: "TRAVEL_TO";
  location: CityName;
  travelCosts: number
}

export interface AddCandy {
  type: "ADD_CANDY";
  candyName: CandyName;
  amount: number;
}

export interface RemoveCandy {
  type: "REMOVE_CANDY";
  candyName: CandyName;
  amount: number;
}

export type Action = TravelTo | AddCandy | RemoveCandy;

export function reducer(playerStore: PlayerStore, action: Action): PlayerStore {
  switch (action.type) {
    case "TRAVEL_TO": {
      return {
        ...playerStore,
        currentLocation: action.location,
        cashOnHand: playerStore.cashOnHand - action.travelCosts,
        dayCounter: playerStore.dayCounter +1
      };
    }
    case "ADD_CANDY": {
      const cityIndex = cities.findIndex(
        (city) => city.name === playerStore.currentLocation
      );
      const candyIndexInCandies = cities[cityIndex].candies.findIndex(
        (candy) => candy.name === action.candyName
      );
      const candyPrice = cities[cityIndex].candies[candyIndexInCandies].price;
      const newCashOnHand = playerStore.cashOnHand - action.amount * candyPrice;

      const candyIndex = playerStore.candiesOnHand.findIndex(
        (candyOnHand) => candyOnHand.candyName === action.candyName
      );
      if (candyIndex === -1) {
        const newCandyList = [
          ...playerStore.candiesOnHand,
          { candyName: action.candyName, amount: action.amount },
        ];
        return {
          ...playerStore,
          candiesOnHand: newCandyList,
          cashOnHand: newCashOnHand,
        };
      }

      const newCandy = {
        candyName: action.candyName,
        amount: playerStore.candiesOnHand[candyIndex].amount + action.amount,
      };
      const newCandyList = [...playerStore.candiesOnHand.filter(candy => candy.candyName !== action.candyName), newCandy]

      return {
        ...playerStore,
        candiesOnHand: newCandyList,
        cashOnHand: newCashOnHand,
      };
    }
    case "REMOVE_CANDY": {
      const cityIndex = cities.findIndex(
        (city) => city.name === playerStore.currentLocation
      );
      const candyIndexInCandies = cities[cityIndex].candies.findIndex(
        (candy) => candy.name === action.candyName
      );
      const candyPrice = cities[cityIndex].candies[candyIndexInCandies].price;
      const newCashOnHand = playerStore.cashOnHand + action.amount * candyPrice;

      const candyIndex = playerStore.candiesOnHand.findIndex(
        (candyOnHand) => candyOnHand.candyName === action.candyName
      );
      const newCandy = {
        candyName: action.candyName,
        amount: playerStore.candiesOnHand[candyIndex].amount - action.amount,
      };
      const newCandyList = [
        ...playerStore.candiesOnHand.filter(
          (candy) => candy.candyName !== action.candyName
        ),
        newCandy,
      ];

      return {
        ...playerStore,
        candiesOnHand: newCandyList,
        cashOnHand: newCashOnHand,
      };
    }
  }
}

interface PlayerStoreContextProps {
  playerStore: PlayerStore;
  dispatch: Dispatch<Action>;
}

const PlayerStoreContext = React.createContext({} as PlayerStoreContextProps);
PlayerStoreContext.displayName = "PlayerStoreContext";

export const usePlayerStoreContext = () => useContext(PlayerStoreContext);

interface Props {
  children: ReactElement;
}

export function PlayerStoreContextProvider(props: Props) {
  const [playerStore, dispatch] = useReducer(reducer, initialPlayerStore);

  return (
    <PlayerStoreContext.Provider value={{ playerStore, dispatch }}>
      {props.children}
    </PlayerStoreContext.Provider>
  );
}

