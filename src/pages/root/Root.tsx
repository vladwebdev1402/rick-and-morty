import Footer from "@/modules/footer/Footer";
import Header from "@/modules/header/Header";
import st from "./Root.module.scss";
import React from "react";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Header />
      <div className={st.outlet}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Root;
