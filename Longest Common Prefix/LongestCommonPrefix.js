
function longestCommonPrefix(arr){
 console.log(arr);
 
let prefix = arr[0]
console.log(prefix);

 for(let i=1 ; i<arr.length ; i++)
 {
   while(arr[i].indexOf(prefix)!==0){
      prefix = prefix.substring(0,prefix.length-1)
      console.log(prefix);
   }

 }
console.log(prefix);

}


longestCommonPrefix(["flower","flow","flight"])

/**
 compare first index in all elements 
  if all equall 
    we start comparing with first index 
      then 
      we check if the next index is also equall 
      if yes
        we check till we get to some index that it is not equall
        output a new array with these elements 
        then compare all the outputed arrays and chose the longest to return
  if not 
    check for next element  
 */