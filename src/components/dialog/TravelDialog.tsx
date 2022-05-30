import React from "react";
import { usePlayerStoreContext } from "../../Store";
import { cities } from "../../types/cities";
import City, { Point } from "../../types/city";

interface Props {
  setTravel: React.Dispatch<React.SetStateAction<boolean>>;
  forceUpdate: () => void;
}

export default function TravelDialog(props: Props) {
  const { playerStore, dispatch } = usePlayerStoreContext();
  const { setTravel, forceUpdate } = props;



  const createTravelPrice = (destination: Point) => {
    const currentCity = cities.find(
      (city) => city.name === playerStore.currentLocation
    );
    let travelPrice;
    if (currentCity)
      travelPrice =
        Math.floor(
          Math.sqrt(
            Math.pow(currentCity.coordinate.x - destination.x, 2) +
              Math.pow(currentCity?.coordinate.y - destination.y, 2)
          )
        ) * 120;
    return travelPrice;
  };

  const setTravelCosts = () => {
    for (let i = 0; i < cities.length; i++) {
      cities[i].travelCosts = createTravelPrice(cities[i].coordinate);
    }
  };

  const handleTravelTo = (city: City, travelCosts: number) => {
    dispatch({ type: "TRAVEL_TO", location: city.name, travelCosts });
    setTravel(false);
    forceUpdate();
  };

  setTravelCosts();

  return (
    <>
      <span className="text-center">
        {cities
          .filter((city) => city.name !== playerStore.currentLocation)
          .map((city, index) => (
            <button
              key={index}
              className="btn btn-outline-warning mx-2 mt-2"
              onClick={() => handleTravelTo(city, Number(city.travelCosts))}
              disabled={city.travelCosts && playerStore.cashOnHand > city.travelCosts ? false : true}
            >
              <>
                {city.name}
                <br />${city.travelCosts}
              </>
            </button>
          ))}
      </span>
      <button className="btn btn-danger mt-2" onClick={() => setTravel(false)}>
        Back
      </button>
    </>
  );
}
