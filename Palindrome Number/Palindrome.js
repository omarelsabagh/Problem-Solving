


function Palindrome(x) 
{  
const stringOfX = x.toString()
const firstHalfArray = []
const secondHalfArray = []
console.log(stringOfX.split("").reverse());


if(stringOfX.length%2==0)
{

    for(let i =0;i<stringOfX.length/2;i++)
    {
        
        firstHalfArray.push(stringOfX[i])
        secondHalfArray.push(stringOfX[i+stringOfX.length/2])    
    }
    
    const secondHalfArrayReversed = secondHalfArray.reverse()

    if(JSON.stringify(firstHalfArray) === JSON.stringify( secondHalfArrayReversed ) )
    {
        console.log(true);
    }
    else{
        console.log(false);
    }

    
}
else
{

    for(let i =0;i<(stringOfX.length/2)-.5;i++)
    {

        firstHalfArray.push(stringOfX[i])
        secondHalfArray.push(stringOfX[i+(stringOfX.length/2)+.5])
    }


    const secondHalfArrayReversed = secondHalfArray.reverse()


    if(JSON.stringify(firstHalfArray) === JSON.stringify( secondHalfArrayReversed ) )
    {
        console.log(true);
    }
    else{
       console.log(false);
    }
}

}

Palindrome(1331)

function Palindrome2(x){
    const stringOfX = x.toString()
    if(JSON.stringify(stringOfX.split(""))===JSON.stringify(stringOfX.split("").reverse()) )
{
    console.log(true);
}
else{
    console.log(false);
}
}

Palindrome2(131)



console.log(1223 % 10);
console.log((Math.floor(1293/10) )%10);