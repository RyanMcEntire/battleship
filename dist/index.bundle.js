"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\n  border: solid 1px gray;\n} */\n\n.player-board,\n.opponent-board {\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 1fr 10fr;\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 3rem;\n}\n\n.grid-container {\n  grid-column: 2;\n  grid-row: 2;\n  border: solid 1px blue;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.grid-container > div {\n  border: solid 1px red;\n}\n\n.letter-box {\n  display: grid;\n  grid-column: 1;\n  grid-row: 2;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.letter-box > div,\n.number-box > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.number-box {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.hit {\n  background-color: orangered;\n}\n\n.miss {\n  background-color: blue;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;;EAEE,aAAa;EACb,+BAA+B;EAC/B,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,WAAW;EACX,mCAAmC;AACrC;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,cAAc;EACd,WAAW;AACb;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["/* * {\n  border: solid 1px gray;\n} */\n\n.player-board,\n.opponent-board {\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 1fr 10fr;\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 3rem;\n}\n\n.grid-container {\n  grid-column: 2;\n  grid-row: 2;\n  border: solid 1px blue;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.grid-container > div {\n  border: solid 1px red;\n}\n\n.letter-box {\n  display: grid;\n  grid-column: 1;\n  grid-row: 2;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.letter-box > div,\n.number-box > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.number-box {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.hit {\n  background-color: orangered;\n}\n\n.miss {\n  background-color: blue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
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
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
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
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
      layer: item[5]
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
        references: 1
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
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
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
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
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
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
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
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/classes/gameboard.js":
/*!**********************************!*\
  !*** ./src/classes/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
class Gameboard {
  constructor() {
    this.placedShips = [];
    this.attacks = [];
  }

  placeShip(ship) {
    const shipName = ship.type;
    const { coords } = ship;
    const shipHits = new Array(coords.length).fill('');
    this.placedShips.push({ ship, shipName, coords, hits: shipHits });
    return this.placedShips;
  }

  getShipLocation(shipType) {
    const foundShip = this.placedShips.find((ship) => ship.type === shipType);
    return foundShip.coords;
  }

  isCoordinateAttacked(coord) {
    if (coord) {
      return this.attacks.some((attack) => attack.coord === coord);
    }
    return false;
  }

  receiveAttack(coord) {
    if (this.isCoordinateAttacked(coord)) {
      return false;
    }
    const wasHit = this.recordShipAttack(coord);
    this.attacks.push({ coord, status: wasHit ? 'hit' : 'miss' });
    return this.attacks;
  }

  recordShipAttack(coord) {
    let wasHit = false;
    this.placedShips = this.placedShips.map((shipObj) => {
      const hitIndex = shipObj.coords.findIndex(
        (shipCoord) => shipCoord === coord
      );
      if (hitIndex !== -1) {
        wasHit = true;
        return Gameboard.updateShipHit(shipObj, hitIndex);
      }
      return shipObj;
    });
    return wasHit;
  }

  getHitStatus(coord) {
    const attack = this.attacks.find((hit) => hit.coord === coord);
    return attack ? attack.status : null;
  }

  static updateShipHit(ship, hitIndex) {
    const updatedHits = [...ship.hits];
    updatedHits[hitIndex] = 'hit';
    return { ...ship, hits: updatedHits };
  }

  getShipHits(shipType) {
    const theShip = this.placedShips.find((ship) => ship.type === shipType);
    return theShip.hits;
  }

  getAllHits() {
    return this.attacks;
  }
}


/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(name) {
    this.name = name;
  }

  launchAttack(gameboard, coord) {
    return gameboard.receiveAttack(coord) ? this : false;
  }

  decideAttack(gameboard) {
    const letters = 'ABCDEFGHIJ';
    const char = letters.charAt(Math.floor(Math.random() * letters.length));
    const num = Math.floor(Math.random() * letters.length);
    if (gameboard.isCoordinateAttacked(`${char + num}`)) {
      this.decideAttack(gameboard);
    }
    return `${char + num}`;
  }
}


/***/ }),

/***/ "./src/classes/ship.js":
/*!*****************************!*\
  !*** ./src/classes/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* eslint-disable prefer-destructuring */
class Ship {
  constructor(obj) {
    this.type = Object.keys(obj)[0];
    this.coords = obj[this.type];
    this.length = this.coords.length;
    this.hp = this.coords.length;
  }

  hit() {
    if (this.hp >= 1) {
      this.hp -= 1;
    }
    return this.hp;
  }

  isSunk() {
    if (this.hp === 0) {
      return true;
    }
    return false;
  }
}


/***/ }),

