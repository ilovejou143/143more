import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAnswerClick, correctSFX, wrongSFX } from "../../src/utils.js";

const Question3 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const onAnswerClick = (answer) => {
    handleAnswerClick(
      selectedAnswer,
      setSelectedAnswer,
      navigate,
      answer,
      "question4"
    );
  };

  return (
    <div className="question-answers">
      <div className="question">
        Question 3: <br /> When is Identity VI coming out?
      </div>
      <div className="answers">
        <div>
          <div
            className={`answer ${selectedAnswer === "tomorrow" ? "green" : ""}`}
            onClick={() => {
              onAnswerClick("tomorrow");
              correctSFX();
            }}
          >
            tomorrow
          </div>
          <div
            className={`answer ${selectedAnswer === "next year" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("next year");
              wrongSFX();
            }}
          >
            next year
          </div>
        </div>
        <div>
          <div
            className={`answer ${
              selectedAnswer === "why is this a question" ? "red" : ""
            }`}
            onClick={() => {
              onAnswerClick("why is this a question");
              wrongSFX();
            }}
          >
            why is this a question
          </div>
          <div
            className={`answer ${selectedAnswer === "2069" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("2069");
              wrongSFX();
            }}
          >
            2069
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question3;
