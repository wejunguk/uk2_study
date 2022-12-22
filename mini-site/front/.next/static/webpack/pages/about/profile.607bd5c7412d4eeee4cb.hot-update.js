webpackHotUpdate_N_E("pages/about/profile",{

/***/ "./pages/about/profile.js":
/*!********************************!*\
  !*** ./pages/about/profile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\junguk we\\git\\uk2_study\\mini-site\\front\\pages\\about\\profile.js",
  _this = undefined;







var Profile = function Profile() {
  // 더미 데이터
  var followerList = [{
    nickname: "이순신"
  }, {
    nickname: "홍길동"
  }, {
    nickname: "유관순"
  }];
  var followingList = [{
    nickname: "이순신"
  }, {
    nickname: "홍길동"
  }, {
    nickname: "유관순"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "\uB0B4 \uD504\uB85C\uD544"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      header: "\uD314\uB85C\uC789 \uBAA9\uB85D",
      data: followingList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
      data: followerList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};
_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);
var _c;
$RefreshReg$(_c, "Profile");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZm9sbG93ZXJMaXN0Iiwibmlja25hbWUiLCJmb2xsb3dpbmdMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3lCO0FBQ3RCO0FBQ29DO0FBQ1o7QUFBQTtBQUFBO0FBRXJELElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7RUFDcEI7RUFDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDbkI7SUFBRUMsUUFBUSxFQUFFO0VBQU0sQ0FBQyxFQUNuQjtJQUFFQSxRQUFRLEVBQUU7RUFBTSxDQUFDLEVBQ25CO0lBQUVBLFFBQVEsRUFBRTtFQUFNLENBQUMsQ0FDcEI7RUFDRCxJQUFNQyxhQUFhLEdBQUcsQ0FDcEI7SUFBRUQsUUFBUSxFQUFFO0VBQU0sQ0FBQyxFQUNuQjtJQUFFQSxRQUFRLEVBQUU7RUFBTSxDQUFDLEVBQ25CO0lBQUVBLFFBQVEsRUFBRTtFQUFNLENBQUMsQ0FDcEI7RUFFRCxvQkFDRTtJQUFBLHdCQUNFLHFFQUFDLGdEQUFJO01BQUEsdUJBQ0g7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBb0I7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUNmLGVBRVAscUVBQUMsb0VBQWdCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBRyxlQUNwQixxRUFBQyw4REFBVTtNQUFDLE1BQU0sRUFBQyxpQ0FBUTtNQUFDLElBQUksRUFBRUM7SUFBYztNQUFBO01BQUE7TUFBQTtJQUFBLFNBQUcsZUFDbkQscUVBQUMsOERBQVU7TUFBQyxNQUFNLEVBQUMsaUNBQVE7TUFBQyxJQUFJLEVBQUVGO0lBQWE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFHO0VBQUEsZ0JBQ2pEO0FBRVAsQ0FBQztBQUFDLEtBeEJJRCxPQUFPO0FBMEJFQSxzRUFBTyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC9wcm9maWxlLjYwN2JkNWM3NDEyZDRlZWVlNGNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybVwiO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0XCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIC8vIOuNlOuvuCDrjbDsnbTthLBcclxuICBjb25zdCBmb2xsb3dlckxpc3QgPSBbXHJcbiAgICB7IG5pY2tuYW1lOiBcIuydtOyInOyLoFwiIH0sXHJcbiAgICB7IG5pY2tuYW1lOiBcIu2Zjeq4uOuPmVwiIH0sXHJcbiAgICB7IG5pY2tuYW1lOiBcIuycoOq0gOyInFwiIH0sXHJcbiAgXTtcclxuICBjb25zdCBmb2xsb3dpbmdMaXN0ID0gW1xyXG4gICAgeyBuaWNrbmFtZTogXCLsnbTsiJzsi6BcIiB9LFxyXG4gICAgeyBuaWNrbmFtZTogXCLtmY3quLjrj5lcIiB9LFxyXG4gICAgeyBuaWNrbmFtZTogXCLsnKDqtIDsiJxcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+64K0IO2UhOuhnO2VhDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XHJcbiAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiSDrqqnroZ1cIiBkYXRhPXtmb2xsb3dpbmdMaXN0fSAvPlxyXG4gICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4wg66qp66GdXCIgZGF0YT17Zm9sbG93ZXJMaXN0fSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=