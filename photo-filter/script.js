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
    outputs[i].value = inputs[i].value = (this == reset)? inputs[i].defaultValue : inputs[i].value;
  
  //set style
  const suffix = inputs[i].dataset.sizing || '';
  document.documentElement.style.setProperty(`--${inputs[i].name}`, inputs[i].value + suffix);
}
drawImage()
}
//const btn = document.querySelectorAll('.btn')
const reset = document.querySelector('.btn-reset');
const next =document.querySelector('.btn-next');
const laod =document.querySelector('.btn-load--input');
const save =document.querySelector('.btn-save');

reset.onclick = updateValue;


//загрузка картинки
next.onclick =  getImage;
const imageContainer = document.querySelector('.image-container');

const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
const timeOfDay = ['night', 'morning', 'day', 'evening']
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
//const image = document.querySelector('img');
const image = document.getElementsByTagName('img');
let i = 0;

function viewBgImage(src) {  
  let img= new Image();
  img.src = src;
  img.alt = 'image';
  img.onload = () => {
    imageContainer.innerHTML = "";
    imageContainer.append(img);  
    drawImage()
  }; 
}

function getImage() {
  let a = Math.floor(new Date().getHours()/6);
  const index = i % images.length;
  const imageSrc = base + timeOfDay[a]+'/' + images[index];
 
  viewBgImage(imageSrc);
  i++;
  next.disabled = true;
  setTimeout(function() { next.disabled = false }, 1000);
} 
//конец загрузки

//загрузка с компьютера
laod.onchange = previewFile;
function previewFile() {
  const file = laod.files[0];
  const img= new Image();
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img); 
    drawImage() 
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}


const canvas = document.querySelector('canvas');

function drawImage() {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous'); 

  img.src = image[0].getAttribute('src');
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");

    ctx.filter = `blur(${inputs[0].value}px) invert(${inputs[1].value}%) sepia(${inputs[2].value}%) saturate(${inputs[3].value}%) hue-rotate(${inputs[4].value}deg)`;
console.log(ctx.filter)
    ctx.drawImage(img, 0, 0);

  };  
}
drawImage()

save.onclick = function(e) {
  let link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
};