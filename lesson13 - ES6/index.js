//Arrow function


//arrow function ko co hoisting, no context

const sum = (a,b) => {
    console.log(`Tong 2 so: `);
    return a + b;
}


const tong = sum(3,6);

console.log(tong);

//viet gon arrow function