import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAnswerClick, correctSFX, wrongSFX } from "../../src/utils.js";

const Question2 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const onAnswerClick = (answer) => {
    handleAnswerClick(
      selectedAnswer,
      setSelectedAnswer,
      navigate,
      answer,
      "question3"
    );
  };

  return (
    <div className="question-answers">
      <div className="question">
        Question 2: <br /> What is the color of water?
      </div>
      <div className="answers">
        <div>
          <div
            className={`answer ${
              selectedAnswer === "Colorless" ? "green" : ""
            }`}
            onClick={() => {
              onAnswerClick("Colorless");
              correctSFX();
            }}
          >
            Colorless
          </div>
          <div
            className={`answer ${selectedAnswer === "Blue" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("Blue");
              wrongSFX();
            }}
          >
            Blue
          </div>
        </div>
        <div>
          <div
            className={`answer ${selectedAnswer === "White" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("White");
              wrongSFX();
            }}
          >
            White
          </div>
          <div
            className={`answer ${selectedAnswer === "Red" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("Red");
              wrongSFX();
            }}
          >
            Red
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question2;
