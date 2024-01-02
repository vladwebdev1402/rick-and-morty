import React, { useState } from "react";
import {
  Container,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import SearchField from "@/components/UI/SearchField";
import ShowAllFilters from "@/components/UI/ShowAll";
const LocationFilters = () => {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        gap: "16px 20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <SearchField
        sx={{
          flex: downMd ? "0 1 100%" : "0 2 326px",
        }}
        placeholder="Filter by name..."
      />
      <FormControl
        sx={{
          flex: downMd ? "0 1 100%" : "0 1 240px",
          display: showAll || !downSm ? "inline-flex" : "none",
        }}
      >
        <InputLabel>Type</InputLabel>
        <Select label={"Type"}>
          <MenuItem value={"Planet"}>Planet</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          flex: downMd ? "0 1 100%" : "0 1 240px",
          display: showAll || !downSm ? "inline-flex" : "none",
        }}
      >
        <InputLabel>Dimension</InputLabel>
        <Select label={"Dimension"}>
          <MenuItem value={"Dimension"}>Dimension</MenuItem>
        </Select>
      </FormControl>
      <ShowAllFilters
        setShowAll={setShowAll}
        showAll={showAll}
        visible={downSm}
        sx={{ marginTop: "0" }}
      />
    </Container>
  );
};

export default LocationFilters;
