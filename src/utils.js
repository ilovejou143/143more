export function changeFavicon(src) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = src;
}

export function handleAnswerClick(
  selectedAnswer,
  setSelectedAnswer,
  navigate,
  answer,
  address
) {
  if (selectedAnswer === null) {
    setSelectedAnswer(answer);
    setTimeout(() => {
      navigate(`/${address}`);
    }, 1500);
  }
}

export function correctSFX() {
  const paths = ["../public/correct.mp3", "../public/yippie.mp3", "../public/duocorrect.mp3"]
  const random = Math.floor(Math.random() * 3);
  const audio = new Audio(paths[random]);

  audio.play();
}


export function wrongSFX() {
  const paths = ["../public/vineboom.mp3", "../public/bruh.mp3", "../public/fart.mp3", "../public/wrong.mp3"]
  const random = Math.floor(Math.random() * 4);
  const audio = new Audio(paths[random]);

  audio.play();
}
