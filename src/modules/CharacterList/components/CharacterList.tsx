import React, { FC, useEffect } from "react";
import st from "./CharacterList.module.scss";
import { CharacterData } from "../data";
import { CharacterCard } from "@/components/CharacterCard";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchCharacters } from "../store/ActionCreator";
import { ICharacterFilters } from "@/types/ICharacterFilters";

interface Props {
  filters: ICharacterFilters;
  setFilters: (value: ICharacterFilters) => void;
}

const CharacterList: FC<Props> = ({ filters, setFilters }) => {
  const dispatch = useAppDispatch();
  const { characters, error, isLoading } = useAppSelector(
    (state) => state.CharacterListReducer
  );

  useEffect(() => {
    dispatch(fetchCharacters(filters));
  }, [filters]);

  return (
    <div className={`container ${st.cahracters}`}>
      <div className={st.cahracters__body}>
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>

      <div className={st.cahracters__footer}>
        <Button
          sx={{
            padding: "10px 32px",
          }}
          variant="outlined"
          onClick={() => {
            window.scrollTo({ top: 100 });
            setFilters({ ...filters, page: filters.page + 1 });
          }}
        >
          LOAD MORE
        </Button>
      </div>
    </div>
  );
};

export default CharacterList;
