/* 
this function is used in more than one place that's why I have created it as a utility,
 what it does, it looks for an active song in case the user selected it before pressing the play button
this will help to track the song and play it that exact song.
*/

export default function currentPlayingSong() {
  const songTitle = document.getElementsByTagName("li");
  let element = document.querySelector(".active-song");
  let index = [...songTitle].indexOf(element);
  return index;
}
