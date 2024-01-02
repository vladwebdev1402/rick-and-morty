import { IEpisode, episodeInitValue } from "@/components/EpisodeCard";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import React, { FC, useEffect } from "react";
import ListItemButton from "./ListItemButton/ListItemButton";
import ListEpisodeButton from "./ListEpisodeButton/ListEpisodeButton";

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
    >
      {data.name}
    </ListEpisodeButton>
  );
};

export default Episode;
