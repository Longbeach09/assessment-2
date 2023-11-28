// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

// Define the element with the ID "auth"
const auth = document.querySelector("#auth");
let lolo = "Log in";

function play(evt) {
  // Toggle the text content of the "auth" element
  auth.innerText = lolo;

  // Toggle the value of lolo
  if (lolo === "Log in") {
    lolo = "Log out";
  } else {
    lolo = "Log in";
  }
}

// Add a click event listener to the "auth" element
auth.addEventListener("click", play);

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.
document.querySelector("#send-alert").addEventListener("submit", (event) => {
  event.preventDefault();
  const alertText = document.querySelector("#alert-message").value;
  alert(alertText);
});
// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

document.querySelector("#item-adder").addEventListener("dblclick", (e) => {
  const node = document.createElement("li");
  const textNode = document.createTextNode("Item");
  node.appendChild(textNode);
  document.getElementById("list").appendChild(node);
});

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

document.querySelector("#blue").addEventListener("click", () => {
  const turningBlue = document.querySelectorAll(".changes-colors ");
  for (const element of turningBlue) {
    element.style.color = "blue";
  }
});

document.querySelector("#red").addEventListener("click", () => {
  const turningRed = document.querySelectorAll(".changes-colors");
  for (const element of turningRed) {
    element.style.color = "red";
  }
});
// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span
// Calculate factorial
function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

// Event listener for the "calculate" button
document.querySelector("#calculate-button").addEventListener("click", () => {
  // Get the input value
  const inputValue = parseInt(document.querySelector("#factorial-input").value);

  // Check if the input is a positive integer
  if (Number.isInteger(inputValue) && inputValue >= 0) {
    // Calculate factorial
    const factorialResult = calculateFactorial(inputValue);

    // Displayin g the end result 
//     document.querySelector("#result").textContent = `Factorial: ${factorialResult}`;
//   } else {
//     // Display an error message for invalid input
//     document.querySelector("#result").textContent = "Please enter a valid positive integer.";
//   }
// });
// //
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

document.querySelector("#word-recommendation-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the text from the textarea
  const recommendationText = document.querySelector("#word-recommendation-text").value;

  // Get the feedback element
  const feedbackElement = document.querySelector("#word-recommendation-feedback");

  // Check the length of the text
  if (recommendationText.length >= 3) {
    // Display thanks message in green
    feedbackElement.textContent = "Thanks for your submission!";
    feedbackElement.style.color = "green";
  } else {
    // Display error message in red
    feedbackElement.textContent = "The word must be at least 4 characters long.";
    feedbackElement.style.color = "red";
  }
});
