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
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\n  border: solid 1px gray;\n} */\n\n.player-board,\n.opponent-board {\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 1fr 10fr;\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 3rem;\n}\n\n.grid-container {\n  grid-column: 2;\n  grid-row: 2;\n  border: solid 1px blue;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.grid-container > div {\n  border: solid 1px red;\n}\n\n.letter-box {\n  display: grid;\n  grid-column: 1;\n  grid-row: 2;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.letter-box > div,\n.number-box > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.number-box {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.hit {\n  background-color: orangered;\n}\n\n.miss {\n  background-color: blue;\n}\n\n.logAttacks {\n  height: 2rem;\n}\n\n.win-modal {\n  height: 10rem;\n  width: 10rem;\n}\n\n.ship-choice-container {\n  grid-column-start: 2;\n}\n\n.new-game-modal {\n  background-color: rgb(245, 208, 152);\n  position: fixed;\n  left: 0;\n  top: 0;\n  transform: translate(calc(50vw - 50%), calc(50vh - 50%));\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1.3fr;\n}\n\n.place-ships-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.place-ships-grid > div {\n  border: solid green 1px;\n  height: 1rem;\n  width: 1rem;\n}\n\n.ship-size {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin: 0.2rem;\n}\n\n.rotate-button {\n  height: 1.5rem;\n  width: 4rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.ship-choice {\n  background-color: orange;\n  margin: 0.3rem;\n  padding: 0.2rem;\n}\n\n.size-unit {\n  width: 1rem;\n  height: 1rem;\n  border: solid black 1px;\n}\n\n.input-container {\n  grid-row-start: 2;\n  display: flex;\n  gap: .3rem;\n  flex-direction: column;\n  width: 3rem;\n  align-self: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;;EAEE,aAAa;EACb,+BAA+B;EAC/B,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,WAAW;EACX,mCAAmC;AACrC;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,cAAc;EACd,WAAW;AACb;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,OAAO;EACP,MAAM;EACN,wDAAwD;EACxD,aAAa;EACb,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB","sourcesContent":["/* * {\n  border: solid 1px gray;\n} */\n\n.player-board,\n.opponent-board {\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 1fr 10fr;\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 3rem;\n}\n\n.grid-container {\n  grid-column: 2;\n  grid-row: 2;\n  border: solid 1px blue;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.grid-container > div {\n  border: solid 1px red;\n}\n\n.letter-box {\n  display: grid;\n  grid-column: 1;\n  grid-row: 2;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.letter-box > div,\n.number-box > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.number-box {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.hit {\n  background-color: orangered;\n}\n\n.miss {\n  background-color: blue;\n}\n\n.logAttacks {\n  height: 2rem;\n}\n\n.win-modal {\n  height: 10rem;\n  width: 10rem;\n}\n\n.ship-choice-container {\n  grid-column-start: 2;\n}\n\n.new-game-modal {\n  background-color: rgb(245, 208, 152);\n  position: fixed;\n  left: 0;\n  top: 0;\n  transform: translate(calc(50vw - 50%), calc(50vh - 50%));\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1.3fr;\n}\n\n.place-ships-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.place-ships-grid > div {\n  border: solid green 1px;\n  height: 1rem;\n  width: 1rem;\n}\n\n.ship-size {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin: 0.2rem;\n}\n\n.rotate-button {\n  height: 1.5rem;\n  width: 4rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.ship-choice {\n  background-color: orange;\n  margin: 0.3rem;\n  padding: 0.2rem;\n}\n\n.size-unit {\n  width: 1rem;\n  height: 1rem;\n  border: solid black 1px;\n}\n\n.input-container {\n  grid-row-start: 2;\n  display: flex;\n  gap: .3rem;\n  flex-direction: column;\n  width: 3rem;\n  align-self: center;\n}"],"sourceRoot":""}]);
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
        shipObj.ship.hit();
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

  isGameWon() {
    let gameIsWon = true;
    this.placedShips.forEach((place) => {
      if (!place.ship.isSunk()) {
        gameIsWon = false;
      }
    });
    return gameIsWon;
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
    const num = Math.floor(Math.random() * letters.length + 1);
    if (gameboard.isCoordinateAttacked(`${char + num}`)) {
      return this.decideAttack(gameboard);
    }
    return `${char + num}`;
  }

  getName() {
    return this.name;
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
/* harmony import */ var _ui_win_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/win-modal */ "./src/ui/win-modal.js");






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
    if (!pResult) {
      return;
    }
    const cSquare = (0,_ui_selectors__WEBPACK_IMPORTED_MODULE_3__["default"])().computerGrid.querySelector(`.${pAttack}`);
    if (cBoard.getHitStatus(pAttack) === 'hit') {
      cSquare.classList.add('hit');
    } else {
      cSquare.classList.add('miss');
    }
    if (cBoard.isGameWon()) {
      const pName = p.getName();
      (0,_ui_win_modal__WEBPACK_IMPORTED_MODULE_4__["default"])(pName);
    }
    const cAttack = c.decideAttack(pBoard);
    const cResult = c.launchAttack(pBoard, cAttack);
    console.log('cResult', cResult);
    console.log('cAttack', cAttack);
    const pSquare = (0,_ui_selectors__WEBPACK_IMPORTED_MODULE_3__["default"])().playerGrid.querySelector(`.${cAttack}`);
    if (pBoard.isGameWon()) {
      const cName = c.getName();
      (0,_ui_win_modal__WEBPACK_IMPORTED_MODULE_4__["default"])(cName)
    }

    if (pBoard.getHitStatus(cAttack) === 'hit') {
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
/* harmony import */ var _ui_start_game_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/start-game-ui */ "./src/ui/start-game-ui.js");





(0,_ui_main_game_ui__WEBPACK_IMPORTED_MODULE_1__.buildPlayerBoard)();
(0,_ui_main_game_ui__WEBPACK_IMPORTED_MODULE_1__.buildOpponentBoard)();
(0,_ui_start_game_ui__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_controller_game_controller__WEBPACK_IMPORTED_MODULE_2__["default"])();

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

writeGrid(playerGridContainer);
writeGrid(opponentGridContainer);

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

/***/ "./src/ui/start-game-ui.js":
/*!*********************************!*\
  !*** ./src/ui/start-game-ui.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildNewGameModal)
/* harmony export */ });
/* harmony import */ var domweaver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domweaver */ "./node_modules/domweaver/element-blueprint.js");


const newGameModal = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'new-game-modal');
const placeShipsGrid = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'place-ships-grid');
const rotateButton = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'rotate-button').addText('Rotate');

function writeGrid(parent) {
  const letters = 'ABCDE';
  for (let i = 0; i <= 4; i += 1) {
    for (let j = 1; j <= 5; j += 1) {
      parent.addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', `${letters[i]}${j}`));
    }
  }
}

writeGrid(placeShipsGrid);

const shipChoiceContainer = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'ship-choice-container');

function attachShips(name, size) {
  const shipChoice = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'ship-choice');
  const shipName = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'ship-name').addText(name);
  shipChoice.addChild(shipName);
  const shipSize = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'ship-size');
  for (let i = 0; i < size; i += 1) {
    shipSize.addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'size-unit'));
  }
  shipChoice.addChild(shipSize);
  shipChoiceContainer.addChild(shipChoice);
}

