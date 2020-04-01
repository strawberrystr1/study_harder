let arr = ['23234','5235','412','123144','24141','123','4444'];
for(let i=0; i<arr.length; i++) {
    if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
        console.log(arr[i]);
    }
}

let n =100;
prime:
for (let i=0; i < n; i++) {
    for(let j=2; j < i; j++) {
        if (i%j==0) continue prime;
    }
    console.log(`Делители этого числа ${i}: 1 и ${i}`);
}