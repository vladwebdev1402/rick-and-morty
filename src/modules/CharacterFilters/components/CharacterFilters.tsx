import React from "react";
import st from "./CharacterFilters.module.scss";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CharacterFilters = () => {
  return (
    <div className={`container ${st.filters}`}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            sx={{ width: "100%" }}
            variant="outlined"
            placeholder="Filter by name..."
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Species</InputLabel>
            <Select label="Species">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Gender</InputLabel>
            <Select label="Gender">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Status</InputLabel>
            <Select label="Status">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default CharacterFilters;
