import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeFavicon } from '../src/utils';

const Jumpscare = () => {
  const navigate = useNavigate();
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    document.title = "???";
    changeFavicon("../public/=).jpg");

    const audio = new Audio("../public/jumpscare.mp3");
    audio.volume = 0.8;

    const handleCanPlayThrough = () => {
      setAudioReady(true);
      audio.play();
    };

    audio.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  useEffect(() => {
    if (audioReady) {
      document.body.classList.add("jumpscare");

      const timer = setTimeout(() => {
        navigate("/quiz");
      }, 1750);

      return () => {
        clearTimeout(timer);
        document.body.classList.remove("jumpscare");
      };
    }
  }, [audioReady, navigate]);

  return <div></div>;
};

export default Jumpscare;
