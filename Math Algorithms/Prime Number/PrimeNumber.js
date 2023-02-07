function isPrime(n) {
  if (n < 2) {
    console.log(false);
    return false;
  }
  //square root because one of the two numbers the can make n are less than the sqrt(n)
  //so the 0 will appear early and no need to itearate full the full n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    console.log(Math.sqrt(n));
    console.log(n % i);
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let result = isPrime(9);
console.log(result);
