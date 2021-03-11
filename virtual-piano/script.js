const muz = {
  D:   './assets/audio/c.mp3',
  F:   './assets/audio/d.mp3',
  G:   './assets/audio/e.mp3',
  H:   './assets/audio/f.mp3',
  J:   './assets/audio/g.mp3',
  K:   './assets/audio/a.mp3',
  L:   './assets/audio/b.mp3',
  R:   './assets/audio/c♯.mp3',
  T:   './assets/audio/d♯.mp3',
  U:   './assets/audio/f♯.mp3',
  I:   './assets/audio/g♯.mp3',
  O:   './assets/audio/a♯.mp3',
}
//mouse
const piano = document.querySelector('.piano');
const mdown = piano.addEventListener('mousedown', function (e){
  let target =  e.target;
 // console.log(e);
  let isTrueM = true;

soundClick(target.dataset.letter);
const mmove = piano.addEventListener('mouseover', function (e){
  let target =  e.target; 
           //поводил
  if(isTrueM) soundClick(target.dataset.letter);
});

const mup = piano.addEventListener('mouseup', function (e){   //отжал
  isTrueM = false;
})


  function soundClick(c) {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = muz[c]; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
});//закончил с мышью

    
//keyboard
let isTrueK = true;
document.addEventListener('keydown', function (e){
    if(muz[e.code[3]] && isTrueK) soundClick(e.code[3]);
    isTrueK = false;
    //console.log(e);
    function soundClick(c) {
        let audio = new Audio(); // Создаём новый элемент Audio
        audio.src = muz[c]; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
      }
});


document.addEventListener('keyup', function (e){//выключаю автовод
  isTrueK = true;
})
//закончил с клавиатурой 




