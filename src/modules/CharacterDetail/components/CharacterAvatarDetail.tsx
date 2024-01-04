import React, { FC } from "react";
import { Box, Avatar, Typography, Skeleton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface Props {
  image: string;
  name: string;
  isLoading: boolean;
}

const CharacterAvatarDetail: FC<Props> = ({ name, image, isLoading }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!isLoading ? (
        <Avatar
          src={image}
          sx={{ width: matchesSM ? 146 : 300, height: matchesSM ? 146 : 300 }}
        ></Avatar>
      ) : (
        <Skeleton
          variant="circular"
          sx={{ width: matchesSM ? 146 : 300, height: matchesSM ? 146 : 300 }}
        ></Skeleton>
      )}

      {!isLoading ? (
        <Typography
          variant={`${matchesSM ? "h5" : "h3"}`}
          component="div"
          color="#081F32"
          sx={{
            marginTop: "16px",
          }}
        >
          {name}
        </Typography>
      ) : (
        <Skeleton
          sx={{
            marginTop: "16px",
            width: matchesSM ? 250 : 350,
            height: matchesSM ? 50 : 70,
          }}
        ></Skeleton>
      )}
    </Box>
  );
};

export default CharacterAvatarDetail;
