import React, { useState, useMemo } from "react";
import {
  Container,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import SearchField from "@/components/UI/SearchField";
import ShowAllFilters from "@/components/UI/ShowAll";
import { dimensions, types } from "./constants";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { LocationFiltersSlice } from "../store/reducer";

const LocationFilters = () => {
  const filters = useAppSelector(
    (state) => state.LocationFiltersReducer.filters
  );

  const dispatch = useAppDispatch();

  const { setName, setType, setDimension } = LocationFiltersSlice.actions;

  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const st = useMemo(() => {
    return {
      container: {
        display: "flex",
        gap: "16px 20px",
        flexWrap: "wrap",
        justifyContent: "center",
      },
      search: {
        flex: downMd ? "0 1 100%" : "0 2 326px",
      },
      formControl: {
        flex: downMd ? "0 1 100%" : "0 1 240px",
        display: showAll || !downSm ? "inline-flex" : "none",
      },
      select: {
        PaperProps: {
          style: {
            maxHeight: 300,
          },
        },
      },
    };
  }, [downMd, downSm, showAll]);

  const changeType = (e: SelectChangeEvent<string>) => {
    if (e.target.value == "Clear") dispatch(setType(""));
    else dispatch(setType(e.target.value));
  };
  const changeDimension = (e: SelectChangeEvent<string>) => {
    if (e.target.value == "Clear") dispatch(setDimension(""));
    else dispatch(setDimension(e.target.value));
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <Container disableGutters sx={st.container}>
      <SearchField
        sx={st.search}
        placeholder="Filter by name..."
        value={filters.name}
        onChange={changeName}
      />
      <FormControl sx={st.formControl}>
        <InputLabel>Type</InputLabel>
        <Select
          label={"Type"}
          MenuProps={st.select}
          value={filters.type}
          onChange={changeType}
        >
          <MenuItem value={"Clear"}>Clear</MenuItem>
          {types.map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={st.formControl}>
        <InputLabel>Dimension</InputLabel>
        <Select
          label={"Dimension"}
          MenuProps={st.select}
          value={filters.dimension}
          onChange={changeDimension}
        >
          <MenuItem value={"Clear"}>Clear</MenuItem>
          {dimensions.map((deminsion) => (
            <MenuItem value={deminsion} key={deminsion}>
              {deminsion}
            </MenuItem>
          ))}
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
