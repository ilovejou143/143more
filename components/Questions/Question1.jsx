import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAnswerClick, correctSFX, wrongSFX } from "../../src/utils.js";

const Question1 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const onAnswerClick = (answer) => {
    handleAnswerClick(
      selectedAnswer,
      setSelectedAnswer,
      navigate,
      answer,
      "question2"
    );
  };

  return (
    <div className="question-answers">
      <div className="question">
        Question 1: <br /> What is the 3rd letter of the 153rd message you have
        DMed me?
      </div>
      <div className="answers">
        <div>
          <div
            className={`answer ${selectedAnswer === "E" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("E");
              wrongSFX();
            }}
          >
            E
          </div>
          <div
            className={`answer ${selectedAnswer === "S" ? "green" : ""}`}
            onClick={() => {
              onAnswerClick("S");
              correctSFX();
            }}
          >
            S
          </div>
        </div>
        <div>
          <div
            className={`answer ${selectedAnswer === "A" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("A");
              wrongSFX();
            }}
          >
            A
          </div>
          <div
            className={`answer ${selectedAnswer === "N" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("N");
              wrongSFX();
            }}
          >
            N
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question1;
