// ////////////////
// Rehearsal
// ////////////////

// 1. Select elements (button, hint)
const hintBtn = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to an event (click on the button)
hintBtn.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM (add class active to the hint)
  hint.classList.add("active");
});

/// Hint
// tile13.cellIndex
// => 0
// tile13.parentElement.rowIndex
// => 3

// ////////////////
// Live code
// ////////////////

// emptyNearby should return true/false depending on whether 
// the empty space is adjacent to the click tile 
const emptyNearby = (tile) => {
  // select the empty space
  const emptySpace = document.querySelector(".empty");
  // get position of the empty space
  const emptyCell = emptySpace.cellIndex ;
  const emptyRow = emptySpace.parentElement.rowIndex;
  // get position of the tile
  const tileCell = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  // compare the positions: true if next to each other
  return ((emptyCell == tileCell && (emptyRow + 1 == tileRow || emptyRow - 1 == tileRow)) 
  || (emptyRow == tileRow && (emptyCell + 1 == tileCell || emptyCell - 1 == tileCell)));
};

const swapeTile = (tile) => {
  // select the empty space
  const emptySpace = document.querySelector(".empty");
  emptySpace.classList.remove("empty");
  emptySpace.innerText = tile.innerText;

  tile.classList.add("empty");
  tile.innerText = "";
};

const weWon = (tiles) => {
  const numbers = [];
  tiles.forEach((tile) => {
    numbers.push(tile.innerText);
  });
  return numbers.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
};

// 1. Select element (all - nodeList)
const allTile = document.querySelectorAll("td");
// 2. Iterate the array (forEach(tile))
allTile.forEach((tile) => {
  // 3. Listen to an event (click on each tile)
  tile.addEventListener("click",(event) => {
    console.log(event);
    const clickedTile = event.currentTarget;
    // 4. Check whether the empty space is adjacent to the click tile 
    if (emptyNearby(clickedTile)) {
      // 5. if yes, change the DOM (swap tile and empty space)
      swapeTile(clickedTile);
      // 6. Check if you won or not 
      if (weWon(allTile)) {
        alert("We won 🎸")
      }
    }

  })
});

