const url = document.getElementById("url");
const width = document.getElementById("width");
const height = document.getElementById("height");
const border = document.getElementById("border");
const alt = document.getElementById("alt");

const image = document.getElementById("image");

url.onchange = function () {
    image.src = `${url.value}`; 
}

width.onchange = function(){
    image.style.width = `${width.value}px`;
}

height.onchange = function(){
    image.style.height = `${height.value}px`;
}

border.onchange = function(){
    image.style.borderRadius = `${border.value}px`;
}

alt.onchange = function(){
    image.alt = `${alt.value}`;
}