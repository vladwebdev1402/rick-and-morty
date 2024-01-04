import React, { useEffect, FC } from "react";
import CardsContainer from "@/components/UI/CardsContainer";
import { LocationCard } from "@/components/LocationCard";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchLocations } from "../store/ActionCreator";
import { ILocationFilters } from "@/types/ILocationFilters";

interface Props {
  filters: ILocationFilters;
  nextPage: () => void;
  prevPage: () => void;
}

const LocationList: FC<Props> = ({ filters, nextPage, prevPage }) => {
  const dispatch = useAppDispatch();
  const { locations, error, isLoading } = useAppSelector(
    (state) => state.LocationListReducer
  );

  useEffect(() => {
    dispatch(fetchLocations(filters));
  }, [filters]);

  return (
    <CardsContainer
      isLoading={isLoading}
      nextPage={nextPage}
      prevPage={prevPage}
      visibleNext
      visiblePrev={filters.page > 1}
    >
      {locations.map((l) => (
        <LocationCard location={l} key={l.id} />
      ))}
    </CardsContainer>
  );
};

export default LocationList;
