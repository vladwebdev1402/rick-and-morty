import React from "react";
import st from "./LocationsPage.module.scss";
import img from "@/assets/images/planets.png";
import { LocationFilters } from "@/modules/LocationsFilters";
import { LocationList } from "@/modules/LocationList";
const LocationsPage = () => {
  return (
    <div className="container">
      <div className={st.image}>
        <img src={img} alt="" />
      </div>
      <LocationFilters />
      <LocationList />
    </div>
  );
};

export default LocationsPage;
