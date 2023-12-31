import React from "react";
import "./App.scss";
import Header from "./modules/header/Header";
import Characters from "./pages/Characters/Characters";
import Router from "./modules/router/Router";
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
