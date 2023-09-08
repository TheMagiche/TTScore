import React from "react";
import "@/assets/style/index.scss";
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import { ScoreCounterProvider } from "@/context/ScoreCounterContext";
import BoardComponent from "@/components/scores/Board";

export const App: React.FC = () => {
  return (
    <>
      <ScoreCounterProvider>
        <HeaderComponent />
        <BoardComponent />
        <FooterComponent />
      </ScoreCounterProvider>
    </>
  );
};

export default App;
