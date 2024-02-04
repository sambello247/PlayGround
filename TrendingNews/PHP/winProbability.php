<?php
/* 
*This PHP code displays the win probability of two Premier League teams, 
* Arsenal and Liverpool, along with the current date and time. The win probability 
* percentages are stored in an associative array and displayed using HTML headings. 
*/

$teams = ["Arsenal", "Liverpool"];
$today = strtotime("05:30pm February 4 2024");
$date =  date("d-m-Y H:i:s", $today);
$winProbability = [
    'Arsenal' => '42%',
    'Draw' => '26%',
    'Liverpool' => '32%'
];
echo "<h1>Premier League</h1>";
echo "<h4>Date: $date</h4>";
echo "<h4>Win Probability.</h4>";
echo "<h2>Arsenal " . $winProbability['Arsenal'] . " - Draw "
    . $winProbability['Draw'] . " - Liverpool " .  $winProbability['Liverpool'] . " </h2>";