/***/ "./src/controller/game-controller.js":
/*!*******************************************!*\
  !*** ./src/controller/game-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/player */ "./src/classes/player.js");
/* harmony import */ var _classes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/ship */ "./src/classes/ship.js");
/* harmony import */ var _classes_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/gameboard */ "./src/classes/gameboard.js");
/* harmony import */ var _ui_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/selectors */ "./src/ui/selectors.js");





const ships = {
  car: ['C3', 'D3', 'E3', 'F3', 'G3'],
  bat: ['A5', 'A6', 'A7', 'A8'],
  cru: ['A2', 'B2', 'C2'],
  sub: ['F6', 'F7', 'F8'],
  des: ['D7', 'E7'],
};

const p = new _classes_player__WEBPACK_IMPORTED_MODULE_0__["default"]('Clowdy');
const c = new _classes_player__WEBPACK_IMPORTED_MODULE_0__["default"]('Computer');

const pBoard = new _classes_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]();
const cBoard = new _classes_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]();
// let gameOver = false;

Object.keys(ships).forEach((shipKey) => {
  const shipObj = { [shipKey]: ships[shipKey] };
  pBoard.placeShip(new _classes_ship__WEBPACK_IMPORTED_MODULE_1__["default"](shipObj));
});

Object.keys(ships).forEach((shipKey) => {
  const shipObj = { [shipKey]: ships[shipKey] };
  cBoard.placeShip(new _classes_ship__WEBPACK_IMPORTED_MODULE_1__["default"](shipObj));
});

function gameLoop() {
  (0,_ui_selectors__WEBPACK_IMPORTED_MODULE_3__["default"])().computerGrid.addEventListener('click', (e) => {
    const pAttack = e.target.className;
    const pResult = p.launchAttack(cBoard, pAttack);
    console.log('pAttack', pAttack);
    if (!pResult) {
      return;
    }
    const cSquare = (0,_ui_selectors__WEBPACK_IMPORTED_MODULE_3__["default"])().computerGrid.querySelector(`.${pAttack}`);
    console.log(cSquare);
    if (cBoard.getHitStatus(pAttack) === 'hit') {
      cSquare.classList.add('hit');
    } else {
      cSquare.classList.add('miss');
    }
    const cAttack = c.decideAttack(pBoard);
    const cResult = c.launchAttack(pBoard, cAttack);
    console.log('cResult', cResult);
    console.log('cAttack', cAttack);
    const pSquare = (0,_ui_selectors__WEBPACK_IMPORTED_MODULE_3__["default"])().playerGrid.querySelector(`.${cAttack}`);
    console.log(pSquare);
    if (pBoard.getHitStatus(pAttack) === 'hit') {
      pSquare.classList.add('hit');
    } else {
      pSquare.classList.add('miss');
    }
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ui_main_game_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/main-game-ui */ "./src/ui/main-game-ui.js");
/* harmony import */ var _controller_game_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/game-controller */ "./src/controller/game-controller.js");




(0,_ui_main_game_ui__WEBPACK_IMPORTED_MODULE_1__.buildPlayerBoard)();
(0,_ui_main_game_ui__WEBPACK_IMPORTED_MODULE_1__.buildOpponentBoard)();
(0,_controller_game_controller__WEBPACK_IMPORTED_MODULE_2__["default"])();


/***/ }),

