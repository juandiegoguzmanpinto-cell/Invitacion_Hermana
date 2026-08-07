const fecha = new Date("August 29, 2026 18:00:00").getTime();

setInterval(function(){

const ahora = new Date().getTime();

const diferencia = fecha - ahora;

const dias = Math.floor(diferencia/(1000*60*60*24));

document.getElementById("contador").innerHTML =
dias + " días";

},1000);
