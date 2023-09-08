import React from "react";

type ScoreCardComponentProps = {
  score: number;
  team: string;
};

const ScoreCardComponent: React.FC<ScoreCardComponentProps> = ({
  score,
  team,
}: ScoreCardComponentProps) => {
  return (
    <>
      <div className="score-card noselect">
        <span>{score}</span>
        <h6>{team}</h6>
      </div>
    </>
  );
};

export default ScoreCardComponent;
