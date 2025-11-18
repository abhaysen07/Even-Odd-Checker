/* 
============================================================
📄 FILE: script.js
📌 PROJECT: Even–Odd Logic Learning Page
👨‍💻 AUTHOR: Abhishek Kumar (Owner & Developer)
📅 CREATED: 2025
📝 PURPOSE:
    This script handles the logic for determining whether 
    a user-entered number is EVEN or ODD.
    It reads input from the HTML page, processes it using 
    modular arithmetic, and displays the result dynamically.
============================================================
*/

/*
------------------------------------------------------------
🎯 FUNCTION: checkEvenOdd()
📌 PURPOSE:
    Triggered when user clicks the "Check" button.
    1. Reads the number from the input field.
    2. Converts it to a numeric value.
    3. Applies even-odd logic using modulo operator.
    4. Updates result text dynamically on the webpage.
------------------------------------------------------------
*/
function checkEvenOdd() {

    /* 
    📝 STEP 1: Read input value as a string 
       from the HTML input field with ID "numberInput".
    */
    var number = document.getElementById("numberInput").value;

    /* 
    📝 STEP 2: Convert the string to a floating-point number.
       Using parseFloat() ensures we handle decimal inputs safely.
    */
    number = parseFloat(number);

    /* 
    📝 STEP 3: Check if the number is EVEN or ODD.
       The modulo (%) operator returns the remainder.
       If number % 2 === 0 → EVEN, else → ODD.
    */
    if (number % 2 === 0)
    {
        // Create message for EVEN number
        result = "The number " + number + " is Even. 🟩";
    }
    else
    {
        // Create message for ODD number
        result = "The number " + number + " is Odd .🟦";
    }

    /* 
    📝 STEP 4: Update the result paragraph dynamically.
       The HTML element with ID "result" will display the output.
    */
    document.getElementById("result").innerHTML = result;
}