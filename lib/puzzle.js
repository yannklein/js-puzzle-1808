// ////////////////
// Rehearsal
// ////////////////

// 1. Selecte elements: button, hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to click on the button
button.addEventListener("click", (event) => {
  // console.log(event);
  // 3. Change the DOM: add the class active
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

//select all the tile with querySelectorAll
const tiles = document.querySelectorAll("td");
console.log(tiles);
// listen for a click of a tile

const ifNextToEmpty = (tile)=>{
  const emptyTile = document.querySelector('.empty');
  let emptyRowIndex = emptyTile.parentElement.rowIndex;
  let emptyCellIndex = emptyTile.cellIndex;
  let tileRowIndex = tile.parentElement.rowIndex;
  let tileCellIndex = tile.cellIndex;

  // return true if
  // tile row == (empty row +/- 1) and tile cell == empty cell
  // or tile row == empty row and tile cell == (empty cell +/- 1)
  return (
    (
      ( Math.abs(tileRowIndex - emptyRowIndex)  === 1)
      && emptyCellIndex === tileCellIndex
    ) || (
      (Math.abs(tileCellIndex - emptyCellIndex)  === 1)
      && emptyRowIndex === tileRowIndex
    )
  )
};

const swape = (tile) => {
  const emptyTile = document.querySelector('.empty');
  emptyTile.innerText = tile.innerText;
  tile.innerText = "";
  emptyTile.classList.remove("empty");
  tile.classList.add("empty");
};

const didWeWin = (tiles) => {
  const actualOrder = [];
  tiles.forEach((tile) => {
    actualOrder.push(tile.innerText);
  });
  return actualOrder.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,';
};

tiles.forEach((tile) =>{
  tile.addEventListener('click', (event)=> {
    console.log(event);
    const clickedTile = event.currentTarget;
    // create a conditional statement where :
    // if the tile is next to the empty tile 
    if(ifNextToEmpty(clickedTile)) {
      console.log("Next");
      // the tile swaps places with the empty tile
      swape(tile);
      // check if player wins
      if (didWeWin(tiles)) {
        alert("We won 🎸!!!")
      }
    }
  })
});
// player wins is when data is ascending

// select a tile that corresponds to the td.empty