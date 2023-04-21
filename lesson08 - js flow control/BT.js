// // bt1
// console.log("BT1");
// for(let i =1; i<=500; i++){
//     console.log(i);
// }

// // bt3
// console.log("BT3");
// let sum = 0;
// for(let i=-30; i<=50; i++){
//     if(i%2 == 0){
//         sum +=i;
//     }
// }
// console.log(sum);



// bt14
console.log("Bt14");
// let n = Number(prompt("Nhập giá trị n:"));
// let sq = "";
// do{
//     if(n<2){
//         alert("n ko hop le");
//         n = Number(prompt("Nhập giá trị n:"));
//     }

//     for(let i=1; i<=n; i++){
//         for(let i=1; i<=n; i++){
//             sq+= "*";
//         }
//         console.log(sq + "\n");
//         sq = "";
//     }
// }
// while(n<1);


let n = Number(prompt("Nhap n: "));
let sq = "";
for(;true;){
    if (n>=2){
        break;
    }
    alert("n ko hop le");
    n = Number(prompt("Nhap n: "));
}
for(let i=1; i<=n; i++){
    for(let i=1; i<=n; i++){
        sq+= "*";
    }
    console.log(sq + "\n");
    sq = "";
}

    
    



