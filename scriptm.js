let button1 = document.getElementById('Take')
let button2 = document.getElementById('noTake')
let text = document.getElementById('text')
let img = document.getElementById('pic')

if ((navigator.userAgent.match(/(iphone)|(ipod)|(ipad)|(android)|(blackberry)|(windows phone)|(symbian)/i))){
  location.replace("https://jamalkake.tk/indexm.html");
}

button1.addEventListener('click', () =>{
  img.src = 'img/jamal.jpg'
  text.textContent = 'U made jamal angry'
})

button2.addEventListener('click', () =>{
  img.src = 'img/jamal3.jpg'
  text.textContent = 'Jamal happly eats his kake not sharing it to anyone'
})