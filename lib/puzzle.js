// ////////////////
// Rehearsal
// ////////////////

const { version } = require("webpack");

// 1. Select elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to an event (click on button)
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM (add a clss active to my hint)
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

// 1. Select elements--> array (tile, adjacent tile, empty)
const tiles = document.querySelectorAll('td');

// 2. forEach listen for a click for each tile
tiles.forEach( (tile) => {
  tile.addEventListener('click', (event) => {
    // 3. check if the tile is valid
    const clickedTile = event.currentTarget;
    if(nextToEmpty(clickedTile)) {
      // 4. move the tile if it is valid
      move(clickedTile);
      // 5. run check winning condition d
      if (weWin(tiles)) {
        alert("You won 🎸!");
      }
    }
  })
})
const nextToEmpty = (tile) => {
  // 1. select the empty tile
  const empty = document.querySelector('.empty');
  // 2. get coordinate of clicked tile vs empty tile
  const emptyCoordinate = {
    y: empty.cellIndex, 
    x: empty.parentElement.rowIndex
  }
  const clickedCoordinate = {
    y:tile.cellIndex, 
    x:tile.parentElement.rowIndex
  }
  // console.log({emptyCoordinate}, {clickedCoordinate});
  // 3. if click tile is +/-1 row/column = true
  return ( ((Math.abs(emptyCoordinate.x - clickedCoordinate.x) == 1) && emptyCoordinate.y == clickedCoordinate.y) || ((Math.abs(emptyCoordinate.y - clickedCoordinate.y) == 1) && emptyCoordinate.x == clickedCoordinate.x) );
  // Shorter version:
  // return (Math.abs(emptyCoordinate.x - clickedCoordinate.x) + (Math.abs(emptyCoordinate.x - clickedCoordinate.x) == 1
};


const move = (tile) => {
  // 1.select the empty tile
  const empty = document.querySelector('.empty');
  // 2. add empty class to the clickedtile
  tile.classList.add("empty");
  // 3. remove empty class to the clickedtile
  empty.classList.remove("empty");
  // 4. add the innertext of the clickedtile to the emptytile
  empty.innerText = tile.innerText;
  // 5. remove the innertext of the clickedtile 
  tile.innerText = ""; 
};

const weWin = (tiles) => {
  const winCombi = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"
  const results = []
  tiles.forEach((tile) => {
    results.push(tile.innerText);
  });
  return (results.join() === winCombi);
};
