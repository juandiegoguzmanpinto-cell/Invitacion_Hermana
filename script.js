const fechaEvento = new Date("August 29, 2026 18:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML =
    dias + " días";

},1000);
