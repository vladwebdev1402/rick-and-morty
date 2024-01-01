import React, { FC, useState } from "react";
import st from "./CharacterFilters.module.scss";
import {
  IconButton,
  TextField,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DropDown from "./DropDown";
import ShowAll from "./ShowAll";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { CharacterFiltersSlice } from "../store/reducer";

const CharacterFilters = () => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);
  const down_sm = useMediaQuery(theme.breakpoints.down("sm"));

  const filters = useAppSelector(
    (state) => state.CharacterFiltersReducer.filters
  );
  const actions = CharacterFiltersSlice.actions;
  const dispatch = useAppDispatch();

  const setSpecies = (payload: string) => dispatch(actions.setSpecies(payload));
  const setGender = (payload: string) => dispatch(actions.setGender(payload));
  const setStatus = (payload: string) => dispatch(actions.setStatus(payload));

  return (
    <div className={`container ${st.filters}`}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Filter by name..."
            value={filters.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(actions.setName(e.target.value))
            }
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <DropDown
          label="Species"
          items={[
            "Clear",
            "Human",
            "Humanoid",
            "Cronenberg",
            "Alien",
            "Robot",
            "Mythological Creature",
          ]}
          visible={!down_sm || showAll}
          current={filters.species}
          setFilter={setSpecies}
        />
        <DropDown
          label="Gender"
          items={["Clear", "Male", "Female", "Genderless"]}
          visible={!down_sm || showAll}
          current={filters.gender}
          setFilter={setGender}
        />
        <DropDown
          label="Status"
          items={["Clear", "Alive", "Dead", "unknown"]}
          visible={!down_sm || showAll}
          current={filters.status}
          setFilter={setStatus}
        />
      </Grid>
      <ShowAll setShowAll={setShowAll} showAll={showAll} visible={down_sm} />
    </div>
  );
};

export default CharacterFilters;
