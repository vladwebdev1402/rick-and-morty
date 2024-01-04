import React, { FC } from "react";
import st from "./DetailContainer.module.scss";
import { Box, Button, Typography, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const DetailContainer: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const navigate = useNavigate();
  return (
    <div className={`container ${st.details}`}>
      <Button
        variant="text"
        color="inherit"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: "0",
        }}
      >
        go back
      </Button>
      {children}
    </div>
  );
};

export default DetailContainer;
