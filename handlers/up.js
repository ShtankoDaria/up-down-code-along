function upHandler() {
  debugger;
  // read user input & cast to Number

  const increment = document.getElementById("current-number").innerHTML;

  // read state
  const oldCurrent = numbers.current;

  // perform logic, combining state with user input
  const newCurrent = oldCurrent + increment;

  // update state (.current & .past)
  numbers.current = newCurrent;
  numbers.past.push(numbers.current);
  // render to user
  document.getElementById("current-number").innerHTML = numbers.current;
  // log user interaction

  //  story name, increment, newCurrent, copy of state
  log.push({
    handler: "up",
    numbers: JSON.parse(JSON.stringify(numbers))
  });
}
