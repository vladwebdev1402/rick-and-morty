import React from "react";
import st from "./EpisodesPage.module.scss";
import img from "@/assets/images/series.png";
import { EpisodeFilters, EpisodeFiltersSlice } from "@/modules/EpisodeFilters";
import { EpisodeList } from "@/modules/EpisodeList";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const EpisodesPage = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.EpisodeFiltersReducer);
  const { nextPage, prevPage } = EpisodeFiltersSlice.actions;

  const nextPageDispatch = () => {
    window.scrollTo({ top: 100 });
    dispatch(nextPage());
  };
  const prevPageDispatch = () => {
    window.scrollTo({ top: 100 });
    dispatch(prevPage());
  };

  return (
    <div className={`container`}>
      <div className={st.image}>
        <img src={img} />
      </div>
      <EpisodeFilters />
      <EpisodeList
        filters={filters}
        prevPage={prevPageDispatch}
        nextPage={nextPageDispatch}
      />
    </div>
  );
};

export default EpisodesPage;
