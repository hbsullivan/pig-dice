//Business Logic
let leaderboard = new Leaderboard();

function startGame() {
  let playerOne = new Player (0,0,1)
  let playerTwo = new Player (0,0,2)
  leaderboard.addPlayers(playerOne);
  leaderboard.addPlayers(playerTwo);
}
function takeATurn(leadboard) {
 // player can roll until they roll a 1 or push "hold" button
const rollValue = rollResult(rollDi());
 // let i = id of whose turn it is
let id = 1
 leaderboard.players[id].tally(rollValue);
//  leaderboard.players[id].hold();
 leaderboard.players[id].checkWinner();
//  switchPlayer(id);
}

function rollDi() {
  min = Math.ceil(1);
  max = Math.floor(7);
  const roll = Math.floor(Math.random() * (max - min) + (min));
  return roll;
}

function rollResult(roll){
  let rollValue
  if (roll === 1){
    rollValue = 0;
    // end turn
  } else {
  rollValue = roll;
  }
  return rollValue;
}


//Player constructor and prototypes
function Player(scoreTotal, turnTotal, id) {
  this.scoreTotal = scoreTotal;
  this.turnTotal = turnTotal;
  this.id = id;
}

Player.prototype.tally = function(rollValue) {
  if (rollValue !== 0) {
    this.turnTotal += rollValue;
  } else {
    this.turnTotal = 0;
  }
}

Player.prototype.hold = function(){
  this.scoreTotal += this.turnTotal
  this.turnTotal = 0
}

Player.prototype.checkWinner = function() {
  if (this.scoreTotal >= 100) {
    return true
    } else {
    return false
    }
}

//Leaderboard constructor and prototypes
function Leaderboard() {
  this.players = {};
  this.turnId = 1;
}

Leaderboard.prototype.addPlayers = function(player) {
  this.players[player.id] = player;
}

Leaderboard.prototype.switchPlayer = function() {
  if (this.turnId === 1) {
    this.turnId = 2
  } else if (this.turnId === 2) {
    this.turnId = 1
  }
}

//UI Logic

function displayGame(event) {
  document.getElementById("play-btn").setAttribute("class", "hidden");
  document.getElementById("scoreboard").removeAttribute("class", "hidden");
  startGame();
  document.getElementById("player-id").innerText = leaderboard.turnId;
}

function handleRoll() {
  let rolled = rollDi();
  let rolledResult = rollResult(rolled);
  document.getElementById("di-value").innerText = rolled;
  // Get player id
  let playerId = leaderboard.turnId;
  let player = leaderboard.players[playerId];
  player.tally(rolledResult);
  document.getElementById("turn-value").innerText = player.turnTotal;
}

window.addEventListener("load", function(){
  document.getElementById("play-btn").addEventListener("click", displayGame);
  let whoseTurn = leaderboard.turnId;
  document.getElementById("roll").addEventListener("click", handleRoll);
})