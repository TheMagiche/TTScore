import React, { useEffect } from "react";
import { useScoreCounter } from "@/hooks/useScoreCounter";
import ScoreCardComponent from "./ScoreCard";
import ScoreControlComponent from "./Controls";
import NameInputControlComponent from "./NameInput";

const BoardComponent: React.FC = () => {
  const {
    teamOne,
    setTeamOne,
    teamTwo,
    setTeamTwo,
    scoreOne,
    setScoreOne,
    scoreTwo,
    setScoreTwo,
  } = useScoreCounter();

  useEffect(() => {
    determineWinner(scoreOne, scoreTwo);
  }, [scoreOne, scoreTwo]);

  const setWinningCard = (id: string) => {
    const divElement = document.getElementById(id);
    divElement.classList.add("winning-card");
  };

  const removeClass = () => {
    const divElement = document.getElementsByClassName("board-container");
    for (let index = 0; index < divElement.length; index++) {
      divElement[index].classList.remove("winning-card");
    }
  };

  const determineWinner = (player1Score: number, player2Score: number) => {
    if (player1Score >= 20 || player2Score >= 20) {
      if (Math.abs(player1Score - player2Score) >= 2) {
        return player1Score > player2Score
          ? setWinningCard("boardA")
          : setWinningCard("boardB");
      }
    }
    return removeClass();
  };

  return (
    <>
      <div className="board-wrapper">
        <div>
          <div id="boardA" className="board-container">
            <ScoreCardComponent score={scoreOne} team={teamOne} />
            <ScoreControlComponent score={scoreOne} setScore={setScoreOne} />
          </div>
          <NameInputControlComponent name={teamOne} setName={setTeamOne} />
        </div>
        <div>
          <div id="boardB" className="board-container">
            <ScoreCardComponent score={scoreTwo} team={teamTwo} />
            <ScoreControlComponent score={scoreTwo} setScore={setScoreTwo} />
          </div>
          <NameInputControlComponent name={teamTwo} setName={setTeamTwo} />
        </div>
      </div>
    </>
  );
};

export default BoardComponent;
