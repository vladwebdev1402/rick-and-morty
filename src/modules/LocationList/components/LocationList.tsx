import React, { useEffect, FC } from "react";
import CardsContainer from "@/components/UI/CardsContainer";
import { LocationCard } from "@/components/LocationCard";
import { ILocationFilters } from "@/types/ILocationFilters";
import { LocationService } from "../service/service";

interface Props {
  filters: ILocationFilters;
  nextPage: () => void;
  prevPage: () => void;
}

const LocationList: FC<Props> = ({ filters, nextPage, prevPage }) => {
  const { data, error, isError, isFetching } =
    LocationService.useGetAllLocationsQuery(filters);

  return (
    <CardsContainer
      isLoading={isFetching}
      notFound={isError}
      notFoundMessage={typeof error === "string" ? error : ""}
      nextPage={nextPage}
      prevPage={prevPage}
      visibleNext={!isError && data && !!data.info.next}
      visiblePrev={filters.page > 1}
    >
      {data &&
        data.results.map((l) => <LocationCard location={l} key={l.id} />)}
    </CardsContainer>
  );
};

export default LocationList;
