import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { EpisodeDetailService } from "../service/service";
import DetailTitlesContainer from "@/components/UI/DetailTitlesContainer/DetailTitlesContainer";
import { ResidentsContainer } from "@/components/ResidentsContainer";

const EpisodeDetail = () => {
  const params = useParams<{ id: string }>();
  const { data, error, isError, isFetching } =
    EpisodeDetailService.useFetchEpisodeByIdQuery(Number(params.id) ?? -1);

  useEffect(() => {
    window.scrollTo({ top: 20 });
  }, []);

  return (
    <div>
      <DetailTitlesContainer
        isLoading={isFetching}
        error={typeof error === "string" ? error : ""}
        name={(data && data.name) || ""}
        first={{
          title: "Episode",
          value: (data && data.episode) || "unknonw",
        }}
        twenty={{
          title: "Date",
          value: (data && data.air_date) || "unknonw",
        }}
      />
      {!isError && (
        <ResidentsContainer
          isLoading={isFetching}
          title="Cast"
          residents={(data && data.characters) || []}
        />
      )}
    </div>
  );
};

export default EpisodeDetail;
