import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    const audio = new Audio("electric.mp3");

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };

    playAudio();

    const timeoutId = setTimeout(() => {
      audio.pause();
      audio.volume = 0.01;
      audio.currentTime = 0;
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

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
