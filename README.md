📘 Even–Odd Logic Learning Page

A simple, interactive, beginner-friendly webpage that demonstrates how to check whether a number is Even or Odd using JavaScript.
This project explains the logic, reasoning, and flow behind decision-making — the core foundation of programming.

🔗 Live Demo:
➡️ https://abhaysen07.github.io/Even-Odd-Checker/

🌟 Project Overview

This project is built for beginners who want to understand how computers think and how simple logic transforms into real code.
The page breaks down the concept of Even–Odd logic, includes a working input checker, and teaches the importance of logical thinking in coding interviews.

🧠 What You Will Learn

How to take user input in JavaScript

How to convert strings to numbers

How to use the modulo operator %

How to build simple decision-making logic

How to display dynamic output on a webpage

How logic building helps crack coding interviews

🎯 Features

✔ Clean & beginner-friendly UI
✔ JavaScript-based Even/Odd checker
✔ Dynamic result display
✔ Fully documented HTML, CSS & JS
✔ Flowchart representation
✔ Hosted on GitHub Pages

🔧 Tech Stack

HTML5 – Structure

CSS3 – Styling

JavaScript – Logic & Interactivity

📂 Project Structure
Even-Odd-Checker/
│
├── index.html      # Main webpage
├── styles.css      # Styling file
├── script.js       # Even/Odd checker logic
└── README.md       # Project documentation

🧩 How It Works

User enters a number in the input field

JavaScript reads it using getElementById

Converts it to a number using parseFloat()

Checks:

number % 2 === 0 → Even

else → Odd

Displays the result on the page

🧠 JavaScript Logic (Core Code)
function checkEvenOdd(){
    var number = document.getElementById("numberInput").value;
    number = parseFloat(number);

    if (number % 2 === 0) {
        result = "The number " + number + " is Even.";
    } else {
        result = "The number " + number + " is Odd.";
    }

    document.getElementById("result").innerHTML = result;
}

📊 Flowchart

A complete flowchart visually explains the program logic from input to output.

Example:

Start → Input → Parse → number % 2 → Even/Odd → Display Result → End

🚀 How to Run the Project
🔹 Method 1: Online (Recommended)

Just visit the live link:

👉 https://abhaysen07.github.io/Even-Odd-Checker/

🔹 Method 2: Run Locally

Download or clone the repo

Open index.html in your browser

Test with any number

💡 Why This Project Matters

This simple logic is the base for many interview topics:

Conditionals

Loops

Pattern printing

Prime number logic

Divisibility

Data validation

Algorithm design

Top companies like Adobe, Microsoft, and Product Startups often test this kind of logic to evaluate reasoning skills.

🔮 Future Enhancements

Add input validation (empty or invalid number)

Add UI animations

Create a dark/light theme

Add more mathematical logic tools

Convert into a React mini-app

👨‍💻 Author

Abhishek Kumar
Developer & Creator
India 🇮🇳