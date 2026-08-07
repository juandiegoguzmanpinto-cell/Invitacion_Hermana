/*==================================================
            INVITACIÓN XV
==================================================*/

//============================
// ELEMENTOS
//============================

const cover = document.getElementById("cover");
const envelopeTop = document.querySelector(".envelope-top");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("musica");
const countdown = document.getElementById("countdown");

//============================
// ABRIR INVITACIÓN
//============================

openBtn.addEventListener("click", abrirInvitacion);

function abrirInvitacion(){

    envelopeTop.style.transform="rotateX(180deg)";

    setTimeout(()=>{

        cover.style.opacity="0";

        setTimeout(()=>{

            cover.style.display="none";

        },900);

    },700);

    if(music){

        music.volume=0.35;

        music.play().catch(()=>{});

    }

}

//============================
// CUENTA REGRESIVA
//============================

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

setInterval(actualizarContador,1000);
/*==================================================
            ANIMACIONES AL HACER SCROLL
==================================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.20
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/*==================================================
            BOTÓN DE MÚSICA
==================================================*/

const musicButton=document.getElementById("musicButton");

let reproduciendo=true;

musicButton.addEventListener("click",()=>{

    if(!music)return;

    if(reproduciendo){

        music.pause();

        musicButton.innerHTML="♫";

    }else{

        music.play();

        musicButton.innerHTML="❚❚";

    }

    reproduciendo=!reproduciendo;

});

/*==================================================
            BOTÓN SUBIR
==================================================*/

const scrollTop=document.getElementById("scrollTop");

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

    petalo.innerHTML="❀";

    petalo.style.left=Math.random()*100+"vw";

    petalo.style.fontSize=(18+Math.random()*10)+"px";

    petalo.style.animationDuration=(10+Math.random()*8)+"s";

    document.body.appendChild(petalo);

    setTimeout(()=>{

        petalo.remove();

    },18000);

}

setInterval(crearPetalo,1500);

/*==================================================
            DESTELLOS
==================================================*/

function crearEstrella(){

    const estrella=document.createElement("div");

    estrella.className="estrella";

    estrella.style.left=Math.random()*100+"vw";

    estrella.style.top="-10px";

    estrella.style.animationDuration=(6+Math.random()*5)+"s";

    document.body.appendChild(estrella);

    setTimeout(()=>{

        estrella.remove();

    },11000);

}

setInterval(crearEstrella,900);

/*==================================================
            PRECARGAR PORTADA
==================================================*/

const portada=new Image();

portada.src="assets/img/portada.jpg";

/*==================================================
            MENSAJE
==================================================*/

console.log("✨ Invitación cargada correctamente.");