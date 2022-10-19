const pivotIndex = (nums) => {
  let myArrays = [];
  let myArrays2 = [];
  for (let i = 0; i < nums.length; i++) {

    myArrays.push(nums.slice(i).reduce((partialSum, a) => partialSum + a, 0));
    myArrays2.push(nums.slice(0,i+1).reduce((partialSum, a) => partialSum + a, 0))
    for (let j = 0; j < myArrays.length; j++) {
      if(myArrays[j] == 0 && j-1==0 ){

    return j-1
      }
      if(myArrays[j]==myArrays2[j])
      {
        return j
      }
    
     }
  }

 return -1
};

pivotIndex([5,5,6,3,7]);

/**
 *           i 
   [1, 7, 3, 6, 5, 6]
 */
