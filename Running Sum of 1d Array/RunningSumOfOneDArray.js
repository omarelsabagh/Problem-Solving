

const runningSum = (nums)=>{

    let mySum = []
    let theSum = 0
    for(let i=0 ; i<nums.length;i++){
        

        theSum = theSum + nums[i]
    
        mySum.push(theSum)
    }

return mySum
}


runningSum([1,1,1,1])