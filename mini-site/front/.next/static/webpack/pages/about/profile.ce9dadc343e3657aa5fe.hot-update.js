webpackHotUpdate_N_E("pages/about/profile",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\junguk we\\git\\uk2_study\\mini-site\\front\\components\\AppLayout.js",
  _this = undefined,
  _templateObject,
  _templateObject2,
  _s = $RefreshSig$();






var AppLayout = function AppLayout() {
  _s();
  // 로그인 더미 데이터
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    isLoggedIn = _useState[0],
    setIsLoggedIn = _useState[1];
  var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search)(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    vertical-align: middle;\n  "])));
  var Inner = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 1100px;\n    height: 100px;\n    margin: 0 auto;\n    position: relative;\n  "])));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Inner, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
            style: {
              fontWeight: 700,
              fontUnderline: 0,
              fontSize: 17
            },
            children: "\uBBA4\uC9C0\uCEEC\uCEE4\uBBA4\uB2C8\uD2F0[\uBBA4.\uCEE4]"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)
      }, "main", false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].SubMenu, {
        title: "\uB098\uC758 \uC815\uBCF4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about/profile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              children: "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)
        }, "main", false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)
      }, "SubMenu", false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this)
      }, "signup", false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(SearchInput, {
          enterButton: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)
      }, "/search", false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

// AppLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
_s(AppLayout, "g0MSgNVZk+vKiEFnDJ9VPEfswFA=");
_c = AppLayout;
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);
var _c;
$RefreshReg$(_c, "AppLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Content.js":
false,

/***/ "./components/LoginForm.js":
false,

/***/ "./components/UserProfile.js":
false,

/***/ "./hooks/useInput.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwidXNlU3RhdGUiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsIlNlYXJjaElucHV0Iiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJJbm5lciIsImRpdiIsImZvbnRXZWlnaHQiLCJmb250VW5kZXJsaW5lIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTDtBQUNOO0FBQ2dCO0FBQ047QUFBQTtBQUV2QyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxHQUFTO0VBQUE7RUFDdEI7RUFDQSxnQkFBb0NDLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQTVDQyxVQUFVO0lBQUVDLGFBQWE7RUFFaEMsSUFBTUMsV0FBVyxHQUFHQyxpRUFBTSxDQUFDQywwQ0FBSyxDQUFDQyxNQUFNLENBQUMsZ0xBRXZDO0VBRUQsSUFBTUMsS0FBSyxHQUFHSCx5REFBTSxDQUFDSSxHQUFHLDJPQUt2QjtFQUVELG9CQUNFLHFFQUFDLEtBQUs7SUFBQSx1QkFDSixxRUFBQyx5Q0FBSTtNQUFDLElBQUksRUFBQyxZQUFZO01BQUEsd0JBQ3JCLHFFQUFDLHlDQUFJLENBQUMsSUFBSTtRQUFBLHVCQUNSLHFFQUFDLGdEQUFJO1VBQUMsSUFBSSxFQUFDLEdBQUc7VUFBQSx1QkFDWjtZQUFHLEtBQUssRUFBRTtjQUFFQyxVQUFVLEVBQUUsR0FBRztjQUFFQyxhQUFhLEVBQUUsQ0FBQztjQUFFQyxRQUFRLEVBQUU7WUFBRyxDQUFFO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBRTFEO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFDQyxHQUxNLE1BQU07UUFBQTtRQUFBO1FBQUE7TUFBQSxTQU1ULGVBQ1oscUVBQUMseUNBQUksQ0FBQyxPQUFPO1FBQWUsS0FBSyxFQUFDLDJCQUFPO1FBQUEsdUJBQ3ZDLHFFQUFDLHlDQUFJLENBQUMsSUFBSTtVQUFBLHVCQUNSLHFFQUFDLGdEQUFJO1lBQUMsSUFBSSxFQUFDLGdCQUFnQjtZQUFBLHVCQUN6QjtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQUFjO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFDVCxHQUhNLE1BQU07VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUlULEdBTEksU0FBUztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBU1osZUFNZixxRUFBQyx5Q0FBSSxDQUFDLElBQUk7UUFBQSxVQUNQVixVQUFVLGdCQUNUO1VBQUssUUFBUSxFQUFFO1FBQUs7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUFPLGdCQUUzQixxRUFBQyxnREFBSTtVQUFDLElBQUksRUFBQyxTQUFTO1VBQUEsdUJBQ2xCO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQVc7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUVkLEdBUFksUUFBUTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUVgsZUFDWixxRUFBQyx5Q0FBSSxDQUFDLElBQUk7UUFBQSx1QkFDUixxRUFBQyxXQUFXO1VBQUMsV0FBVztRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBRyxHQURkLFNBQVM7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUVaO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUNQO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FDRDtBQUVaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQUEsR0EzRE1GLFNBQVM7QUFBQSxLQUFUQSxTQUFTO0FBNkRBQSx3RUFBUyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC9wcm9maWxlLmNlOWRhZGMzNDNlMzY1N2FhNWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgLy8g66Gc6re47J24IOuNlOuvuCDrjbDsnbTthLBcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGA7XHJcblxyXG4gIGNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbm5lcj5cclxuICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haW5cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgZm9udFVuZGVybGluZTogMCwgZm9udFNpemU6IDE3IH19PlxyXG4gICAgICAgICAgICAgIOuupOyngOy7rOy7pOuupOuLiO2LsFvrrqQu7LukXVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJTdWJNZW51XCIgdGl0bGU9XCLrgpjsnZgg7KCV67O0XCI+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haW5cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dC9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPGE+7ZqM7JuQ7KCV67O0IOyImOyglTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICB7LyogPE1lbnUuSXRlbSBrZXk9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+64KY7J2YIOygleuztDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPiAqL31cclxuICAgICAgICA8L01lbnUuU3ViTWVudT5cclxuICAgICAgICB7LyogPE1lbnUuSXRlbSBrZXk9XCJsb2dpblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8YT7roZzqt7jsnbg8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+ICovfVxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2lnbnVwXCI+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgICAgPGRpdiBkaXNhYmxlZD17dHJ1ZX0+PC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgIDxhPu2ajOybkOqwgOyehTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIi9zZWFyY2hcIj5cclxuICAgICAgICAgIDxTZWFyY2hJbnB1dCBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L0lubmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBBcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4vLyAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9