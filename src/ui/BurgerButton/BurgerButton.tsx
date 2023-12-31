import React, { FC } from "react";
import st from "./BurgerButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const BurgerButton: FC<Props> = ({ className, active, ...props }) => {
  return (
    <button
      className={`${className} ${st.burger} ${active ? st.burger__active : ""}`}
      {...props}
    >
      <div className={st.line1}></div>
      <div className={st.line2}></div>
      <div className={st.line3}></div>
    </button>
  );
};

export default BurgerButton;
