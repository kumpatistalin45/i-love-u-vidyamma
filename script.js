// =====================
// Enhanced Love Theme - Universal Heart Bubbles
// =====================

// Auto-start heart animations on page load
window.addEventListener('DOMContentLoaded', ()=>{
  if(typeof createHearts === 'function') createHearts();
});

// Fallback universal heart bubble generator
function generateHeartBubbles(){
  setInterval(()=>{
    let heart = document.createElement("div");
    heart.innerHTML = ["💖","💕","💗","💓","💘","💞","❤️","🌹"][Math.floor(Math.random()*8)];
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.bottom = "-50px";
    heart.style.fontSize = (15+Math.random()*25)+"px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.animation = "heartFloat 8s linear forwards";
    heart.style.opacity = "0.8";
    heart.classList.add("blinking");
    document.body.appendChild(heart);
    setTimeout(()=>{ heart.remove(); }, 8000);
  }, 500);
}

// Trigger on load if createHearts doesn't exist
setTimeout(()=>{
  if(document.querySelectorAll('[style*="floatHeart"], [class*="floatHeart"], [class*="heart"]').length === 0) {
    generateHeartBubbles();
  }
}, 1000);

// =====================
// Mail Open
// =====================

function openMailbox(){

document
.getElementById("mailSection")
.classList.add("hidden");

let passBox=
document
.getElementById("passwordSection");

passBox.classList.remove("hidden");

passBox.classList.add("fadeIn");

}


// =====================
// Password Check
// =====================

function checkPassword(){

let pass=

document
.getElementById("password")
.value
.trim()
.toUpperCase();

if(pass==="I LOVE U BAVA"){

document
.getElementById("passwordSection")
.classList.add("hidden");

let letter=

document
.getElementById("letterSection");

letter.classList.remove("hidden");

letter.classList.add("fadeIn");

createHearts();

}

else{

alert(
"Wrong Password ❤️\n\nHint: Naaku Baaga Nachina Words"
);

}

}


// =====================
// YES Button
// =====================

function yesLove(){

document.body.innerHTML = `

<div style="

height:100vh;

display:flex;

justify-content:center;
align-items:center;

flex-direction:column;

background:
linear-gradient(
135deg,
#ff9ecf,
#ffc2de,
#ffd6ea,
#fff0f6
);

font-family:'Segoe UI';

text-align:center;

">

<h1 style="
font-size:70px;
color:#ff1493;
">
🎉💖🎉
</h1>

<h2 style="
color:#ff1493;
font-size:40px;
margin-top:20px;
">
Thank You Sri Vidya ❤️
</h2>

<p style="
font-size:24px;
margin-top:20px;
color:#c2185b;
line-height:1.8;
">

Naa Life Lo

Best Gift Nuvve ❤️

<br><br>

Forever Together 💖

</p>

<br><br>

<button
onclick="goFinalPage()"
style="

padding:15px 35px;

border:none;

border-radius:50px;

cursor:pointer;

font-size:18px;

color:white;

background:
linear-gradient(
45deg,
#ff1493,
#ff69b4
);

box-shadow:
0 0 20px rgba(255,20,147,.6);

">

💌 A small surprise for u my Heart ❤️🫂

</button>

</div>

`;

createConfetti();

}

// =====================
// Floating Hearts
// =====================

function createHearts(){

setInterval(()=>{

let heart=
document.createElement("div");

heart.innerHTML=
["💖","💕","💗","💓","💘","💞"][Math.floor(Math.random()*6)];

heart.classList.add("blinking");

heart.style.position=
"fixed";

heart.style.left=
Math.random()*100+"vw";

heart.style.bottom=
"-50px";

heart.style.fontSize=
(20+Math.random()*20)+"px";

heart.style.pointerEvents=
"none";

heart.style.zIndex=
"9999";

heart.style.animation=
"heartFloat 8s linear forwards";

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},8000);

},600);

}


// =====================
// Confetti
// =====================

function createConfetti(){

setInterval(()=>{

let confetti=
document.createElement("div");

confetti.innerHTML=
["🎉","💖","✨","💕"][Math.floor(Math.random()*4)];

confetti.style.position=
"fixed";

confetti.style.left=
Math.random()*100+"vw";

confetti.style.top=
"-50px";

confetti.style.fontSize=
(20+Math.random()*30)+"px";

confetti.style.zIndex=
"99999";

confetti.style.animation=
"confettiFall 5s linear forwards";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},5000);

},200);

}


// =====================
// Dynamic Animations
// =====================

const style=
document.createElement("style");

style.innerHTML=`

@keyframes heartFloat{

0%{

transform:
translateY(0);

opacity:0;

}

20%{
opacity:1;
}

100%{

transform:
translateY(-120vh);

opacity:0;

}

}

@keyframes confettiFall{

0%{

transform:
translateY(0)
rotate(0deg);

}

100%{

transform:
translateY(120vh)
rotate(720deg);

}

}

`;

document.head.appendChild(style);
function goFinalPage(){
  document.body.style.transition = "1s";
  document.body.style.opacity = "0";

  setTimeout(()=>{
    if (typeof window.navigateTo === 'function') {
      window.navigateTo('final.html');
    } else {
      window.location.href = 'final.html';
    }
  },1000);

}
function noLove(){

document
.getElementById(
"letterSection"
)
.style.display=
"none";

let box=
document
.getElementById(
"heartBreakSection"
);

box.classList.remove(
"hidden"
);

box.style.display=
"block";

box.classList.add(
"fadeIn"
);

}
