// const fibInit = [0,1]
// function getFibonacci(n) {
//     let outArr;
//     let sum;
//     if(n<2){
//         console.log("not available");
//     }
//     else if(n==2){
//     outArr = fibInit
//     console.log(outArr);
//     }
//     else{
//         for(let i=0;i<fibInit.length-1;i++)
//         {

//                 sum = fibInit[i] + fibInit[i+1]

//         }
//         console.log(sum);
//         fibInit.push(sum)
//         console.log(fibInit);
//     }
//     console.log(n);
//   }

//   getFibonacci(3)

function getFab(n) {
  let initArr = [0, 1];
//   let sum;

//   for (let j = 0; j < n - 2; j++) {  //O(n)
//     console.log(initArr);
//     // for (let i = 0; i < initArr.length - 1; i++) {
//     //   sum = initArr[i] + initArr[i + 1];
//     //   console.log(sum);
//     // }
//     sum = initArr[initArr.length-2] + initArr[initArr.length-1] //O(1)
//     initArr.push(sum);
//   }

//   console.log(sum);

//   console.log(initArr);
for (let i = 2; i < n; i++) {

    initArr[i] = initArr[i-1] + initArr[i-2]
}
console.log(initArr);
}

getFab(6);

/**
 1-iterate on the initial array
 2- get sum of it 
 3- push the sum on the array
 4-
 */
