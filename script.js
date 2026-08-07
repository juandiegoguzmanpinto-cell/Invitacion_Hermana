/*=========================================
      XV MARÍA ALEJANDRA
=========================================*/

//=============================
// ELEMENTOS
//=============================

const cover = document.getElementById("cover");
const openBtn = document.getElementById("openBtn");
const musica = document.getElementById("musica");

//=============================
// ABRIR INVITACIÓN
//=============================

openBtn.addEventListener("click", abrirInvitacion);

function abrirInvitacion(){

    cover.style.opacity="0";

    cover.style.transform="scale(1.15)";

    setTimeout(()=>{

        cover.style.display="none";

    },900);

    if(musica){

        musica.volume=.35;

        musica.play().catch(()=>{});

    }

}

//=============================
// CUENTA REGRESIVA
//=============================

const fecha=new Date("2026-08-29T18:00:00").getTime();

const countdown=document.getElementById("countdown");

function actualizarContador(){

const ahora=new Date().getTime();

const distancia=fecha-ahora;

if(distancia<=0){

countdown.innerHTML="<h2>¡Llegó el gran día!</h2>";

return;

}

const dias=Math.floor(distancia/86400000);

const horas=Math.floor((distancia%86400000)/3600000);

const minutos=Math.floor((distancia%3600000)/60000);

const segundos=Math.floor((distancia%60000)/1000);

countdown.innerHTML=`

<div>

<h2>${dias}</h2>

<small>Días</small>

</div>

<div>

<h2>${horas}</h2>

<small>Horas</small>

</div>

<div>

<h2>${minutos}</h2>

<small>Minutos</small>

</div>

<div>

<h2>${segundos}</h2>

<small>Segundos</small>

</div>

`;

}

actualizarContador();

setInterval(actualizarContador,1000);
//=========================================
// ANIMACIÓN AL HACER SCROLL
//=========================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.20
});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

//=========================================
// BOTÓN FLOTANTE DE MÚSICA
//=========================================

const boton=document.createElement("button");

boton.id="musicButton";

boton.innerHTML="🎵";

document.body.appendChild(boton);

let reproduciendo=true;

boton.addEventListener("click",()=>{

if(!musica)return;

if(reproduciendo){

musica.pause();

boton.innerHTML="🔇";

}else{

musica.play();

boton.innerHTML="🎵";

}

reproduciendo=!reproduciendo;

});

//=========================================
// DESTELLOS DORADOS
//=========================================

function crearDestello(){

const estrella=document.createElement("div");

estrella.className="estrella";

estrella.style.left=Math.random()*100+"vw";

estrella.style.animationDuration=(6+Math.random()*5)+"s";

estrella.style.opacity=Math.random();

document.body.appendChild(estrella);

setTimeout(()=>{

estrella.remove();

},11000);

}

setInterval(crearDestello,900);

//=========================================
// PÉTALOS
//=========================================

function crearPetalo(){

const petalo=document.createElement("div");

petalo.className="petalo";

petalo.innerHTML="🌸";

petalo.style.left=Math.random()*100+"vw";

petalo.style.fontSize=(18+Math.random()*12)+"px";

petalo.style.animationDuration=(10+Math.random()*8)+"s";

document.body.appendChild(petalo);

setTimeout(()=>{

petalo.remove();

},18000);

}

setInterval(crearPetalo,1200);

//=========================================
// ESTILOS DINÁMICOS
//=========================================

const estilos=document.createElement("style");

estilos.innerHTML=`

#musicButton{

position:fixed;

right:20px;

bottom:20px;

width:60px;

height:60px;

border:none;

border-radius:50%;

font-size:24px;

cursor:pointer;

background:#cfa74c;

color:white;

box-shadow:0 10px 30px rgba(0,0,0,.2);

z-index:999;

transition:.3s;

}

#musicButton:hover{

transform:scale(1.1);

}

.estrella{

position:fixed;

top:-30px;

width:6px;

height:6px;

background:#ffd86a;

border-radius:50%;

box-shadow:0 0 15px #ffd86a;

pointer-events:none;

animation:caerEstrella linear forwards;

z-index:1;

}

.petalo{

position:fixed;

top:-40px;

pointer-events:none;

animation:caerPetalo linear forwards;

z-index:2;

}

@keyframes caerPetalo{

0%{

transform:translateY(-50px) rotate(0deg);

}

100%{

transform:translateY(120vh) rotate(360deg);

}

}

@keyframes caerEstrella{

0%{

transform:translateY(-50px);

}

100%{

transform:translateY(120vh);

}

}

`;

document.head.appendChild(estilos);

console.log("Invitación cargada correctamente.");
