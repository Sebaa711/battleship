/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ 426: /***/ (module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(81);
      /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(645);
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

#board-creation {
  border: 5px solid black;
  height: 100%;
  width: 100%;
  display: flex;
}

#board-template {
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  border-right: 5px solid black;
  flex-grow: 8;
  height: 100%;
}

.board-cell {
  border: 2px solid #000000;
  cursor: pointer;
}

.board-cell:not(.placed):hover {
  background-color: #ff000050;
}

#boats {
  flex-grow: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.boat {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  flex-grow: 1;
  outline: 3px solid black;
}

.placed {
  background-color: #000000;
}

.boat[selected] {
  background-color: #000000;
  color: #fff;
}

#game-progress {
  width: 100%;
  height: 90%;
  border: 10px solid black;
  display: flex;
  justify-content: space-between;
  gap: 50px;
}

.player {
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  border-right: 5px solid black;
  flex-grow: 1;
  height: 100%;
}

.player ~ .player {
  border-left: 5px solid black;
}

.game-cell {
  border: 2px solid #000000;
}
`,
        "",
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

    /***/ 645: /***/ (module) => {
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      module.exports = function (cssWithMappingToString) {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map(function (item) {
            var content = "";
            var needLayer = typeof item[5] !== "undefined";
            if (item[4]) {
              content += "@supports (".concat(item[4], ") {");
            }
            if (item[2]) {
              content += "@media ".concat(item[2], " {");
            }
            if (needLayer) {
              content += "@layer".concat(
                item[5].length > 0 ? " ".concat(item[5]) : "",
                " {"
              );
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
              content += "}";
            }
            if (item[2]) {
              content += "}";
            }
            if (item[4]) {
              content += "}";
            }
            return content;
          }).join("");
        };

        // import a list of modules into the list
        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === "string") {
            modules = [[null, modules, undefined]];
          }
          var alreadyImportedModules = {};
          if (dedupe) {
            for (var k = 0; k < this.length; k++) {
              var id = this[k][0];
              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }
          for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) {
              continue;
            }
            if (typeof layer !== "undefined") {
              if (typeof item[5] === "undefined") {
                item[5] = layer;
              } else {
                item[1] = "@layer"
                  .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                  .concat(item[1], "}");
                item[5] = layer;
              }
            }
            if (media) {
              if (!item[2]) {
                item[2] = media;
              } else {
                item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                item[2] = media;
              }
            }
            if (supports) {
              if (!item[4]) {
                item[4] = "".concat(supports);
              } else {
                item[1] = "@supports ("
                  .concat(item[4], ") {")
                  .concat(item[1], "}");
                item[4] = supports;
              }
            }
            list.push(item);
          }
        };
        return list;
      };

      /***/
    },

    /***/ 81: /***/ (module) => {
      module.exports = function (i) {
        return i[1];
      };

      /***/
    },

    /***/ 379: /***/ (module) => {
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        var result = -1;
        for (var i = 0; i < stylesInDOM.length; i++) {
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        }
        return result;
      }
      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var indexByIdentifier = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5],
          };
          if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
          } else {
            var updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
              identifier: identifier,
              updater: updater,
              references: 1,
            });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options);
        api.update(obj);
        var updater = function updater(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            ) {
              return;
            }
            api.update((obj = newObj));
          } else {
            api.remove();
          }
        };
        return updater;
      }
      module.exports = function (list, options) {
        options = options || {};
        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
          }
          var newLastIdentifiers = modulesToDom(newList, options);
          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];
            var _index = getIndexByIdentifier(_identifier);
            if (stylesInDOM[_index].references === 0) {
              stylesInDOM[_index].updater();
              stylesInDOM.splice(_index, 1);
            }
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };

      /***/
    },

    /***/ 569: /***/ (module) => {
      var memo = {};

      /* istanbul ignore next  */
      function getTarget(target) {
        if (typeof memo[target] === "undefined") {
          var styleTarget = document.querySelector(target);

          // Special case to return head of iframe instead of iframe itself
          if (
            window.HTMLIFrameElement &&
            styleTarget instanceof window.HTMLIFrameElement
          ) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }
          memo[target] = styleTarget;
        }
        return memo[target];
      }

      /* istanbul ignore next  */
      function insertBySelector(insert, style) {
        var target = getTarget(insert);
        if (!target) {
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        }
        target.appendChild(style);
      }
      module.exports = insertBySelector;

      /***/
    },

    /***/ 216: /***/ (module) => {
      /* istanbul ignore next  */
      function insertStyleElement(options) {
        var element = document.createElement("style");
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }
      module.exports = insertStyleElement;

      /***/
    },

    /***/ 565: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      /* istanbul ignore next  */
      function setAttributesWithoutAttributes(styleElement) {
        var nonce = true ? __webpack_require__.nc : 0;
        if (nonce) {
          styleElement.setAttribute("nonce", nonce);
        }
      }
      module.exports = setAttributesWithoutAttributes;

      /***/
    },

    /***/ 795: /***/ (module) => {
      /* istanbul ignore next  */
      function apply(styleElement, options, obj) {
        var css = "";
        if (obj.supports) {
          css += "@supports (".concat(obj.supports, ") {");
        }
        if (obj.media) {
          css += "@media ".concat(obj.media, " {");
        }
        var needLayer = typeof obj.layer !== "undefined";
        if (needLayer) {
          css += "@layer".concat(
            obj.layer.length > 0 ? " ".concat(obj.layer) : "",
            " {"
          );
        }
        css += obj.css;
        if (needLayer) {
          css += "}";
        }
        if (obj.media) {
          css += "}";
        }
        if (obj.supports) {
          css += "}";
        }
        var sourceMap = obj.sourceMap;
        if (sourceMap && typeof btoa !== "undefined") {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
            " */"
          );
        }

        // For old IE
        /* istanbul ignore if  */
        options.styleTagTransform(css, styleElement, options.options);
      }
      function removeStyleElement(styleElement) {
        // istanbul ignore if
        if (styleElement.parentNode === null) {
          return false;
        }
        styleElement.parentNode.removeChild(styleElement);
      }

      /* istanbul ignore next  */
      function domAPI(options) {
        if (typeof document === "undefined") {
          return {
            update: function update() {},
            remove: function remove() {},
          };
        }
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }
      module.exports = domAPI;

      /***/
    },

    /***/ 589: /***/ (module) => {
      /* istanbul ignore next  */
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    // CONCATENATED MODULE: ./src/ship.js
    class Ship {
      constructor(size) {
        this.size = size;
      }

      coords = [];
      timesHit = 0;

      hit = () => {
        this.timesHit++;
        return this;
      };

      isSunk = () => {
        if (this.timesHit < this.size) return false;
        else return true;
      };
    } // CONCATENATED MODULE: ./src/gameboard.js

    class Gameboard {
      constructor(x, y) {
        this.board = Array(x)
          .fill()
          .map(() =>
            Array(y)
              .fill()
              .map(() => null)
          );
      }

      currentShips = [];

      checkPlace = (length, x, y, direction) => {
        if (
          (x + length > this.board.length && direction === "vrt-down") ||
          (y + length > this.board[0].length && direction === "hrz-right")
        )
          return false;

        let chain = Array(length)
          .fill(null)
          .map(() => [...[x, y]]);

        const pos = direction === "vrt-down" ? 0 : 1;

        for (let i = 0; i < chain.length; i++) {
          chain[i][pos] += i;
        }

        if (chain.every(([x, y]) => this.board[x][y] === null)) {
          return chain;
        } else return false;
      };

      placeShip = (coords) => {
        const newShip = new Ship(coords.length);
        for (const [x, y] of coords) {
          this.board[x][y] = newShip;
          newShip.coords.push([...[x, y]]);
        }
        this.currentShips.push(newShip);
      };

      receiveAttack = (x, y) => {
        if (x > this.board.length || y > this.board[0].length || x < 0 || y < 0)
          return;

        const target = this.board[x][y];

        if (target === null) {
          this.board[x][y] = "miss";
          return null;
        }

        if (target instanceof Ship) {
          target.hit();
          this.board[x][y] = "hit";
          return true;
        }

        if (target === "hit") return false;
      };

      hasLost = () => {
        if (this.currentShips.every((ship) => ship.isSunk())) return true;
        return false;
      };
    }

    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
    var injectStylesIntoStyleTag = __webpack_require__(379);
    var injectStylesIntoStyleTag_default = /*#__PURE__*/ __webpack_require__.n(
      injectStylesIntoStyleTag
    );
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
    var styleDomAPI = __webpack_require__(795);
    var styleDomAPI_default = /*#__PURE__*/ __webpack_require__.n(styleDomAPI);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
    var insertBySelector = __webpack_require__(569);
    var insertBySelector_default =
      /*#__PURE__*/ __webpack_require__.n(insertBySelector);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
    var setAttributesWithoutAttributes = __webpack_require__(565);
    var setAttributesWithoutAttributes_default =
      /*#__PURE__*/ __webpack_require__.n(setAttributesWithoutAttributes);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
    var insertStyleElement = __webpack_require__(216);
    var insertStyleElement_default =
      /*#__PURE__*/ __webpack_require__.n(insertStyleElement);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
    var styleTagTransform = __webpack_require__(589);
    var styleTagTransform_default =
      /*#__PURE__*/ __webpack_require__.n(styleTagTransform);
    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
    var style = __webpack_require__(426); // CONCATENATED MODULE: ./src/style.css
    var options = {};

    options.styleTagTransform = styleTagTransform_default();
    options.setAttributes = setAttributesWithoutAttributes_default();

    options.insert = insertBySelector_default().bind(null, "head");

    options.domAPI = styleDomAPI_default();
    options.insertStyleElement = insertStyleElement_default();

    var update = injectStylesIntoStyleTag_default()(
      style /* default */.Z,
      options
    );

    /* harmony default export */ const src_style =
      style /* default */.Z && style /* default */.Z.locals
        ? style /* default */.Z.locals
        : undefined; // CONCATENATED MODULE: ./src/index.js

    let currentDirection = "vrt-down";

    function generateCreation(playerGameboard, ships) {
      // Create main element
      const mainElement = document.createElement("main");
      mainElement.id = "board-creation";

      // Create board-template div
      const boardTemplateDiv = document.createElement("div");
      boardTemplateDiv.id = "board-template";

      for (let i = 0; i < playerGameboard.board.length; i++) {
        for (let j = 0; j < playerGameboard.board[i].length; j++) {
          const newCell = document.createElement("div");
          newCell.classList.add("board-cell");
          newCell.setAttribute("data-x", i);
          newCell.setAttribute("data-y", j);

          if (playerGameboard.board[i][j] instanceof Ship) {
            newCell.classList.add("placed");
          }

          newCell.addEventListener("mouseover", function (event) {
            const currentSelected = findCurrentSelectedShip();
            if (!currentSelected) return;
            const x = Number(event.target.getAttribute("data-x"));
            const y = Number(event.target.getAttribute("data-y"));

            const coordinates = playerGameboard.checkPlace(
              Number(currentSelected.innerText),
              x,
              y,
              currentDirection
            );

            if (Array.isArray(coordinates)) {
              let currentCells = [newCell];
              for (let p = 0; p < coordinates.length; p++) {
                const current = currentCells[currentCells.length - 1];
                current.style.backgroundColor = "#00ff0050";
                if (currentDirection === "hrz-right")
                  currentCells.push(current.nextSibling);
                else if (p !== coordinates.length - 1) {
                  let siblingUnderneath = current;
                  for (let z = 0; z < 10; z++) {
                    siblingUnderneath = siblingUnderneath.nextSibling;
                  }
                  currentCells.push(siblingUnderneath);
                }
              }
              newCell.addEventListener("mouseout", () => {
                currentCells.forEach(
                  (cell) => (cell.style.backgroundColor = "")
                );
              });
            }
          });

          newCell.addEventListener("click", (event) => {
            const currentSelected = findCurrentSelectedShip();
            const x = Number(event.target.getAttribute("data-x"));
            const y = Number(event.target.getAttribute("data-y"));

            const coordinates = playerGameboard.checkPlace(
              Number(currentSelected.innerHTML),
              x,
              y,
              currentDirection
            );

            if (Array.isArray(coordinates)) {
              playerGameboard.placeShip(coordinates);
              ships.splice(
                Number(currentSelected.getAttribute("data-index")),
                1
              );
              refreshDOM();
            }
          });

          boardTemplateDiv.appendChild(newCell);
        }
      }

      // Create boats div

      // Append board-template and boats div to main element
      mainElement.appendChild(boardTemplateDiv);

      const boatsDiv = document.createElement("div");
      boatsDiv.id = "boats";
      for (let i = 0; i < ships.length; i++) {
        const newShip = document.createElement("div");
        newShip.classList.add("boat");

        if (i === 0) newShip.setAttribute("selected", "");

        newShip.innerText = ships[i].size;
        newShip.setAttribute("data-index", i);
        newShip.addEventListener;
        boatsDiv.append(newShip);
      }

      mainElement.appendChild(boatsDiv);
      // Convert main element to HTML string
      return mainElement;
    }

    function findCurrentSelectedShip() {
      return document.querySelector("#boats .boat[selected]");
    }

    function refreshDOM(cpu = null) {
      if (ships.length > 0) {
        document.body.innerHTML = "";
        document.body.appendChild(generateCreation(player, ships));
      } else {
        document.body.innerHTML = "";
        document.body.appendChild(
          generateGame(player, cpu ?? generateCPUboard())
        );
      }
    }

    function generateGame(player1, player2) {
      const mainContainer = document.createElement("main");
      mainContainer.id = "game-progress";

      const player1container = document.createElement("div");
      player1container.classList.add("player");
      for (let i = 0; i < player1.board.length; i++) {
        for (let j = 0; j < player1.board[i].length; j++) {
          const boardCellValue = player1.board[i][j];
          const newCell = document.createElement("div");
          newCell.setAttribute("data-x", i);
          newCell.setAttribute("data-y", j);
          newCell.classList.add("game-cell");

          if (boardCellValue instanceof Ship) {
            newCell.classList.add("placed");
          } else if (boardCellValue === "hit")
            newCell.style.backgroundColor = "#00FF00";
          else if (boardCellValue === "miss")
            newCell.style.backgroundColor = "#FF0000";

          player1container.appendChild(newCell);
        }
      }

      const player2container = document.createElement("div");
      player2container.classList.add("player");
      for (let i = 0; i < player2.board.length; i++) {
        for (let j = 0; j < player2.board[i].length; j++) {
          const boardCellValue = player2.board[i][j];
          const newCell = document.createElement("div");
          newCell.setAttribute("data-x", i);
          newCell.setAttribute("data-y", j);
          newCell.classList.add("game-cell");

          if (boardCellValue !== "hit" && boardCellValue !== "miss") {
            newCell.classList.add("for-attack");
            newCell.addEventListener("click", (event) => {
              const x = Number(event.target.getAttribute("data-x"));
              const y = Number(event.target.getAttribute("data-y"));
              player2.receiveAttack(x, y);

              if (player2.hasLost()) {
                alert("Player 1 has won!!!!");
                restartGame();
              }

              const [attackx, attacky] = generateRandomAttack(player1);
              player1.receiveAttack(attackx, attacky);

              if (player1.hasLost()) {
                alert("Player 2 has won!!!!");
                restartGame();
              }

              refreshDOM(player2);
            });
          } else if (boardCellValue === "hit")
            newCell.style.backgroundColor = "#00FF00";
          else if (boardCellValue === "miss")
            newCell.style.backgroundColor = "#FF0000";

          player2container.appendChild(newCell);
        }
      }

      mainContainer.appendChild(player1container);
      mainContainer.appendChild(player2container);
      return mainContainer;
    }

    function generateRandomShips(num) {
      return Array(num)
        .fill(null)
        .map(() => new Ship(randomNumber()));
    }

    function randomNumber() {
      return Math.floor(Math.random(3) * 5 + 1);
    }

    function generateCPUboard() {
      const cpuships = generateRandomShips(5);
      const cpu = new Gameboard(10, 10);

      for (let i = 0; i < cpuships.length; i++) {
        const newMove = generateRandomMove(cpuships[i].size, cpu);
        cpu.placeShip(newMove);
      }

      return cpu;
    }

    function generateRandomMove(length, player) {
      let i = 0;
      while (i < 999) {
        const direction =
          Math.floor(Math.random() * 2) === 1 ? "hrz-right" : "vrt-down";
        const move = player.checkPlace(
          length,
          Math.floor(Math.random(1) * 10),
          Math.floor(Math.random(1) * 10),
          direction
        );
        if (move) return move;
        i++;
      }
    }

    function generateRandomAttack(player) {
      let i = 0;
      while (i < 999) {
        let x = Math.floor(Math.random(1) * 10);
        let y = Math.floor(Math.random(1) * 10);
        let move = player.board[x][y];

        if (move === null || move instanceof Ship) return [x, y];
        i++;
      }

      return [0, 0];
    }

    function restartGame() {
      ships = generateRandomShips(5);
      player = new Gameboard(10, 10);
    }

    let ships = generateRandomShips(5);
    let player = new Gameboard(10, 10);

    document.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() !== "r") return;
      if (currentDirection === "hrz-right") currentDirection = "vrt-down";
      else currentDirection = "hrz-right";
      refreshDOM();
    });

    window.onload = () => {
      alert("Place your ships in the board, you can press R to rotate");
      refreshDOM();
    };
  })();

  /******/
})();
