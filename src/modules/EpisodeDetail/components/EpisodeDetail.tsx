import React from "react";
import { useParams } from "react-router-dom";
import { EpisodeDetailService } from "../service/service";
import EpisodeAvatar from "./EpisodeAvatar";
import DetailTitlesContainer from "@/components/UI/DetailTitlesContainer/DetailTitlesContainer";
import { ResidentsContainer } from "@/components/ResidentsContainer";

const EpisodeDetail = () => {
  const params = useParams<{ id: string }>();
  const { data, error, isLoading } =
    EpisodeDetailService.useFetchEpisodeByIdQuery(Number(params.id) ?? -1);

  return (
    <div>
      <DetailTitlesContainer
        isLoading={isLoading}
        name={(data && data.name) || ""}
        first={{
          title: "Episode",
          value: (data && data.episode) || "",
        }}
        twenty={{
          title: "Date",
          value: (data && data.air_date) || "",
        }}
      />
      <ResidentsContainer
        isLoading={isLoading}
        title="Cast"
        residents={(data && data.characters) || []}
      />
    </div>
  );
};

export default EpisodeDetail;
