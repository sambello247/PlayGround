/* 
    Matchday 16 of 38: Aston Villa VS Arsenal
    Here is the example of how to use the Windows output method for an alert!
*/

let todayMatchdaysMessage = "Pray For Aston Villa!";

// // Get the current time
let now = new Date();

// Set the target time to 6:30 PM
let targetTime = new Date();
targetTime.setHours(18, 30, 0, 0);

// Calculate the time difference in milliseconds
let timeDiff = targetTime - now;

// Convert the time difference to hours and minutes
let hours = Math.floor(timeDiff / (1000 * 60 * 60));
let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

let timeLeft = `Time left: ${hours} hours and ${minutes} minutes`;

// Output today matchday message and time left
window.alert(`${todayMatchdaysMessage} ${timeLeft}`);
