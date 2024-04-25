// ////////////////
// Rehearsal
// ////////////////

// 1. Select elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// console.log(button, hint);

// 2. Listen a click on the button
button.addEventListener("click", (event) => {
  console.log("clicked", event);
  // 3. Change the DOM ( add .active to the hint)
  hint.classList.add("active");
});


// ////////////////
/// Hints
// ////////////////

// tile13.cellIndex
// => 0
// tile13.parentElement.rowIndex
// => 3

// ////////////////
// Live code
// ////////////////

const isNearEmpty = (clickedTile) => {
  const empty = document.querySelector(".empty");

  const clickedTileCell = clickedTile.cellIndex;
  const clickedTileRow = clickedTile.parentElement.rowIndex;

  const emptyCell = empty.cellIndex;
  const emptyRow = empty.parentElement.rowIndex;

  const isNearby = (clickedTileCell === emptyCell + 1 || clickedTileCell === emptyCell - 1) 
    && clickedTileRow === emptyRow
    ||
    (clickedTileRow === emptyRow + 1 || clickedTileRow === emptyRow - 1) 
    && clickedTileCell === emptyCell

  // if (isNearby) {
  //   return true
  // }
  // return false
  return isNearby;
};

const swapTile = (clickedTile) => {
  const empty = document.querySelector(".empty");
  empty.classList.remove("empty")
  empty.innerText = clickedTile.innerText;

  clickedTile.classList.add("empty")
  clickedTile.innerText = "";
}

const didWeWin = (tiles) => {
  const actualOrder = [];
  tiles.forEach((tile) => {
    actualOrder.push(tile.innerText)
  })
  expectedOrder = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  // if (actualOrder.join() === expectedOrder) {
  //   return true;
  // }
  // return false;
  return actualOrder.join() === expectedOrder;
}

// select every tile
// use querySelectAll --> array
const tiles = document.querySelectorAll("td");
console.log(tiles);
// for each tile
tiles.forEach((tile) => {
  // listen for a click on a tile
  tile.addEventListener("click", (event) => {
    console.log("clicked", event);
    // check whether the clicked tile is adjacent to a black tile
    if (isNearEmpty(tile)) {
      // if next to black tile, swap positions
      swapTile(tile);
      // check the order and finish the game.
      if (didWeWin(tiles)) {
        alert("You won! 🎸")
      }
    }
  }); 
});


