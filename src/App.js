import React from "react";
import MainSection from "./components/MainSection";
import SideBar from "./components/SideBar";
import { AppContainer } from "./styles/Main.styled";

const App = () => {
  return (
    <AppContainer>
      <SideBar />
      <MainSection />
    </AppContainer>
  );
};

export default App;
