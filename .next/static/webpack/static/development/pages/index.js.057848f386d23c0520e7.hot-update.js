webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Keyboard.js":
/*!***************************!*\
  !*** ./pages/Keyboard.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");









var _jsxFileName = "/Users/nicholassmith/Code/nicksnotes/pages/Keyboard.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  border: 1px solid black;\n  width: 16px;\n  height: ", ";\n  float: left;\n  margin: 0;\n  margin-left: ", ";\n  margin-right: ", ";\n  background: ", ";\n  z-index: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var KeyStyle = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject(), function (_ref) {
  var sharp = _ref.sharp;
  return sharp ? '65px' : '100px';
}, function (_ref2) {
  var sharp = _ref2.sharp;
  return sharp ? '-8px' : '0';
}, function (_ref3) {
  var sharp = _ref3.sharp;
  return sharp ? '-8px' : '0';
}, function (_ref4) {
  var sharp = _ref4.sharp;
  return sharp ? '#000' : '#fff';
}, function (_ref5) {
  var sharp = _ref5.sharp;
  return sharp ? 1 : 0;
});

var Octave = function Octave(a) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Octave);

  this.c = {
    freq: a * Math.pow(2, -9 / 12),
    noteName: 'c'
  };
  this.cSharp = {
    freq: a * Math.pow(2, -8 / 12),
    noteName: 'c#'
  };
  this.d = {
    freq: a * Math.pow(2, -7 / 12),
    noteName: 'd'
  };
  this.dSharp = {
    freq: a * Math.pow(2, -6 / 12),
    noteName: 'd#'
  };
  this.e = {
    freq: a * Math.pow(2, -5 / 12),
    noteName: 'e'
  };
  this.f = {
    freq: a * Math.pow(2, -4 / 12),
    noteName: 'f'
  };
  this.fSharp = {
    freq: a * Math.pow(2, -3 / 12),
    noteName: 'f#'
  };
  this.g = {
    freq: a * Math.pow(2, -2 / 12),
    noteName: 'g'
  };
  this.gSharp = {
    freq: a * Math.pow(2, -1 / 12),
    noteName: 'g#'
  };
  this.a = {
    freq: a * Math.pow(2, 0 / 12),
    noteName: 'a'
  };
  this.aSharp = {
    freq: a * Math.pow(2, 1 / 12),
    noteName: 'a#'
  };
  this.b = {
    freq: a * Math.pow(2, 2 / 12),
    noteName: 'b'
  };
};

var baseFrequency = 440;
var octaves = 4;
var notes = [];

for (var i = 0 - octaves / 2; i < octaves / 2; i++) {
  var a = baseFrequency * Math.pow(2, i);
  var octave = new Octave(a);
  notes.push(octave);
}

var Key =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Key, _Component);

  function Key() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Key);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Key).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Key, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          note = _this$props.note,
          name = _this$props.name,
          octave = _this$props.octave;
      var sharp = name.indexOf('Sharp') > -1;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(KeyStyle, {
        sharp: sharp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      });
    }
  }]);

  return Key;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var Keyboard =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Keyboard, _Component2);

  function Keyboard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Keyboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Keyboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "renderOctave", function (octave, num) {
      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(octave);

      console.log(keys);
      console.log(octave[keys[0]]);
      return keys.map(function (name) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Key, {
          key: octave[name].freq,
          note: octave[name].freq,
          name: name,
          octave: num,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Keyboard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(notes);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, notes.map(function (octave, num) {
        return _this2.renderOctave(octave, num);
      }));
    }
  }]);

  return Keyboard;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Keyboard);

/***/ })

})
//# sourceMappingURL=index.js.057848f386d23c0520e7.hot-update.js.map