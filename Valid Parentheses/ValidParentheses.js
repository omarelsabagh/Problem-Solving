function ValidParentheses(s) {
  const hashMap = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      stack.push(hashMap[s[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}

const result = ValidParentheses("");

//   let result1;
//   let result2;
//   let result3;

//   /////////  ( ///////////////
//   for (let i = 0; i < s.length; i++) {

//   }
//   if (s.includes("(") || s.includes(")")  ) {
//     let isTrueFirst1;
//     let isTrueFirst2;

//     console.log(s.substring(1, s.indexOf(")") + 1).includes("["));
//     console.log(s.substring(1, s.indexOf(")") + 1).includes("{"));
//     console.log(s.substring(1, s.indexOf(")") + 1).includes("]"));
//     console.log(s.substring(1, s.indexOf(")") + 1).includes("}"));

//     if (
//       s.substring(1, s.indexOf(")") + 1).includes("[") == true &&
//       s.substring(1, s.indexOf(")") + 1).includes("]") == false

//     ) {
//       isTrueFirst1 = true;
//     }
//     if (
//       s.substring(1, s.indexOf(")") + 1).includes("{") == true &&
//       s.substring(1, s.indexOf(")") + 1).includes("}") == false
//     ) {
//       isTrueFirst2 = true;
//     }

//     console.log(s.indexOf(")"));
//     if (s.substring(1).includes(")") && isTrueFirst1 !== true && isTrueFirst2 !== true ) {
//       result1 = true;
//     } else {
//       result1 = false;
//     }

//     console.log(result1);
//   }

//   ///////////////////////////////////////////////////////////////////////////////////
//   if (s.includes("{") || s.includes("}") ) {
//     let isTrueSecond1;
//     let isTrueSecond2;
//     if (
//       s.substring(1, s.indexOf("}") + 1).includes("[") == true &&
//       s.substring(1, s.indexOf("}") + 1).includes("]") == false
//     ) {
//       isTrueSecond1 = true;
//     }
//     if (
//       s.substring(1, s.indexOf("}") + 1).includes("(") == true &&
//       s.substring(1, s.indexOf("}") + 1).includes(")") == false
//     ) {
//       isTrueSecond2 = true;
//     }
//     if (s.substring(1).includes("}") && isTrueSecond1 !== true && isTrueSecond2 !== true) {
//       result2 = true;
//     } else {
//       result2 = false;
//     }

//     console.log(result2);
//   }
//   if (s.includes("[") || s.includes("]") ) {
//     let isTrueThird1;
//     let isTrueThird2;
//     if (
//       s.substring(1, s.indexOf("]") + 1).includes("{") == true &&
//       s.substring(1, s.indexOf("]") + 1).includes("}") == false
//     ) {
//       isTrueThird1 = true;
//     }
//     if (
//       s.substring(1, s.indexOf("]") + 1).includes("(") == true &&
//       s.substring(1, s.indexOf("]") + 1).includes(")") == false
//     ) {
//       isTrueThird2 = true;
//     }

//     if (s.substring(1).includes("]") && isTrueThird1 !== true && isTrueThird2 !== true) {
//       result3 = true;
//     } else {
//       result3 = false;
//       console.log(result3);
//     }

//   }

//   if (result1 === false || result2 === false || result3 === false ) {
//     console.log(false);
//     return false;
//   } else {
//     console.log(true);
//     return true;
//   }

// let result1;
// let result2;
// let result3;
// let result4;
// let openBrackets = []
// let closedBrackets = []
// let openCurlyBrackets = []
// let closedCurlyBrackets = []
// let openSquareBrackets = []
// let closedSquareBrackets = []
// for (let i = 0; i < s.length; i++) {

//     //////////// compare numbers //////////////////
//     if(s[i]=="(")
//     {
//         console.log(true);
//         openBrackets.push("1")
//     }
//     if(s[i]==")")
//     {
//         console.log(true);
//         closedBrackets.push("1")
//     }
//     if(s[i]=="{")
//     {
//         openCurlyBrackets.push("1")
//         console.log(true);
//     }
//     if(s[i]=="}")
//     {
//         closedCurlyBrackets.push("1")
//         console.log(true);
//     }
//     if(s[i]=="[")
//     {
//         openSquareBrackets.push("1")
//         console.log(true);
//     }
//     if(s[i]=="]")
//     {
//         closedSquareBrackets.push("1")
//         console.log(true);
//     }
//     /////////// for () ////////////
//     if(s[i]==="(")
//     {

//         if(s.substring(i).includes(")"))
//         {

//             result1 = true
//             console.log(result1);
//         }
//         else{
//             result1 = false
//             console.log(result1);
//         }
//     }

//     if(s[i]===")" && s.substring(s.lastIndexOf("("),i).includes("(")===false )
//     {

//         result1 = false

//     }
//     /////////// for {} ////////////
//     if(s[i]==="{")
//     {

//         if(s.substring(i).includes("}"))
//         {

//             result2 = true
//             console.log(result2);
//         }
//         else{

//             result2 = false
//             console.log(result2);
//         }
//     }
//     if(s[i]==="}" && s.substring(s.lastIndexOf("{"),i).includes("{")===false )
//     {

//         result2 = false
//         console.log(result2);
//     }
//     /////////// for [] ////////////
//     if(s[i]==="[")
//     {

//         if(s.substring(i).includes("]"))
//         {

//             result3 = true
//             console.log(result3);
//         }
//         else{

//             result3 = false
//          console.log(result3);
//         }
//     }
//     if(s[i]==="]" && s.substring(s.lastIndexOf("["),i).includes("[")===false )
//     {

//         result3 = false
//         console.log(result3);
//     }
// }

// if(openBrackets.length === closedBrackets.length && openCurlyBrackets.length===closedCurlyBrackets.length && openSquareBrackets.length===closedSquareBrackets.length)
// {
//     result4=true
//     console.log(result4);

// }
// else
// {
//     result4=false
//     console.log(result4);
// }

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
//   if (result1 === false || result2 === false || result3 === false ||result4 === false ) {
//     console.log(false);
//     return false;
//   } else {
//     console.log(true);
//     return true;
//   }
