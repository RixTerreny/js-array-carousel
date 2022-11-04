const imgScr =[
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const img = document.querySelector("img");
img.src=imgScr[0];

const up = document.getElementById("up");
const down = document.getElementById("down");
let counter = 0;

up.addEventListener("click", function () {
    if (counter==imgScr.length-1){
        counter=-1;
    }
    counter++
    img.src=imgScr[counter];
})

down.addEventListener("click", function () {
    if (counter==0){
        counter=imgScr.length;
    }
    counter--
    img.src=imgScr[counter];
})