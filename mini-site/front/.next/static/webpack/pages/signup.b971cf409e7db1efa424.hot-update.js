webpackHotUpdate_N_E("pages/signup",{

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
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Content */ "./components/Content.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Inner, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
            style: {
              fontWeight: 700,
              fontUnderline: 0,
              fontSize: 17
            },
            children: "\uBBA4\uC9C0\uCEEC\uCEE4\uBBA4\uB2C8\uD2F0[\uBBA4.\uCEE4]"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)
      }, "main", false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].SubMenu, {
        title: "\uB098\uC758 \uC815\uBCF4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about/profile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
              children: "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)
        }, "main", false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, "SubMenu", false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, _this)
      }, "signup", false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SearchInput, {
          enterButton: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, "/search", false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gutter: 8,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 6,
        children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
          setIsLoggedIn: setIsLoggedIn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_LoginForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
          setIsLoggedIn: setIsLoggedIn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 18,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Content__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};
_s(AppLayout, "g0MSgNVZk+vKiEFnDJ9VPEfswFA=");
_c = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwidXNlU3RhdGUiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsIlNlYXJjaElucHV0Iiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJJbm5lciIsImRpdiIsImZvbnRXZWlnaHQiLCJmb250VW5kZXJsaW5lIiwiZm9udFNpemUiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0w7QUFDTjtBQUNnQjtBQUNOO0FBRWE7QUFDSjtBQUNKO0FBQUE7QUFFNUMsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVMsR0FBUztFQUFBO0VBQ3RCO0VBQ0EsZ0JBQW9DQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUE1Q0MsVUFBVTtJQUFFQyxhQUFhO0VBRWhDLElBQU1DLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MsMENBQUssQ0FBQ0MsTUFBTSxDQUFDLGdMQUV2QztFQUVELElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0ksR0FBRywyT0FLdkI7RUFFRCxvQkFDRSxxRUFBQyxLQUFLO0lBQUEsd0JBQ0oscUVBQUMseUNBQUk7TUFBQyxJQUFJLEVBQUMsWUFBWTtNQUFBLHdCQUNyQixxRUFBQyx5Q0FBSSxDQUFDLElBQUk7UUFBQSx1QkFDUixxRUFBQyxnREFBSTtVQUFDLElBQUksRUFBQyxHQUFHO1VBQUEsdUJBQ1o7WUFBRyxLQUFLLEVBQUU7Y0FBRUMsVUFBVSxFQUFFLEdBQUc7Y0FBRUMsYUFBYSxFQUFFLENBQUM7Y0FBRUMsUUFBUSxFQUFFO1lBQUcsQ0FBRTtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUUxRDtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQ0MsR0FMTSxNQUFNO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FNVCxlQUNaLHFFQUFDLHlDQUFJLENBQUMsT0FBTztRQUFlLEtBQUssRUFBQywyQkFBTztRQUFBLHVCQUN2QyxxRUFBQyx5Q0FBSSxDQUFDLElBQUk7VUFBQSx1QkFDUixxRUFBQyxnREFBSTtZQUFDLElBQUksRUFBQyxnQkFBZ0I7WUFBQSx1QkFDekI7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFBYztZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQ1QsR0FITSxNQUFNO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFJVCxHQUxJLFNBQVM7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVNaLGVBTWYscUVBQUMseUNBQUksQ0FBQyxJQUFJO1FBQUEsVUFDUFYsVUFBVSxnQkFDVDtVQUFLLFFBQVEsRUFBRTtRQUFLO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FBTyxnQkFFM0IscUVBQUMsZ0RBQUk7VUFBQyxJQUFJLEVBQUMsU0FBUztVQUFBLHVCQUNsQjtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFXO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFFZCxHQVBZLFFBQVE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVFYLGVBQ1oscUVBQUMseUNBQUksQ0FBQyxJQUFJO1FBQUEsdUJBQ1IscUVBQUMsV0FBVztVQUFDLFdBQVc7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUcsR0FEZCxTQUFTO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FFWjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FDUCxlQUNQLHFFQUFDLHdDQUFHO01BQUMsTUFBTSxFQUFFLENBQUU7TUFBQSx3QkFDYixxRUFBQyx3Q0FBRztRQUFDLEVBQUUsRUFBRSxFQUFHO1FBQUMsRUFBRSxFQUFFLENBQUU7UUFBQSxVQUNoQkEsVUFBVSxnQkFDVCxxRUFBQywrREFBVztVQUFDLGFBQWEsRUFBRUM7UUFBYztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBQUcsZ0JBRTdDLHFFQUFDLDZEQUFTO1VBQUMsYUFBYSxFQUFFQTtRQUFjO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFDekM7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUNHLGVBQ04scUVBQUMsd0NBQUc7UUFBQyxFQUFFLEVBQUUsRUFBRztRQUFDLEVBQUUsRUFBRSxFQUFHO1FBQUEsdUJBQ2xCLHFFQUFDLDJEQUFPO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBRztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQ1A7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBVUY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQ0E7QUFFWixDQUFDO0FBQUMsR0E1RUlILFNBQVM7QUFBQSxLQUFUQSxTQUFTO0FBOEVmQSxTQUFTLENBQUNhLFNBQVMsR0FBRztFQUNwQkMsUUFBUSxFQUFFQyxpREFBUyxDQUFDQyxJQUFJLENBQUNDO0FBQzNCLENBQUM7QUFFY2pCLHdFQUFTLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5iOTcxY2Y0MDllN2RiMWVmYTQyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBNZW51LCBJbnB1dCwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJQcm9maWxlXCI7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5Gb3JtXCI7XHJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRcIjtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICgpID0+IHtcclxuICAvLyDroZzqt7jsnbgg642U66+4IOuNsOydtO2EsFxyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDExMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElubmVyPlxyXG4gICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwLCBmb250VW5kZXJsaW5lOiAwLCBmb250U2l6ZTogMTcgfX0+XHJcbiAgICAgICAgICAgICAg666k7KeA7Lus7Luk666k64uI7YuwW+uupC7su6RdXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIlN1Yk1lbnVcIiB0aXRsZT1cIuuCmOydmCDsoJXrs7RcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0L3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICA8YT7tmozsm5DsoJXrs7Qg7IiY7KCVPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIHsvKiA8TWVudS5JdGVtIGtleT1cIm1haW5cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj7rgpjsnZgg7KCV67O0PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+ICovfVxyXG4gICAgICAgIDwvTWVudS5TdWJNZW51PlxyXG4gICAgICAgIHsvKiA8TWVudS5JdGVtIGtleT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgIDxhPuuhnOq3uOyduDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT4gKi99XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzaWdudXBcIj5cclxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGRpc2FibGVkPXt0cnVlfT48L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiL3NlYXJjaFwiPlxyXG4gICAgICAgICAgPFNlYXJjaElucHV0IGVudGVyQnV0dG9uIC8+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgPFJvdyBndXR0ZXI9ezh9PlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgICAgPFVzZXJQcm9maWxlIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TG9naW5Gb3JtIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTh9PlxyXG4gICAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICB7LyogPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2VqdW5ndWtcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgZ2l0aHViIGJ5IGp1Z251a3dlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvSW5uZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=