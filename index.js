function isPalindrome(word){
  let solution = ""
  for (let letter of word){
      solution = letter + solution
  }
  if (solution === word){
      return true
  }else{
      return false
  }
}

/* 
 the function
  an empty variable
  for of loop to go through one letter at a time
    the empty variable will now be added to the current letter
    the current letter befor the "+" sign puts it at beginning of the empty variabl
    does this with each letter creating the backwards word
  if statement
    if the formerly empty variable is "===" to the parameter tested then returns true
    if not the returns false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
