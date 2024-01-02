import React, { FC } from "react";
import { List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ListItemInfo } from "@/components/ListItemInfo";
import { ListItemButton } from "@/components/ListItemButton";
import { ICharacter } from "@/components/CharacterCard";
interface Props {
  isLoading: boolean;
  character: ICharacter;
}
const CharacterInformationDeatil: FC<Props> = ({ isLoading, character }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <List
      sx={{
        marginTop: matchesMD ? "16px" : "36px",
      }}
    >
      <ListItemInfo title={"Gender"} isLoading={isLoading}>
        {character.gender}
      </ListItemInfo>
      <ListItemInfo title={"Status"} isLoading={isLoading}>
        {character.status}
      </ListItemInfo>
      <ListItemInfo title={"Species"} isLoading={isLoading}>
        {character.species}
      </ListItemInfo>
      <ListItemInfo title={"Origin"} isLoading={isLoading}>
        {character.origin.name}
      </ListItemInfo>
      <ListItemInfo title={"Type"} isLoading={isLoading}>
        {character.type ? character.type : "unknown"}
      </ListItemInfo>
      <ListItemButton title={"Location"}>
        {character.location.name}
      </ListItemButton>
    </List>
  );
};

export default CharacterInformationDeatil;
