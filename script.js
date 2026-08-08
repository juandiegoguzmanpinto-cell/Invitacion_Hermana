const cover = document.getElementById('cover');
const openBtn = document.getElementById('openBtn');
const countdown = document.getElementById('countdown');
const music = document.getElementById('musica');
const musicButton = document.getElementById('musicButton');
const flash = document.getElementById('flash');

const eventDate = new Date('2026-08-29T18:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  if (!countdown) return;

  if (diff <= 0) {
    countdown.innerHTML = '<div class="countdown-item"><h3>¡Hoy es el Gran día!</h3></div>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = [`Días`, `Horas`, `Minutos`, `Segundos`]
    .map((label, index) => {
      const value = [days, hours, minutes, seconds][index];
      return `<div class="countdown-item"><h3>${String(value).padStart(2, '0')}</h3><span>${label}</span></div>`;
    })
    .join('');
}

function openInvitation() {
  if (!cover) return;
if (flash) {
    flash.classList.add("animar");
    setTimeout(() => {
        flash.classList.remove("animar");
    }, 500);
}
  cover.style.opacity = '0';
  cover.style.pointerEvents = 'none';

  setTimeout(() => {

    cover.style.display = 'none';

    document
        .querySelector(".hero-content")
        ?.classList.add("show");

    lanzarConfeti();

}, 600);
     
  if (music) {
    music.volume = 0.35;
    music.play().then(() => {
      if (musicButton) {
        musicButton.classList.add("music-playing");

        const icon = document.getElementById("musicIcon");
        if (icon) {
          icon.innerHTML = "♫";
        }
      }
    }).catch(console.error);
  }
}
function toggleMusic(){

    if(!music)return;

    const icon=document.getElementById("musicIcon");

    if(music.paused){

        music.play();

        musicButton.classList.add("music-playing");

        if(icon){

            icon.innerHTML="♫";

        }

    }else{

        music.pause();

        musicButton.classList.remove("music-playing");

        if(icon){

            icon.innerHTML="♪";

        }

    }

}
openBtn?.addEventListener('click', openInvitation);
musicButton?.addEventListener('click', toggleMusic);
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.18,
});

document.querySelectorAll('.section, .hero').forEach((section) => {
  section.classList.add('hidden');
  observer.observe(section);
});
const petals = document.getElementById("petals");

for(let i=0;i<30;i++){
    const petal=document.createElement("span");
    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";
    petal.style.animationDelay=Math.random()*12+"s";
    petal.style.animationDuration=(8+Math.random()*8)+"s";
    petal.style.fontSize=(14+Math.random()*18)+"px";

    petal.innerHTML="🌸";

    petals.appendChild(petal);
}
const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.addEventListener("click", () => {

        const texto =
`Estás cordialmente invitado a celebrar mis XV Años.

Con mucho cariño quiero compartir este momento tan especial contigo.

María Alejandra Guzmán Pinto

${window.location.href}`;

        if (navigator.share) {

            navigator.share({
                title: "Mis XV Años",
                text: texto
            });

        } else {

            window.open(
                "https://wa.me/?text=" + encodeURIComponent(texto),
                "_blank"
            );

        }

    });

}
function lanzarConfeti() {

    const figuras = ["🌸", "✨", "✨", "🌸", "✨"];

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const confeti = document.createElement("div");

            confeti.className = "confeti";

            confeti.innerHTML = figuras[Math.floor(Math.random() * figuras.length)];

            confeti.style.left = (Math.random() * 100) + "vw";
            confeti.style.top = (-100 - Math.random() * 150) + "px";

            confeti.style.fontSize = (14 + Math.random() * 16) + "px";

            confeti.style.animationDuration = (4 + Math.random() * 3) + "s";

            document.body.appendChild(confeti);

            setTimeout(() => {
                confeti.remove();
            }, 7000);

        }, i * 120);

    }
}