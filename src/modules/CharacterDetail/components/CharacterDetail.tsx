import { Box, Button, Typography, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CharacterAvatarDetail from "./CharacterAvatarDetail";
import CharacterInformationDeatil from "./CharacterInformationDeatil";
import CharacterEpisodeDetail from "./CharacterEpisodeDetail";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useParams } from "react-router-dom";
import { fetchCharacterDetail } from "../store/ActionCreator";

const CharacterDetail = () => {
  const params = useParams<{ id: string }>();
  const { character, error, isLoading } = useAppSelector(
    (state) => state.CharacterDetailReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchCharacterDetail(Number(params.id)));
  }, [params.id]);

  return (
    <>
      <Box>
        <CharacterAvatarDetail
          name={character.name}
          image={character.image}
          isLoading={isLoading}
          error={error}
        />
      </Box>
      {!error && (
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: `32px`,
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="GrayText" component="div">
              Informations
            </Typography>
            <CharacterInformationDeatil
              isLoading={isLoading}
              character={character}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="GrayText" component="div">
              Episodes
            </Typography>
            <CharacterEpisodeDetail
              isLoading={isLoading}
              episodes={character.episode}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CharacterDetail;
