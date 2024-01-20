/*
 *  ScoreBoard - ARSENAL VS CRYSTAL PALACE.
 *  This code is a scoreboard example of Arsenal VS Crystal Palace.
 *  using Oject and template literals
 *  I've also shown more dynamic way to display the score using setInterval function .
 */

let scoreBoard = {
  date: "1/20/24",
  fullTime: "90+5",
  teams: ["arsenal", "crystal palace"],
  score: [5, 0],
};

// console.log(scoreBoard.teams);

function showScoreboard() {
  return `  Match Date: ${scoreBoard.date}
  full time: ${scoreBoard.fullTime}
  ${scoreBoard.teams[0]} vs. ${scoreBoard.teams[1]}
  score: ${scoreBoard.score[0]} : ${scoreBoard.score[1]}
  `;
}

console.log(showScoreboard());

// let count = 0;

// let scores = setInterval(function () {

//   if (count === scoreBoard.score[0]) {
//     clearInterval(scores);
//   } else {
//     console.log(`score: ${++count} : ${scoreBoard.score[1]}`);
//   }
// }, 1000);

// console.log(scores);
