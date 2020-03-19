// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password Function to generate new password
function generatePassword(){
  var password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!%&#$'()*+,-./:;<=>?@[\]^_`{|}~";

  var prompt1 = prompt("Enter required password length between 8 to 128 characters");
  var prompt2 = prompt("Enter the character type: lowercase, uppercase, numeric, special.");
  var res = prompt2.split(",");
  var charTypes="";

  if(prompt1 >=8 && prompt1 <= 128){
    for(var l=0;l<= res.length; l++){
      if(res[l] == "lowercase"){
        charTypes+=lowercase;
      }
      else if(res[l] == "uppercase"){
        charTypes+=uppercase;
      }
      else if(res[l] == "numeric"){
        charTypes+=numeric;
      }
      else if(res[l] == "special"){
        charTypes+=special;
      }
      else{
        charTypes+="";
      }
    }
    for(var i = 0, n= charTypes.length; i < prompt1; i++){
      var count = Math.floor((Math.random() * charTypes.length) + 0);
      password += charTypes.charAt(count);
    }
    return password;
  }
  else{
    password ="Please enter the correct length";
    return password;
  }
  
  
}