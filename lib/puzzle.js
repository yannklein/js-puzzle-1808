// ////////////////
// Rehearsal
// ////////////////

// 1. Select elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to a event (click) on the button
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM 
  // (display the hint -> add class active)
  hint.classList.add("active")
});

// ////////////////
/// Hints
// ////////////////

// tile3.cellIndex
// => 0
// tile3.parentElement.rowIndex
// => 3

// ////////////////
// Live code
// ////////////////
const isNearEmpty = (tile) => {
  const tileCell = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector(".empty");
  const emptyCell = emptyTile.cellIndex;
  const emptyRow = emptyTile.parentElement.rowIndex;

  // (tileCell === emptyCell +/- 1) AND tileRow === emptyRow
  // OR
  // (tileRow === emptyRow +/- 1) AND tileCell === emptyCell
  // ===> return true

  return (
    ((tileCell ===  emptyCell + 1 || tileCell ===  emptyCell - 1) && tileRow === emptyRow)
    ||
    ((tileRow ===  emptyRow + 1 || tileRow ===  emptyRow - 1) && tileCell === emptyCell)
  )
};

const swapTile = (tile) => {
  const emptyTile = document.querySelector(".empty");
  emptyTile.innerText = tile.innerText;
  tile.innerText = "";
  emptyTile.classList.remove("empty");
  tile.classList.add("empty");
}

const didWeWin = (tiles) => {
  const results = []
  tiles.forEach((tile) => {
    results.push(tile.innerText)
  });
  // [ '1', '2', '3' ....]
  // '1,2,3'
  return results.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,';
}
// Select the elements (tiles, and the empty tiles)  All TD elements
const tiles = document.querySelectorAll("td");
// console.log(tiles);
  // Returns an array of TD element
  // Iterate over all TD's
  tiles.forEach((tile) => {
    // console.log(tile);
    // For each TD add an event listener, click
      // When clicked, check if there's an empty space nearby
      tile.addEventListener("click", (event) => {
        console.log(event)
        // If empty space exists, swap tile and empty space
        if(isNearEmpty(tile)) {
          swapTile(tile)
          if (didWeWin(tiles)) {
            alert("You won! 🎸")
          }
        }
      // Check if you win!!! :)
      });
  })
