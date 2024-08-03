import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAnswerClick } from "../../src/utils.js";

const Question4 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const onAnswerClick = (answer) => {
    handleAnswerClick(
      selectedAnswer,
      setSelectedAnswer,
      navigate,
      answer,
      "question5"
    );
  };

  return (
    <div className="question-answers">
      <div className="question question-4">
        Question 4: <br /> 01100001 01110010 01100101 00100000 01111001 01101111
        01110101 00100000 01100111 01100001 01111001 ?
      </div>
      <div className="answers">
        <div>
          <div
            className={`answer ${selectedAnswer === "Natuurlijk" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("Natuurlijk");

              const audio = new Audio("../public/gay.mp3");
              audio.currentTime = 5.2;
              audio.play();
            }}
          >
            Natuurlijk
          </div>
          <div
            className={`answer ${selectedAnswer === "Nee" ? "green" : ""}`}
            onClick={() => {
              onAnswerClick("Nee");

              const audio = new Audio("../public/yippie.mp3");
              audio.play();
            }}
          >
            Nee
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question4;
