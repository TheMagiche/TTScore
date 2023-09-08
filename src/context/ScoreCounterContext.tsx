import React, { ReactNode, useState } from "react";

export const ScoreCounterContext = React.createContext(null);

type ScoreCounterProps = {
  children?: ReactNode;
};

export const ScoreCounterProvider = ({ children }: ScoreCounterProps) => {
  const [teamOne, setTeamOne] = useState<string>("Home");
  const [teamTwo, setTeamTwo] = useState<string>("Guest");
  const [scoreOne, setScoreOne] = useState<number>(20);
  const [scoreTwo, setScoreTwo] = useState<number>(19);
  return (
    <ScoreCounterContext.Provider
      value={{teamOne, setTeamOne, teamTwo, setTeamTwo, scoreOne, setScoreOne, scoreTwo, setScoreTwo }}
    >
      {children}
    </ScoreCounterContext.Provider>
  );
};
