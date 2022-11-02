# TEMPLATE

#### By Kirsten Opstad

#### A template for writing a README.md

## Technologies Used

* Technology1 
* Technology2 
* Technology3

## Description

This template includes placeholders for:

[x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images)

[x] [Link to operational site](http://www.kirstenopstad.github.com/<REPOSITORY NAME>)

[x] Goals
1. Goal1
2. Goal2
3. Goal3

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

KO Ask Yourself:

[x] Do I need to run a server? 

[x] How should I set up my databases? 

[x] Is there other code this application depends on?

_{Epicodus recommends deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Tests

Describe: rollDi()

Test: It should return a random number from 1-6
Code: rollDi();
Expected Output: 1 or 2 or 3 or 4 or 5 or 6

Describe: rollResult()

Test: It should return 0 if a one is rolled
Code: rollResult(1)
Expected Output: 0

Test: It will return the value of any number rolled betwee 2-6 
Code: rollResult(4)
Expected Output: 4

Describe: Player();

Test: It will create an object with the keys score total & turn total
Code: const newPlayer = new Player (0,0)
newPlayer;
Expected Output: Player { scoreTotal: "0", turnTotal: "0" }

Describe: Player.prototype.tally()

Test: It will add roll result to turn total
Code: 
const newPlayer = new Player (0,0);
const rollValue = 4;
newPlayer.tally(rollValue);
Expected Output: 4

Test: It will zero out turnTotal if roll value is a 0
Code: 
const newPlayer = new Player (0,0);
const rollValue = 0;
newPlayer.tally(rollValue);
newPlayer.turnTotal;
Expected Output: 0

Describe: Player.prototype.hold()

Test: It will set scoreTotal to value of turnTotal
Code: 
const newPlayer = new Player (0,8);
newPlayer.hold();
Expected Output: 8

Describe: LeaderBoard();

Test: It will create an object to hold Player data
Code: const leaderBoard = new LeaderBoard ();
Expected Output: LeaderBoard {players: }

Test: It will create an object to hold Player data
Code: const leaderBoard = new LeaderBoard (newPlayer1, newPlayer2);
const newPlayer1 = new Player (0,8);
const newPlayer2 = new Player (0,12);
Expected Output: LeaderBoard { newPlayer1 , newPlayer2 }

## Known Bugs

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

[Choose License](https://choosealicense.com/)

Copyright (c) 2022 Kirsten Opstad