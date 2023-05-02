/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/puzzle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/puzzle.js":
/*!***********************!*\
  !*** ./lib/puzzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// ////////////////
// Rehearsal
// ////////////////

// 1. Select elements (button, hint)
<<<<<<< HEAD
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
=======
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
>>>>>>> main
// => 3

// ////////////////
// Live code
// ////////////////

<<<<<<< HEAD
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


=======
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

>>>>>>> main

/***/ })

/******/ });
//# sourceMappingURL=main.js.map