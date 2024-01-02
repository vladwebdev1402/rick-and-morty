import React, { FC } from "react";
import { Button, SxProps } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";

interface Props {
  setShowAll: (value: boolean) => void;
  showAll: boolean;
  visible: boolean;
  sx?: SxProps;
}
const ShowAllFilters: FC<Props> = ({ setShowAll, showAll, visible, sx }) => {
  const clickShow = () => {
    setShowAll(!showAll);
  };

  return (
    <Button
      startIcon={showAll ? <FilterListOffIcon /> : <FilterListIcon />}
      fullWidth
      variant="contained"
      size="large"
      sx={{
        display: visible ? "inline-flex" : "none",
        marginTop: "16px",
        padding: "16px",
        backgroundColor: "#E3F2FD",
        color: "#2196F3",
        "&:hover": {
          backgroundColor: "#C5DEF0",
        },
        ...sx,
      }}
      onClick={clickShow}
    >
      {showAll ? "HIDDEN FILTERS" : "ADVANCED FILTERS"}
    </Button>
  );
};

export default ShowAllFilters;
