let arr = [0,1];
    for (let i = 2; i <= 10; i++) {
        arr.push(arr[i -2] + arr[i-1]);
    }
console.log(arr);
