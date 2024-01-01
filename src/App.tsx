import React from "react";
import "./App.scss";
import Router from "./modules/router/Router";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const store = setupStore();

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
