import React from "react";
import { changeFavicon } from "../src/utils";

const Quiz = () => {
  document.title = "<3";
  changeFavicon("hearta.svg");

  const audio = new Audio("hooray.mp3");
  audio.play();

  return (
    <div className="quiz speedy d-flex align-items-center justify-content-center flex-column gap-4">
      <h1>Now it is time for the actual quiz! :D</h1>
      <p className="text-center fs-3 m-5">
        I have gone ahead and fixed the button. It should now work properly. In
        the process however, the animation seems to have completely broken so
        please do not pay much attention to it. Thank you.
      </p>
      <p className="fs-5 mb-5">Click the button below to start the quiz!</p>
      <a href="#/question1">Start Quiz!</a>
    </div>
  );
};

export default Quiz;
