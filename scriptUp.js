let num = 266219;
let arr = [];
num = num.toString();

for (let i of num) {
    arr.push(Number(i));
}

let result = arr.reduce((result, currentValue) => result * currentValue);

result = result ** 3;

console.log(result);
console.log(result.toString()[0], result.toString()[1]);