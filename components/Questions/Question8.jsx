import React from "react";

const Question8 = () => {
  return (
    <div className="d-flex flex-column">
      <div className="question question-open question-image d-flex flex-column">
        Question 8: <br />
        Explain what is happening in this image and why it was drawn
        <img src="question.png" alt="pilot" />
      </div>
      <textarea />
      <div className="d-flex justify-content-center">
        <a href="#/question9" className="btn btn-success">
          Submit
        </a>
      </div>
    </div>
  );
};

export default Question8;
