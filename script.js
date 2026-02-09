let pages = document.querySelectorAll('.page');
let nextBtns = document.querySelectorAll('.next');
let current = 0;

nextBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    pages[current].classList.remove('active');
    current++;
    pages[current].classList.add('active');
  });
});

/* GENERAL SPRINKLE */
function sprinkle(target, emojis, speed){
  setInterval(()=>{
    let span = document.createElement('span');
    span.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random()*100 + 'vw';
    span.style.fontSize = (Math.random()*25+15)+'px';
    span.style.animationDuration = (Math.random()*3+3)+'s';
    target.appendChild(span);
    setTimeout(()=>span.remove(),6000);
  }, speed);
}

/* NORMAL SPRINKLES */
document.querySelectorAll('.sprinkle').forEach(box=>{
  sprinkle(box,['🌸','🌹','💐','🌺','💖','😊'],300);
});

/* YES / NO EFFECTS */
const finalBox = document.getElementById('finalSprinkle');

document.getElementById('yes').onclick = ()=>{
  finalBox.innerHTML="";
  sprinkle(finalBox,['🌸','🌸','🌸','🌹','💐','🌺','💖'],100);
};

document.getElementById('no').onclick = ()=>{
  finalBox.innerHTML="";
  sprinkle(finalBox,['😭','🥀','😔','💔','😢'],120);
};
