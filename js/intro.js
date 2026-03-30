const terminalText = document.getElementById("terminal-text");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

const lines = [
    "> boot sys --safe",
    "> load user nexteris85",
    "> decrypt id x2.lpfv_jrjjxnprbn",
    "> init hud...",
    "> launch"
];

let i = 0;
let char = 0;

function typeLine() {
    if (i >= lines.length) return finishIntro();

    let current = lines[i];

    if (char === 0) terminalText.innerHTML += "\n";

    terminalText.innerHTML =
        terminalText.innerHTML.slice(0, -1) + current.slice(0, char) + "_";

    char++;

    if (char > current.length) {
        terminalText.innerHTML =
            terminalText.innerHTML.slice(0, -1) + current + "\n";
        i++;
        char = 0;
        setTimeout(typeLine, 500);
    } else {
        setTimeout(typeLine, 30 + Math.random() * 40);
    }
}

function finishIntro() {
    intro.classList.add("fade-out");

    setTimeout(() => {
        main.classList.remove("hidden");
        main.style.opacity = 1;
    }, 800);
}

typeLine();

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("active");
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
