import React from "react";
import st from "./LocationsPage.module.scss";
import img from "@/assets/images/planets.png";
import { LocationFilters } from "@/modules/LocationsFilters";
const LocationsPage = () => {
  return (
    <div className="container">
      <div className={st.image}>
        <img src={img} alt="" />
      </div>
      <LocationFilters />
    </div>
  );
};

export default LocationsPage;
