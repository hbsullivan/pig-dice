# Pig Dice Brainstorming

* What will happen when a user clicks "Play"?

|               |
|     PLAY      |
|               |

<!-- scoreboard area -->
Player 1      Player 2
score total   score total
-------------------------
<!-- gameplay area -->
        GIANT (di value)
         ###
        smaller (turn total)
         ###
[roll]         [hold]
    Player X's turn

## Objects
* What objects will you need?
  * Leader board object to hold Players & their scores
    * Player 1 & Player 2 that contain their score total & turn total
* What key-value pairs will each object need to contain in order for the game to work?
  *  * Leader Board { players: { Player {score total, turn total} } }
  * Player {score total, turn total}

## Functions
* What functions?
  * Roll di function (returns random number from 1-6)
  * Tally function – takes rollDi() value as input and returns turn total
    * if roll === 1, then returns a turn total of 0
  * Hold function - takes as input the current turn total & passes it to update player's score total
  * Switch turn function, tells which score to update
    * currentPlayer
  * checkWinner function - takes both players' scores and outputs winner
    * if player's score >= 100, they won!

## Event Listeners
* How will these be triggered throughout the gameplay?
  * when [play] is hit, display game board + start w/ player one
  * when [roll] is clicked
    * rollDi, tally
    * checkWinner
  * when [hold] is clicked
    * Hold() - takes current turn total & passes it to update player's score total
    * Switch turn function

* How will information be collected from the user? How will it be displayed?
  * User input from button clicks only

## Psuedocode
1. User clicks [PLAY] to initiate game
    *Behind the scenes:* 
      * leaderboard object is created and it contains
        * 1: player1 object
        * 2: player2 object
    -> note: does this *need* to be in global space?
2. Players take turns until there is a winner
    * On each turn:
      * Players roll the di by clicking [ROLL]
        *Behind the scenes:*
          * function rollDi gets face value of di
          * function rollResult determines where it's 0 or a number
        * **if** the player rolls a 1, they score nothing and it becomes the next player's turn.
        * **else** the player rolls any other number, it is added to their turn total and the player's turn continues.
          * **if** a player chooses to "hold"(by clicking [HOLD]), their turn total is added to their score, and it becomes the next player's turn.

      