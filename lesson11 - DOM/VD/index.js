
let animal = document.getElementById("animal");
function name1(){
    animal.innerHTML = "Cat";
}
function name2(){
    animal.innerHTML = "Dog";
}
setInterval(function(){
    name1();
    
},2000)