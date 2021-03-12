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

//range

const inputs = document.querySelectorAll("input");
const outputs = document.querySelectorAll("output");

inputs.forEach((e) => e.addEventListener("input", updateValue));

function updateValue() {
  for (let i = 0; i < outputs.length; i++) {
    outputs[i].value = inputs[i].value;
  }
  //set style
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}




