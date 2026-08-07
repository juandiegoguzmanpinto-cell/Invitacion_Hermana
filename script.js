/*==================================================
        INVITACIÓN XV
==================================================*/

//====================================
// ELEMENTOS
//====================================

const cover = document.getElementById("cover");
const flap = document.querySelector(".flap");
const openBtn = document.getElementById("openBtn");
const musica = document.getElementById("musica");
const countdown = document.getElementById("countdown");
const scrollTop = document.getElementById("scrollTop");
const musicButton = document.getElementById("musicButton");

//====================================
// ABRIR INVITACIÓN
//====================================

openBtn.addEventListener("click", abrirInvitacion);

function abrirInvitacion(){

    flap.style.transform="rotateX(180deg)";

    setTimeout(()=>{

        cover.style.opacity="0";

        setTimeout(()=>{

            cover.style.display="none";

        },900);

    },700);

    if(musica){

        musica.volume=.35;

        musica.play().catch(()=>{});

    }

}

//====================================
// CUENTA REGRESIVA
//====================================

const fechaEvento=new Date("2026-08-29T18:00:00").getTime();

function actualizarContador(){

const ahora=new Date().getTime();

const diferencia=fechaEvento-ahora;

if(diferencia<=0){

countdown.innerHTML="<h2>¡Hoy es el gran día!</h2>";

return;

}

const dias=Math.floor(diferencia/86400000);

const horas=Math.floor((diferencia%86400000)/3600000);

const minutos=Math.floor((diferencia%3600000)/60000);

const segundos=Math.floor((diferencia%60000)/1000);

countdown.innerHTML=`

<div class="item">

<h2>${dias}</h2>

<span>Días</span>

</div>

<div class="item">

<h2>${horas}</h2>

<span>Horas</span>

</div>

<div class="item">

<h2>${minutos}</h2>

<span>Minutos</span>

</div>

<div class="item">

<h2>${segundos}</h2>

<span>Segundos</span>

</div>

`;

}

actualizarContador();
/*==================================================
        SCROLL ANIMATIONS
==================================================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.20
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

/*==================================================
        BOTÓN DE MÚSICA
==================================================*/

let reproduciendo=false;

musicButton.addEventListener("click",()=>{

if(!musica)return;

if(reproduciendo){

musica.pause();

musicButton.innerHTML="♪";

}else{

musica.play();

musicButton.innerHTML="❚❚";

}

reproduciendo=!reproduciendo;

});

/*==================================================
        BOTÓN SUBIR
==================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTop.classList.add("show");

}else{

scrollTop.classList.remove("show");

}

});

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==================================================
        PÉTALOS
==================================================*/

function crearPetalo(){

const petalo=document.createElement("div");

petalo.className="petalo";

petalo.innerHTML="❀
setInterval(actualizarContador,1000);
