import React from "react";
import st from "./LocationsPage.module.scss";
import img from "@/assets/images/planets.png";
import {
  LocationFilters,
  LocationFiltersSlice,
} from "@/modules/LocationsFilters";
import { LocationList } from "@/modules/LocationList";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
const LocationsPage = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.LocationFiltersReducer);
  const { nextPage, prevPage } = LocationFiltersSlice.actions;
  const nextPageDispatch = () => dispatch(nextPage());
  const prevPageDispatch = () => dispatch(prevPage());
  return (
    <div className="container">
      <div className={st.image}>
        <img src={img} alt="" />
      </div>
      <LocationFilters />
      <LocationList
        filters={filters}
        nextPage={nextPageDispatch}
        prevPage={prevPageDispatch}
      />
    </div>
  );
};

export default LocationsPage;
