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




/***/ })

/******/ });
//# sourceMappingURL=main.js.map