attachShips('CARRIER', 5);
attachShips('BATTLESHIP', 4);
attachShips('CRUISER', 3);
attachShips('SUBMARINE', 3);
attachShips('DESTROYER', 2);

const inputContainer = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'input-container')
  .addChild(
    (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('input').addAttributes({
      type: 'text',
    })
  )
  .addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'input-button').addText('Place Ship'));

newGameModal
  .addChild(placeShipsGrid)
  .addChild(rotateButton)
  .addChild(shipChoiceContainer)
  .addChild(inputContainer);

function buildNewGameModal() {
  document.body.appendChild(newGameModal.build());
}


/***/ }),

/***/ "./src/ui/win-modal.js":
/*!*****************************!*\
  !*** ./src/ui/win-modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendWinModal)
/* harmony export */ });
/* harmony import */ var domweaver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domweaver */ "./node_modules/domweaver/element-blueprint.js");


function appendWinModal(playerName) {
  const modal = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'win-modal')
    .addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'winning-player').addText(`${playerName} won`))
    .addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'play-again-button').addText('Play Again'))
    .build();
  document.body.appendChild(modal);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscURBQUU7O0FBRTlCO0FBQ0EscUJBQXFCLHFEQUFFO0FBQ3ZCLG1CQUFtQixxREFBRTtBQUNyQjtBQUNBLG1CQUFtQixxREFBRTtBQUNyQixrQkFBa0IsVUFBVTtBQUM1QixzQkFBc0IscURBQUU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIscURBQUU7QUFDekI7QUFDQSxJQUFJLHFEQUFFO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQSxZQUFZLHFEQUFFOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckQyQjs7QUFFWjtBQUNmLGdCQUFnQixxREFBRTtBQUNsQixjQUFjLHFEQUFFLHFDQUFxQyxZQUFZO0FBQ2pFLGNBQWMscURBQUU7QUFDaEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUnlDOztBQUUxQjtBQUNmLGFBQWEseURBQU87QUFDcEI7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzc2VzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NsYXNzZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9nYW1lLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL21haW4tZ2FtZS11aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3N0YXJ0LWdhbWUtdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS93aW4tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kb213ZWF2ZXIvZWxlbWVudC1ibHVlcHJpbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kb213ZWF2ZXIvZWxlbWVudC1tYWtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICoge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXG59ICovXFxuXFxuLnBsYXllci1ib2FyZCxcXG4ub3Bwb25lbnQtYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmx1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJlZDtcXG59XFxuXFxuLmxldHRlci1ib3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmxldHRlci1ib3ggPiBkaXYsXFxuLm51bWJlci1ib3ggPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlci1ib3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5sb2dBdHRhY2tzIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLndpbi1tb2RhbCB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG5cXG4uc2hpcC1jaG9pY2UtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXG5cXG4ubmV3LWdhbWUtbW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjA4LCAxNTIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoNTB2dyAtIDUwJSksIGNhbGMoNTB2aCAtIDUwJSkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjNmcjtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1ncmlkID4gZGl2IHtcXG4gIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi5zaGlwLXNpemUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBtYXJnaW46IDAuMnJlbTtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogNHJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1jaG9pY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgbWFyZ2luOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcblxcbi5zaXplLXVuaXQge1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC4zcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztHQUVHOztBQUVIOztFQUVFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztFQUNYLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sd0RBQXdEO0VBQ3hELGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAqIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XFxufSAqL1xcblxcbi5wbGF5ZXItYm9hcmQsXFxuLm9wcG9uZW50LWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsdWU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XFxufVxcblxcbi5sZXR0ZXItYm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5sZXR0ZXItYm94ID4gZGl2LFxcbi5udW1iZXItYm94ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5udW1iZXItYm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubG9nQXR0YWNrcyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi53aW4tbW9kYWwge1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLnNoaXAtY2hvaWNlLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG59XFxuXFxuLm5ldy1nYW1lLW1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIwOCwgMTUyKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDUwdncgLSA1MCUpLCBjYWxjKDUwdmggLSA1MCUpKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS4zZnI7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4ucGxhY2Utc2hpcHMtZ3JpZCA+IGRpdiB7XFxuICBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uc2hpcC1zaXplIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgbWFyZ2luOiAwLjJyZW07XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDRyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtY2hvaWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIG1hcmdpbjogMC4zcmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4uc2l6ZS11bml0IHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuM3JlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogM3JlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxhY2VkU2hpcHMgPSBbXTtcbiAgICB0aGlzLmF0dGFja3MgPSBbXTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwLnR5cGU7XG4gICAgY29uc3QgeyBjb29yZHMgfSA9IHNoaXA7XG4gICAgY29uc3Qgc2hpcEhpdHMgPSBuZXcgQXJyYXkoY29vcmRzLmxlbmd0aCkuZmlsbCgnJyk7XG4gICAgdGhpcy5wbGFjZWRTaGlwcy5wdXNoKHsgc2hpcCwgc2hpcE5hbWUsIGNvb3JkcywgaGl0czogc2hpcEhpdHMgfSk7XG4gICAgcmV0dXJuIHRoaXMucGxhY2VkU2hpcHM7XG4gIH1cblxuICBcblxuICBnZXRTaGlwTG9jYXRpb24oc2hpcFR5cGUpIHtcbiAgICBjb25zdCBmb3VuZFNoaXAgPSB0aGlzLnBsYWNlZFNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PT0gc2hpcFR5cGUpO1xuICAgIHJldHVybiBmb3VuZFNoaXAuY29vcmRzO1xuICB9XG5cbiAgaXNDb29yZGluYXRlQXR0YWNrZWQoY29vcmQpIHtcbiAgICBpZiAoY29vcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja3Muc29tZSgoYXR0YWNrKSA9PiBhdHRhY2suY29vcmQgPT09IGNvb3JkKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgIGlmICh0aGlzLmlzQ29vcmRpbmF0ZUF0dGFja2VkKGNvb3JkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB3YXNIaXQgPSB0aGlzLnJlY29yZFNoaXBBdHRhY2soY29vcmQpO1xuICAgIHRoaXMuYXR0YWNrcy5wdXNoKHsgY29vcmQsIHN0YXR1czogd2FzSGl0ID8gJ2hpdCcgOiAnbWlzcycgfSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrcztcbiAgfVxuXG4gIHJlY29yZFNoaXBBdHRhY2soY29vcmQpIHtcbiAgICBsZXQgd2FzSGl0ID0gZmFsc2U7XG4gICAgdGhpcy5wbGFjZWRTaGlwcyA9IHRoaXMucGxhY2VkU2hpcHMubWFwKChzaGlwT2JqKSA9PiB7XG4gICAgICBjb25zdCBoaXRJbmRleCA9IHNoaXBPYmouY29vcmRzLmZpbmRJbmRleChcbiAgICAgICAgKHNoaXBDb29yZCkgPT4gc2hpcENvb3JkID09PSBjb29yZFxuICAgICAgKTtcbiAgICAgIGlmIChoaXRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgd2FzSGl0ID0gdHJ1ZTtcbiAgICAgICAgc2hpcE9iai5zaGlwLmhpdCgpO1xuICAgICAgICByZXR1cm4gR2FtZWJvYXJkLnVwZGF0ZVNoaXBIaXQoc2hpcE9iaiwgaGl0SW5kZXgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBPYmo7XG4gICAgfSk7XG4gICAgcmV0dXJuIHdhc0hpdDtcbiAgfVxuXG4gIGdldEhpdFN0YXR1cyhjb29yZCkge1xuICAgIGNvbnN0IGF0dGFjayA9IHRoaXMuYXR0YWNrcy5maW5kKChoaXQpID0+IGhpdC5jb29yZCA9PT0gY29vcmQpO1xuICAgIHJldHVybiBhdHRhY2sgPyBhdHRhY2suc3RhdHVzIDogbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVTaGlwSGl0KHNoaXAsIGhpdEluZGV4KSB7XG4gICAgY29uc3QgdXBkYXRlZEhpdHMgPSBbLi4uc2hpcC5oaXRzXTtcbiAgICB1cGRhdGVkSGl0c1toaXRJbmRleF0gPSAnaGl0JztcblxuICAgIHJldHVybiB7IC4uLnNoaXAsIGhpdHM6IHVwZGF0ZWRIaXRzIH07XG4gIH1cblxuICBnZXRTaGlwSGl0cyhzaGlwVHlwZSkge1xuICAgIGNvbnN0IHRoZVNoaXAgPSB0aGlzLnBsYWNlZFNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PT0gc2hpcFR5cGUpO1xuICAgIHJldHVybiB0aGVTaGlwLmhpdHM7XG4gIH1cblxuICBnZXRBbGxIaXRzKCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFja3M7XG4gIH1cblxuICBpc0dhbWVXb24oKSB7XG4gICAgbGV0IGdhbWVJc1dvbiA9IHRydWU7XG4gICAgdGhpcy5wbGFjZWRTaGlwcy5mb3JFYWNoKChwbGFjZSkgPT4ge1xuICAgICAgaWYgKCFwbGFjZS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGdhbWVJc1dvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBnYW1lSXNXb247XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgbGF1bmNoQXR0YWNrKGdhbWVib2FyZCwgY29vcmQpIHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpID8gdGhpcyA6IGZhbHNlO1xuICB9XG5cbiAgZGVjaWRlQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XG4gICAgY29uc3QgY2hhciA9IGxldHRlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldHRlcnMubGVuZ3RoKSk7XG4gICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGV0dGVycy5sZW5ndGggKyAxKTtcbiAgICBpZiAoZ2FtZWJvYXJkLmlzQ29vcmRpbmF0ZUF0dGFja2VkKGAke2NoYXIgKyBudW19YCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY2lkZUF0dGFjayhnYW1lYm9hcmQpO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Y2hhciArIG51bX1gO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIHRoaXMudHlwZSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gICAgdGhpcy5jb29yZHMgPSBvYmpbdGhpcy50eXBlXTtcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMuY29vcmRzLmxlbmd0aDtcbiAgICB0aGlzLmhwID0gdGhpcy5jb29yZHMubGVuZ3RoO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhwID49IDEpIHtcbiAgICAgIHRoaXMuaHAgLT0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHA7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaHAgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY2xhc3Nlcy9wbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vY2xhc3Nlcy9zaGlwJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vY2xhc3Nlcy9nYW1lYm9hcmQnO1xuaW1wb3J0IHNlbCBmcm9tICcuLi91aS9zZWxlY3RvcnMnO1xuaW1wb3J0IGFwcGVuZFdpbk1vZGFsIGZyb20gJy4uL3VpL3dpbi1tb2RhbCc7XG5cbmNvbnN0IHNoaXBzID0ge1xuICBjYXI6IFsnQzMnLCAnRDMnLCAnRTMnLCAnRjMnLCAnRzMnXSxcbiAgYmF0OiBbJ0E1JywgJ0E2JywgJ0E3JywgJ0E4J10sXG4gIGNydTogWydBMicsICdCMicsICdDMiddLFxuICBzdWI6IFsnRjYnLCAnRjcnLCAnRjgnXSxcbiAgZGVzOiBbJ0Q3JywgJ0U3J10sXG59O1xuXG5jb25zdCBwID0gbmV3IFBsYXllcignQ2xvd2R5Jyk7XG5jb25zdCBjID0gbmV3IFBsYXllcignQ29tcHV0ZXInKTtcblxuY29uc3QgcEJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuY29uc3QgY0JvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuLy8gbGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbk9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwS2V5KSA9PiB7XG4gIGNvbnN0IHNoaXBPYmogPSB7IFtzaGlwS2V5XTogc2hpcHNbc2hpcEtleV0gfTtcbiAgcEJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcChzaGlwT2JqKSk7XG59KTtcblxuT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXBLZXkpID0+IHtcbiAgY29uc3Qgc2hpcE9iaiA9IHsgW3NoaXBLZXldOiBzaGlwc1tzaGlwS2V5XSB9O1xuICBjQm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKHNoaXBPYmopKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgc2VsKCkuY29tcHV0ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBwQXR0YWNrID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIGNvbnN0IHBSZXN1bHQgPSBwLmxhdW5jaEF0dGFjayhjQm9hcmQsIHBBdHRhY2spO1xuICAgIGlmICghcFJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjU3F1YXJlID0gc2VsKCkuY29tcHV0ZXJHcmlkLnF1ZXJ5U2VsZWN0b3IoYC4ke3BBdHRhY2t9YCk7XG4gICAgaWYgKGNCb2FyZC5nZXRIaXRTdGF0dXMocEF0dGFjaykgPT09ICdoaXQnKSB7XG4gICAgICBjU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9XG4gICAgaWYgKGNCb2FyZC5pc0dhbWVXb24oKSkge1xuICAgICAgY29uc3QgcE5hbWUgPSBwLmdldE5hbWUoKTtcbiAgICAgIGFwcGVuZFdpbk1vZGFsKHBOYW1lKTtcbiAgICB9XG4gICAgY29uc3QgY0F0dGFjayA9IGMuZGVjaWRlQXR0YWNrKHBCb2FyZCk7XG4gICAgY29uc3QgY1Jlc3VsdCA9IGMubGF1bmNoQXR0YWNrKHBCb2FyZCwgY0F0dGFjayk7XG4gICAgY29uc29sZS5sb2coJ2NSZXN1bHQnLCBjUmVzdWx0KTtcbiAgICBjb25zb2xlLmxvZygnY0F0dGFjaycsIGNBdHRhY2spO1xuICAgIGNvbnN0IHBTcXVhcmUgPSBzZWwoKS5wbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3IoYC4ke2NBdHRhY2t9YCk7XG4gICAgaWYgKHBCb2FyZC5pc0dhbWVXb24oKSkge1xuICAgICAgY29uc3QgY05hbWUgPSBjLmdldE5hbWUoKTtcbiAgICAgIGFwcGVuZFdpbk1vZGFsKGNOYW1lKVxuICAgIH1cblxuICAgIGlmIChwQm9hcmQuZ2V0SGl0U3RhdHVzKGNBdHRhY2spID09PSAnaGl0Jykge1xuICAgICAgcFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGJ1aWxkUGxheWVyQm9hcmQsIGJ1aWxkT3Bwb25lbnRCb2FyZCB9IGZyb20gJy4vdWkvbWFpbi1nYW1lLXVpJztcbmltcG9ydCBnYW1lTG9vcCBmcm9tICcuL2NvbnRyb2xsZXIvZ2FtZS1jb250cm9sbGVyJztcbmltcG9ydCBidWlsZE5ld0dhbWVNb2RhbCBmcm9tICcuL3VpL3N0YXJ0LWdhbWUtdWknO1xuXG5idWlsZFBsYXllckJvYXJkKCk7XG5idWlsZE9wcG9uZW50Qm9hcmQoKTtcbmJ1aWxkTmV3R2FtZU1vZGFsKClcbmdhbWVMb29wKCk7IiwiaW1wb3J0IGJwIGZyb20gJ2RvbXdlYXZlcic7XG5cbmNvbnN0IHBsYXllckJvYXJkID0gYnAoJ2RpdicsICdwbGF5ZXItYm9hcmQnKTtcbmNvbnN0IG9wcG9uZW50Qm9hcmQgPSBicCgnZGl2JywgJ29wcG9uZW50LWJvYXJkJyk7XG5cbmNvbnN0IHBsYXllckdyaWRDb250YWluZXIgPSBicCgnZGl2JywgJ2dyaWQtY29udGFpbmVyIHBsYXllci1ncmlkLWNvbnRhaW5lcicpO1xuXG5jb25zdCBvcHBvbmVudEdyaWRDb250YWluZXIgPSBicChcbiAgJ2RpdicsXG4gICdncmlkLWNvbnRhaW5lciBvcHBvbmVudC1ncmlkLWNvbnRhaW5lcidcbik7XG5cbmNvbnN0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XG5cbmZ1bmN0aW9uIHdyaXRlR3JpZChwYXJlbnQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGogKz0gMSkge1xuICAgICAgcGFyZW50LmFkZENoaWxkKGJwKCdkaXYnLCBgJHtsZXR0ZXJzW2ldfSR7an1gKSk7XG4gICAgfVxuICB9XG59XG5cbndyaXRlR3JpZChwbGF5ZXJHcmlkQ29udGFpbmVyKTtcbndyaXRlR3JpZChvcHBvbmVudEdyaWRDb250YWluZXIpO1xuXG5jb25zdCBsZXR0ZXJCb3ggPSBicCgnZGl2JywgJ2xldHRlci1ib3gnKTtcbmNvbnN0IG51bWJlckJveCA9IGJwKCdkaXYnLCAnbnVtYmVyLWJveCcpO1xuXG5mdW5jdGlvbiBhZGRMZXR0ZXJzKHBhcmVudCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBwYXJlbnQuYWRkQ2hpbGQoYnAoJ2RpdicsIGAke2xldHRlcnNbaV19YCkuYWRkVGV4dChgJHtsZXR0ZXJzW2ldfWApKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGROdW1iZXJzKHBhcmVudCkge1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgcGFyZW50LmFkZENoaWxkKGJwKCdkaXYnLCBgJHtpfWApLmFkZFRleHQoYCR7aX1gKSk7XG4gIH1cbn1cblxuYWRkTGV0dGVycyhsZXR0ZXJCb3gpO1xuYWRkTnVtYmVycyhudW1iZXJCb3gpO1xuXG5wbGF5ZXJCb2FyZFxuICAuYWRkQ2hpbGQocGxheWVyR3JpZENvbnRhaW5lcilcbiAgLmFkZENoaWxkKGxldHRlckJveClcbiAgLmFkZENoaWxkKG51bWJlckJveCk7XG5cbm9wcG9uZW50Qm9hcmRcbiAgLmFkZENoaWxkKG9wcG9uZW50R3JpZENvbnRhaW5lcilcbiAgLmFkZENoaWxkKGxldHRlckJveClcbiAgLmFkZENoaWxkKG51bWJlckJveCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFBsYXllckJvYXJkKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZC5idWlsZCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkT3Bwb25lbnRCb2FyZCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3Bwb25lbnRCb2FyZC5idWlsZCgpKTtcbn1cblxuIiwiZnVuY3Rpb24gYnlDbGFzcyhjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VsKCkge1xuICByZXR1cm4ge1xuICAgIHBsYXllckdyaWQ6IGJ5Q2xhc3MoJ3BsYXllci1ncmlkLWNvbnRhaW5lcicpLFxuICAgIGNvbXB1dGVyR3JpZDogYnlDbGFzcygnb3Bwb25lbnQtZ3JpZC1jb250YWluZXInKSxcbiAgfTtcbn1cbiIsImltcG9ydCBicCBmcm9tICdkb213ZWF2ZXInO1xuXG5jb25zdCBuZXdHYW1lTW9kYWwgPSBicCgnZGl2JywgJ25ldy1nYW1lLW1vZGFsJyk7XG5jb25zdCBwbGFjZVNoaXBzR3JpZCA9IGJwKCdkaXYnLCAncGxhY2Utc2hpcHMtZ3JpZCcpO1xuY29uc3Qgcm90YXRlQnV0dG9uID0gYnAoJ2J1dHRvbicsICdyb3RhdGUtYnV0dG9uJykuYWRkVGV4dCgnUm90YXRlJyk7XG5cbmZ1bmN0aW9uIHdyaXRlR3JpZChwYXJlbnQpIHtcbiAgY29uc3QgbGV0dGVycyA9ICdBQkNERSc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDU7IGogKz0gMSkge1xuICAgICAgcGFyZW50LmFkZENoaWxkKGJwKCdkaXYnLCBgJHtsZXR0ZXJzW2ldfSR7an1gKSk7XG4gICAgfVxuICB9XG59XG5cbndyaXRlR3JpZChwbGFjZVNoaXBzR3JpZCk7XG5cbmNvbnN0IHNoaXBDaG9pY2VDb250YWluZXIgPSBicCgnZGl2JywgJ3NoaXAtY2hvaWNlLWNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBhdHRhY2hTaGlwcyhuYW1lLCBzaXplKSB7XG4gIGNvbnN0IHNoaXBDaG9pY2UgPSBicCgnZGl2JywgJ3NoaXAtY2hvaWNlJyk7XG4gIGNvbnN0IHNoaXBOYW1lID0gYnAoJ2RpdicsICdzaGlwLW5hbWUnKS5hZGRUZXh0KG5hbWUpO1xuICBzaGlwQ2hvaWNlLmFkZENoaWxkKHNoaXBOYW1lKTtcbiAgY29uc3Qgc2hpcFNpemUgPSBicCgnZGl2JywgJ3NoaXAtc2l6ZScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIHNoaXBTaXplLmFkZENoaWxkKGJwKCdkaXYnLCAnc2l6ZS11bml0JykpO1xuICB9XG4gIHNoaXBDaG9pY2UuYWRkQ2hpbGQoc2hpcFNpemUpO1xuICBzaGlwQ2hvaWNlQ29udGFpbmVyLmFkZENoaWxkKHNoaXBDaG9pY2UpO1xufVxuXG5hdHRhY2hTaGlwcygnQ0FSUklFUicsIDUpO1xuYXR0YWNoU2hpcHMoJ0JBVFRMRVNISVAnLCA0KTtcbmF0dGFjaFNoaXBzKCdDUlVJU0VSJywgMyk7XG5hdHRhY2hTaGlwcygnU1VCTUFSSU5FJywgMyk7XG5hdHRhY2hTaGlwcygnREVTVFJPWUVSJywgMik7XG5cbmNvbnN0IGlucHV0Q29udGFpbmVyID0gYnAoJ2RpdicsICdpbnB1dC1jb250YWluZXInKVxuICAuYWRkQ2hpbGQoXG4gICAgYnAoJ2lucHV0JykuYWRkQXR0cmlidXRlcyh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfSlcbiAgKVxuICAuYWRkQ2hpbGQoYnAoJ2J1dHRvbicsICdpbnB1dC1idXR0b24nKS5hZGRUZXh0KCdQbGFjZSBTaGlwJykpO1xuXG5uZXdHYW1lTW9kYWxcbiAgLmFkZENoaWxkKHBsYWNlU2hpcHNHcmlkKVxuICAuYWRkQ2hpbGQocm90YXRlQnV0dG9uKVxuICAuYWRkQ2hpbGQoc2hpcENob2ljZUNvbnRhaW5lcilcbiAgLmFkZENoaWxkKGlucHV0Q29udGFpbmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGROZXdHYW1lTW9kYWwoKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3R2FtZU1vZGFsLmJ1aWxkKCkpO1xufVxuIiwiaW1wb3J0IGJwIGZyb20gJ2RvbXdlYXZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFdpbk1vZGFsKHBsYXllck5hbWUpIHtcbiAgY29uc3QgbW9kYWwgPSBicCgnZGl2JywgJ3dpbi1tb2RhbCcpXG4gICAgLmFkZENoaWxkKGJwKCdkaXYnLCAnd2lubmluZy1wbGF5ZXInKS5hZGRUZXh0KGAke3BsYXllck5hbWV9IHdvbmApKVxuICAgIC5hZGRDaGlsZChicCgnYnV0dG9uJywgJ3BsYXktYWdhaW4tYnV0dG9uJykuYWRkVGV4dCgnUGxheSBBZ2FpbicpKVxuICAgIC5idWlsZCgpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbn1cbiIsImltcG9ydCBFbGVtZW50IGZyb20gJy4vZWxlbWVudC1tYWtlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJwKHR5cGUsIGNsYXNzTmFtZSkge1xuICByZXR1cm4gbmV3IEVsZW1lbnQodHlwZSkuYWRkQXR0cmlidXRlcyh7XG4gICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50VHlwZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkQ2hpbGQoY2hpbGRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFRleHQodGV4dCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VHlwZSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBbYXR0cmlidXRlLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5hdHRyaWJ1dGVzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBbZXZlbnRUeXBlLCBsaXN0ZW5lcnNdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1xuICAgICAgICApKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5idWlsZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IERPTXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnRleHQpO1xuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChET010ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=