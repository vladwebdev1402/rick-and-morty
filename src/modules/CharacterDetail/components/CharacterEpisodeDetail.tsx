import React from "react";
import { List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ListItemButton } from "@/components/ListItemButton";
const CharacterEpisodeDetail = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <List
      sx={{
        marginTop: matchesMD ? "16px" : "36px",
      }}
    >
      <ListItemButton title={"S01E02"} date={"December 9, 2013"}>
        Lawnmower Dog
      </ListItemButton>
      <ListItemButton title={"S01E04"} date={"January 13, 2014"}>
        M. Night Shaym-Aliens!
      </ListItemButton>
    </List>
  );
};

export default CharacterEpisodeDetail;
