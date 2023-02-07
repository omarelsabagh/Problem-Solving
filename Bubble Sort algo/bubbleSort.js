function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let swaper;
        swaper = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swaper;
        swapped = true
      }
    }
  } while (swapped);

  return arr;
}

const result = bubbleSort([-1, 4, -8, 2, 7, 3]);
console.log(result);

// let a = 4;
// let b = 3;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(c);

// console.log(b);
// console.log(a);
