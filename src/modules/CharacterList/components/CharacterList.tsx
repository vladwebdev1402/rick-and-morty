import React, { FC, useEffect } from "react";
import st from "./CharacterList.module.scss";
import { CharacterCard } from "@/components/CharacterCard";
import { ICharacterFilters } from "@/types/ICharacterFilters";
import CardsContainer from "@/components/UI/CardsContainer";
import { CharacterListService } from "../service/service";

interface Props {
  filters: ICharacterFilters;
  nextPage: () => void;
  prevPage: () => void;
}

const CharacterList: FC<Props> = ({ filters, nextPage, prevPage }) => {
  const { data, error, isLoading } =
    CharacterListService.useGetAllCharactersQuery(filters);

  return (
    <CardsContainer
      className="container"
      visibleNext={data && !!data.info.next}
      visiblePrev={filters.page > 1}
      prevPage={prevPage}
      nextPage={nextPage}
      isLoading={isLoading}
    >
      {data &&
        data.results.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
    </CardsContainer>
  );
};

export default CharacterList;
