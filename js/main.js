const images =[
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

let counter = 1;

const imgContainer = document.querySelector(".img-container");
const up = document.getElementById("up");
const down = document.getElementById("down");

let imgGenerator

for (let i = 0; i < images.length; i++) {
    imgGenerator = document.createElement("img");
    imgGenerator.src= images[i]
    imgGenerator.classList.add("position-absolute","show")

    imgContainer.append(imgGenerator); 
    if(i==0){
        imgGenerator.classList.add("visible");
    }
}

down.addEventListener("click", function () {
    let imgOldSelector = document.querySelector(`.show:nth-child(${counter})`);
    imgOldSelector.classList.remove("visible");
    if (counter==images.length){
        counter=0;
    }
    console.log(counter+1);
    counter++;
    let imgVisibleSelector = document.querySelector(`.show:nth-child(${counter})`);
    imgVisibleSelector.classList.add("visible");
})

up.addEventListener("click", function () {
    let imgOldSelector = document.querySelector(`.show:nth-child(${counter})`);
    imgOldSelector.classList.remove("visible");
    if (counter==1){
        counter=images.length+1;
    }
    console.log(counter-1);
    counter--;
    let imgVisibleSelector = document.querySelector(`.show:nth-child(${counter})`);
    imgVisibleSelector.classList.add("visible");
})