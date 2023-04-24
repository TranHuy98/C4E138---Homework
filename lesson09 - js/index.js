const arr = [2, 5, 8, 1, -4, 5, 10, 9];

console.log("Tính tích của các phần tử trong mảng đó.");

let sq = 1;
for(let i=0;i<arr.length;i++){
    sq*=arr[i];
}
console.log(sq);

// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không
console.log("Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không");

let check=false;
const kop = 20;
for(let i=0;i<arr.length;i++){
    if(arr[i] < 10){
        check = true;
        break;
    }
}
if(check==true){
    console.log(`Mảng có số nhỏ hơn 10 ${kop}`);
}
else{
    console.log("Mảng ko có số nhỏ hơn 10");
}

//Tìm số nhỏ nhất mà chia hết cho 2 trong mảng
console.log("Tìm số nhỏ nhất mà chia hết cho 2 trong mảng");

let min = arr[0];
let checkmin = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 ==0 && arr[i]<=min){
        min = arr[i];
        checkmin = 1;
    }
}
if (checkmin==1){
    console.log("Số nhỏ nhất trong mảng chia hết cho 2", min);
}
else{
    console.log("Ko có số thoả mãn")
}

//Tìm số lớn nhất mà chia hết cho 3 trong mảng
let max = arr[0];
let checkmax = 0;
let hop = 3456;

for(let i=0;i<arr.length;i++){
    if(arr[i] % 3 ==0 && arr[i]>=max){
        max = arr[i];
        checkmax = 1;
    }
}
if (checkmax==1){
    console.log(`${hop} la so nguyen to`);
}
else{
    console.log("Ko có số thoả mãn")
}

//Tính giá trị trung bình của mảng
let tb = 0;
for(let i =0; i<arr.length; i++){
    tb+=arr[i]/arr.length;
}
console.log("Trung binh cua mang ", tb);

//Lọc ra các số nguyên tố trong mảng

// const pride = [];
// let check = 0;
// for(let i =0; i<arr.length; i++){
//     for(let j = 1)
// }


for (let i=0;i<arr.length;i++){
    if (arr[i]<=1){
        console.log(`${arr[i]} khong la so nguyen to`)
    }
    else {
        let checkSoNguyenTo=0;
        for (let j=1;j<=arr[i];j++){
            if (arr[i]%j===0){
                checkSoNguyenTo+=1;
            }
        }
        if (checkSoNguyenTo===2){
            console.log(`${arr[i]} la so nguyen to`)
        }
        else {
            console.log(`${arr[i]} khong la so nguyen to`)
        }
    }
}