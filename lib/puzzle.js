// ////////////////
// Rehearsal
// ////////////////

// 1. Select elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to an event, a click on the button
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM (add a class active)
  hint.classList.add("active");
});

// ////////////////
// Live code
// ////////////////

// First we will select  all of the td's 
// itterate over the array of td's.
// For each td listen to a click.
// Check if it's next to an empty space. (create a function "spaceCheck" that returns a boolean)
// if yes swap it ! else nothing.
// Check if we win or not ! 
const spaceCheck = (clicked) => {
  // find x and y of the current clicked td
  const cellIndex = clicked.cellIndex;
  const rowIndex = clicked.parentElement.rowIndex;
  // find x and y of the empty space
  const emptySpace = document.querySelector(".empty");
  const emptyCell = emptySpace.cellIndex;
  const emptyRow = emptySpace.parentElement.rowIndex;
  // check whether they are adjacent to each other or not
  // if 
    // (cellIndex == emptyCell AND rowIndex - emptyRow  == -1 or +1)
    if (cellIndex === emptyCell && (rowIndex - emptyRow  === -1 || rowIndex - emptyRow  === +1)) {
      return true;
    } else if  (rowIndex === emptyRow && (cellIndex - emptyCell  === -1 || cellIndex - emptyCell  === +1)) {
      return true; 
    } return false;
    // OR
    // (rowIndex == emptyRow AND cellIndex - emptyIndex == -1 or +1)

  // if yes return true
  // else return false
};

const swap = (clicked) => {
  const emptySpace = document.querySelector(".empty");
  emptySpace.classList.remove("empty");
  emptySpace.innerText = clicked.innerText;

  clicked.classList.add("empty");
  clicked.innerText = "";
};

const checkWin = (tds) => {
  const numOrder = [];
  tds.forEach((td) => {
    numOrder.push(td.innerText);
  });
  console.log(numOrder);
  return (numOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15," )
};

const tds = document.querySelectorAll("td");
tds.forEach((td) => {
  td.addEventListener("click", (event) => {
    const clickedTd = event.currentTarget;
    console.log(event); 
    console.log(spaceCheck(clickedTd))
    if (spaceCheck(clickedTd)) {
      swap(clickedTd);
      if (checkWin(tds)) {
        alert("You won 🎸!");
      }
    }
  })
});

