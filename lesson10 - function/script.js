const student = [
    {
        name: "A",
        gender: "male",
        english: 5,
        math: 6,
        chemistry: 8.5,
    },
    {
        name: "B",
        gender: "male",
        english: 7.5,
        math: 6.5,
        chemistry: 3.5,
    },
    {
        name: "C",
        gender: "female",
        english: 9,
        math: 5,
        chemistry: 6,
    }
    
];

function Greet(){
    console.log("Hello MindX");
}

Greet();

function GreetName(name){
    console.log(`Hello ${name}, welcome to MindX`);
}
GreetName("Huy");
GreetName(student[1].name);

function averageScore(english, math, chemistry){
    const result  = (english + math + chemistry)/3;
    return result;
}

const avg = averageScore(student[0].english, student[0].math, student[0].chemistry);
console.log(avg);
