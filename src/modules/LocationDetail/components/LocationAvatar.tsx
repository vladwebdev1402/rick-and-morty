import React, { FC } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Skeleton,
} from "@mui/material";
interface Props {
  name: string;
  type: string;
  dimension: string;
  isLoading: boolean;
}

const LocationAvatar: FC<Props> = ({ name, type, dimension, isLoading }) => {
  const theme = useTheme();
  const mediaMD = useMediaQuery(theme.breakpoints.down("md"));
  const st = {
    avatar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar__title: { margin: mediaMD ? "0 20px" : "0 150px" },
    avatar__body: { marginTop: "20px" },
  };
  return (
    <Box sx={st.avatar}>
      <Typography
        variant={"h4"}
        textAlign="center"
        component="div"
        sx={st.avatar__title}
      >
        {isLoading && name ? (
          name
        ) : (
          <Skeleton height={60} width={300}></Skeleton>
        )}
      </Typography>
      <Grid sx={st.avatar__body} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="div"
            color="#081F32"
            fontWeight={"bold"}
          >
            Type
          </Typography>

          <Typography
            variant="body1"
            component="div"
            color="GrayText"
            gutterBottom
          >
            {isLoading && type ? (
              type
            ) : (
              <Skeleton height={30} width={200}></Skeleton>
            )}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="div"
            color="#081F32"
            fontWeight={"bold"}
          >
            Dimension
          </Typography>

          <Typography
            variant="body1"
            component="div"
            color="GrayText"
            gutterBottom
          >
            {isLoading && dimension ? (
              dimension
            ) : (
              <Skeleton height={30} width={200}></Skeleton>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LocationAvatar;
