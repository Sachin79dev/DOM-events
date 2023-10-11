const hover = document.querySelector("#hover");

function event() {
    const effect = document.querySelector('#effect').classList;
    effect.toggle("hover");
}

hover.onmouseover = event;