/***/ "./src/ui/main-game-ui.js":
/*!********************************!*\
  !*** ./src/ui/main-game-ui.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildOpponentBoard": () => (/* binding */ buildOpponentBoard),
/* harmony export */   "buildPlayerBoard": () => (/* binding */ buildPlayerBoard)
/* harmony export */ });
/* harmony import */ var domweaver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domweaver */ "./node_modules/domweaver/element-blueprint.js");


const playerBoard = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-board');
const opponentBoard = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'opponent-board');

const playerGridContainer = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'grid-container player-grid-container');

const opponentGridContainer = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])(
  'div',
  'grid-container opponent-grid-container'
);

const letters = 'ABCDEFGHIJ';

function writeGrid(parent) {
  for (let i = 0; i <= 9; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      parent.addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', `${letters[i]}${j}`));
    }
  }
}

writeGrid(playerGridContainer, 'player');
writeGrid(opponentGridContainer, 'opponent');

const letterBox = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'letter-box');
const numberBox = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'number-box');

function addLetters(parent) {
  for (let i = 0; i < letters.length; i += 1) {
    parent.addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', `${letters[i]}`).addText(`${letters[i]}`));
  }
}

function addNumbers(parent) {
  for (let i = 1; i <= 10; i += 1) {
    parent.addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', `${i}`).addText(`${i}`));
  }
}

addLetters(letterBox);
addNumbers(numberBox);

playerBoard
  .addChild(playerGridContainer)
  .addChild(letterBox)
  .addChild(numberBox);

opponentBoard
  .addChild(opponentGridContainer)
  .addChild(letterBox)
  .addChild(numberBox);

function buildPlayerBoard() {
  return document.body.appendChild(playerBoard.build());
}

function buildOpponentBoard() {
  return document.body.appendChild(opponentBoard.build());
}


/***/ }),

/***/ "./src/ui/selectors.js":
/*!*****************************!*\
  !*** ./src/ui/selectors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sel)
/* harmony export */ });
function byClass(className) {
  return document.getElementsByClassName(className)[0];
}

function sel() {
  return {
    playerGrid: byClass('player-grid-container'),
    computerGrid: byClass('opponent-grid-container'),
  };
}


/***/ }),

/***/ "./node_modules/domweaver/element-blueprint.js":
/*!*****************************************************!*\
  !*** ./node_modules/domweaver/element-blueprint.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bp)
/* harmony export */ });
/* harmony import */ var _element_maker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-maker.js */ "./node_modules/domweaver/element-maker.js");


function bp(type, className) {
  return new _element_maker_js__WEBPACK_IMPORTED_MODULE_0__["default"](type).addAttributes({
    class: className,
  });
}


/***/ }),

/***/ "./node_modules/domweaver/element-maker.js":
/*!*************************************************!*\
  !*** ./node_modules/domweaver/element-maker.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Element)
/* harmony export */ });
class Element {
    constructor(elementType) {
        this.elementType = elementType;
        this.attributes = {};
        this.children = [];
        this.eventListeners = {};
    }

