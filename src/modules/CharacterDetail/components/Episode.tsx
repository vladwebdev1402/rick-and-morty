import { IEpisode, episodeInitValue } from "@/components/EpisodeCard";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import React, { FC, useEffect } from "react";
import ListEpisodeButton from "./ListEpisodeButton/ListEpisodeButton";
import { paths } from "@/routePaths/paths";
import { useNavigate } from "react-router-dom";

interface Props {
  episode: string;
}

const Episode: FC<Props> = ({ episode }) => {
  const navigate = useNavigate();

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
      onClick={() => {
        navigate(
          paths.episodeDetailNavigate(Number(episode.split("/").at(-1)) ?? 0)
        );
      }}
    >
      {data.name}
    </ListEpisodeButton>
  );
};

export default Episode;
