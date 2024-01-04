import { IEpisode, episodeInitValue } from "@/components/EpisodeCard";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import React, { FC, useEffect } from "react";
import ListEpisodeButton from "./ListEpisodeButton/ListEpisodeButton";
import { paths } from "@/routePaths/paths";

interface Props {
  episode: string;
}

const Episode: FC<Props> = ({ episode }) => {
  const { fetching, data, error, isLoading } = useFetch<IEpisode>(
    episodeInitValue,
    async () => {
      const response = await axios.get(episode);
      return response.data;
    }
  );

  useEffect(() => {
    fetching();
  }, [episode]);

  return (
    <ListEpisodeButton
      title={data.episode}
      date={data.air_date}
      isLoading={isLoading}
      onClick={() => {}}
    >
      {data.name}
    </ListEpisodeButton>
  );
};

export default Episode;
