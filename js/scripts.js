function startGame() {
  let leaderboard = new Leaderboard();
  let playerOne = new Player(0,0)
  let playerTwo = new Player(0,0)
  leaderboard.addPlayers("playerOne");
  leaderboard.addPlayers("playerTwo");
  return leaderboard
}


function rollDi() {
  min = Math.ceil(1);
  max = Math.floor(7);
  const roll = Math.floor(Math.random() * (max - min) + (min))
  console.log(roll);
  return roll
}

function rollResult(roll){
  let rollValue
  if (roll === 1){
    rollValue = 0
  } else {
  rollValue = roll;
  }
  return rollValue;
}

// This was how we rolled the di and returned the value
// rollResult(rollDi());

//Player constructor and prototypes
function Player(scoreTotal, turnTotal) {
  this.scoreTotal = scoreTotal;
  this.turnTotal = turnTotal;
}

Player.prototype.tally = function(rollValue) {
  if (rollValue != 0) {
    this.turnTotal += rollValue;
  } else {
    this.turnTotal = 0;
  }
}

Player.prototype.hold = function(scoreTotal, turnTotal){
  this.scoreTotal = this.turnTotal
}

//Leaderboard constructor and prototypes
function Leaderboard() {
  this.players = {};
}

Leaderboard.prototype.addPlayers = function(player) {
  this.players[player] = player;
}


