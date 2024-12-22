let shante = document.getElementById("shante");
let animacion = setInterval(cambiar_imagen, 50);
let num_imagen = 0;
let x = 0;
let y = 0;

const imagenesCohete = [
    "img/HannyahNED/Cohete_1.png",
    "img/HannyahNED/Cohete_2.png",
    "img/HannyahNED/Cohete_3.png",
    "img/HannyahNED/Cohete_4.png",
];

let cohete;
let coheteInterval;

function cambiar_imagen() {
    num_imagen = num_imagen + 1;
    let direc;
    if (num_imagen > 15) {
        num_imagen = 1;
    }
    direc = "img/shante/Shante_" + num_imagen + ".png";
    shante.setAttribute("src", direc);
}

document.addEventListener("keydown", mover);

function mover(event) {
    console.log(event.keyCode);

    let width = window.innerWidth;
    let height = window.innerHeight;

    let shanteWidth = shante.offsetWidth;
    let shanteHeight = shante.offsetHeight;

    if (event.keyCode == 68) {
        console.log("Me moveré 5 píxeles a la derecha");
         if (x + shanteWidth < width) {
            x = x + 5;
        }
    }
    if (event.keyCode == 65) {
        console.log("Me moveré 5 píxeles a la izquierda");
        if (x > 0) {
            x = x - 5;
        }
    }
    if (event.keyCode == 83) {
        console.log("Me moveré 5 píxeles hacia abajo");
        if (y + shanteHeight < height) {
            y = y + 5;
        }
    }
    if (event.keyCode == 87) {
        console.log("Me moveré 5 píxeles hacia arriba");
        if (y > 0) {
            y = y - 5;
        }
    }

    shante.style.left = x + "px";
    shante.style.top = y + "px";
}