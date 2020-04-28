// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseArr        = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr        = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr           = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacterArr = ['!','@','#','$','%','^','&','*',';',':','<','>','?','/'];

// Write password to the #password input
//function writePassword() {

  // X THEN I am presented with a series of prompts for password criteria - Done
  var upperCasePrompt = confirm("Do you want uppercase characters in your password?");
  //console.log(upperCasePrompt)
  var lowerCasePrompt  = confirm("Do you want lowercase characters in your password?");
  //console.log(lowerCasePrompt)
  var numberPrompt  = confirm("Do you want numbers in your password?");
  //console.log(numberPrompt)
  var specialCharPrompt  = confirm("Do you want to include special characters in your password?");
  //console.log(specialCharPrompt)

//X THEN I select which criteria to include in the password

//Create an empty password array
  var passwordArr = []

  // if (upperCasePrompt === true) || (lowerCasePrompt === true) || (numberPrompt === true) || (specialCharPrompt === true){
  //   passwordArr.push(lowerCaseArr, upperCaseArr, numberArr, specialCharacterArr)
  //   }
  if (upperCasePrompt = true) {
    passwordArr.push(upperCaseArr)
    }
  if (lowerCasePrompt = true) {
    passwordArr.push(lowerCaseArr)
  }
  if (numberPrompt = true) {
    passwordArr.push(numberArr)
  }
  if (specialCharPrompt = true) {
    passwordArr.push(specialCharacterArr)
  }
//}
  // THEN I choose a length of at least 8 characters and no more than 128 characters


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
