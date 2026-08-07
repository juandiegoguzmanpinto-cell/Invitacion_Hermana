//==============================
// ABRIR SOBRE
//==============================

const cover = document.getElementById("cover");
const openBtn = document.getElementById("openBtn");
const musica = document.getElementById("musica");

openBtn.addEventListener("click", () => {

    cover.style.opacity = "0";
    cover.style.transform = "scale(1.1)";

    setTimeout(() => {

        cover.style.display = "none";

    },900);

    if(musica){

        musica.volume = 0.35;

        musica.play().catch(()=>{});

    }

});

//==============================
// CUENTA REGRESIVA
//==============================

const fechaEvento = new Date("2026-08-29T18:00:00").getTime();

function actualizar(){

const ahora = new Date().getTime();

const distancia = fechaEvento-ahora;

if(distancia<0){

document.getElementById("countdown").innerHTML="<h2>¡Llegó el gran día!</h2>";

return;

}

const dias=Math.floor(distancia/86400000);

const horas=Math.floor((distancia%86400000)/3600000);

const minutos=Math.floor((distancia%3600000)/60000);

const segundos=Math.floor((distancia%60000)/1000);

document.getElementById("countdown").innerHTML=`

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

actualizar();

setInterval(actualizar,1000);

//==============================
// ANIMACIÓN AL HACER SCROLL
//==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});
