import React, { FC } from "react";
import { ICharacter } from "./type";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routePaths/paths";
interface Props {
  character: ICharacter;
}

const CharacterCard: FC<Props> = ({ character }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea
          onClick={() => {
            navigate(paths.characterDetailNavigate(character.id));
          }}
          sx={{
            height: "100%",
          }}
        >
          <CardMedia
            sx={{ height: matches ? 288 : 168 }}
            image={character.image}
          />
          <CardContent sx={{ height: "100%" }}>
            <Typography gutterBottom variant="h6" component="div" sx={{}}>
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.species}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
