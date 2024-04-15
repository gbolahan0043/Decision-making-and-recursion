/*Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.*/
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
        } else {
        return true;
        }
    } else {
        return false;
    }
}

console.log(isLeapYear(4));


/*Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20*/



//user should enter their age
const age = prompt("Please enter your age:");

let ticketPrice;
if (age <= 12) {
  ticketPrice = 10;
} else if (age >= 13 && age <= 17) {
  ticketPrice = 15;
} else {
  ticketPrice = 20;
}

//price of the movie ticket
alert(`The price of the movie ticket is $${ticketPrice}.`);

// RECURSION

//Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  
    // Base case: return true if the string is empty or has only one character
    if (cleanedStr.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters of the cleaned string are the same
    if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
      // Recursive call: check the rest of the string (excluding the first and last characters)
      return isPalindrome(cleanedStr.slice(1, -1));
    } else {
      // Return false if the first and last characters are not the same
      return false;
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("RADAR"));


function power(base, exponent) {
    // Base case
    if (exponent === 0) {
      return 1;
    }
  
    // Recursive case
    return base * power(base, exponent - 1);
}

console.log(power(3, 4)); 


  


  




