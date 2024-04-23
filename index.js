//Decision Making
//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function leapYear(year) {
    //Check if the year is divisible by 4 and not by 100 unless it is also divisible by 400
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

/*Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20  */

function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10; // Price for children
    } else if (age >= 13 && age <= 17) {
        return 15; // Price for teenagers
    } else {
        return 20; // Price for adults
    }
}

// Prompt the user for their age
let age = parseInt(prompt("Please enter your age:"));

// Calculate the ticket price based on the user's age
let ticketPrice = calculateTicketPrice(age);

// Display the ticket price to the user
console.log("The price of the movie ticket is: $" + ticketPrice);


//Recursion
/*Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...). */

function fibonacci(n) {
    // Base case: if n is 0 or 1, return n
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

/*Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization. */

function isPalindrome(str) {
    // Base case: if the string is empty or has only one character, it is a palindrome
    if (str.length <= 1) {
        return true;
    } else {
        // Check if the first and last characters are the same (ignoring case)
        if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) {
            // Recursively check the substring without the first and last characters
            return isPalindrome(str.slice(1, str.length - 1));
        } else {
            return false;
        }
    }
}