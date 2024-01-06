import React, { FC } from "react";
import { Button } from "@mui/material";
import st from "./CardsContainer.module.scss";
import Skeletons from "./Skeletons";
interface Props {
  isLoading: boolean;
  children: React.ReactNode;
  nextPage?: () => void;
  prevPage?: () => void;
  visiblePrev?: boolean;
  visibleNext?: boolean;
  className?: string;
  margin?: boolean;
  notFound?: boolean;
  notFoundMessage?: string;
}

const CardsContainer: FC<Props> = ({
  isLoading,
  children,
  nextPage = () => {},
  prevPage = () => {},
  visiblePrev = false,
  visibleNext = false,
  className = "",
  margin = true,
  notFound = false,
  notFoundMessage = "Data not found",
}) => {
  return (
    <div className={`${className} ${margin ? st.container__margin : ""}`}>
      <div
        className={`${notFound ? st.container__body_notFound : ""} ${
          st.container__body
        }`}
      >
        {isLoading ? <Skeletons /> : <></>}
        {!isLoading && !notFound ? children : <></>}
        {!isLoading && notFound ? <div>{notFoundMessage}</div> : ""}
      </div>

      <div className={st.container__footer}>
        {visibleNext && (
          <Button
            sx={{
              padding: "10px 32px",
            }}
            variant="outlined"
            onClick={() => {
              nextPage();
            }}
          >
            LOAD MORE
          </Button>
        )}
        {visiblePrev && (
          <Button
            sx={{
              padding: "10px 32px",
            }}
            variant="text"
            onClick={() => {
              prevPage();
            }}
          >
            BACK PAGE
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardsContainer;
