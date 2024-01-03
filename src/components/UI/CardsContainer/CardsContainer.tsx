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
}

const CardsContainer: FC<Props> = ({
  isLoading,
  children,
  nextPage = () => {},
  prevPage = () => {},
  visiblePrev = false,
  visibleNext = false,
  className = "",
}) => {
  return (
    <div className={`${className} ${st.container}`}>
      {isLoading ? <Skeletons /> : children}

      <div className={st.container__footer}>
        {visibleNext && (
          <Button
            sx={{
              padding: "10px 32px",
            }}
            variant="outlined"
            onClick={() => {
              window.scrollTo({ top: 100 });
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
              window.scrollTo({ top: 100 });
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
