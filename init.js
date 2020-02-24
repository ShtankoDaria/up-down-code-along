window.onload = () => {
  debugger;
  // log initial state
  window.onload = () => {
    // log initial state
    log.push({ initialNumbers: JSON.parse(JSON.stringify(numbers)) });
    // render UI from initial state
    document.getElementById("current-number").innerHTML = numbers.current;
  };
  // render initial UI from state
};
