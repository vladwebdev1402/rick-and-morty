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
interface Props {
  character: ICharacter;
}

const CharacterCard: FC<Props> = ({ character }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            sx={{ height: matches ? 288 : 168 }}
            image={character.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
              {matches}
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
