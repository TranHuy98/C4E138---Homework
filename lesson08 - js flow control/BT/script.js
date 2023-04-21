// bt1
console.log("1. In ra dãy số từ 1 đến 500.");
for(let i=1; i<=500; i++){
    console.log(i);
}

//bt2
console.log("2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.");
for(let i=1;i<=300;i++){
    if(i%6==0){
        console.log(i);
    }
}
//bt3
console.log("3. Tính tổng các số chẵn trong đoạn [-30, 50].")
let sum = 0;
for(let i=-30;i<=50;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(sum);
//bt4
console.log("4. Nhập vào số n. Tính giai thừa của số n.")
let n = Number(prompt("BT4: Nhập n"));

while(n<0){
    n = Number(prompt("BT4: Nhập n"));
}

let sq = 1;
if(n==0 || n==1){
    console.log(sq);
}
else{
    for(let i=1;i<=n;i++){
        sq*=i;
    }
    console.log(sq);
}

//bt5
console.log("5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x. ");
