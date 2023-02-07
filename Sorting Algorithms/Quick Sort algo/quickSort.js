function quickSort(arr) {
  //recursion base
  if (arr.length < 2) {
    return arr;
  }
  //
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
  }

  //recursion
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const result = quickSort([-6, 20, 8, -2, 4]);

console.log(result);

/*
- split the array into greater and lower arrays
- split the arrays into smaller arrays
- repeat untill the length of the array is 0 or 1 
- concat the arrays on left 
*/
