// ////////////////
// Rehearsal
// ////////////////

// 1. Select the elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to an event (click on button)
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM (add the class active to my hint)
  hint.classList.add("active");
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

// 1. Select tiles (nodelist)

const tiles = document.querySelectorAll('tr td');

const canMove = (tile) => {
  const empty = document.querySelector(".empty");
  
  const tileRow = tile.parentElement.rowIndex;
  const tileCell = tile.cellIndex;
  const emptyRow = empty.parentElement.rowIndex;
  const emptyCell = empty.cellIndex;

  // (emptyRow == tileRow + 1 or emptyRow == tileRow - 1) AND tileCell == emptyCell
  // (emptyCell == tileCell + 1 or emptyCell == tileCell - 1) AND tileRow == emptyRow
  return ((emptyRow == (tileRow + 1) || emptyRow == (tileRow - 1)) && tileCell == emptyCell) 
    || ((emptyCell == (tileCell + 1) || emptyCell == (tileCell - 1)) && tileRow == emptyRow);
};

const movingTile = (tile) => {
  const empty = document.querySelector(".empty");
  empty.classList.remove("empty");
  empty.innerHTML= tile.innerHTML;
  tile.innerHTML = "";
  tile.classList.add("empty");
}

const didWeWin = (tiles) => {
  const numbers = []
  tiles.forEach((tile) => {
    // tile is a td HTML element
    numbers.push(tile.innerText)
  });
  return numbers.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
}

// 2. Interate across tiles by tile (nodelist)
tiles.forEach((tile) => {
  // 3. Add event listener per tile ('click' on a td)
  tile.addEventListener('click',(event) => {
    console.log(event);
    const empty = document.querySelector(".empty");

    const clickedTile = event.currentTarget;
    // 4. If the title is next to the empty space
    if (canMove(clickedTile)) {
      console.log("moving!");
      // 5. move into empty space.
      movingTile(clickedTile);
      // 6. Check if tiles are in numerical order.
      if (didWeWin(tiles)) {
        alert("You won!! 🎸");
      }
    }
  });
});


