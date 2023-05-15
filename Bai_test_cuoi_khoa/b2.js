let execute = document.getElementById("execute");

execute.onclick = function () {
    let number = document.getElementById("number").value;
    console.log(number);
    let kq = "";
    let line = "";

    if (number % 1 == 0 && number > 1 && number < 11) {
        for (let i = 1; i <= number; i++) {
            for (let j = 1; j <= i; j++) {
                line += "*";
            }
            kq += `${line}</br>`;
            line = ``;
        }
    }
    else if (number == 1) {
        kq = `*`;
    }
    else {
        alert('Dữ liệu nhập chưa đúng, hãy nhập số nguyên trong khoảng từ 1 đến 10');
        document.getElementById("number").value = ``;
    }

    document.getElementById("kq").innerHTML = kq;
}