import React, { useState } from "react";
import st from "./Characters.module.scss";
import text from "@/assets/images/rick-and-morty-txt.svg";
import { CharacterList } from "@/modules/CharacterList";
import {
  CharacterFilters,
  CharacterFiltersSlice,
} from "@/modules/CharacterFilters";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
const Characters = () => {
  const filters = useAppSelector(
    (state) => state.CharacterFiltersReducer.filters
  );
  const dispatch = useAppDispatch();
  const { nextPage, prevPage } = CharacterFiltersSlice.actions;
  const dispatchNext = () => dispatch(nextPage());
  const dispatchPrev = () => dispatch(prevPage());
  return (
    <>
      <div className={st.logo}>
        <img src={text} alt="" />
      </div>
      <CharacterFilters />
      <CharacterList
        filters={filters}
        nextPage={dispatchNext}
        prevPage={dispatchPrev}
      />
    </>
  );
};

export default Characters;
