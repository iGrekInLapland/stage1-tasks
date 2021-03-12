//fullscreen
const flscr = document.querySelector(".openfullscreen");
flscr.addEventListener("click", () => {
  //console.log('k')
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});
//ended fullscreen

