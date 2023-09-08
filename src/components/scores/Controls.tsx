import React from "react";

type ScoreControlComponentProps = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const ScoreControlComponent: React.FC<ScoreControlComponentProps> = ({
  score,
  setScore,
}: ScoreControlComponentProps) => {
  const handleDecrement = () => {
    setScore(score--);
  };
  const handleIncrement = () => {
    setScore(score++);
  };
  return (
    <>
      <div className="score-controls">
        <div className="noselect" onClick={() => handleDecrement()}><span>-</span></div>
        <div className="noselect" onClick={() => handleIncrement()}><span>+</span></div>
      </div>
    </>
  );
};

export default ScoreControlComponent;
