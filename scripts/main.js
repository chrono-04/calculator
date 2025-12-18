const buttons = document.querySelector(".buttons-container");

buttons.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "clear-btn":
      console.log("Pressed clear button");
      break;
    case "divide-btn":
      console.log("Pressed divide button");
      break;
    case "multiply":
      console.log("Pressed multiply button");
      break;
    case "subtract":
      console.log("Pressed subtract button");
      break;
    case "add":
      console.log("Pressed add button");
      break;
    case "equals":
      console.log("Pressed equal button");
    case "seven":
      console.log(7);
      break;
    case "eight":
      console.log(8);
      break;
    case "nine":
      console.log(9);
      break;
    case "four":
      console.log(4);
      break;
    case "five":
      console.log(5);
      break;
    case "six":
      console.log(6);
      break;
    case "one":
      console.log(1);
      break;
    case "two":
      console.log(2);
      break;
    case "three":
      console.log(3);
      break;
    case "zero":
      console.log(0);
      break;
  }
});
