webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\junguk we\\git\\uk2_study\\react\\nodebird\\prepare\\front\\components\\PostCard.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostCard = function PostCard(_ref) {
  _s();
  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  // const me = useSelector((state) => state.user.me);
  // const id = me && me.id;
  return __jsx("div", {
    style: {
      marginBottom: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
      key: "heart",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
      key: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })));
};
_s(PostCard, "FJdoDJNyUlJ5WKWdRipc5DguCUQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});
_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);
var _c;
$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJtYXJnaW5Cb3R0b20iLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJDb21tZW50cyIsImFycmF5T2YiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ1A7QUFDa0I7QUFNMUI7QUFDVztBQUV0QyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUFpQjtFQUFBO0VBQUEsSUFBWEMsSUFBSSxRQUFKQSxJQUFJO0VBQ3RCLElBQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO0lBQUE7SUFBQSx5QkFBS0EsS0FBSyxDQUFDQyxJQUFJLENBQUNDLEVBQUUsbURBQWIsZUFBZUosRUFBRTtFQUFBLEVBQUM7RUFDcEQ7RUFDQTtFQUNBLE9BQ0U7SUFBSyxLQUFLLEVBQUU7TUFBRUssWUFBWSxFQUFFO0lBQUcsQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQy9CLE1BQUMseUNBQUk7SUFDSCxLQUFLLEVBQUVOLElBQUksQ0FBQ08sTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQUMsbURBQVU7TUFBQyxNQUFNLEVBQUVQLElBQUksQ0FBQ08sTUFBTztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUk7SUFDN0QsT0FBTyxFQUFFLENBQ1AsTUFBQyxpRUFBZTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxFQUNqQyxNQUFDLCtEQUFhO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLEVBQzdCLE1BQUMsaUVBQWU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsRUFDakMsTUFBQyw0Q0FBTztNQUNOLEdBQUcsRUFBQyxNQUFNO01BQ1YsT0FBTyxFQUNMLE1BQUMsMkNBQU0sQ0FBQyxLQUFLO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDVk4sRUFBRSxJQUFJRCxJQUFJLENBQUNRLElBQUksQ0FBQ1AsRUFBRSxLQUFLQSxFQUFFLEdBQ3hCLG1FQUNFLE1BQUMsMkNBQU07UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFBWSxFQUNuQixNQUFDLDJDQUFNO1FBQUMsSUFBSSxFQUFDLFFBQVE7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFBWSxDQUNoQyxHQUVILE1BQUMsMkNBQU07UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFDUixDQUVKO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FFRCxNQUFDLGtFQUFnQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsQ0FDWixDQUNWO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFRixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUNSLE1BQU0sRUFBRSxNQUFDLDJDQUFNO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FBRUQsSUFBSSxDQUFDUSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBVztJQUNqRCxLQUFLLEVBQUVULElBQUksQ0FBQ1EsSUFBSSxDQUFDQyxRQUFTO0lBQzFCLFdBQVcsRUFBRVQsSUFBSSxDQUFDVSxPQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDMUIsQ0FDRyxDQUdIO0FBRVYsQ0FBQztBQUFDLEdBekNJWCxRQUFRO0VBQUEsUUFDREcsdURBQVc7QUFBQTtBQUFBLEtBRGxCSCxRQUFRO0FBMkNkQSxRQUFRLENBQUNZLFNBQVMsR0FBRztFQUNuQlgsSUFBSSxFQUFFWSxpREFBUyxDQUFDQyxLQUFLLENBQUM7SUFDcEJaLEVBQUUsRUFBRVcsaURBQVMsQ0FBQ0UsTUFBTTtJQUNwQk4sSUFBSSxFQUFFSSxpREFBUyxDQUFDRyxNQUFNO0lBQ3RCTCxPQUFPLEVBQUVFLGlEQUFTLENBQUNJLE1BQU07SUFDekJDLFNBQVMsRUFBRUwsaURBQVMsQ0FBQ0csTUFBTTtJQUMzQkcsUUFBUSxFQUFFTixpREFBUyxDQUFDTyxPQUFPLENBQUNQLGlEQUFTLENBQUNRLEdBQUcsQ0FBQztJQUMxQ2IsTUFBTSxFQUFFSyxpREFBUyxDQUFDTyxPQUFPLENBQUNQLGlEQUFTLENBQUNRLEdBQUc7RUFDekMsQ0FBQztBQUNILENBQUM7QUFFY3JCLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYwOWQ1ZWM5YmRjNjBiY2NjY2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgUG9wb3ZlciwgQnV0dG9uLCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFJldHdlZXRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIE1lc3NhZ2VPdXRsaW5lZCxcclxuICBFbGxpcHNpc091dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgLy8gY29uc3QgbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gIC8vIGNvbnN0IGlkID0gbWUgJiYgbWUuaWQ7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgPENhcmRcclxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIC8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgey8qIDxDb21tZW50Rm9ybSAvPlxyXG4gICAgICA8Q29tbWVudHMgLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcclxuICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9