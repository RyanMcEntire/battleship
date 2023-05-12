"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_main_game_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/main-game-ui */ "./src/ui/main-game-ui.js");


(0,_ui_main_game_ui__WEBPACK_IMPORTED_MODULE_0__.buildPlayerGrid)();
(0,_ui_main_game_ui__WEBPACK_IMPORTED_MODULE_0__.buildOpponentGrid)();

/***/ }),

/***/ "./src/ui/main-game-ui.js":
/*!********************************!*\
  !*** ./src/ui/main-game-ui.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildOpponentGrid": () => (/* binding */ buildOpponentGrid),
/* harmony export */   "buildPlayerGrid": () => (/* binding */ buildPlayerGrid)
/* harmony export */ });
/* harmony import */ var domweaver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domweaver */ "./node_modules/domweaver/element-blueprint.js");


const playerGridContainer = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'grid-container player-grid-container');

const opponentGridContainer = (0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])(
  'div',
  'grid-container opponent-grid-container'
);

function writeGrid(parent) {
  for (let i = 0; i <= 10; i += 1) {
    const letters = 'ABCDEFGHIJ';
    for (let j = 1; j <= 11; j += 1) {
      parent.addChild((0,domweaver__WEBPACK_IMPORTED_MODULE_0__["default"])('div', `${letters[i]}${j}`));
    }
  }
}

writeGrid(playerGridContainer);
writeGrid(opponentGridContainer);

function buildPlayerGrid() {
  return document.body.appendChild(playerGridContainer.build());
}

function buildOpponentGrid() {
  return document.body.appendChild(opponentGridContainer.build());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFFOztBQUVyRSxpRUFBZTtBQUNmLG1FQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0hVOztBQUUzQiw0QkFBNEIscURBQUU7O0FBRTlCLDhCQUE4QixxREFBRTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHNCQUFzQixxREFBRSxXQUFXLFdBQVcsRUFBRSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQnlDOztBQUUxQjtBQUNmLGFBQWEseURBQU87QUFDcEI7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9tYWluLWdhbWUtdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kb213ZWF2ZXIvZWxlbWVudC1ibHVlcHJpbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kb213ZWF2ZXIvZWxlbWVudC1tYWtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2J1aWxkUGxheWVyR3JpZCwgYnVpbGRPcHBvbmVudEdyaWR9IGZyb20gJy4vdWkvbWFpbi1nYW1lLXVpJztcblxuYnVpbGRQbGF5ZXJHcmlkKCk7XG5idWlsZE9wcG9uZW50R3JpZCgpOyIsImltcG9ydCBicCBmcm9tICdkb213ZWF2ZXInO1xuXG5jb25zdCBwbGF5ZXJHcmlkQ29udGFpbmVyID0gYnAoJ2RpdicsICdncmlkLWNvbnRhaW5lciBwbGF5ZXItZ3JpZC1jb250YWluZXInKTtcblxuY29uc3Qgb3Bwb25lbnRHcmlkQ29udGFpbmVyID0gYnAoXG4gICdkaXYnLFxuICAnZ3JpZC1jb250YWluZXIgb3Bwb25lbnQtZ3JpZC1jb250YWluZXInXG4pO1xuXG5mdW5jdGlvbiB3cml0ZUdyaWQocGFyZW50KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDExOyBqICs9IDEpIHtcbiAgICAgIHBhcmVudC5hZGRDaGlsZChicCgnZGl2JywgYCR7bGV0dGVyc1tpXX0ke2p9YCkpO1xuICAgIH1cbiAgfVxufVxuXG53cml0ZUdyaWQocGxheWVyR3JpZENvbnRhaW5lcik7XG53cml0ZUdyaWQob3Bwb25lbnRHcmlkQ29udGFpbmVyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUGxheWVyR3JpZCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGxheWVyR3JpZENvbnRhaW5lci5idWlsZCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkT3Bwb25lbnRHcmlkKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvcHBvbmVudEdyaWRDb250YWluZXIuYnVpbGQoKSk7XG59XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tICcuL2VsZW1lbnQtbWFrZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBicCh0eXBlLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHR5cGUpLmFkZEF0dHJpYnV0ZXMoe1xuICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFR5cGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgYWRkQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZENoaWxkKGNoaWxkRWxlbWVudCkge1xuICAgICAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUZXh0KHRleHQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgICAgIGZvciAoY29uc3QgW2F0dHJpYnV0ZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQudG9nZ2xlQXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgW2V2ZW50VHlwZSwgbGlzdGVuZXJzXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQuYnVpbGQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBET010ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0KTtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoRE9NdGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9