import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchField from "@/components/UI/SearchField";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { EpisodeFiltersSlice } from "../store/reducer";
const EpisodeFilters = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(
    (state) => state.EpisodeFiltersReducer.filters
  );
  const { setName } = EpisodeFiltersSlice.actions;
  const [localName, setLocalName] = useState(name);


  let timer: any;
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);
    setLocalName(e.target.value);
    timer = setTimeout(() => {
      dispatch(setName(e.target.value));
    }, 1000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SearchField
        fullWidth
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        value={localName}
        onChange={changeName}
        sx={{
          marginTop: "16px",
          maxWidth: "500px",
        }}
      />
    </Box>
  );
};

export default EpisodeFilters;
