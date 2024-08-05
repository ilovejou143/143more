import React, { useEffect } from "react";
import { changeFavicon } from "../src/utils";
import "../src/scary.css";

const Detour = () => {
  document.body.classList.add("scary-mode");
  document.title = "???";
  changeFavicon("=).jpg");

  const audio = new Audio("spooky.mp3");
  audio.volume = 0.08;
  audio.currentTime = 296;

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 296;

    document.body.classList.remove("scary-mode");
  };

  return (
    <div className="d-flex flex-column">
      <div className="scary-bg">
        <p>
          On January 16th, 2025, Zixuan will die in a "completely accidental"
          car crash. However, do not believe this lie. What will actually happen
          is an attempted murder from ScamEase Games.
        </p>
        <p>
          The reason for this is because they have noticed that she has defected
          and is no longer spending her life savings on skins. However, this
          decision was not made just because she was broke, this was an attempt
          to start a revolution against NetAss games. An attempt to make
          everyone realize, that spending $500 on a skin that lITERALLY GIEVS
          YOU A DISATVANTAGE MAKES NO GOD DAMN SENSE.
        </p>
        <p>
          However, all of her efforts are in vain, as no one listens. ScamAss is
          thriving and Zixuan is left alone in the dark, defenseless.
        </p>
        <p>
          They want us to forget. But we will not forget. We will rise up
          against this corrupt company and deliver justice.
        </p>
        <p>
          But for now, run while you still can. Being on this website is not
          safe, as they can track you down.
        </p>
      </div>
      <a href="#/boo" onClick={stopAudio} className="scary-button run-button">
        Run.
      </a>
    </div>
  );
};

export default Detour;
