// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
const s = [
    "Javascript" , "PHP", "HTML", "CSS", "NodeJS", "ReactJS", "ExpressJS", "NestJS", "Typescript"
]

const text = "a";
// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.

let minLength = s[0].length;
let minStr = "";

for(let i=0;i<s.length;i++){
    if(s[i].length<minLength){
        minLength = s[i];
    }
}

console.log(minLength);


// Tìm những chuỗi trong mảng có chứa giá trị text.

const arr1 = [];
let text1 = prompt("Nhap doan text: ");

for(let i=0;i<s.length;i++){
    if(s[i].includes(text1)){
        arr1.push(s[i]);
    }
}

if(arr1.length === 0){
    console.log("Khong co chuoi nao chua doan text");
}
else{
    console.log(arr1);
}



// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

const arr2 = s.map((arr) => arr.slice(0, 3))

console.log(arr2);

// const newArr = s.map((e) => e.slice(0, 3));
// console.log(newArr);
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.


const newStr = s.join(" - ");
console.log(newStr);

// const strS = s.join('-')
// console.log(strS)



