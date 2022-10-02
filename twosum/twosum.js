

// function twoSum() {
//     // const nums = [3,2,3];
//     // const target = 6;
//     // for(let i =0;i<nums.length;i++)
//     //     {
         
//     //       for (let j = i+1; j < nums.length; j++) {
            
//     //        let result = nums[i]+nums[j]
//     //        console.log([i,j]);
//     //         if(result===target)
//     //         {
//     //             console.log([i,j]);
//     //         }
//     //       }
            
//     //     }
//     // var obj = {};
//     // const ahmed = "ahmed"
//     // obj[ahmed] 
//     // console.log(obj[ahmed]);
//     const nums = [9,1,5];
//     const target = 10;
//     var map = {};
//     for(let i =0;i<nums.length;i++)
//         {
//             var value = nums[i];
//             var targetMvalue = target - value;
//             console.log(i);
//             console.log(target);
//             console.log(value);
//             console.log(targetMvalue);
//             console.log(map[targetMvalue]);
//             console.log(map[value]);
//             if(map[targetMvalue] !== undefined)  //why when map[cp] !== undefuned it is the write path ?
//             {
           
//                 console.log([map[targetMvalue],i] );  
//                 //why value of value: index pair
//                 /* we know that the cp + value = target so if value + some other element in the array = target when this element is equal
//                  to cp this is the pair we are looking for so we get the index of the value that got a cp equal to any other value of the array
// */
                
//             }
//             else{
                
//                 map[value] = i;  //map = {1:0,5:1}   //why value:index pair ?
//                 console.log(map);
//             }

            
//         }
// };

// twoSum()


function twosum(nums,target)
{

    var map = {}
    for (let i = 0; i< nums.length; i++) {   
      value = nums[i];
      cp = target - value;
      if(map[cp]!== undefined)
      {
        console.log([map[cp],i]);
      }
      else
      {
        map[value]= i;
      }
   
    }
}


twosum([5,7,4],11)