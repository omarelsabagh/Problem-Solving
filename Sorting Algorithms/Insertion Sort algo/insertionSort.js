function insertionSort(arr) {
  let numberToInsert;
  for (let i = 1; i < arr.length; i++) {
    numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1] = numberToInsert
  }

  return arr;
}

const result = insertionSort([-6, 20, 8, -2, 4]);
console.log(result);
