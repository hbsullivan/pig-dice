
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

function Player(scoreTotal, turnTotal) {
  this.scoreTotal = scoreTotal;
  this.turnTotal = turnTotal;
}

Player.prototype.tally = function(rollValue) {
  this.turnTotal += rollValue;
}