import React, { FC } from "react";
import { List, Skeleton, ListItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Episode from "./Episode";
interface Props {
  episodes: string[];
  isLoading: boolean;
}
const CharacterEpisodeDetail: FC<Props> = ({ isLoading, episodes }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <List
      sx={{
        marginTop: matchesMD ? "16px" : "36px",
      }}
    >
      {!isLoading &&
        episodes.map((episode) => <Episode episode={episode} key={episode} />)}
      {isLoading && (
        <>
          <Skeleton
            height={78}
            sx={{ marginBottom: "5px" }}
            variant="rounded"
          ></Skeleton>
          <Skeleton
            height={78}
            sx={{ marginBottom: "5px" }}
            variant="rounded"
          ></Skeleton>
          <Skeleton
            height={78}
            sx={{ marginBottom: "5px" }}
            variant="rounded"
          ></Skeleton>
          <Skeleton
            height={78}
            sx={{ marginBottom: "5px" }}
            variant="rounded"
          ></Skeleton>
          <Skeleton
            height={78}
            sx={{ marginBottom: "5px" }}
            variant="rounded"
          ></Skeleton>
        </>
      )}
    </List>
  );
};

export default CharacterEpisodeDetail;
