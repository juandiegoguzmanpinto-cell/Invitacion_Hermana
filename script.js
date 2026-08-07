document.addEventListener("DOMContentLoaded", function () {

    const cover = document.getElementById("cover");
    const openBtn = document.getElementById("openBtn");

    if(openBtn){

        openBtn.addEventListener("click", function(){

            cover.style.transition = "0.8s";
            cover.style.opacity = "0";

            setTimeout(function(){

                cover.style.display = "none";

            },800);

        });

    }

});
