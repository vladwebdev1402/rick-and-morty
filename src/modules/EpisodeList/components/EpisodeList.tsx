import CardsContainer from "@/components/UI/CardsContainer";
import { IEpisodeFilters } from "@/types/IEpisodeFilters";
import React, { FC } from "react";
import { EpisodeListService } from "../service/service";
import EpisodeCard from "@/components/EpisodeCard/EpisodeCard";

interface Props {
  filters: IEpisodeFilters;
  nextPage: () => void;
  prevPage: () => void;
}

const EpisodeList: FC<Props> = ({ nextPage, prevPage, filters }) => {
  const { data, error, isFetching, isError } =
    EpisodeListService.useFetchAllEpisodesQuery(filters);

  return (
    <CardsContainer
      visibleNext={!isError && data && !!data.info.next}
      visiblePrev={filters.page > 1}
      notFound={isError}
      notFoundMessage={typeof error === "string" ? error : ""}
      prevPage={prevPage}
      nextPage={nextPage}
      isLoading={isFetching}
    >
      {data &&
        data.results.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))}
    </CardsContainer>
  );
};

export default EpisodeList;