    addAttributes(attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            this.attributes[key] = value;
        }
        return this;
    }

    addChild(childElement) {
        this.text = undefined;
        this.children.push(childElement);
        return this;
    }

    addText(text) {
        this.children = [];
        this.text = text;
        return this;
    }

    addEventListener(eventType, listener) {
        if (!this.eventListeners[eventType]) {
            this.eventListeners[eventType] = [];
        }
        this.eventListeners[eventType].push(listener);
        return this;
    }

    build() {
        const newElement = document.createElement(this.elementType);

        for (const [attribute, value] of Object.entries(this.attributes)) {
            if (typeof value === 'boolean') {
                newElement.toggleAttribute(attribute, value);
            } else {
                newElement.setAttribute(attribute, value);
            }
        }

        for (const [eventType, listeners] of Object.entries(
            this.eventListeners
        )) {
            listeners.forEach((listener) => {
                newElement.addEventListener(eventType, listener);
            });
        }

        if (this.text === undefined) {
            for (const child of this.children) {
                newElement.appendChild(child.build());
            }
        } else {
            const DOMtext = document.createTextNode(this.text);
            newElement.appendChild(DOMtext);
        }

        return newElement;
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsU0FBUztBQUM3QixzQkFBc0IscURBQUUsV0FBVyxXQUFXLEVBQUUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IscURBQUU7QUFDcEIsa0JBQWtCLHFEQUFFOztBQUVwQjtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEMsb0JBQW9CLHFEQUFFLFdBQVcsV0FBVyxjQUFjLFdBQVc7QUFDckU7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCLG9CQUFvQixxREFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5Qzs7QUFFMUI7QUFDZixhQUFhLHlEQUFPO0FBQ3BCO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzc2VzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NsYXNzZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9tYWluLWdhbWUtdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kb213ZWF2ZXIvZWxlbWVudC1ibHVlcHJpbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kb213ZWF2ZXIvZWxlbWVudC1tYWtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICoge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXG59ICovXFxuXFxuLnBsYXllci1ib2FyZCxcXG4ub3Bwb25lbnQtYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmx1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJlZDtcXG59XFxuXFxuLmxldHRlci1ib3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmxldHRlci1ib3ggPiBkaXYsXFxuLm51bWJlci1ib3ggPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlci1ib3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBRUc7O0FBRUg7O0VBRUUsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUNBQW1DO0FBQ3JDOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qICoge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXG59ICovXFxuXFxuLnBsYXllci1ib2FyZCxcXG4ub3Bwb25lbnQtYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmx1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJlZDtcXG59XFxuXFxuLmxldHRlci1ib3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmxldHRlci1ib3ggPiBkaXYsXFxuLm51bWJlci1ib3ggPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlci1ib3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYWNlZFNoaXBzID0gW107XG4gICAgdGhpcy5hdHRhY2tzID0gW107XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCkge1xuICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcC50eXBlO1xuICAgIGNvbnN0IHsgY29vcmRzIH0gPSBzaGlwO1xuICAgIGNvbnN0IHNoaXBIaXRzID0gbmV3IEFycmF5KGNvb3Jkcy5sZW5ndGgpLmZpbGwoJycpO1xuICAgIHRoaXMucGxhY2VkU2hpcHMucHVzaCh7IHNoaXAsIHNoaXBOYW1lLCBjb29yZHMsIGhpdHM6IHNoaXBIaXRzIH0pO1xuICAgIHJldHVybiB0aGlzLnBsYWNlZFNoaXBzO1xuICB9XG5cbiAgZ2V0U2hpcExvY2F0aW9uKHNoaXBUeXBlKSB7XG4gICAgY29uc3QgZm91bmRTaGlwID0gdGhpcy5wbGFjZWRTaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLnR5cGUgPT09IHNoaXBUeXBlKTtcbiAgICByZXR1cm4gZm91bmRTaGlwLmNvb3JkcztcbiAgfVxuXG4gIGlzQ29vcmRpbmF0ZUF0dGFja2VkKGNvb3JkKSB7XG4gICAgaWYgKGNvb3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2tzLnNvbWUoKGF0dGFjaykgPT4gYXR0YWNrLmNvb3JkID09PSBjb29yZCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICBpZiAodGhpcy5pc0Nvb3JkaW5hdGVBdHRhY2tlZChjb29yZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgd2FzSGl0ID0gdGhpcy5yZWNvcmRTaGlwQXR0YWNrKGNvb3JkKTtcbiAgICB0aGlzLmF0dGFja3MucHVzaCh7IGNvb3JkLCBzdGF0dXM6IHdhc0hpdCA/ICdoaXQnIDogJ21pc3MnIH0pO1xuICAgIHJldHVybiB0aGlzLmF0dGFja3M7XG4gIH1cblxuICByZWNvcmRTaGlwQXR0YWNrKGNvb3JkKSB7XG4gICAgbGV0IHdhc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMucGxhY2VkU2hpcHMgPSB0aGlzLnBsYWNlZFNoaXBzLm1hcCgoc2hpcE9iaikgPT4ge1xuICAgICAgY29uc3QgaGl0SW5kZXggPSBzaGlwT2JqLmNvb3Jkcy5maW5kSW5kZXgoXG4gICAgICAgIChzaGlwQ29vcmQpID0+IHNoaXBDb29yZCA9PT0gY29vcmRcbiAgICAgICk7XG4gICAgICBpZiAoaGl0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHdhc0hpdCA9IHRydWU7XG4gICAgICAgIHJldHVybiBHYW1lYm9hcmQudXBkYXRlU2hpcEhpdChzaGlwT2JqLCBoaXRJbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcE9iajtcbiAgICB9KTtcbiAgICByZXR1cm4gd2FzSGl0O1xuICB9XG5cbiAgZ2V0SGl0U3RhdHVzKGNvb3JkKSB7XG4gICAgY29uc3QgYXR0YWNrID0gdGhpcy5hdHRhY2tzLmZpbmQoKGhpdCkgPT4gaGl0LmNvb3JkID09PSBjb29yZCk7XG4gICAgcmV0dXJuIGF0dGFjayA/IGF0dGFjay5zdGF0dXMgOiBudWxsO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVNoaXBIaXQoc2hpcCwgaGl0SW5kZXgpIHtcbiAgICBjb25zdCB1cGRhdGVkSGl0cyA9IFsuLi5zaGlwLmhpdHNdO1xuICAgIHVwZGF0ZWRIaXRzW2hpdEluZGV4XSA9ICdoaXQnO1xuICAgIHJldHVybiB7IC4uLnNoaXAsIGhpdHM6IHVwZGF0ZWRIaXRzIH07XG4gIH1cblxuICBnZXRTaGlwSGl0cyhzaGlwVHlwZSkge1xuICAgIGNvbnN0IHRoZVNoaXAgPSB0aGlzLnBsYWNlZFNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PT0gc2hpcFR5cGUpO1xuICAgIHJldHVybiB0aGVTaGlwLmhpdHM7XG4gIH1cblxuICBnZXRBbGxIaXRzKCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFja3M7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgbGF1bmNoQXR0YWNrKGdhbWVib2FyZCwgY29vcmQpIHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpID8gdGhpcyA6IGZhbHNlO1xuICB9XG5cbiAgZGVjaWRlQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XG4gICAgY29uc3QgY2hhciA9IGxldHRlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldHRlcnMubGVuZ3RoKSk7XG4gICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGV0dGVycy5sZW5ndGgpO1xuICAgIGlmIChnYW1lYm9hcmQuaXNDb29yZGluYXRlQXR0YWNrZWQoYCR7Y2hhciArIG51bX1gKSkge1xuICAgICAgdGhpcy5kZWNpZGVBdHRhY2soZ2FtZWJvYXJkKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke2NoYXIgKyBudW19YDtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICB0aGlzLnR5cGUgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICAgIHRoaXMuY29vcmRzID0gb2JqW3RoaXMudHlwZV07XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmNvb3Jkcy5sZW5ndGg7XG4gICAgdGhpcy5ocCA9IHRoaXMuY29vcmRzLmxlbmd0aDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5ocCA+PSAxKSB7XG4gICAgICB0aGlzLmhwIC09IDE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmhwO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhwID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uL2NsYXNzZXMvcGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4uL2NsYXNzZXMvc2hpcCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uL2NsYXNzZXMvZ2FtZWJvYXJkJztcbmltcG9ydCBzZWwgZnJvbSAnLi4vdWkvc2VsZWN0b3JzJztcblxuY29uc3Qgc2hpcHMgPSB7XG4gIGNhcjogWydDMycsICdEMycsICdFMycsICdGMycsICdHMyddLFxuICBiYXQ6IFsnQTUnLCAnQTYnLCAnQTcnLCAnQTgnXSxcbiAgY3J1OiBbJ0EyJywgJ0IyJywgJ0MyJ10sXG4gIHN1YjogWydGNicsICdGNycsICdGOCddLFxuICBkZXM6IFsnRDcnLCAnRTcnXSxcbn07XG5cbmNvbnN0IHAgPSBuZXcgUGxheWVyKCdDbG93ZHknKTtcbmNvbnN0IGMgPSBuZXcgUGxheWVyKCdDb21wdXRlcicpO1xuXG5jb25zdCBwQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zdCBjQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4vLyBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXBLZXkpID0+IHtcbiAgY29uc3Qgc2hpcE9iaiA9IHsgW3NoaXBLZXldOiBzaGlwc1tzaGlwS2V5XSB9O1xuICBwQm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKHNoaXBPYmopKTtcbn0pO1xuXG5PYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoc2hpcEtleSkgPT4ge1xuICBjb25zdCBzaGlwT2JqID0geyBbc2hpcEtleV06IHNoaXBzW3NoaXBLZXldIH07XG4gIGNCb2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoc2hpcE9iaikpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBzZWwoKS5jb21wdXRlckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBBdHRhY2sgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgY29uc3QgcFJlc3VsdCA9IHAubGF1bmNoQXR0YWNrKGNCb2FyZCwgcEF0dGFjayk7XG4gICAgY29uc29sZS5sb2coJ3BBdHRhY2snLCBwQXR0YWNrKTtcbiAgICBpZiAoIXBSZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY1NxdWFyZSA9IHNlbCgpLmNvbXB1dGVyR3JpZC5xdWVyeVNlbGVjdG9yKGAuJHtwQXR0YWNrfWApO1xuICAgIGNvbnNvbGUubG9nKGNTcXVhcmUpO1xuICAgIGlmIChjQm9hcmQuZ2V0SGl0U3RhdHVzKHBBdHRhY2spID09PSAnaGl0Jykge1xuICAgICAgY1NxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY1NxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfVxuICAgIGNvbnN0IGNBdHRhY2sgPSBjLmRlY2lkZUF0dGFjayhwQm9hcmQpO1xuICAgIGNvbnN0IGNSZXN1bHQgPSBjLmxhdW5jaEF0dGFjayhwQm9hcmQsIGNBdHRhY2spO1xuICAgIGNvbnNvbGUubG9nKCdjUmVzdWx0JywgY1Jlc3VsdCk7XG4gICAgY29uc29sZS5sb2coJ2NBdHRhY2snLCBjQXR0YWNrKTtcbiAgICBjb25zdCBwU3F1YXJlID0gc2VsKCkucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yKGAuJHtjQXR0YWNrfWApO1xuICAgIGNvbnNvbGUubG9nKHBTcXVhcmUpO1xuICAgIGlmIChwQm9hcmQuZ2V0SGl0U3RhdHVzKHBBdHRhY2spID09PSAnaGl0Jykge1xuICAgICAgcFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYnVpbGRQbGF5ZXJCb2FyZCwgYnVpbGRPcHBvbmVudEJvYXJkIH0gZnJvbSAnLi91aS9tYWluLWdhbWUtdWknO1xuaW1wb3J0IGdhbWVMb29wIGZyb20gJy4vY29udHJvbGxlci9nYW1lLWNvbnRyb2xsZXInO1xuXG5idWlsZFBsYXllckJvYXJkKCk7XG5idWlsZE9wcG9uZW50Qm9hcmQoKTtcbmdhbWVMb29wKCk7XG4iLCJpbXBvcnQgYnAgZnJvbSAnZG9td2VhdmVyJztcblxuY29uc3QgcGxheWVyQm9hcmQgPSBicCgnZGl2JywgJ3BsYXllci1ib2FyZCcpO1xuY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGJwKCdkaXYnLCAnb3Bwb25lbnQtYm9hcmQnKTtcblxuY29uc3QgcGxheWVyR3JpZENvbnRhaW5lciA9IGJwKCdkaXYnLCAnZ3JpZC1jb250YWluZXIgcGxheWVyLWdyaWQtY29udGFpbmVyJyk7XG5cbmNvbnN0IG9wcG9uZW50R3JpZENvbnRhaW5lciA9IGJwKFxuICAnZGl2JyxcbiAgJ2dyaWQtY29udGFpbmVyIG9wcG9uZW50LWdyaWQtY29udGFpbmVyJ1xuKTtcblxuY29uc3QgbGV0dGVycyA9ICdBQkNERUZHSElKJztcblxuZnVuY3Rpb24gd3JpdGVHcmlkKHBhcmVudCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaiArPSAxKSB7XG4gICAgICBwYXJlbnQuYWRkQ2hpbGQoYnAoJ2RpdicsIGAke2xldHRlcnNbaV19JHtqfWApKTtcbiAgICB9XG4gIH1cbn1cblxud3JpdGVHcmlkKHBsYXllckdyaWRDb250YWluZXIsICdwbGF5ZXInKTtcbndyaXRlR3JpZChvcHBvbmVudEdyaWRDb250YWluZXIsICdvcHBvbmVudCcpO1xuXG5jb25zdCBsZXR0ZXJCb3ggPSBicCgnZGl2JywgJ2xldHRlci1ib3gnKTtcbmNvbnN0IG51bWJlckJveCA9IGJwKCdkaXYnLCAnbnVtYmVyLWJveCcpO1xuXG5mdW5jdGlvbiBhZGRMZXR0ZXJzKHBhcmVudCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBwYXJlbnQuYWRkQ2hpbGQoYnAoJ2RpdicsIGAke2xldHRlcnNbaV19YCkuYWRkVGV4dChgJHtsZXR0ZXJzW2ldfWApKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGROdW1iZXJzKHBhcmVudCkge1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgcGFyZW50LmFkZENoaWxkKGJwKCdkaXYnLCBgJHtpfWApLmFkZFRleHQoYCR7aX1gKSk7XG4gIH1cbn1cblxuYWRkTGV0dGVycyhsZXR0ZXJCb3gpO1xuYWRkTnVtYmVycyhudW1iZXJCb3gpO1xuXG5wbGF5ZXJCb2FyZFxuICAuYWRkQ2hpbGQocGxheWVyR3JpZENvbnRhaW5lcilcbiAgLmFkZENoaWxkKGxldHRlckJveClcbiAgLmFkZENoaWxkKG51bWJlckJveCk7XG5cbm9wcG9uZW50Qm9hcmRcbiAgLmFkZENoaWxkKG9wcG9uZW50R3JpZENvbnRhaW5lcilcbiAgLmFkZENoaWxkKGxldHRlckJveClcbiAgLmFkZENoaWxkKG51bWJlckJveCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFBsYXllckJvYXJkKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZC5idWlsZCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkT3Bwb25lbnRCb2FyZCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3Bwb25lbnRCb2FyZC5idWlsZCgpKTtcbn1cbiIsImZ1bmN0aW9uIGJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbCgpIHtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJHcmlkOiBieUNsYXNzKCdwbGF5ZXItZ3JpZC1jb250YWluZXInKSxcbiAgICBjb21wdXRlckdyaWQ6IGJ5Q2xhc3MoJ29wcG9uZW50LWdyaWQtY29udGFpbmVyJyksXG4gIH07XG59XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tICcuL2VsZW1lbnQtbWFrZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBicCh0eXBlLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHR5cGUpLmFkZEF0dHJpYnV0ZXMoe1xuICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFR5cGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgYWRkQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZENoaWxkKGNoaWxkRWxlbWVudCkge1xuICAgICAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUZXh0KHRleHQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgICAgIGZvciAoY29uc3QgW2F0dHJpYnV0ZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQudG9nZ2xlQXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgW2V2ZW50VHlwZSwgbGlzdGVuZXJzXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQuYnVpbGQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBET010ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0KTtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoRE9NdGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9