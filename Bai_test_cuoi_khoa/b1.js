let execute = document.getElementById("execute");

function primeCheck(n){
    let isPrime = 0;
    for (let i = 1; i<=n; i++){
        if(n%i === 0){
            isPrime+=1;
        }
    }
    if (isPrime===2){
        return true;
    }
    else{
        return false;
    }
}

execute.onclick = function(){
    // let checkCondition = false;
    // if(Number.isNaN(numberA) && Number.isNaN(numberB) && numberA >=0 && numberB>=0 && numberA<numberB){
    //     alert(`Hãy nhập giá trị là số nguyên cho cả 2 ô, với a < b!`);
    //     return;
    // }
    // else{
    //     alert("no");
    // }

    let numberA = Number(document.getElementById("numberA").value);
    let numberB = Number(document.getElementById("numberB").value);
   
    let prideNum = "";
    let primeSum = 0;
    for(let i = numberA; i<=numberB; i++){
        if (primeCheck(i)){
            primeSum+=i;
        }
    }
    document.getElementById("sum").innerHTML = `Tổng của dãy các số nguyên tố từ ${numberA} đến ${numberB} là: ${primeSum}`;
}

