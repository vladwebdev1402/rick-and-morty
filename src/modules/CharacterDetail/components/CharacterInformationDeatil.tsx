import React, { FC } from "react";
import { List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ICharacter } from "@/components/CharacterCard";
import ListItemButton from "./ListItemButton/ListItemButton";
import ListItemInfo from "./ListItemInfo/ListItemInfo";
import { paths } from "@/routePaths/paths";
import { useNavigate } from "react-router-dom";
interface Props {
  isLoading: boolean;
  character: ICharacter;
}
const CharacterInformationDeatil: FC<Props> = ({ isLoading, character }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
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
      <ListItemButton
        title={"Location"}
        onClick={() => {
          navigate(
            paths.locationDetailNavigate(
              Number(character.location.url.split("/").at(-1)) ?? 0
            )
          );
        }}
      >
        {character.location.name}
      </ListItemButton>
    </List>
  );
};

export default CharacterInformationDeatil;
