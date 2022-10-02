

function convert(x){
const convertedToArray = x.split("")
console.log( convertedToArray);

for(let i=0;i<convertedToArray.length;i++)
{
  if(convertedToArray[i]=="I")
  {
    convertedToArray[i]=1
  }
  else if(convertedToArray[i]=="V")
  {
    convertedToArray[i]=5
  }
  else if(convertedToArray[i]=="X")
  {
    convertedToArray[i]=10
  }
  else if(convertedToArray[i]=="L")
  {
    convertedToArray[i]=50
  }
  else if(convertedToArray[i]=="C")
  {
    convertedToArray[i]=100
  }
  else if(convertedToArray[i]=="D")
  {
    convertedToArray[i]=500
  }
  else if(convertedToArray[i]=="M")
  {
    convertedToArray[i]=1000
  }

}
console.log(convertedToArray);
let myStr = 0
for(let j=0;j<convertedToArray.length;j++)
{
    console.log(convertedToArray[j+1]);

    if(convertedToArray[j]>=convertedToArray[j+1] || convertedToArray[j+1]==undefined)
    {
        myStr=myStr+convertedToArray[j]
        console.log(myStr);
    }
    else if(convertedToArray[j]<convertedToArray[j+1])
    {
        if(convertedToArray[j+1]==undefined )
        {
          break
        }
        const sub= convertedToArray[j+1]-convertedToArray[j]
        console.log(sub);
        myStr=myStr + sub
        j++
        console.log(myStr);
    }
}
console.log(myStr);
}


convert("MCMXCIV")