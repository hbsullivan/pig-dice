# Pig Dice

#### By Richelle Thorpe, Henry Sullivan, Kirsten Opstad

#### A game of chance

## Technologies Used

* HTML 
* CSS 
* Bootstrap
* JavaScript

## Description

Pig Dice is a simple dice game in which, players take turns to roll a single die.

Rules of the game (from Wikipedia):
* Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
  * If the player rolls a 1, they score nothing and it becomes the next player's turn.
  * If the player rolls any other number, it is added to their turn total and the player's turn continues.
  * If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Tests
```
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

Describe: checkWinner()

Test: takes both players' scores and outputs winner
Code: 
Expected Output: 
```

## Known Bugs

* UI: What to do when user rolls a one (currently not displaying anything)
* UI: Not including total scores on the winner board
* UI: Default value consistency for di value & turn total

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

MIT License

Copyright (c) 2022 Kirsten Opstad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.