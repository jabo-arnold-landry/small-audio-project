const playList = document.querySelector(".playlist");
const songsList = playList.querySelector(".song-display");
const controllers = document.querySelector(".controller");
export let songsPlayLists = [];
const fileInput = playList.querySelector("input");

import { playerController, played, pause } from "./audioPlayer.js";
import currentPlayingSong from "./utlisFunction.js";
let index = 0;
const next = playerController("next");
const prev = playerController("prev");
fileInput.addEventListener("input", () => {
  // getting  file inputed by the user
  handlingFiles(fileInput.files);
});
function handlingFiles(files) {
  for (let file of files) {
    songsPlayLists.push(file);
  }
  displaySongs(songsPlayLists);
  songsPlayLists = [];
}
/* this section is for creating audio element and populating song title to the DOM */
function displaySongs(arr) {
  const audioFrag = document.createDocumentFragment();
  const audioLists = document.querySelector(".audio");
  arr.forEach((audio, index) => {
    const audioElement = document.createElement("audio");
    const url = URL.createObjectURL(audio); // this lne will help create a fake url for a song to be played, we will use it as a src for audio
    audioElement.src = url;
    audioElement.setAttribute("data-count", index);

    audioFrag.append(audioElement);
    displaySongsTitle(audio.name, index);
  });
  audioLists.append(audioFrag);
}
function displaySongsTitle(text, id) {
  const docFrag = document.createDocumentFragment();
  const li = document.createElement("li");
  li.innerText = text;
  li.title = text;
  li.setAttribute("data-label", id);
  docFrag.append(li);
  songsList.append(docFrag);
  const p = playList.querySelector("p");
  p.textContent = "";
}
/* drag and drop section*/
const dropArea = document.querySelector(".drag-zone");
const activeState = toggleActiveOrInactive(true);
const inactiveState = toggleActiveOrInactive(false);
const dropEvents = ["dragenter", "dragover", "dragleave", "drop"];
dropEvents.forEach((evt) => {
  dropArea.addEventListener(evt, (e) => e.preventDefault());
});

dropEvents.slice(0, 2).forEach((evt) => {
  dropArea.addEventListener(evt, activeState);
});

dropEvents
  .slice(2, 4)
  .forEach((evt) => dropArea.addEventListener(evt, inactiveState));
function toggleActiveOrInactive() {
  return function (state) {
    state
      ? dropArea.classList.add("drag-active")
      : dropArea.classList.remove("drag-active");
  };
}

dropArea.addEventListener("drop", (e) => {
  const dataTransfer = e.dataTransfer;
  const files = dataTransfer.files;
  handlingFiles(files);
  inactiveState();
});
/* audio playing section controllers */
controllers.addEventListener("click", (e) => {
  if (index <= 0) {
  }
  if (e.target.id === "prev") {
    prev(index--);
  }

  if (e.target.id === "nxt") {
    next(index++);
  }
});
const playPause = document.getElementById("play");

function letsPlay() {
  index = currentPlayingSong() === -1 ? 0 : currentPlayingSong();
  played(index);
  return index;
}
playPause.addEventListener("click", () => {
  // here we are checking if there is a highlighted song before the play button if not we assign the index to zero else to the index of the active or the highlited song
  letsPlay();
});
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    letsPlay();
  }
  if (e.key === "n") {
    next(index++);
  }
  if (e.key === "p") {
    prev(index--);
  }
});
