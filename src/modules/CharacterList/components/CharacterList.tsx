import React from "react";
import st from "./CharacterList.module.scss";
import { CharacterData } from "../data";
import { CharacterCard } from "@/components/CharacterCard";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
const CharacterList = () => {
  return (
    <div className={`container ${st.cahracters}`}>
      <Grid container spacing={2}>
        {CharacterData.map((character, idx) => (
          <CharacterCard character={character} key={idx} />
        ))}
      </Grid>

      <div className={st.cahracters__footer}>
        <Button
          sx={{
            padding: "10px 32px",
          }}
          variant="outlined"
        >
          LOAD MORE
        </Button>
      </div>
    </div>
  );
};

export default CharacterList;
