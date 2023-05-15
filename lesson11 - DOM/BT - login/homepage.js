const obj = {
    name: "A",
}

localStorage.setItem("MindX",JSON.stringify(obj));

const data = JSON.parse(localStorage.getItem("MindX"));
console.log(data);