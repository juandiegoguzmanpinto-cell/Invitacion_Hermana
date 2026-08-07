// ==========================
// SOBRE ANIMADO
// ==========================

const cover = document.getElementById("cover");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    cover.style.opacity = "0";

    setTimeout(() => {
        cover.style.display = "none";
    }, 1000);

});

// ==========================
// CUENTA REGRESIVA
// ==========================

const fechaEvento = new Date("2026-08-29T18:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        document.getElementById("countdown").innerHTML =
        "¡Hoy es el gran día!";

        return;

    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div style="display:flex;justify-content:center;gap:20px;flex-wrap:wrap;">
            <div><strong>${dias}</strong><br>Días</div>
            <div><strong>${horas}</strong><br>Horas</div>
            <div><strong>${minutos}</strong><br>Minutos</div>
            <div><strong>${segundos}</strong><br>Segundos</div>
        </div>
    `;

}

actualizarContador();

setInterval(actualizarContador, 1000);
