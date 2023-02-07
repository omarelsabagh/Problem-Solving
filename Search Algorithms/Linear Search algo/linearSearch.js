
function linearSearch(t,arr){

for(let i =0 ; i<arr.length;i++){
    if(arr[i]===t)
    {
        return i
    }
    
}
return -1
}


const result = linearSearch(9,[4,5,6,7,9])
console.log(result);