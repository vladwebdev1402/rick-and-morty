import React, { FC } from "react";
import { Box, Avatar, Typography, Skeleton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import errorImg from "@/assets/images/characterNotFound.jpeg";
interface Props {
  image: string;
  name: string;
  isLoading: boolean;
  error: string;
}

const CharacterAvatarDetail: FC<Props> = ({
  name,
  image,
  isLoading,
  error,
}) => {
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
          src={error ? errorImg : image}
          sx={{ width: matchesSM ? 146 : 300, height: matchesSM ? 146 : 300 }}
        ></Avatar>
      ) : (
        <Skeleton
          variant="circular"
          sx={{ width: matchesSM ? 146 : 300, height: matchesSM ? 146 : 300 }}
        ></Skeleton>
      )}

      <Typography
        variant={`${matchesSM ? "h5" : "h3"}`}
        component="div"
        color="#081F32"
        sx={{
          marginTop: "16px",
        }}
      >
        {isLoading && (
          <Skeleton
            sx={{
              marginTop: "16px",
              width: matchesSM ? 250 : 350,
              height: matchesSM ? 50 : 70,
            }}
          ></Skeleton>
        )}
        {!isLoading && !error ? name : ""}
        {!isLoading && error ? error : ""}
      </Typography>
    </Box>
  );
};

export default CharacterAvatarDetail;
