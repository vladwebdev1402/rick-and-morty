import React from "react";
import { Grid } from "@mui/material";
import CardsContainer from "@/components/UI/CardsContainer";
import { locations } from "./data";
import { LocationCard } from "@/components/LocationCard";

const LocationList = () => {
  return (
    <CardsContainer isLoading={false}>
      {locations.map((l) => (
        <LocationCard location={l} key={l.id} />
      ))}
    </CardsContainer>
  );
};

export default LocationList;
