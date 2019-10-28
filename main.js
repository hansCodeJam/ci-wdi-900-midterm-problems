function isEvenlyDivisible(num, num1) {

}

function halfSquare(num) {
  return (num**2) / 2;
}

function isLong(str) {  
  const strLength = str.length;

  if(strLength => 15) {
    return true;
  } else {
    return false;
  }
}

function exclaim(str) {
  let newStr = '';

  for(let i = 0; i < str.length; i++) {
      newStr = str + '!';
    }

  return newStr;
}

function countWords(str) {
  let strSplit = str.split(' ');
  return strSplit.length;
}

function containsDigit() {

}

function containsLowerCase(str) {
  let strSplit = str.split('');
  console.log(strSplit)
  for(let i = 0; i <strSplit.length; i++){
    if(strSplit[i] === strSplit.LowerCase) {
      return true;
    } else {
      return false
    }
  }
}

function containsUpperCase() {
  let strSplit = str.split('');
  console.log(strSplit)
  for(let i = 0; i <strSplit.length; i++){
    if(strSplit[i] === strSplit.UpperCase) {
      return true;
    } else {
      return false
    }
  }
}

function containsNonAlphanumeric() {

}

function containsSpace(str) {
  let strSplit = str.split('');
  console.log(strSplit);
  for(let i = 0; i < strSplit.length; i++) {
    if(strSplit[i] === ' ') {
      return true
    } 
  }
  return false
}

function digits(num) {
  let splitDigits = [];

  const numToString = num.toString();
  console.log(numToString)
  const numStringSplit = numToString.split('');
  console.log(numStringSplit);
  for (let i = 0; i < numStringSplit.length; i++){
    splitDigits.push(Number(numStringSplit[i]));
  }

  return splitDigits;
}

function truncate(str) {
  let newStr = '';
  const first8 = str.slice(0, 8) + '...';

  if(str.length >= 15){
    newStr = newStr + first8;
    } else {
    newStr = newStr + str;
    }

  return newStr;
  }

function isValidPassword() {

}

function onlyPunchy(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length < 15){
      newArray.push(arr[i])
    }
  }
  return newArray;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}