webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_DataCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DataCard */ "./components/DataCard.tsx");
/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.module.css */ "./styles/index.module.css");
/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\josias\\maker\\covidinfo\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  function fetchData() {
    fetch("https://covid19.mathdro.id/api").then(function (res) {
      return res.json();
    }).then(function (d) {
      return setData(d);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.indexPage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DataCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Deaths",
        value: data === {} ? data.recovered.value : "Fetching"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, _this);
};

_s(Index, "tNVKLF/eI269iIOS4WygXQde5D8=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiaW5kZXhQYWdlIiwicmVjb3ZlcmVkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUF3QixHQUFHLFNBQTNCQSxLQUEyQixHQUFtQjtBQUFBOztBQUFBLGtCQUV4QkMsc0RBQVEsQ0FBQyxFQUFELENBRmdCO0FBQUEsTUFFekNDLElBRnlDO0FBQUEsTUFFbkNDLE9BRm1DOztBQUloRCxXQUFTQyxTQUFULEdBQXFCO0FBQ2pCQyxTQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUNLQyxJQURMLENBQ1UsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FEYixFQUVLRixJQUZMLENBRVUsVUFBQUcsQ0FBQztBQUFBLGFBQUlOLE9BQU8sQ0FBQ00sQ0FBRCxDQUFYO0FBQUEsS0FGWDtBQUdIOztBQUVEQyx5REFBUyxDQUFDLFlBQU07QUFDWk4sYUFBUztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBRU8sK0RBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLDZCQUNJLHFFQUFDLDREQUFEO0FBQVUsYUFBSyxFQUFDLFFBQWhCO0FBQXlCLGFBQUssRUFBR1YsSUFBSSxLQUFLLEVBQVQsR0FBY0EsSUFBSSxDQUFDVyxTQUFMLENBQWVDLEtBQTdCLEdBQXFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQXRCRDs7R0FBTWQsSzs7S0FBQUEsSztBQXdCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg3Y2EzNDc5MTc5YTFjY2NkZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IERhdGFDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0RhdGFDYXJkXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgSW5kZXg6IEZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9jb3ZpZDE5Lm1hdGhkcm8uaWQvYXBpXCIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkID0+IHNldERhdGEoZCkpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmRleFBhZ2V9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPERhdGFDYXJkIHRpdGxlPVwiRGVhdGhzXCIgdmFsdWU9eyBkYXRhID09PSB7fSA/IGRhdGEucmVjb3ZlcmVkLnZhbHVlIDogXCJGZXRjaGluZ1wifSAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=