let execute = document.getElementById("execute");

function primeCheck(n) {
    let isPrime = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            isPrime += 1;
        }
    }
    if (isPrime === 2) {
        return true;
    }
    else {
        return false;
    }
}

execute.onclick = function () {

    let numberA = Number(document.getElementById("numberA").value);
    let numberB = Number(document.getElementById("numberB").value);

    let prideNum = "";
    let primeSum = 0;

    if (numberA % 1 == 0 && numberB % 1 == 0 && numberA < numberB) {
        for (let i = numberA; i <= numberB; i++) {
            if (primeCheck(i)) {
                primeSum += i;
            }
        }
        document.getElementById("sum").innerHTML = `Tổng của dãy các số nguyên tố từ ${numberA} đến ${numberB} là: ${primeSum}`;
    }
    else {
        alert(`Dữ liệu nhập vào chưa đúng. Hãy nhập 2 số nguyên a và b với a<b`);
        document.getElementById("numberA").value = ``;
        document.getElementById("numberB").value = ``;
        document.getElementById("sum").innerHTML = ``;
    }
}

