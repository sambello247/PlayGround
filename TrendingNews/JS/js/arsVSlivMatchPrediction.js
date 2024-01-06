/*
 *  MatchPrediction - ARSENAL VS LIVERPOOL (FA CUP 3rd Round).
 *  This code is an example of how to use Math.Floor
 *  and Math.Random to Generate Match Prediction in JavaScript.
 *  I also make a reference to using closure where a function
 *  is defined within another function and has access to it's outer function.
 *  Here's an example of how to use a closure in JavaScript
 */

//Create a storage location for data.
let matchDate = "7 Jan 2024";
let matchTime = "17:30";

let headToHead = {
  Teams: ["Arsenal", "Liverpool"],
  Wins: ["82", "94"],
  Draws: 64,
};

//Match Information & Prediction.
function faCup3rdRound() {
  function score(max) {
    return Math.floor(Math.random() * max);
  }
  return `  Match Date: ${matchDate} | Match Time: ${matchTime} 
  ${headToHead.Teams[0]} vs. ${headToHead.Teams[1]}  
  Wins: ${headToHead.Wins[0]} : ${headToHead.Wins[1]} 
  Draws: ${headToHead.Draws}
  Prediction: Arsenal ${score(6)} VS LiverPool ${score(6)}
  `;
}
console.log(faCup3rdRound());
