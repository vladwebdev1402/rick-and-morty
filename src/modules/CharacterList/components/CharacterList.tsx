import React, { FC } from "react";
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
  const { data, error, isError, isFetching } =
    CharacterListService.useGetAllCharactersQuery(filters);

  return (
    <CardsContainer
      className="container"
      visibleNext={!isError && data && !!data.info.next}
      visiblePrev={filters.page > 1}
      prevPage={prevPage}
      nextPage={nextPage}
      isLoading={isFetching}
      notFound={isError}
      notFoundMessage={typeof error === "string" ? error : ""}
    >
      {data &&
        data.results.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
    </CardsContainer>
  );
};

export default CharacterList;
