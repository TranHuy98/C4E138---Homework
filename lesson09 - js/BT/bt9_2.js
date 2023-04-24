
 

// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// Hướng dẫn:
// TÌm hiểu phương thức split để tách chuỗi thành mảng
// =>Tách được 2 mảng d1,d2

const d1str = prompt("Nhap day so d1: ");
const d2str = prompt("Nhap day so d2: ");

let d1 = d1str.split(",");
let d2 = d2str.split(",");


// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// B1: Tạo biến check = true;
// B2: Duyệt mảng d1, kết hợp dùng includes
// let check = true;
// for(let number of d1){
//     if(d2.includes(number) === false){
//         //Nếu includes trả về false tức là không chưas
//         check = false;
//         break;
//     }
// }

// if(check===true){
//     console.log("Các phần tử trong mảng d1 đều nằm trong mảng d2")
// } else {
//     console.log("Có phần tử trong mảng d1 không nằm trong mảng d2")
// }

const check = true;
for(let i=1;i<d1.length;i++){
    if(d2.includes(d1[i]) === false){
        check = false;
        break;
    }
}
if(check===true){
    console.log(`Tat ca phan tu cua d1 deu nam trong d2`);
}
else{
    console.log(`Co phan tu cua d1 khong nam trong d2`);
}

// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// B1. Tạo biến check = false;
// B2: Tinhs tổng d1
// B3: Duyệt mảng d2, nếu phần tử hiện tại trong mảng d2 chia hết cho tổng d1 => check = true, break
// B4: Nếu check = true => trong d2 có phần tử chia hết cho tổng d1
//     Nếu check = false => trong d2 không có phần tử nào chia hết cho tổng d1

let checkDivide = false;
let sum = 0;
for(let i=0;i<d1.length;i++){
    sum+=d1[i];
}
for(let i=0;i<d2.length;i++){
    if(d2[i]%sum == 0){
        check = true;
        break;
    }
}
if(check===true){
    console.log(`Co phan tu cua d2 chia het cho tong cua d1`);
}
else{
    console.log(`Khong co phan tu cua d2 chia het cho tong cua d1`);
}

// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// B1: Tạo 1 mảng mới chứa các giá trị chia hết cho 2
// B2: Duyệt mảng d2, kiểm tra xem phần tử hiện tại có chia hết cho 2 không => Nếu có thì push vào mảng vừa tạo
// B3: Duyệt mảng d1, kiểm tra xem phần tử hiện tại có chia hết cho 2 không => Nếu có thì push vào mảng vừa tạos


const arr1 = [];
const arr2 = [];

for(let i=0;i<d1.length;i++){
    if(d1[i]%2 == 0){
        arr1.push(d1[i]);
    }
}
for(let i=0;i<d2.length;i++){
    if(d2[i]%2 == 0){
        arr2.push(d2[i]);
    }
}

console.log(arr1);
console.log(arr2);