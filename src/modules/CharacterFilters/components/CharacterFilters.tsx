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
import { ICharacterFilters } from "@/types/ICharacterFilters";
interface Props {
  filters: ICharacterFilters;
  setFilters: (value: ICharacterFilters) => void;
}
const CharacterFilters: FC<Props> = ({ filters, setFilters }) => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);
  const down_sm = useMediaQuery(theme.breakpoints.down("sm"));

  const setSpecies = (species: string) =>
    setFilters({
      ...filters,
      species: species,
      page: 1,
    });

  const setGender = (gender: string) =>
    setFilters({
      ...filters,
      gender: gender,
      page: 1,
    });

  const setStatus = (status: string) =>
    setFilters({
      ...filters,
      status: status,
      page: 1,
    });

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
              setFilters({ ...filters, name: e.target.value })
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
