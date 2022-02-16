import React from "react";
import { GlobalStyle } from "./styles/Global.styled";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Sidebar />
    </div>
  );
};

export default App;
