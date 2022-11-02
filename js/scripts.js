function startGame() {
  let leaderboard = new Leaderboard();
  let playerOne = new Player (0,0,1)
  let playerTwo = new Player (0,0,2)
  leaderboard.addPlayers(playerOne);
  leaderboard.addPlayers(playerTwo);
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
}

//Leaderboard constructor and prototypes
function Leaderboard() {
  this.players = {};
}

Leaderboard.prototype.addPlayers = function(player) {
  this.players[player.id] = player;
}

// // Business Logic for AddressBook ---------
// function AddressBook() {
//   this.contacts = {};
//   this.currentId = 0;
// }

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };


