const c=document.getElementById("cover");
document.getElementById("openBtn").onclick=()=>{c.style.display="none";};
const target=new Date("2026-08-29T18:00:00").getTime();
function tick(){
const now=Date.now(),d=target-now;
if(d<0){document.getElementById("countdown").innerHTML="<h3>¡Llegó el gran día!</h3>";return;}
const days=Math.floor(d/86400000);
const hrs=Math.floor(d%86400000/3600000);
const min=Math.floor(d%3600000/60000);
const sec=Math.floor(d%60000/1000);
document.getElementById("countdown").innerHTML=
`<div><h2>${days}</h2><small>Días</small></div>
<div><h2>${hrs}</h2><small>Horas</small></div>
<div><h2>${min}</h2><small>Min</small></div>
<div><h2>${sec}</h2><small>Seg</small></div>`;
}
tick();setInterval(tick,1000);
