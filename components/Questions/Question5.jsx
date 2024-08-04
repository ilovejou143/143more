import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAnswerClick, correctSFX, wrongSFX } from "../../src/utils.js";

const Question5 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const onAnswerClick = (answer) => {
    handleAnswerClick(
      selectedAnswer,
      setSelectedAnswer,
      navigate,
      answer,
      "question6"
    );
  };

  return (
    <div className="question-answers">
      <div className="question question-5 d-flex flex-column">
        Question 5: <br /> Solve
        <img src="integral.png" alt="funny integral" className="rounded" />
        <a
          href="https://www.youtube.com/watch?v=7Znc0W57B10"
          target="_blank"
          onClick={() => {
            const audio = new Audio("mutahar.mp3");
            audio.play();
          }}
        >
          View Solution
        </a>
      </div>
      <div className="answers answers-5">
        <div>
          <div
            className={`answer ${selectedAnswer === "4.7" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("4.7");
              wrongSFX();
            }}
          >
            4.7
          </div>
          <div
            className={`answer ${selectedAnswer === "potato" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("potato");
              wrongSFX();
            }}
          >
            potato
          </div>
        </div>
        <div>
          <div
            className={`answer ${selectedAnswer === "🖕" ? "red" : ""}`}
            onClick={() => {
              onAnswerClick("🖕");
              const audio = new Audio("fyou.mp3");
              audio.play();
            }}
          >
            🖕
          </div>
          <div
            className={`answer ${
              selectedAnswer === "the answer is a number" ? "green" : ""
            }`}
            onClick={() => {
              onAnswerClick("the answer is a number");
              correctSFX();
            }}
          >
            the answer is a number
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question5;
