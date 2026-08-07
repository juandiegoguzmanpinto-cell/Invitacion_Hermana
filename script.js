/*=========================================
  XV MARÍA ALEJANDRA - SCRIPT
=========================================*/

// ----------------------------
// SOBRE
// ----------------------------

const cover = document.getElementById("cover");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    cover.style.opacity = "0";

    cover.style.pointerEvents = "none";

    setTimeout(() => {

        cover.style.display = "none";

    },1000);

    // Música (si existe el archivo)
    const musica = document.getElementById("musica");

    if(musica){

        musica.play().catch(()=>{});

    }

});

// ----------------------------
// CONTADOR
// ----------------------------

const fechaEvento = new Date("2026-08-29T18:00:00").getTime();

const contador = document.getElementById("countdown");

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        contador.innerHTML="<h2>¡Hoy es el gran día! 🎉</h2>";

        return;

    }

    const dias=Math.floor(diferencia/(1000*60*60*24));

    const horas=Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos=Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos=Math.floor((diferencia%(1000*60))/1000);

    contador.innerHTML=`

        <div>

            ${dias}

            <small>Días</small>

        </div>

        <div>

            ${horas}

            <small>Horas</small>

        </div>

        <div>

            ${minutos}

            <small>Minutos</small>

        </div>

        <div>

            ${segundos}

            <small>Segundos</small>

        </div>

    `;

}

actualizarContador();

setInterval(actualizarContador,1000);

// ----------------------------
// ANIMACIÓN AL HACER SCROLL
// ----------------------------

const elementos=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{
