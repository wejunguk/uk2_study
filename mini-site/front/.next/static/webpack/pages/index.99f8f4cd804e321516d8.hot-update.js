webpackHotUpdate_N_E("pages/index",{

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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: "\uB098\uC758 \uC815\uBCF4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)
        }, "main", false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, "SubMenu", true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwidXNlU3RhdGUiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsIlNlYXJjaElucHV0Iiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJJbm5lciIsImRpdiIsImZvbnRXZWlnaHQiLCJmb250VW5kZXJsaW5lIiwiZm9udFNpemUiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0w7QUFDTjtBQUNnQjtBQUNOO0FBRWE7QUFDSjtBQUNKO0FBQUE7QUFFNUMsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVMsR0FBUztFQUFBO0VBQ3RCO0VBQ0EsZ0JBQW9DQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUE1Q0MsVUFBVTtJQUFFQyxhQUFhO0VBRWhDLElBQU1DLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MsMENBQUssQ0FBQ0MsTUFBTSxDQUFDLGdMQUV2QztFQUVELElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0ksR0FBRywyT0FLdkI7RUFFRCxvQkFDRSxxRUFBQyxLQUFLO0lBQUEsd0JBQ0oscUVBQUMseUNBQUk7TUFBQyxJQUFJLEVBQUMsWUFBWTtNQUFBLHdCQUNyQixxRUFBQyx5Q0FBSSxDQUFDLElBQUk7UUFBQSx1QkFDUixxRUFBQyxnREFBSTtVQUFDLElBQUksRUFBQyxHQUFHO1VBQUEsdUJBQ1o7WUFBRyxLQUFLLEVBQUU7Y0FBRUMsVUFBVSxFQUFFLEdBQUc7Y0FBRUMsYUFBYSxFQUFFLENBQUM7Y0FBRUMsUUFBUSxFQUFFO1lBQUcsQ0FBRTtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUUxRDtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQ0MsR0FMTSxNQUFNO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FNVCxlQUNaLHFFQUFDLHlDQUFJLENBQUMsT0FBTztRQUFlLEtBQUssRUFBQywyQkFBTztRQUFBLHdCQUN2QyxxRUFBQyx5Q0FBSSxDQUFDLElBQUk7VUFBQSx1QkFDUixxRUFBQyxnREFBSTtZQUFDLElBQUksRUFBQyxnQkFBZ0I7WUFBQSx1QkFDekI7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFBYztZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQ1QsR0FITSxNQUFNO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FJVCxlQUNaLHFFQUFDLHlDQUFJLENBQUMsSUFBSTtVQUFBLHVCQUNSLHFFQUFDLGdEQUFJO1lBQUMsSUFBSSxFQUFDLEdBQUc7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBYSxHQURkLE1BQU07VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUVUO01BQUEsR0FSSSxTQUFTO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FTWixlQU1mLHFFQUFDLHlDQUFJLENBQUMsSUFBSTtRQUFBLFVBQ1BWLFVBQVUsZ0JBQ1Q7VUFBSyxRQUFRLEVBQUU7UUFBSztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBQU8sZ0JBRTNCLHFFQUFDLGdEQUFJO1VBQUMsSUFBSSxFQUFDLFNBQVM7VUFBQSx1QkFDbEI7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBVztVQUFBO1VBQUE7VUFBQTtRQUFBO01BRWQsR0FQWSxRQUFRO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FRWCxlQUNaLHFFQUFDLHlDQUFJLENBQUMsSUFBSTtRQUFBLHVCQUNSLHFFQUFDLFdBQVc7VUFBQyxXQUFXO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFHLEdBRGQsU0FBUztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRVo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQ1AsZUFDUCxxRUFBQyx3Q0FBRztNQUFDLE1BQU0sRUFBRSxDQUFFO01BQUEsd0JBQ2IscUVBQUMsd0NBQUc7UUFBQyxFQUFFLEVBQUUsRUFBRztRQUFDLEVBQUUsRUFBRSxDQUFFO1FBQUEsVUFDaEJBLFVBQVUsZ0JBQ1QscUVBQUMsK0RBQVc7VUFBQyxhQUFhLEVBQUVDO1FBQWM7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUFHLGdCQUU3QyxxRUFBQyw2REFBUztVQUFDLGFBQWEsRUFBRUE7UUFBYztVQUFBO1VBQUE7VUFBQTtRQUFBO01BQ3pDO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FDRyxlQUNOLHFFQUFDLHdDQUFHO1FBQUMsRUFBRSxFQUFFLEVBQUc7UUFBQyxFQUFFLEVBQUUsRUFBRztRQUFBLHVCQUNsQixxRUFBQywyREFBTztVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUc7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUNQO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVVGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUNBO0FBRVosQ0FBQztBQUFDLEdBNUVJSCxTQUFTO0FBQUEsS0FBVEEsU0FBUztBQThFZkEsU0FBUyxDQUFDYSxTQUFTLEdBQUc7RUFDcEJDLFFBQVEsRUFBRUMsaURBQVMsQ0FBQ0MsSUFBSSxDQUFDQztBQUMzQixDQUFDO0FBRWNqQix3RUFBUyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45OWY4ZjRjZDgwNGUzMjE1MTZkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBNZW51LCBJbnB1dCwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJQcm9maWxlXCI7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5Gb3JtXCI7XHJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRcIjtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICgpID0+IHtcclxuICAvLyDroZzqt7jsnbgg642U66+4IOuNsOydtO2EsFxyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDExMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElubmVyPlxyXG4gICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwLCBmb250VW5kZXJsaW5lOiAwLCBmb250U2l6ZTogMTcgfX0+XHJcbiAgICAgICAgICAgICAg666k7KeA7Lus7Luk666k64uI7YuwW+uupC7su6RdXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIlN1Yk1lbnVcIiB0aXRsZT1cIuuCmOydmCDsoJXrs7RcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0L3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICA8YT7tmozsm5DsoJXrs7Qg7IiY7KCVPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPuuCmOydmCDsoJXrs7Q8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L01lbnUuU3ViTWVudT5cclxuICAgICAgICB7LyogPE1lbnUuSXRlbSBrZXk9XCJsb2dpblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8YT7roZzqt7jsnbg8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+ICovfVxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2lnbnVwXCI+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgICAgPGRpdiBkaXNhYmxlZD17dHJ1ZX0+PC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgIDxhPu2ajOybkOqwgOyehTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIi9zZWFyY2hcIj5cclxuICAgICAgICAgIDxTZWFyY2hJbnB1dCBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZSBzZXRJc0xvZ2dlZEluPXtzZXRJc0xvZ2dlZElufSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPExvZ2luRm9ybSBzZXRJc0xvZ2dlZEluPXtzZXRJc0xvZ2dlZElufSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezE4fT5cclxuICAgICAgICAgIDxDb250ZW50IC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgey8qIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dlanVuZ3VrXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGdpdGh1YiBieSBqdWdudWt3ZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0lubmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9