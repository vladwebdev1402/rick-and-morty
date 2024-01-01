import React, { useState } from "react";
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

const CharacterFilters = () => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);
  const down_sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={`container ${st.filters}`}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
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
        <DropDown
          label="Species"
          items={["None", "Human", "Alien"]}
          visible={!down_sm || showAll}
        />
        <DropDown
          label="Gender"
          items={["None", "Male", "Female"]}
          visible={!down_sm || showAll}
        />
        <DropDown
          label="Status"
          items={["None", "Alive", "Dead"]}
          visible={!down_sm || showAll}
        />
      </Grid>
      <ShowAll setShowAll={setShowAll} showAll={showAll} visible={down_sm} />
    </div>
  );
};

export default CharacterFilters;
