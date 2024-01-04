import DetailTitlesContainer from "@/components/UI/DetailTitlesContainer/DetailTitlesContainer";
import React, { FC, useEffect } from "react";

interface Props {
  name: string;
  episode: string;
  date: string;
  isLoading: boolean;
}

const EpisodeAvatar: FC<Props> = ({ name, episode, date, isLoading }) => {
  return (
    <DetailTitlesContainer
      isLoading={isLoading}
      name={name}
      first={{
        title: "Episode",
        value: episode,
      }}
      twenty={{
        title: "Date",
        value: date,
      }}
    />
  );
};

export default EpisodeAvatar;
