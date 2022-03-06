console.log(String.fromCharCode(67, 64, 103, 110))

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

// Prompts user for input on password specifications, defines specifications in variables and runs for loop to push random characters into generated password array until length of array matches length of users desired password length
function generatePassword() {
    var generatedPassword = [];
    var passwordLength = prompt("Please input desired password character length");
    var useCaps = confirm("Would you like to include Capital Letters?");
    var useLCLs = confirm("Would you like to include Lowercase Letters?");
    var useSpecChars = confirm("Would you like to include Special Characters?");
    var useNums = confirm("Would you like to include Numbers?");

    for (var i=0; i<passwordLength; i++) {
        if (useCaps) {
            generatedPassword.push(String.fromCharCode(generateRandNum(65,90)));
        }
        if (generatedPassword.length >= passwordLength) break;
        if (useSpecChars) {
            generatedPassword.push(String.fromCharCode(generateRandNum(33,42)));
        }
        if (generatedPassword.length >= passwordLength) break;
        if (useLCLs) {
            generatedPassword.push(String.fromCharCode(generateRandNum(97,122)));
        }
        if (generatedPassword.length >= passwordLength) break;
        if (useNums) {
            generatedPassword.push(String.fromCharCode(generateRandNum(48,57)));
        }
        if (generatedPassword.length >= passwordLength) break;

    }
    // console.log(generatedPassword);
    return generatedPassword.join("");
}

// This function generates a random number in a range, given the min and max values. It creates integers out of any decimaled number given by rounding up or down (depending on min or max) to the next integer. Math.random() returns a random decimal between 0 and 1, so you have to multiply it by the true length of your range (max-min + 1), and then add it to you min value, to get a random number within that range. Since the multiplication of a number between 0 and 1 typically gives a decimaled number, the function is wrapped in math.floor() to truncate it to it's closest integer number.
function generateRandNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Character Codes: 
// Numbers: 48-57
// Uppercase: 65-90
// Lowercase: 97-122
// Special Characters: 33-47