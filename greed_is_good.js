function score( dice ) {
  var total = 0;

  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;

  for (var i=0; i < dice.length; i++){
    if (dice[i] === 1){one++;}
    if (dice[i] === 2){two++;}
    if (dice[i] === 3){three++;}
    if (dice[i] === 4){four++;}
    if (dice[i] === 5){five++;}
    if (dice[i] === 6){six++;}
  }
  if (one === 3){
    total += 1000;
  } else if (one > 3){
    total += 1000 + ((one - 3) * 100);
  } else {
    total += one * 100;
  }
  if (two >= 3){
    total += 200;
  }
  if (three >= 3){
    total += 300;
  }
  if (four >= 3){
    total += 400;
  }
  if (five === 3){
    total += 500;
  } else if (five > 3){
    total += 500 + ((five - 3) * 50);
  } else {
    total += five * 50;
  }
  if (six >= 3){
    total += 600;
  }
  return total;
}