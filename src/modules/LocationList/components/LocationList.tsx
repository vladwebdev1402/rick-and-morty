import React, { useEffect } from "react";
import CardsContainer from "@/components/UI/CardsContainer";
import { locations as locations2 } from "./data";
import { LocationCard } from "@/components/LocationCard";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchLocations } from "../store/ActionCreator";

const LocationList = () => {
  const dispatch = useAppDispatch();
  const { locations, error, isLoading } = useAppSelector(
    (state) => state.LocationListReducer
  );

  useEffect(() => {
    dispatch(
      fetchLocations({
        dimension: "",
        name: "",
        page: 1,
        type: "",
      })
    );
  }, []);

  return (
    <CardsContainer isLoading={isLoading}>
      {locations.map((l) => (
        <LocationCard location={l} key={l.id} />
      ))}
    </CardsContainer>
  );
};

export default LocationList;
