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
  const { data, error, isLoading } =
    EpisodeListService.useFetchAllEpisodesQuery(filters);

  return (
    <CardsContainer
      visibleNext={data && !!data.info.next}
      visiblePrev={filters.page > 1}
      prevPage={prevPage}
      nextPage={nextPage}
      isLoading={isLoading}
    >
      {data &&
        data.results.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))}
    </CardsContainer>
  );
};

export default EpisodeList;
