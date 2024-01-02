import React from "react";
import { List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ListItemInfo } from "@/components/ListItemInfo";
import { ListItemButton } from "@/components/ListItemButton";
const CharacterInformationDeatil = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <List
      sx={{
        marginTop: matchesMD ? "16px" : "36px",
      }}
    >
      <ListItemInfo title={"Gender"}>Male</ListItemInfo>
      <ListItemInfo title={"Status"}>Alive</ListItemInfo>
      <ListItemInfo title={"Specie"}>Human</ListItemInfo>
      <ListItemInfo title={"Origin"}>Earth (C-137)</ListItemInfo>
      <ListItemInfo title={"Type"}>Unknown</ListItemInfo>
      <ListItemButton title={"Location"}>
        Earth (Replacement Dimension)
      </ListItemButton>
    </List>
  );
};

export default CharacterInformationDeatil;
