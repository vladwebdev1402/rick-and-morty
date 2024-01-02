import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const CharacterAvatarDetail = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        sx={{ width: matchesSM ? 146 : 300, height: matchesSM ? 146 : 300 }}
      ></Avatar>
      <Typography
        variant={`${matchesSM ? "h5" : "h3"}`}
        component="div"
        color="#081F32"
        sx={{
          marginTop: "16px",
        }}
      >
        Rick Sanchez
      </Typography>
    </Box>
  );
};

export default CharacterAvatarDetail;
