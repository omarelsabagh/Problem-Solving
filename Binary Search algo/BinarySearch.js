function binarySearch(t, arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (t === arr[middleIndex]) {
      return middleIndex;
    }
    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

const result = binarySearch(3, [4, 5, 6, 7, 9]);

console.log(result);
