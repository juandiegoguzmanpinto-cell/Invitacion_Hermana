// ==========================
// XV MARÍA ALEJANDRA 2026
// script.js
// ==========================

// ---------- SOBRE ----------

const cover = document.getElementById("cover");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    cover.style.opacity = "0";

    cover.style.pointerEvents = "none";

    setTimeout(() => {

        cover.style.display = "none";

    },1000);

});

// ---------- CUENTA REGRESIVA ----------

const fechaEvento = new Date("2026-08-29T18:00:00").getTime();

const countdown = document.getElementById("countdown");

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        countdown.innerHTML = "<h2>¡Hoy es el gran día! 🎉</h2>";

        return;

    }

    const dias = Math.floor(diferencia/(1000*60*60*24));

    const horas = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos = Math.floor((diferencia%(1000*60))/1000);

    countdown.innerHTML = `

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

// ---------- ANIMACIÓN AL HACER SCROLL ----------

const elementos = document.querySelectorAll("section, .hero");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";

            entrada.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

elementos.forEach(elemento=>{

    elemento.style.opacity="0";

    elemento.style.transform="translateY(60px)";

    elemento.style.transition=".8s";

    observador.observe(elemento);

});

// ---------- SCROLL SUAVE ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ---------- EFECTO BOTONES ----------

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

console.log("Invitación XV María Alejandra cargada correctamente.");
