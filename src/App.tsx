import React from "react";
import "./App.scss";
import Router from "./modules/router/Router";
import { ThemeProvider } from "@mui/material";

import { createTheme } from "@mui/material";
function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
