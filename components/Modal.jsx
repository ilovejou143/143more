import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  let containerStyle = { transform: "scale(1.5)" };

  if (image.src.includes("mystery.png")) {
    // clerk

    image.src = "../public/jumpscare.jpg";
    image.title = "SWIMSUIT CLERK JUMPSCARE !!!!!";
    image.description = "September 1st, 1939";

    const audio = new Audio("../public/lol.mp3");
    audio.volume = 0.2;
    audio.play();
  } else if (image.src.includes("mystery2.png")) {
    // pilot

    const audio = new Audio("../public/fart.mp3");
    audio.play();

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: "scale(1.5)" }}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src="../public/jumpscare2.png"
              alt="pilot fart"
              style={{ width: "400px" }}
            />
          )}
          <div className="mt-3">
            <h2>THE FARTING!?</h2>
            <img
              src="../public/fartlore.png"
              alt="chat je pe te fart lore"
              style={{ cursor: "default" }}
            />
            <img src="../public/fart2.png" alt="woffle" />
          </div>
        </div>
      </div>
    );
  } else if (
    image.src.includes("mystery4.png") ||
    image.src.includes("../public/image84.png")
  ) {
    // zixuan house jumpscare

    if (image.src.includes("mystery4.png")) {
      const audio = new Audio("../public/lol.mp3");
      const audio1 = new Audio("../public/trash.mp3");
      const audio2 = new Audio("../public/vineboom.mp3");
      const audio3 = new Audio("../public/sus.mp3");
      const audio4 = new Audio("../public/evildentist-aids.mp3");
      const audio5 = new Audio("../public/fart.mp3");
      const audio6 = new Audio("../public/fyou.mp3");
      const audio7 = new Audio("../public/gay.mp3");
      const audio8 = new Audio("../public/zixuangamging.mp3");

      audio.volume = 0.2;
      audio4.volume = 0.2;
      audio7.currentTime = 5.2;

      audio8.play();
      audio.play();
      audio1.play();
      audio2.play();
      audio3.play();
      audio4.play();
      audio5.play();
      audio6.play();

      setTimeout(() => {
        audio7.play();
      }, 3000);

      setTimeout(() => {
        audio8.play();
      }, 4000);
    }

    image.src = "../public/image84.png";

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: "scale(1.5)" }}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <img
              className="no-cursor"
              src="../public/gif13.gif"
              alt="zixuan no prisoner"
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image140.png")) {
    // sunbear

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: "scale(1.5)" }}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <img
            className="rounded mb-3 no-cursor"
            src={image.src}
            alt={image.title}
          />
          <div className="mt-3">
            <h2>{image.title}</h2>
            <img
              src="../public/sunbear.png"
              alt="sunbear"
              className="no-cursor"
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image141.jpg")) {
    // sunbear 2

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: "scale(1.5)" }}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <img
            className="rounded mb-3 no-cursor"
            src={image.src}
            alt={image.title}
          />
          <div className="mt-3">
            <h2>{image.title}</h2>
            <img
              src="../public/sunbear2.png"
              alt="sunbear"
              className="no-cursor"
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image42.jpg")) {
    // xarata gaming

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: "scale(1.5)" }}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <img
            className="rounded mb-3 no-cursor"
            src={image.src}
            alt={image.title}
          />
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <img
              src="../public/gif4.gif"
              alt="xarata gaming"
              className="no-cursor"
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image21.png")) {
    // yuu photo

    useEffect(() => {
      const video = document.getElementById("yuu-photo");
      if (video) {
        video.play();
      }
    }, []);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: "scale(1.5)" }}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <video id="yuu-photo" width="640" height="360" controls autoplay>
            <source src="../public/yuuphoto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image61.png")) {
    // xarata message

    useEffect(() => {
      const video = document.getElementById("message");
      if (video) {
        video.play();
      }
    }, []);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: "scale(1.5)" }}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2>{image.title}</h2>
            <video id="message" width="320" height="240" controls autoplay>
              <source src="../public/xaratamessage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image47.png")) {
    // old but gold

    useEffect(() => {
      const video = document.getElementById("foggy");
      if (video) {
        video.play();
      }
    }, []);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: "scale(1.5)" }}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <video id="foggy" width="640" height="360" controls autoplay>
            <source src="../public/oldbutgold.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image85.png")) {
    // forward dance

    const audio = new Audio("../public/woohoo.mp3");
    audio.currentTime = 1.3;
    audio.play();

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2>{image.title}</h2>
            <img
              src="../public/forwarddance.gif"
              alt="WOOHOOOYEEEEEAH"
              style={{ cursor: "default" }}
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image114.png")) {
    // zixuan 5 sec kite

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <img
              className="rounded mb-3 no-cursor"
              src="../public/zixuan.gif"
              alt="zixuan 5 sec kite"
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image10.png")) {
    // merc ts

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src="../public/image10-2.png"
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p id="description">{image.description}</p>
            <img src="../public/image10-3.gif" alt="what if i just" />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image93.png")) {
    // mabye

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p id="description">{image.description}</p>
            <img src="../public/mabye.png" alt="mabye" />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image95.jpg")) {
    // ducky gaming

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p id="description">{image.description}</p>
            <img src="../public/gif3.gif" alt="ducky gaming" />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image130.png")) {
    // evil dentist

    const audio = new Audio("../public/evildentist-aids.mp3");
    audio.volume = 0.025;
    audio.play();

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src="../public/image130-2.png"
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2>{image.title}</h2>
            <p id="description">{image.description}</p>
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image25.jpg")) {
    // mario

    const audio = new Audio("../public/mario.mp3");

    audio.addEventListener("loadedmetadata", () => {
      audio.currentTime = 0.7;
      audio.volume = 0.4;
      audio.play();
    });
  } else if (image.src.includes("image19.png")) {
    // troll

    const audio = new Audio("../public/troll.mp3");
    audio.volume = 0.3;

    setTimeout(() => {
      audio.pause();
    }, 5500);

    audio.play();
  } else if (image.src.includes("image35.jpg")) {
    // growl

    const audio = new Audio("../public/growl.mp3");
    audio.currentTime = 1;
    audio.play();
  } else if (image.src.includes("image50.png")) {
    // zixuan gamging

    const audio = new Audio("../public/zixuangamging.mp3");
    audio.play();
  } else if (image.src.includes("wafflefartlove")) {
    // waffle loves fart

    const audio = new Audio("../public/fart.mp3");
    const random = Math.floor(Math.random() * 4000);

    setTimeout(() => {
      audio.play();
    }, random);
  } else if (image.src.includes("xaratagrass")) {
    // xarata grass

    const audio = new Audio("../public/xaratagrass.mp3");
    audio.play();
  } else if (image.src.includes("image156.png")) {
    // kazu is 11

    const audio = new Audio("../public/kazumouse.mp3");
    audio.play();
  } else if (image.src.includes("image69.png")) {
    // kaira the zebra

    const audio = new Audio("../public/baalder.mp3");
    audio.play();
  } else if (image.src.includes("image105.png")) {
    // he's acting sus

    const audio = new Audio("../public/hesactingsus.mp3");
    audio.play();
  } else if (image.src.includes("image87.png")) {
    // kazu sleep

    const audio = new Audio("../public/kazusleep.mp3");
    audio.volume = 0.7;
    audio.play();

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2 className="title">{image.title}</h2>
            <p id="description">{image.description}</p>
            <img
              className="no-cursor"
              src="../public/kazuditch.gif"
              alt="kazu ditch"
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image41.jpg")) {
    // mcdonald

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2 className="title">{image.title}</h2>
            <p id="description">{image.description}</p>
            <img
              className="no-cursor"
              src="../public/mcdonald.gif"
              alt="mcdonald"
            />
            <p id="description">February 9th, 2024</p>
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image126.png")) {
    // waffle gaming

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2 className="title">{image.title}</h2>
            <p id="description">{image.description}</p>
            <img
              className="no-cursor"
              src="../public/gif9.gif"
              alt="waffle gaming"
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image74.jpg")) {
    // never gamging

    containerStyle = { maxWidth: "50vw", transform: "scale(1.5)" };

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <h2 className="title">{image.title}</h2>
            <p id="description">{image.description}</p>
            <img
              className="no-cursor"
              src="../public/gif6.gif"
              alt="never gamging"
            />
          </div>
        </div>
      </div>
    );
  } else if (image.src.includes("image58.jpg")) {
    // I WONT SURRENDER

    const audio = new Audio("../public/iwontsurrender.mp3");
    audio.play();
  } else if (image.src.includes("image112.png")) {
    // eminem

    containerStyle = { width: "40vw", transform: "scale(1.5)" };

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-container d-flex gap-3"
          onClick={(e) => e.stopPropagation()}
          style={containerStyle}
        >
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
          <div className="mt-3">
            <a
              href="https://www.youtube.com/watch?v=rRgTKrp1hVc&t=9s"
              target="_blank"
            >
              An Accurate Transcript
            </a>
            <p id="description">{image.description}</p>
          </div>
        </div>
      </div>
    );
  }

  if (image.src.includes("image19.png") || image.src.includes("image25.jpg")) {
    // mario and trollface

    containerStyle = { maxWidth: "95vw" };
  } else if (image.src.includes("image81.png")) {
    // horny

    containerStyle = { transform: "scale(3.0)" };

    const audio = new Audio("../public/sus.mp3");
    audio.volume = 0.7;
    audio.play();

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
          <img
            className="rounded mb-3 no-cursor"
            src="../public/jerma.png"
            alt="jerma"
          />
        </div>
      </div>
    );
  } else if (image.title === "" && image.description === "") {
    // blank

    containerStyle = { transform: "scale(1.8)" };

    if (image.src.includes("video")) {
      // video

      useEffect(() => {
        const video = document.getElementById("video");
        if (video) {
          video.play();
        }
      }, []);

      const source = image.src.substring(0, 17) + "mp4";

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            <video id="video" width="640" height="360" controls autoPlay>
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    } else if (image.src.includes("image101.png")) {
      // surviving every time

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/image101-2.png"
                alt={image.title}
              />
            )}
          </div>
        </div>
      );
    } else if (image.src.includes("image148.png")) {
      // pdf file

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/pdffile.jpg"
                alt="edp"
              />
            )}
          </div>
        </div>
      );
    } else if (image.src.includes("image113.png")) {
      // xarata muted

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={containerStyle}
            className="d-flex flex-column"
          >
            <img
              className="rounded mb-3 no-cursor"
              src="../public/image113-2.png"
              alt={image.title}
            />
            <img src="../public/gif14.gif" alt="xarata skill issue" />
          </div>
        </div>
      );
    } else if (image.src.includes("image43.jpg")) {
      // never been more sane

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div style={containerStyle}>
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
            <img
              className="no-cursor mx-3"
              src="../public/gif10.gif"
              alt="never been more sane"
            />
          </div>
        </div>
      );
    } else if (image.src.includes("image119.png")) {
      // bing chilling

      useEffect(() => {
        const video = document.getElementById("bing-chilling");
        if (video) {
          video.play();
        }
      }, []);

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            <video
              id="bing-chilling"
              width="640"
              height="360"
              controls
              autoplay
            >
              <source src="../public/bingchilling.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    } else if (image.src.includes("mystery3.png")) {
      // car

      useEffect(() => {
        const video = document.getElementById("car");
        if (video) {
          video.play();
        }
      }, []);

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            <video id="car" width="640" height="360" controls autoplay>
              <source src="../public/car-full.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    } else if (image.src.includes("image2.jpg")) {
      // lucky guy irl

      const audio = new Audio("../public/punch.mp3");

      setTimeout(() => {
        audio.play();
      }, 1500);

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/luckypunch.gif"
                alt="lucky guy irl punch"
              />
            )}
          </div>
        </div>
      );
    } else if (image.src.includes("image121.png")) {
      // lucky guy irl

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/gif15.gif"
                alt="xarata dies"
              />
            )}
          </div>
        </div>
      );
    } else if (image.src.includes("image161.png")) {
      // top tier survivor gameplay

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/gif11.gif"
                alt="top tier survivor gameplay"
              />
            )}
          </div>
        </div>
      );
    } else if (image.src.includes("image164.png")) {
      // 1st ann jumpscare

      const audio = new Audio("../public/vineboom.mp3");
      audio.play();

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={(e) => e.stopPropagation()}
            style={containerStyle}
          >
            <p className="funny">FIRST ANN JUMPSCARE</p>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/gif12.gif"
                alt="first ann real"
              />
            )}
          </div>
        </div>
      );
    } else if (image.src.includes("image124.png")) {
      // double gun miss jumpscare

      const audio = new Audio("../public/vineboom.mp3");

      setTimeout(() => {
        audio.play();
      }, 300);

      setTimeout(() => {
        audio.play();
      }, 4000);

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={(e) => e.stopPropagation()}
            style={containerStyle}
          >
            <p className="funny">DOUBLE GUN MISS JUMPSCARE</p>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/gif8.gif"
                alt="double gun miss"
              />
            )}
          </div>
        </div>
      );
    } else if (image.src.includes("justamagnet")) {
      // just a magnet
      containerStyle = { transform: "scale(3.0)" };

      const [showText, setShowText] = useState(image.src.includes("notext"));

      const handleClick = () => {
        setShowText(!showText);

        console.log(showText);

        showText
          ? (image.src = "../public/justamagnet-text.png")
          : (image.src = "../public/justamagnet-notext.png");
      };

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt="just a magnet"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="toggle-text btn btn-primary"
          >
            Toggle Text
          </button>
        </div>
      );
    } else if (image.src.includes("image15.jpg")) {
      // marshal

      const audio = new Audio("../public/vineboom.mp3");
      audio.play();

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/image15-2.png"
                alt="clerk marshal"
              />
            )}
          </div>
        </div>
      );
    } else if (image.src.includes("image132.png")) {
      // very sus

      const audio = new Audio("../public/vineboom.mp3");
      audio.play();

      return (
        <div className="modal-overlay" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
            {image && (
              <img
                className="rounded mb-3 no-cursor"
                src="../public/image132-2.png"
                alt="lucky guy irl being lucky guy irl"
              />
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} style={containerStyle}>
          {image && (
            <img
              className="rounded mb-3 no-cursor"
              src={image.src}
              alt={image.title}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container d-flex gap-3"
        onClick={(e) => e.stopPropagation()}
        style={containerStyle}
      >
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {image && (
          <img
            className="rounded mb-3 no-cursor"
            src={image.src}
            alt={image.title}
          />
        )}
        <div className="mt-3">
          <h2 className="title">{image.title}</h2>
          <p id="description">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
