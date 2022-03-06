# Password Generator Page

Hello! This is a pretty fun page that will generate a random password using the specifications that the user provides through a series of prompt windows. The html and css code for this page were provided for the assignment, so the "meat and potatoes" of the assignment is learning and codingin javascript.

Here is the base code that was given to start the password generator in javascript:

```
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
```

So, not a lot to work with and, if you're new to javascript, you'll have to use the great google machine to understand what all of this means ( minus the `var`, that one I did recogniz as creating a variable).


Here are some resources/learning opportunities used in creating this password generator:

- [Javascript Prompt](https://www.w3schools.com/jsref/met_win_prompt.asp)

- [Difference between let and var](https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/#:~:text=var%20and%20let%20are%20both,program%20as%20compared%20to%20let.)

-[Character Codes](https://www.w3schools.com/charsets/ref_utf_basic_latin.asp)

-[Creating Random Number Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

-[Creating Break Points in Loops](https://www.w3schools.com/jsref/jsref_break.asp)

-[Adding Items to an Array](https://www.w3schools.com/jsref/jsref_push.asp)

-[Converting Arrays to Strings](https://thispointer.com/convert-array-to-string-without-comma-in-javascript/)
