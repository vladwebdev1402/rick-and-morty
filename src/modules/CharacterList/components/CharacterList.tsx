import React, { FC, useEffect } from "react";
import st from "./CharacterList.module.scss";
import { CharacterCard } from "@/components/CharacterCard";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchCharacters } from "../store/ActionCreator";
import { ICharacterFilters } from "@/types/ICharacterFilters";
import CardsContainer from "@/components/UI/CardsContainer";

interface Props {
  filters: ICharacterFilters;
  nextPage: () => void;
  prevPage: () => void;
}

const CharacterList: FC<Props> = ({ filters, nextPage, prevPage }) => {
  const dispatch = useAppDispatch();
  const { characters, error, isLoading } = useAppSelector(
    (state) => state.CharacterListReducer
  );

  useEffect(() => {
    dispatch(fetchCharacters(filters));
  }, [filters]);

  return (
    <CardsContainer
      className="container"
      visibleNext
      visiblePrev={filters.page > 1}
      prevPage={prevPage}
      nextPage={nextPage}
      isLoading={isLoading}
    >
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </CardsContainer>
  );
};

export default CharacterList;
