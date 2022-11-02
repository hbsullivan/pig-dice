
function rollDi(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  const roll = Math.floor(Math.random() * (max - min) + (min))

}

function rollResult(roll){
  if (roll === 1){
    return 0
  }
  return roll;
}

