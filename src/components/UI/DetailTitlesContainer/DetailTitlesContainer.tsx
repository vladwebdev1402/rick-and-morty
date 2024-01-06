import React, { FC, useMemo } from "react";
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
  first: {
    title: string;
    value: string;
  };
  twenty: {
    title: string;
    value: string;
  };
  isLoading: boolean;
  error?: string;
}

const DetailTitlesContainer: FC<Props> = ({
  name,
  first,
  twenty,
  isLoading,
  error,
}) => {
  const theme = useTheme();
  const mediaMD = useMediaQuery(theme.breakpoints.down("md"));
  const st = useMemo(
    () => ({
      avatar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar__title: { margin: mediaMD ? "0 20px" : "0 150px" },
      avatar__body: {
        marginTop: "20px",
        maxWidth: "550px",
        marginLeft: "auto",
        marginRight: "auto",
      },
    }),
    [mediaMD]
  );
  return (
    <Box sx={st.avatar}>
      <Typography
        variant={"h4"}
        textAlign="center"
        component="div"
        sx={st.avatar__title}
      >
        {isLoading && <Skeleton height={60} width={300}></Skeleton>}
        {!isLoading && name && !error ? name : <></>}
        {!isLoading && error ? error : <></>}
      </Typography>
      <Grid sx={st.avatar__body} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="div"
            color="#081F32"
            fontWeight={"bold"}
          >
            {first.title}
          </Typography>

          <Typography
            variant="body1"
            component="div"
            color="GrayText"
            gutterBottom
          >
            {!isLoading && first.value ? (
              first.value
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
            {twenty.title}
          </Typography>

          <Typography
            variant="body1"
            component="div"
            color="GrayText"
            gutterBottom
          >
            {!isLoading && twenty.value ? (
              twenty.value
            ) : (
              <Skeleton height={30} width={200}></Skeleton>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailTitlesContainer;
