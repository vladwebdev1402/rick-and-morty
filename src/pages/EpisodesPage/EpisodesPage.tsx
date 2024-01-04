import React from "react";
import st from "./EpisodesPage.module.scss";
import img from "@/assets/images/series.png";
import { EpisodeFilters } from "@/modules/EpisodeFilters";
import { EpisodeList } from "@/modules/EpisodeList";

const EpisodesPage = () => {
  return (
    <div className={`container`}>
      <div className={st.image}>
        <img src={img} />
      </div>
      <EpisodeFilters />
      <EpisodeList />
    </div>
  );
};

export default EpisodesPage;
