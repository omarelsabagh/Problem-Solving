function isPowerOf2(n) {
  // let numberOfIteratons = Math.log(n) /Math.log(2)
  // let result = n/2
  // console.log(numberOfIteratons);
  // if(n===1||n===2){
  //     return true
  // }
  // for(let i=0;i<numberOfIteratons-1;i++){

  //  result = result/2
  // }
  // if(result===1)
  // {
  //     return true
  // }
  // else
  // {
  //     return false
  // }

  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
  //O(log n)

  /*
  using bitwise operatoer to get constant time
because in the binary system all the power of two are the max 
2 -> 10   max 2 digits
4 -> 100  max 3 digits
8 -> 1000 max 4 digits
so the number that comes before that number must be its معكوس so the and of them become 0
so any and of a power of 2 with it's previous number =0 else it's not power of two.

  if(n<1){
    return false;
}
return (n & (n-1)) === 0

O(1)
*/

  // 64/2 = 32
  // 32/2 = 16
  // 16/2 = 8
  // 8/2 = 4
  // 4/2 = 2
  // 2/2 = 1
}

let result = isPowerOf2(4);
console.log(result);

/*
2^x = n (true)
2ln x = n 
x = n/2ln
*/
