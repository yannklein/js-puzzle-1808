// ////////////////
// Rehearsal
// ////////////////

// 1. Select elements (that the user will interact, that will change) --> button, hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to a click on the button
button.addEventListener("click", () => {
  // 3. Change the DOM, display the hint (add class active)
  hint.classList.add("active");
})



// ////////////////
/// Hints
// ////////////////

// tile13.cellIndex
// => 2
// tile13.parentElement.rowIndex
// => 0




// ////////////////
// Live code
// ////////////////

const checkTile = (currentTile) => {
  //get the empty tile
  //get the current tile and the empty space location
  //if the column is the same, check if the current is above or below the empty one
  //if the row is the same, check if the current is right or left the empty one
  const emptyTile = document.querySelector(".empty");
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  const emptyTileCol = emptyTile.cellIndex;

  const currentTileRow = currentTile.parentElement.rowIndex;
  const currentTileCol = currentTile.cellIndex;

  // if (emptyTileCol === currentTileCol && (emptyTileRow - 1 === currentTileRow || emptyTileRow + 1 === currentTileRow)){
  //   return true;
  // }
  // if (emptyTileRow === currentTileRow && (emptyTileCol - 1 === currentTileCol || emptyTileCol + 1 === currentTileCol)){
  //   return true;
  // }

  // if (emptyTileCol === currentTileCol && Math.abs(currentTileRow - emptyTileRow) === 1){
  //   return true;
  // }
  // if (emptyTileRow === currentTileRow && Math.abs(currentTileCol - emptyTileCol) === 1){
  //   return true;
  // }

  // const distanceRow = Math.abs(currentTileRow - emptyTileRow);
  // const distanceCol = Math.abs(currentTileCol - emptyTileCol);
  // if(distanceRow + distanceCol === 1) {
  //   return true;
  // }

  // return false;

  const distanceRow = Math.abs(currentTileRow - emptyTileRow);
  const distanceCol = Math.abs(currentTileCol - emptyTileCol);
  return (distanceRow + distanceCol === 1);
};

const swapeTile = (currentTile) => {
  // get the empty tile
  const emptyTile = document.querySelector(".empty");
  // remove class from empty
  emptyTile.classList.remove("empty");
  // add class to current
  currentTile.classList.add("empty");
  // add current's number to empty
  const number = currentTile.innerText;
  emptyTile.innerText = number;
  // remove the current's number
  currentTile.innerText = "";
};

const didWeWin = (tiles) => {
  const numbers = [];
  tiles.forEach((tile) => {
    numbers.push(tile.innerText)
  });
  return numbers.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
};

// selcet the tiles
// for each tile 
//  listen to click on tile
// check if the tile is next to the empty space (create function)
// if yes move to the empty if not do nothing (create function)
// check if the game is solved and say YAY (create function)
const tiles = document.querySelectorAll("td");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
  if (checkTile(tile)) {
    swapeTile(tile);
    if(didWeWin(tiles)) {
      alert("You won 🥷🇵🇱🥷")
    }
  }
  })
});
