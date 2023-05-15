const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 }
];

///Cach 1
let avgScore = (scores) => {
    let sum = 0;
    for (let sc of scores){
        sum += sc.score * sc.weight;
    }
    return sum;
}

console.log(avgScore);

///Cach 2 ham reduce

const gpa2 = (scores) => {
    return scores.reduce((gpa, subject) =>{
        
    })
}