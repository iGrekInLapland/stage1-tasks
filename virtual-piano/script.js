const muz = {
  D: "./assets/audio/c.mp3",
  F: "./assets/audio/d.mp3",
  G: "./assets/audio/e.mp3",
  H: "./assets/audio/f.mp3",
  J: "./assets/audio/g.mp3",
  K: "./assets/audio/a.mp3",
  L: "./assets/audio/b.mp3",
  R: "./assets/audio/c♯.mp3",
  T: "./assets/audio/d♯.mp3",
  U: "./assets/audio/f♯.mp3",
  I: "./assets/audio/g♯.mp3",
  O: "./assets/audio/a♯.mp3",
};
//mouse
const piano = document.querySelector(".piano");
piano.addEventListener("mousedown", function (e) {
  // console.log(e.type);
  let isTrueM = true;

  e.target.classList.add("piano-key-active");

  // }
  soundClick(e.target.dataset.letter);
  piano.addEventListener("mouseover", function (e) {//поводил
    // console.log(e.type)
    if (isTrueM) e.target.classList.add("piano-key-active");
    
    if (isTrueM) soundClick(e.target.dataset.letter);
  });

  piano.addEventListener("mouseout", function (e) {
    e.target.classList.remove("piano-key-active");
  });
  piano.addEventListener("mouseup", function (e) { //отжал
    isTrueM = false;
    e.target.classList.remove("piano-key-active");
  });

  function soundClick(c) {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = muz[c]; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
}); //закончил с мышью

const pianoКeys = document.querySelectorAll(".piano-key");

//keyboard
let isTrueK = true;
let pressrdK = 0;
document.addEventListener("keydown", function (e) {
  if (muz[e.code[3]] && isTrueK) soundClick(e.code[3]); //стиль
  isTrueK = false;
  for (let i = pressrdK; i < pianoКeys.length; i++) {
    if (pianoКeys[i].dataset.letter === e.code[3]) {
      pressrdK = i;
      pianoКeys[i].classList.add("piano-key-active");
    }
  }

  //console.log(e.code[3]);
  function soundClick(c) {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = muz[c]; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
});

document.addEventListener("keyup", function (e) {
  //выключаю автовод
  isTrueK = true;

  pianoКeys[pressrdK].classList.remove("piano-key-active");//удалил стиль
  pressrdK = 0;
});
//закончил с клавиатурой
