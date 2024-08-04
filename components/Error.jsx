import React from "react";

const Error = () => {
  const audio = new Audio("../public/electric.mp3");
  audio.play();

  setTimeout(() => {
    audio.pause();
    audio.volume = 0.01;
    audio.currentTime = 0;
  }, 3000);

  return (
    <div className="error-bg d-flex flex-column justify-content-center text-center">
      <h2>
        Uh Oh! Looks like there was an error while trying to access the quiz!
      </h2>
      <h3 className="m-4">
        Worry not, as I have another button you can click! Just go ahead and
        press it and you will be at the quiz in no time!
      </h3>
      <h3 className="mb-4">
        It does, however, require taking a little detour.
      </h3>
      <p>⬇⬇⬇⬇⬇</p>
      <a href="#/detour" className="scary-button">
        Detour
      </a>
    </div>
  );
};

export default Error;
