const crypt = document.querySelector(".crypt");

function flicker() {
    crypt.style.opacity = Math.random() > 0.5 ? 0.8 : 0.4;
}

setInterval(flicker, 600);
