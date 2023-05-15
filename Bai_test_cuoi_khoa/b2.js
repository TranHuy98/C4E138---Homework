let execute = document.getElementById("execute");

execute.onclick = function(){
    let number = document.getElementById("number").value;
    console.log(number);
    let kq = "";
    let line = "";
    let check = Number.isNaN(number);
    // if(!check){
    //     alert("Hãy nhập vào 1 số nguyên từ 1 đến 10");
    //     return;
    // }
    // if(!(Number.isInteger(number))){
    //     alert("Hãy nhập vào 1 số nguyên từ 1 đến 10");
    //     return;
    // }
    if(number<1 || number>10){
        alert("Hãy nhập vào 1 số nguyên từ 1 đến 10");
        number = "";
        return;
    }
    if(number==1){
        kq = `*`;
    }
    else{
        for(let i=1; i<=number;i++){
            for(let j=1; j<=i; j++){
                line += "*";
            }
            kq+=`${line}</br>`;
            line = ``;
        }
    }
    
    document.getElementById("kq").innerHTML = kq;
}