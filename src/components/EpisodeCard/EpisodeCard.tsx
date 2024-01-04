import React, { FC } from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { IEpisode } from "./type";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routePaths/paths";
interface Props {
  episode: IEpisode;
}
const EpisodeCard: FC<Props> = ({ episode }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea
        onClick={() => navigate(paths.episodeDetailNavigate(episode.id))}
        sx={{
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            padding: "25px 15px",
          }}
        >
          <Typography variant="h6" component="div" textAlign="center">
            {episode.name}
          </Typography>
          <Typography variant="body2" component="div" textAlign="center">
            {episode.air_date}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            textAlign="center"
            fontWeight="bold"
            sx={{
              marginTop: "5px",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            {episode.episode}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EpisodeCard;
