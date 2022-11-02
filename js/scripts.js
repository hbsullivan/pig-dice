//Business Logic

function startGame() {
  let leaderboard = new Leaderboard();
  let playerOne = new Player (0,0,1)
  let playerTwo = new Player (0,0,2)
  leaderboard.addPlayers(playerOne);
  leaderboard.addPlayers(playerTwo);
  // intialize which player is starting
  // let id = 1;
  // check if winner
  // const players = Object.keys(leaderboard)
  // players.forEach(function(id){
  //   if(leaderboard.players[id].checkWinner()) {
  //     return winner = leaderboard.players[id]
  //   } else { 
  //     takeATurn(leaderboard, id);
  //   };
  // };

  // take a turn
  return leaderboard
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
  const roll = Math.floor(Math.random() * (max - min) + (min))
  console.log(roll);
  return roll
}

function rollResult(roll){
  let rollValue
  if (roll === 1){
    rollValue = 0
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
  if (rollValue != 0) {
    this.turnTotal += rollValue;
  } else {
    this.turnTotal = 0;
  }
}

Player.prototype.hold = function(){
  this.scoreTotal += this.turnTotal
  this.turnTotal = 0
}

//Leaderboard constructor and prototypes
function Leaderboard() {
  this.players = {};
}

Leaderboard.prototype.addPlayers = function(player) {
  this.players[player.id] = player;
}

Player.prototype.checkWinner = function() {
  if (this.scoreTotal >= 100) {
    return true
    } else {
    return false
    }
  }

  function switchPlayer(playerId) {
  if (playerId === "1") {
    playerId = "2"
  } else if (playerId === "2") {
    playerId = "1"
  }
  return playerId
}

//UI Logic

