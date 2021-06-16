const video = document.getElementById("video");

const advanceTime = document.querySelector("#advanceTime");
const iconPlay = document.querySelector("#play");
const backTime = document.querySelector("#backTime");

iconPlay.addEventListener("click", () => {
  playBackTime();
  if (video.paused) {
    video.play();
    iconPlay.classList.remove("icon-play");
    iconPlay.classList.add("icon-pause");
  } else {
    video.pause();
    iconPlay.classList.remove("icon-pause");
    iconPlay.classList.add("icon-play");
  }
});

backTime.addEventListener("click", () => {
  if (video.played) {
    Math.floor((video.currentTime = video.currentTime - 5));
  }
});
advanceTime.addEventListener("click", () => {
  if (video.played) {
    Math.floor((video.currentTime = video.currentTime + 5));
  }
});

const timeStart = document.getElementById("time-start");
const timeEnd = document.getElementById("time-end");

function playBackTime() {
  setInterval(() => {
    const seconds = Math.floor(video.currentTime % 60)
      .toString()
      .padStart(2, "00");
    const minutes = Math.floor(video.currentTime / 60)
      .toString()
      .padStart(2, "00");
    timeStart.textContent = `${minutes}:${seconds}`;
    const videoDurationMinutes = Math.floor(video.duration / 60)
      .toString()
      .padStart(2, "00");
    const videoDurationSegundes = Math.floor(video.duration % 60)
      .toString()
      .padStart(2, "00");
    timeEnd.textContent = `${videoDurationMinutes}:${videoDurationSegundes}`;
  }, 1000);
}

const slider = document.getElementById("slider");
const currentTimeSlider = document.getElementById("current-time-slider");

slider.addEventListener("click", () => {
  getCurrentPointVideo(event);
});

function getCurrentPointVideo(event) {
  const a = document.querySelector(".video-content");
  const b = document.querySelector(".video-time");
  const sliderOffLeft = a.offsetLeft + b.offsetLeft + slider.offsetLeft;
  const sliderWidth = slider.offsetWidth;

  const currentSliderPoint = event.clientX - sliderOffLeft;
  console.log(currentSliderPoint);

  const percentageClickSlider = (currentSliderPoint * 100) / sliderWidth;

  const newCurrentProgress = Math.floor(
    (video.duration * percentageClickSlider) / 100
  ); // segundos
  console.log(newCurrentProgress);
  console.log(newCurrentProgress);
  currentTimeSlider.style.width = `${percentageClickSlider}%`;
  video.currentTime = newCurrentProgress;
}

setInterval(() => {
  const x = (video.currentTime * 100) / video.duration;
  currentTimeSlider.style.width = `${x}%`;
}, 1000);
