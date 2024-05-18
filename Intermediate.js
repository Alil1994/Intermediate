//1. Addition

let sum = 0;
for (let i = 200; i <= 2700; i++) {
   
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
        
        sum += i;
    }
}
console.log("The sum is:", sum);

//2. Shift the Values:


const X = [2, 1, 6, 4, -7];

X.reverse();

const lastElement = X.pop();
X.unshift(lastElement);

console.log(X);

//3. FizzBuzz


const result = [];


for (let i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
    } 
    
    else if (i % 3 === 0) {
        result.push("Fizz");
    } 
    
    else if (i % 5 === 0) {
        result.push("Buzz");
    } 
    
    else {
        result.push(i);
    }
}

console.log(result);

//4. Fibonacci


let prev = 0;
let curr = 1;

let sum = 0;
while (curr < 1000000) {
    if (curr % 2 === 0) {
      
        sum += curr;
    }
    
    let next = prev + curr;
    
    prev = curr;
    curr = next;
}

console.log("The sum of Fibonacci numbers below 1,000,000 is:", sum);
const X = [1, -2, 4, 1]; 
const filteredArray = [];

for (let i = 0; i < X.length; i++) {
    if (X[i] >= 0) {
        filteredArray.push(X[i]);
    }
}
console.log(filteredArray);

//6. Communist Censorship


const X = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program']; 
const wordToReplace = 'Program';


const result = [];

for (let i = 0; i < X.length; i++) {
    if (X[i] === wordToReplace) {
        result.push('*'.repeat(wordToReplace.length));
    } else {
        
        result.push(X[i]);
    }
}
console.log(result);




