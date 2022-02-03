/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/index.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/index.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark-bg: #090909;\n  --light-bg: #111;\n  --white-color: #fff;\n  --blue-color: #57d2eb;\n  --transparent-dark-bg: #090909ce;\n}\n\n* {\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n  font-weight: 100;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: var(--white-color);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--light-bg);\n}\n\n.app-header {\n  background-color: var(--dark-bg);\n  height: 70px;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 95%;\n  margin: auto;\n  height: 100%;\n}\n\n.movie-list {\n  width: 95%;\n  margin: auto;\n}\n\n.movie-list .section-title {\n  color: var(--white-color);\n  font-weight: 400;\n  font-size: 2em;\n}\n\n.movie-list .section-title::before {\n  position: absolute;\n  content: \"\";\n  height: 3px;\n  width: 4%;\n  top: 17%;\n  background: #343a40;\n}\n\n.app-header .logo {\n  width: 5%;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0;\n}\n\n.app-header .logo img {\n  height: 35px;\n  margin: auto;\n}\n\n.navigation {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  justify-content: end;\n}\n\n.navigation ul {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 30%;\n  align-items: center;\n}\n\n.navigation ul li a {\n  text-decoration: none;\n  font-size: 15px;\n  color: var(--white-color);\n}\n\n.navigation ul li a:hover {\n  color: var(--blue-color);\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: var(--transparent-dark-bg);\n  top: 0;\n  z-index: 100;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}\n\n.modal-content {\n  width: 70%;\n  background-color: var(--light-bg);\n  margin: 10px auto;\n  padding: 10px 20px;\n}\n\n.modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.modal-body {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  color: var(--white-color);\n  font-size: 15px;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.comments-list {\n  border-bottom: 1px solid var(--white-color);\n}\n\n.close-button {\n  font-size: 20px;\n  font-weight: 500;\n  background-color: transparent;\n  border: none;\n  color: rgba(255, 0, 0, 0.472);\n  cursor: pointer;\n  padding-bottom: 10px;\n}\n\n.close-button:hover {\n  color: red;\n}\n\n.banner-image {\n  width: 100%;\n}\n\n.description-data {\n  padding: 0 20px;\n}\n\n.movie-name-title {\n  margin: 0;\n}\n\n.underImage {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.underImage i {\n  color: red;\n}\n\n.modal-footer .comment {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n}\n\n.modal-footer .comment .comment-form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.modal-footer .comment .comment-form input,\n.modal-footer .comment .comment-form textarea {\n  display: block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1.2rem;\n  line-height: 2;\n  font-weight: 300;\n  color: #000;\n  background-color: var(--white-color);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  margin-bottom: 20px;\n}\n\nfooter {\n  display: block;\n  border: 1px solid;\n  background: var(--dark-bg);\n}\n\nfooter p {\n  width: 95%;\n  margin: auto;\n  color: var(--white-color);\n  padding: 2% 0;\n}\n\n.movies-row {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 10px;\n  margin-top: 45px;\n}\n\n.movies-row .item {\n  position: relative;\n}\n\n.movies-row .item .poster {\n  width: 100%;\n  padding-bottom: 145%;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n  background: #212529;\n}\n\n.movies-row .item .poster::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background: rgba(0, 0, 0, 0);\n  z-index: 1;\n  transition: all 0.2s ease-in-out 0s;\n}\n\n.movies-row .item:hover .poster::after {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.movies-row .item .poster img {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n}\n\n.movies-row .item .poster img[src] {\n  visibility: visible;\n}\n\n.movies-row .item h3 {\n  font-size: 1em;\n  font-weight: 500;\n  display: grid;\n}\n\n.movies-row .item .title {\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 400;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-decoration: none;\n}\n\n.movies-row .item .meta {\n  font-size: 0.9em !important;\n  font-weight: 300;\n  height: 50px;\n  display: block;\n  overflow: hidden;\n  color: #959595;\n}\n\n.movies-row .item .meta .dot {\n  width: 3px;\n  height: 3px;\n  vertical-align: 2px;\n  border-radius: 50%;\n  display: inline-block;\n  background: #d5d5d5;\n  content: \"\";\n  margin: 0 5px;\n}\n\n.movies-row .item .meta .like-btn {\n  font-style: normal;\n  border-radius: 3px;\n  padding: 0 3px;\n  font-size: 1em;\n  float: right;\n  border: none;\n  background-color: transparent;\n  color: var(--white-color);\n  cursor: pointer;\n}\n\n.movies-row .item .meta .like-btn i {\n  color: red;\n}\n\n.movies-counter {\n  text-align: center;\n  color: var(--white-color);\n  background-color: red;\n  font-weight: 500;\n  padding: 6px 4px;\n  border-radius: 50%;\n  font-size: 13px;\n}\n\n.overlapButton-comment,\n.overlapButton-reservation,\n.submit-comment-btn {\n  position: absolute;\n  top: 28%;\n  z-index: 10;\n  width: 70%;\n  left: 15%;\n  border: none;\n  background-color: var(--light-bg);\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 300;\n  cursor: pointer;\n  padding: 5px 0;\n  display: none;\n  border-radius: 5px;\n}\n\n.overlapButton-reservation {\n  top: 40%;\n}\n\n.submit-comment-btn {\n  position: inherit;\n  display: inherit;\n  width: 100%;\n  text-align: center;\n  background-color: var(--dark-bg);\n  border: 1px solid #f0f8ff2e;\n  padding-left: 40%;\n}\n\n.overlapButton-comment:hover,\n.overlapButton-reservation:hover,\n.submit-comment-btn:hover {\n  background-color: var(--dark-bg);\n  color: var(--blue-color);\n}\n\n.movies-row .item:hover .overlapButton-comment,\n.movies-row .item:hover .overlapButton-reservation {\n  display: block;\n}\n\n.fa-spinner {\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.comment-header {\n  color: var(--white-color);\n}\n\n#comments-data {\n  padding: 0;\n  list-style-type: none;\n}\n\n.data-items {\n  display: grid;\n  grid-template-columns: 5% 90%;\n  gap: 15px;\n  color: var(--white-color);\n  border: 1px solid #242424;\n  border-radius: 4px;\n  margin-top: 7px;\n  padding: 5px;\n}\n\n.user-prefix {\n  color: var(--dark-bg);\n  background-color: var(--white-color);\n  font-size: 2em;\n  text-align: center;\n  font-weight: 900;\n  border-radius: 52%;\n  padding: 0 10px;\n  margin: auto auto auto 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.time-posted {\n  text-align: right;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,500;1,700;1,900&display=swap');\n\n:root {\n  --dark-bg: #090909;\n  --light-bg: #111;\n  --white-color: #fff;\n  --blue-color: #57d2eb;\n  --transparent-dark-bg: #090909ce;\n}\n\n* {\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n  font-weight: 100;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: var(--white-color);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--light-bg);\n}\n\n.app-header {\n  background-color: var(--dark-bg);\n  height: 70px;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 95%;\n  margin: auto;\n  height: 100%;\n}\n\n.movie-list {\n  width: 95%;\n  margin: auto;\n}\n\n.movie-list .section-title {\n  color: var(--white-color);\n  font-weight: 400;\n  font-size: 2em;\n}\n\n.movie-list .section-title::before {\n  position: absolute;\n  content: \"\";\n  height: 3px;\n  width: 4%;\n  top: 17%;\n  background: #343a40;\n}\n\n.app-header .logo {\n  width: 5%;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0;\n}\n\n.app-header .logo img {\n  height: 35px;\n  margin: auto;\n}\n\n.navigation {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  justify-content: end;\n}\n\n.navigation ul {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 30%;\n  align-items: center;\n}\n\n.navigation ul li a {\n  text-decoration: none;\n  font-size: 15px;\n  color: var(--white-color);\n}\n\n.navigation ul li a:hover {\n  color: var(--blue-color);\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: var(--transparent-dark-bg);\n  top: 0;\n  z-index: 100;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}\n\n.modal-content {\n  width: 70%;\n  background-color: var(--light-bg);\n  margin: 10px auto;\n  padding: 10px 20px;\n}\n\n.modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.modal-body {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  color: var(--white-color);\n  font-size: 15px;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.comments-list {\n  border-bottom: 1px solid var(--white-color);\n}\n\n.close-button {\n  font-size: 20px;\n  font-weight: 500;\n  background-color: transparent;\n  border: none;\n  color: rgba(255, 0, 0, 0.472);\n  cursor: pointer;\n  padding-bottom: 10px;\n}\n\n.close-button:hover {\n  color: red;\n}\n\n.banner-image {\n  width: 100%;\n}\n\n.description-data {\n  padding: 0 20px;\n}\n\n.movie-name-title {\n  margin: 0;\n}\n\n.underImage {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.underImage i {\n  color: red;\n}\n\n.modal-footer .comment {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n}\n\n.modal-footer .comment .comment-form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.modal-footer .comment .comment-form input,\n.modal-footer .comment .comment-form textarea {\n  display: block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1.2rem;\n  line-height: 2;\n  font-weight: 300;\n  color: #000;\n  background-color: var(--white-color);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  margin-bottom: 20px;\n}\n\nfooter {\n  display: block;\n  border: 1px solid;\n  background: var(--dark-bg);\n}\n\nfooter p {\n  width: 95%;\n  margin: auto;\n  color: var(--white-color);\n  padding: 2% 0;\n}\n\n.movies-row {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 10px;\n  margin-top: 45px;\n}\n\n.movies-row .item {\n  position: relative;\n}\n\n.movies-row .item .poster {\n  width: 100%;\n  padding-bottom: 145%;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n  background: #212529;\n}\n\n.movies-row .item .poster::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background: rgba(0, 0, 0, 0);\n  z-index: 1;\n  transition: all 0.2s ease-in-out 0s;\n}\n\n.movies-row .item:hover .poster::after {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.movies-row .item .poster img {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n}\n\n.movies-row .item .poster img[src] {\n  visibility: visible;\n}\n\n.movies-row .item h3 {\n  font-size: 1em;\n  font-weight: 500;\n  display: grid;\n}\n\n.movies-row .item .title {\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 400;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-decoration: none;\n}\n\n.movies-row .item .meta {\n  font-size: 0.9em !important;\n  font-weight: 300;\n  height: 50px;\n  display: block;\n  overflow: hidden;\n  color: #959595;\n}\n\n.movies-row .item .meta .dot {\n  width: 3px;\n  height: 3px;\n  vertical-align: 2px;\n  border-radius: 50%;\n  display: inline-block;\n  background: #d5d5d5;\n  content: \"\";\n  margin: 0 5px;\n}\n\n.movies-row .item .meta .like-btn {\n  font-style: normal;\n  border-radius: 3px;\n  padding: 0 3px;\n  font-size: 1em;\n  float: right;\n  border: none;\n  background-color: transparent;\n  color: var(--white-color);\n  cursor: pointer;\n}\n\n.movies-row .item .meta .like-btn i {\n  color: red;\n}\n\n.movies-counter {\n  text-align: center;\n  color: var(--white-color);\n  background-color: red;\n  font-weight: 500;\n  padding: 6px 4px;\n  border-radius: 50%;\n  font-size: 13px;\n}\n\n.overlapButton-comment,\n.overlapButton-reservation,\n.submit-comment-btn {\n  position: absolute;\n  top: 28%;\n  z-index: 10;\n  width: 70%;\n  left: 15%;\n  border: none;\n  background-color: var(--light-bg);\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 300;\n  cursor: pointer;\n  padding: 5px 0;\n  display: none;\n  border-radius: 5px;\n}\n\n.overlapButton-reservation {\n  top: 40%;\n}\n\n.submit-comment-btn {\n  position: inherit;\n  display: inherit;\n  width: 100%;\n  text-align: center;\n  background-color: var(--dark-bg);\n  border: 1px solid #f0f8ff2e;\n  padding-left: 40%;\n}\n\n.overlapButton-comment:hover,\n.overlapButton-reservation:hover,\n.submit-comment-btn:hover {\n  background-color: var(--dark-bg);\n  color: var(--blue-color);\n}\n\n.movies-row .item:hover .overlapButton-comment,\n.movies-row .item:hover .overlapButton-reservation {\n  display: block;\n}\n\n.fa-spinner {\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.comment-header {\n  color: var(--white-color);\n}\n\n#comments-data {\n  padding: 0;\n  list-style-type: none;\n}\n\n.data-items {\n  display: grid;\n  grid-template-columns: 5% 90%;\n  gap: 15px;\n  color: var(--white-color);\n  border: 1px solid #242424;\n  border-radius: 4px;\n  margin-top: 7px;\n  padding: 5px;\n}\n\n.user-prefix {\n  color: var(--dark-bg);\n  background-color: var(--white-color);\n  font-size: 2em;\n  text-align: center;\n  font-weight: 900;\n  border-radius: 52%;\n  padding: 0 10px;\n  margin: auto auto auto 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.time-posted {\n  text-align: right;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/index.css":
/*!**********************************!*\
  !*** ./src/assets/css/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/component/Comment.js":
/*!**********************************!*\
  !*** ./src/component/Comment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Comment {
  constructor(username, message, itemId) {
    this.username = username;
    this.comment = message;
    this.item_id = itemId;
  }

  static appId = 'DN0Of2pkUbOHCM0jDtnj';

  static base = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

  static postComment = async (comment) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(comment),
    };

    const request = await fetch(`${this.base}/${this.appId}/comments`, requestOptions);
    if (request.status === 201) {
      return 'created';
    }
    return 'Failed';
  }

  static getComment = async (item) => {
    if (navigator.onLine && item) {
      const request = await fetch(`${this.base}/${this.appId}/comments?item_id=${item}`, { method: 'GET' });
      const result = await request.json();
      if (request.status === 400) {
        return [];
      }
      return result;
    }
    return 0;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ "./src/component/Likes.js":
/*!********************************!*\
  !*** ./src/component/Likes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.js */ "./src/component/Comment.js");


class Likes extends _Comment_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(itemId) {
    super();
    this.item_id = itemId;
  }

  static postLike = async (like) => {
    document.querySelector(`[data-id="${like.item_id}"]`).children[0].classList.remove('fa-heart-o');
    document.querySelector(`[data-id="${like.item_id}"]`).children[0].classList.add('fa-spinner');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(like),
    };

    const request = await fetch(`${super.base}/${super.appId}/likes`, requestOptions);
    if (request.status === 201) {
      document.querySelector(`[data-id="${like.item_id}"]`).children[0].classList.remove('fa-spinner');
      document.querySelector(`[data-id="${like.item_id}"]`).children[0].classList.add('fa-heart');
      const likeCount = document.querySelector(`[data-id="${like.item_id}"]`).children[1];
      likeCount.innerText = parseInt(likeCount.innerText, 10) + 1;
      this.setLiked(like.item_id);
      return 'created';
    }
    return 'Failed';
  }

  static setLiked = (id = null) => {
    if (id) {
      const storage = (window.localStorage.getItem('idsLikes') === null) ? [] : JSON.parse(window.localStorage.getItem('idsLikes'));
      storage.push(id);
      window.localStorage.setItem('idsLikes', JSON.stringify(storage));
    }
    return (window.localStorage.getItem('idsLikes') === null) ? [] : JSON.parse(window.localStorage.getItem('idsLikes'));
  }

  static countLikes = async () => {
    if (navigator.onLine) {
      const request = await fetch(`${super.base}/${super.appId}/likes`, { method: 'GET' });
      const result = await request.json();
      return result;
    }
    return 0;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Likes);

/***/ }),

/***/ "./src/component/Show.js":
/*!*******************************!*\
  !*** ./src/component/Show.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Likes.js */ "./src/component/Likes.js");
/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.js */ "./src/component/Comment.js");



class Show {
  static base = 'https://api.tvmaze.com/shows';

  static container = document.querySelector('.movies-row');

  static modal = document.querySelector('.modal-body');

  static modalFooter = document.querySelector('.modal-footer');

  static commentList = document.querySelector('#comments-data');

  static getMovies = async () => {
    if (navigator.onLine) {
      const request = await fetch(`${this.base}?page=1`, { method: 'GET' });
      const result = await request.json();
      if (result.length) {
        const likesData = await _Likes_js__WEBPACK_IMPORTED_MODULE_0__["default"].countLikes();
        this.container.innerHTML = '';
        result.forEach((element) => {
          this.populate(element, likesData);
        });
      }
      this.countMovies(result.length);
    }
  }

  static countMovies = (count) => {
    document.querySelector('.movies-counter').textContent = count;
  }

  static populate = (movie, likesData) => {
    let likesNumber;
    if (likesData.length) {
      const thePost = likesData.filter((lik) => parseInt(lik.item_id, 10) === movie.id);
      likesNumber = (thePost.length) ? thePost[0].likes : 0;
    } else {
      likesNumber = 0;
    }
    const movieCadre = document.createElement('div');
    movieCadre.classList.add('item');
    const poster = document.createElement('a');
    poster.href = '#';
    poster.addEventListener('click', (e) => e.preventDefault());
    poster.classList.add('poster');
    const posterImager = new Image();
    posterImager.src = movie.image.medium;
    const commentBtn = document.createElement('button');
    commentBtn.innerText = 'Comments';
    commentBtn.setAttribute('data-comment-item-id', movie.id);
    commentBtn.classList.add('overlapButton-comment');
    commentBtn.addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('hidden');
      this.getOneShow(commentBtn.getAttribute('data-comment-item-id'));
    });
    const reservationBtn = document.createElement('button');
    reservationBtn.setAttribute('data-reservation-item-id', movie.id);
    reservationBtn.innerText = 'reservations';
    reservationBtn.classList.add('overlapButton-reservation');
    poster.append(posterImager);
    movieCadre.append(poster);
    const movieName = document.createElement('h3');
    const movieNameLink = document.createElement('a');
    movieNameLink.href = '#';
    movieNameLink.addEventListener('click', (e) => e.preventDefault());
    movieNameLink.classList.add('title');
    movieNameLink.innerText = movie.name;
    movieName.append(movieNameLink);
    movieCadre.append(movieName);
    const smalInfo = document.createElement('p');
    smalInfo.classList.add('meta');
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-btn');
    likeButton.setAttribute('data-id', movie.id);
    if (_Likes_js__WEBPACK_IMPORTED_MODULE_0__["default"].setLiked().includes(movie.id)) {
      likeButton.innerHTML = `<i class="fa fa-heart"></i> <i>${likesNumber}</i> likes`;
    } else {
      likeButton.innerHTML = `<i class="fa fa-heart-o"></i> <i>${likesNumber}</i> likes`;
    }
    likeButton.addEventListener('click', () => {
      if (!_Likes_js__WEBPACK_IMPORTED_MODULE_0__["default"].setLiked().includes(movie.id)) {
        const itemId = likeButton.getAttribute('data-id');
        const like = new _Likes_js__WEBPACK_IMPORTED_MODULE_0__["default"](itemId);
        _Likes_js__WEBPACK_IMPORTED_MODULE_0__["default"].postLike(like);
      }
    });
    smalInfo.innerHTML = `${new Date(movie.premiered).getFullYear().toString()}<i class="dot"></i>${movie.runtime} min `;
    smalInfo.append(likeButton);
    movieCadre.append(commentBtn);
    movieCadre.append(reservationBtn);
    movieCadre.append(smalInfo);
    this.container.append(movieCadre);
  }

  static getOneShow = async (id) => {
    if (navigator.onLine) {
      const request = await fetch(`${this.base}/${id}`, { method: 'GET' });
      const result = await request.json();
      if (request.status === 200) {
        const commentsList = await _Comment_js__WEBPACK_IMPORTED_MODULE_1__["default"].getComment(result.id);
        const likesData = await _Likes_js__WEBPACK_IMPORTED_MODULE_0__["default"].countLikes();
        this.previewOneShow(result, commentsList, likesData);
        this.addCommentForm();
        document.querySelector('#post-id').value = id;
      }
    }
  }

  static previewOneShow = (result, commentsList, likesData) => {
    let likesNumber;
    if (likesData.length) {
      const thePost = likesData.filter((lik) => parseInt(lik.item_id, 10) === result.id);
      likesNumber = (thePost.length) ? thePost[0].likes : 0;
    } else {
      likesNumber = 0;
    }
    this.modal.innerHTML = '';
    const banner = new Image();
    banner.src = result.image.original;
    banner.classList.add('banner-image');
    const divBanner = document.createElement('div');
    divBanner.append(banner);
    const hrEl = document.createElement('hr');
    divBanner.append(hrEl);
    const likes = document.createElement('p');
    likes.innerHTML = `<i class="fa fa-heart"></i> ${likesNumber} Likes`;
    const comments = document.createElement('p');
    const commentsNumber = commentsList.length;
    comments.innerHTML = `<i class="fa fa-comments-o"></i> ${commentsNumber} Comments`;
    const underImage = document.createElement('div');
    underImage.classList.add('underImage');
    underImage.append(likes);
    underImage.append(comments);
    divBanner.append(underImage);
    const description = document.createElement('div');
    description.classList.add('description-data');
    const showname = document.createElement('h2');
    showname.classList.add('movie-name-title');
    showname.innerText = `Name: ${result.name}`;
    description.append(showname);
    const type = document.createElement('p');
    type.innerText = `Type: ${result.type}`;
    description.append(type);
    const language = document.createElement('p');
    language.innerText = `Language: ${result.language}`;
    description.append(language);
    const genres = document.createElement('p');
    genres.innerText = `Type: ${result.genres.join(', ')}`;
    description.append(genres);
    const runtime = document.createElement('p');
    runtime.innerText = `Runtime: ${result.runtime}`;
    description.append(runtime);
    const officialSite = document.createElement('p');
    officialSite.innerHTML = `Official Site: <a href="${result.officialSite}" target="blanc">${result.officialSite}</a>`;
    description.append(officialSite);
    const rating = document.createElement('p');
    rating.innerText = `Rating: ${result.rating}`;
    description.append(runtime);
    const summary = document.createElement('p');
    summary.innerHTML = `Summary: ${result.summary}`;
    description.append(summary);
    const producer = document.createElement('ul');
    const studio = document.createElement('li');
    studio.innerText = `Studuio: ${result.network.name}`;
    producer.append(studio);
    const country = document.createElement('li');
    country.innerText = `Studuio: ${result.network.country.name}`;
    producer.append(country);
    description.append(producer);
    this.modal.append(divBanner);
    this.modal.append(description);
    this.commentList.innerHTML = '';
    commentsList.forEach((com) => {
      const dates = new Date(com.creation_date);
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ];
      const currentHours = dates.getHours();
      const currentMinutes = dates.getMinutes();
      this.commentList.innerHTML += `
      <li class="data-items">
        <p class="user-prefix">${com.username.charAt(0)}</p>
        <div>
          <p>${com.comment}</p>
          <p class="time-posted">${dates.getDay()} - ${monthNames[dates.getMonth()]} - ${dates.getFullYear()} at ${(`0${currentHours}`).slice(-2)}:${(`0${currentMinutes}`).slice(-2)}</p>
        </div>
      </li>
      `;
    });
  }

  static addCommentForm = () => {
    this.modalFooter.innerHTML = '';
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    const commentHeader = document.createElement('h2');
    commentHeader.innerText = 'Add Comment';
    commentHeader.classList.add('comment-header');
    const commentForm = document.createElement('form');
    commentForm.classList.add('comment-form');
    const userName = document.createElement('input');
    userName.type = 'text';
    userName.placeholder = 'Enter your name';
    const message = document.createElement('textarea');
    message.cols = '10';
    message.rows = '10';
    message.placeholder = 'your insights';
    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('submit-comment-btn');
    button.innerText = 'Comment';
    const postId = document.createElement('input');
    postId.id = 'post-id';
    postId.type = 'hidden';
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (userName.value !== '' && message.value !== '') {
        const comment = new _Comment_js__WEBPACK_IMPORTED_MODULE_1__["default"](userName.value, message.value, postId.value);
        _Comment_js__WEBPACK_IMPORTED_MODULE_1__["default"].postComment(comment);
        const dates = new Date();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ];
        const currentHours = dates.getHours();
        const currentMinutes = dates.getMinutes();
        this.commentList.innerHTML += `
          <li class="data-items">
            <p class="user-prefix">${userName.value.charAt(0)}</p>
            <div>
              <p>${message.value}</p>
              <p class="time-posted">${dates.getDay()} - ${monthNames[dates.getMonth()]} - ${dates.getFullYear()} at ${(`0${currentHours}`).slice(-2)}:${(`0${currentMinutes}`).slice(-2)}</p>
            </div>
          </li>
      `;
        userName.value = '';
        message.value = '';
      }
    });
    commentForm.append(postId);
    commentForm.append(userName);
    commentForm.append(message);
    commentForm.append(button);
    commentDiv.append(commentHeader);
    commentDiv.append(commentForm);
    this.modalFooter.append(commentDiv);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Show);

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0de189d5eeac8a55f2d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_Show_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Show.js */ "./src/component/Show.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/assets/css/index.css");




(() => {
  const logo = new Image();
  logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  document.querySelector('.logo').append(logo);
  _component_Show_js__WEBPACK_IMPORTED_MODULE_0__["default"].getMovies();
})();

document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('hidden');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVILE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUM3SjtBQUNBLGlEQUFpRCx1QkFBdUIscUJBQXFCLHdCQUF3QiwwQkFBMEIscUNBQXFDLEdBQUcsT0FBTyx5REFBeUQscUJBQXFCLDJCQUEyQixHQUFHLE9BQU8sMEJBQTBCLDhCQUE4QixHQUFHLFVBQVUsY0FBYyxlQUFlLHNDQUFzQyxHQUFHLGlCQUFpQixxQ0FBcUMsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsbUNBQW1DLGVBQWUsaUJBQWlCLGlCQUFpQixHQUFHLGlCQUFpQixlQUFlLGlCQUFpQixHQUFHLGdDQUFnQyw4QkFBOEIscUJBQXFCLG1CQUFtQixHQUFHLHdDQUF3Qyx1QkFBdUIsa0JBQWtCLGdCQUFnQixjQUFjLGFBQWEsd0JBQXdCLEdBQUcsdUJBQXVCLGNBQWMscUJBQXFCLHdCQUF3QixtQkFBbUIsR0FBRywyQkFBMkIsaUJBQWlCLGlCQUFpQixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLGVBQWUseUJBQXlCLEdBQUcsb0JBQW9CLDBCQUEwQixlQUFlLGtCQUFrQix3QkFBd0IsbUNBQW1DLGVBQWUsd0JBQXdCLEdBQUcseUJBQXlCLDBCQUEwQixvQkFBb0IsOEJBQThCLEdBQUcsK0JBQStCLDZCQUE2Qix5REFBeUQsR0FBRyxZQUFZLG9CQUFvQixnQkFBZ0IsaUJBQWlCLGlEQUFpRCxXQUFXLGlCQUFpQix1QkFBdUIsR0FBRyxhQUFhLGtCQUFrQixHQUFHLG9CQUFvQixlQUFlLHNDQUFzQyxzQkFBc0IsdUJBQXVCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsOEJBQThCLGdEQUFnRCxHQUFHLGlCQUFpQixrQkFBa0IsbUNBQW1DLHFCQUFxQix3QkFBd0IsOEJBQThCLG9CQUFvQixnREFBZ0QsR0FBRyxvQkFBb0IsZ0RBQWdELEdBQUcsbUJBQW1CLG9CQUFvQixxQkFBcUIsa0NBQWtDLGlCQUFpQixrQ0FBa0Msb0JBQW9CLHlCQUF5QixHQUFHLHlCQUF5QixlQUFlLEdBQUcsbUJBQW1CLGdCQUFnQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyx1QkFBdUIsY0FBYyxHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLGtDQUFrQyxHQUFHLG1CQUFtQixlQUFlLEdBQUcsNEJBQTRCLGVBQWUsa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRywwQ0FBMEMsa0JBQWtCLDJCQUEyQixZQUFZLEdBQUcsZ0dBQWdHLG1CQUFtQiw4QkFBOEIsc0JBQXNCLG1CQUFtQixxQkFBcUIsZ0JBQWdCLHlDQUF5QyxpQ0FBaUMsOEJBQThCLDJCQUEyQix3QkFBd0IsR0FBRyxZQUFZLG1CQUFtQixzQkFBc0IsK0JBQStCLEdBQUcsY0FBYyxlQUFlLGlCQUFpQiw4QkFBOEIsa0JBQWtCLEdBQUcsaUJBQWlCLGtCQUFrQiwwQ0FBMEMsY0FBYyxxQkFBcUIsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsK0JBQStCLGdCQUFnQix5QkFBeUIsdUJBQXVCLHFCQUFxQixtQkFBbUIsd0JBQXdCLHVCQUF1Qix3QkFBd0IsR0FBRyxzQ0FBc0MsdUJBQXVCLFdBQVcsWUFBWSxjQUFjLGFBQWEsa0JBQWtCLGlDQUFpQyxlQUFlLHdDQUF3QyxHQUFHLDRDQUE0QyxtQ0FBbUMsR0FBRyxtQ0FBbUMsZ0JBQWdCLHFCQUFxQix1QkFBdUIsWUFBWSxXQUFXLHVCQUF1QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRywwQkFBMEIsbUJBQW1CLHFCQUFxQixrQkFBa0IsR0FBRyw4QkFBOEIsOEJBQThCLG1CQUFtQixxQkFBcUIscUJBQXFCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLEdBQUcsNkJBQTZCLGdDQUFnQyxxQkFBcUIsaUJBQWlCLG1CQUFtQixxQkFBcUIsbUJBQW1CLEdBQUcsa0NBQWtDLGVBQWUsZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLHdCQUF3QixrQkFBa0Isa0JBQWtCLEdBQUcsdUNBQXVDLHVCQUF1Qix1QkFBdUIsbUJBQW1CLG1CQUFtQixpQkFBaUIsaUJBQWlCLGtDQUFrQyw4QkFBOEIsb0JBQW9CLEdBQUcseUNBQXlDLGVBQWUsR0FBRyxxQkFBcUIsdUJBQXVCLDhCQUE4QiwwQkFBMEIscUJBQXFCLHFCQUFxQix1QkFBdUIsb0JBQW9CLEdBQUcsK0VBQStFLHVCQUF1QixhQUFhLGdCQUFnQixlQUFlLGNBQWMsaUJBQWlCLHNDQUFzQyw4QkFBOEIsbUJBQW1CLHFCQUFxQixvQkFBb0IsbUJBQW1CLGtCQUFrQix1QkFBdUIsR0FBRyxnQ0FBZ0MsYUFBYSxHQUFHLHlCQUF5QixzQkFBc0IscUJBQXFCLGdCQUFnQix1QkFBdUIscUNBQXFDLGdDQUFnQyxzQkFBc0IsR0FBRyxpR0FBaUcscUNBQXFDLDZCQUE2QixHQUFHLHlHQUF5RyxtQkFBbUIsR0FBRyxpQkFBaUIseUJBQXlCLCtCQUErQix3Q0FBd0Msc0NBQXNDLEdBQUcscUJBQXFCLFVBQVUsOEJBQThCLEtBQUssVUFBVSxnQ0FBZ0MsS0FBSyxHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyxvQkFBb0IsZUFBZSwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLGtDQUFrQyxjQUFjLDhCQUE4Qiw4QkFBOEIsdUJBQXVCLG9CQUFvQixpQkFBaUIsR0FBRyxrQkFBa0IsMEJBQTBCLHlDQUF5QyxtQkFBbUIsdUJBQXVCLHFCQUFxQix1QkFBdUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxTQUFTLDJGQUEyRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNBO0FBQ2pCOztBQUUxQjtBQUNBO0FBQ0EsYUFBYSw2Q0FBUztBQUN0QjtBQUNBLEVBQUUsb0VBQWM7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F3ZXNvbWUtdHYvLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5jc3M/MTI5MyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9zcmMvY29tcG9uZW50L0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL3NyYy9jb21wb25lbnQvTGlrZXMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL3NyYy9jb21wb25lbnQvU2hvdy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F3ZXNvbWUtdHYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2F3ZXNvbWUtdHYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGFyay1iZzogIzA5MDkwOTtcXG4gIC0tbGlnaHQtYmc6ICMxMTE7XFxuICAtLXdoaXRlLWNvbG9yOiAjZmZmO1xcbiAgLS1ibHVlLWNvbG9yOiAjNTdkMmViO1xcbiAgLS10cmFuc3BhcmVudC1kYXJrLWJnOiAjMDkwOTA5Y2U7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG59XFxuXFxuLmFwcC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW92aWUtbGlzdCB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubW92aWUtbGlzdCAuc2VjdGlvbi10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ubW92aWUtbGlzdCAuc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogNCU7XFxuICB0b3A6IDE3JTtcXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XFxufVxcblxcbi5hcHAtaGVhZGVyIC5sb2dvIHtcXG4gIHdpZHRoOiA1JTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5hcHAtaGVhZGVyIC5sb2dvIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMzAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24gdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstYmcpO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iZyk7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNDcyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5iYW5uZXItaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1kYXRhIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLm1vdmllLW5hbWUtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udW5kZXJJbWFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udW5kZXJJbWFnZSBpIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5tb2RhbC1mb290ZXIgLmNvbW1lbnQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbC1mb290ZXIgLmNvbW1lbnQgLmNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5tb2RhbC1mb290ZXIgLmNvbW1lbnQgLmNvbW1lbnQtZm9ybSBpbnB1dCxcXG4ubW9kYWwtZm9vdGVyIC5jb21tZW50IC5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iZyk7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgcGFkZGluZzogMiUgMDtcXG59XFxuXFxuLm1vdmllcy1yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA0NXB4O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5wb3N0ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTQ1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtOmhvdmVyIC5wb3N0ZXI6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLnBvc3RlciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLnBvc3RlciBpbWdbc3JjXSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSBoMyB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAudGl0bGUge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5tZXRhIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzk1OTU5NTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEgLmRvdCB7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZDogI2Q1ZDVkNTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEgLmxpa2UtYnRuIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDAgM3B4O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmbG9hdDogcmlnaHQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5tZXRhIC5saWtlLWJ0biBpIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5tb3ZpZXMtY291bnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDZweCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5vdmVybGFwQnV0dG9uLWNvbW1lbnQsXFxuLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24sXFxuLnN1Ym1pdC1jb21tZW50LWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI4JTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGxlZnQ6IDE1JTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uIHtcXG4gIHRvcDogNDAlO1xcbn1cXG5cXG4uc3VibWl0LWNvbW1lbnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmOGZmMmU7XFxuICBwYWRkaW5nLWxlZnQ6IDQwJTtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tY29tbWVudDpob3ZlcixcXG4ub3ZlcmxhcEJ1dHRvbi1yZXNlcnZhdGlvbjpob3ZlcixcXG4uc3VibWl0LWNvbW1lbnQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbTpob3ZlciAub3ZlcmxhcEJ1dHRvbi1jb21tZW50LFxcbi5tb3ZpZXMtcm93IC5pdGVtOmhvdmVyIC5vdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZmEtc3Bpbm5lciB7XFxuICBhbmltYXRpb24tbmFtZTogc3BpbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwMG1zO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5jb21tZW50LWhlYWRlciB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4jY29tbWVudHMtZGF0YSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uZGF0YS1pdGVtcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSA5MCU7XFxuICBnYXA6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI0MjQyNDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnVzZXItcHJlZml4IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUyJTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbi50aW1lLXBvc3RlZCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNW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Qyx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWJnOiAjMDkwOTA5O1xcbiAgLS1saWdodC1iZzogIzExMTtcXG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XFxuICAtLWJsdWUtY29sb3I6ICM1N2QyZWI7XFxuICAtLXRyYW5zcGFyZW50LWRhcmstYmc6ICMwOTA5MDljZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcbn1cXG5cXG4uYXBwLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb3ZpZS1saXN0IHtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5tb3ZpZS1saXN0IC5zZWN0aW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5tb3ZpZS1saXN0IC5zZWN0aW9uLXRpdGxlOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiA0JTtcXG4gIHRvcDogMTclO1xcbiAgYmFja2dyb3VuZDogIzM0M2E0MDtcXG59XFxuXFxuLmFwcC1oZWFkZXIgLmxvZ28ge1xcbiAgd2lkdGg6IDUlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmFwcC1oZWFkZXIgLmxvZ28gaW1nIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAzMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHVsIGxpIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtZGFyay1iZyk7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4uY29tbWVudHMtbGlzdCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40NzIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmJhbm5lci1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWRhdGEge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubW92aWUtbmFtZS10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51bmRlckltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi51bmRlckltYWdlIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIGlucHV0LFxcbi5tb2RhbC1mb290ZXIgLmNvbW1lbnQgLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBwYWRkaW5nOiAyJSAwO1xcbn1cXG5cXG4ubW92aWVzLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLnBvc3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNDUlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5wb3N0ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLnBvc3Rlcjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIGltZ1tzcmNdIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIGgzIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC50aXRsZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEge1xcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjOTU5NTk1O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAuZG90IHtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZDVkNWQ1O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAubGlrZS1idG4ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEgLmxpa2UtYnRuIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vdmllcy1jb3VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogNnB4IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tY29tbWVudCxcXG4ub3ZlcmxhcEJ1dHRvbi1yZXNlcnZhdGlvbixcXG4uc3VibWl0LWNvbW1lbnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjglO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogNzAlO1xcbiAgbGVmdDogMTUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24ge1xcbiAgdG9wOiA0MCU7XFxufVxcblxcbi5zdWJtaXQtY29tbWVudC1idG4ge1xcbiAgcG9zaXRpb246IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGY4ZmYyZTtcXG4gIHBhZGRpbmctbGVmdDogNDAlO1xcbn1cXG5cXG4ub3ZlcmxhcEJ1dHRvbi1jb21tZW50OmhvdmVyLFxcbi5vdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uOmhvdmVyLFxcbi5zdWJtaXQtY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtOmhvdmVyIC5vdmVybGFwQnV0dG9uLWNvbW1lbnQsXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mYS1zcGlubmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmNvbW1lbnQtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbiNjb21tZW50cy1kYXRhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5kYXRhLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDkwJTtcXG4gIGdhcDogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjQyNDI0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udXNlci1wcmVmaXgge1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTIlO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLnRpbWUtcG9zdGVkIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIENvbW1lbnQge1xuICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgbWVzc2FnZSwgaXRlbUlkKSB7XG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIHRoaXMuY29tbWVudCA9IG1lc3NhZ2U7XG4gICAgdGhpcy5pdGVtX2lkID0gaXRlbUlkO1xuICB9XG5cbiAgc3RhdGljIGFwcElkID0gJ0ROME9mMnBrVWJPSENNMGpEdG5qJztcblxuICBzdGF0aWMgYmFzZSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcyc7XG5cbiAgc3RhdGljIHBvc3RDb21tZW50ID0gYXN5bmMgKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLFxuICAgIH07XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlfS8ke3RoaXMuYXBwSWR9L2NvbW1lbnRzYCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICByZXR1cm4gJ2NyZWF0ZWQnO1xuICAgIH1cbiAgICByZXR1cm4gJ0ZhaWxlZCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0Q29tbWVudCA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRvci5vbkxpbmUgJiYgaXRlbSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZX0vJHt0aGlzLmFwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbX1gLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyIsImltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudC5qcyc7XG5cbmNsYXNzIExpa2VzIGV4dGVuZHMgQ29tbWVudCB7XG4gIGNvbnN0cnVjdG9yKGl0ZW1JZCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pdGVtX2lkID0gaXRlbUlkO1xuICB9XG5cbiAgc3RhdGljIHBvc3RMaWtlID0gYXN5bmMgKGxpa2UpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7bGlrZS5pdGVtX2lkfVwiXWApLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWhlYXJ0LW8nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7bGlrZS5pdGVtX2lkfVwiXWApLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2ZhLXNwaW5uZXInKTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxpa2UpLFxuICAgIH07XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7c3VwZXIuYmFzZX0vJHtzdXBlci5hcHBJZH0vbGlrZXNgLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDEpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtsaWtlLml0ZW1faWR9XCJdYCkuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3Bpbm5lcicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2xpa2UuaXRlbV9pZH1cIl1gKS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdmYS1oZWFydCcpO1xuICAgICAgY29uc3QgbGlrZUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2xpa2UuaXRlbV9pZH1cIl1gKS5jaGlsZHJlblsxXTtcbiAgICAgIGxpa2VDb3VudC5pbm5lclRleHQgPSBwYXJzZUludChsaWtlQ291bnQuaW5uZXJUZXh0LCAxMCkgKyAxO1xuICAgICAgdGhpcy5zZXRMaWtlZChsaWtlLml0ZW1faWQpO1xuICAgICAgcmV0dXJuICdjcmVhdGVkJztcbiAgICB9XG4gICAgcmV0dXJuICdGYWlsZWQnO1xuICB9XG5cbiAgc3RhdGljIHNldExpa2VkID0gKGlkID0gbnVsbCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgY29uc3Qgc3RvcmFnZSA9ICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkc0xpa2VzJykgPT09IG51bGwpID8gW10gOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRzTGlrZXMnKSk7XG4gICAgICBzdG9yYWdlLnB1c2goaWQpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZHNMaWtlcycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9XG4gICAgcmV0dXJuICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkc0xpa2VzJykgPT09IG51bGwpID8gW10gOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRzTGlrZXMnKSk7XG4gIH1cblxuICBzdGF0aWMgY291bnRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke3N1cGVyLmJhc2V9LyR7c3VwZXIuYXBwSWR9L2xpa2VzYCwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTGlrZXM7IiwiaW1wb3J0IExpa2VzIGZyb20gJy4vTGlrZXMuanMnO1xuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9Db21tZW50LmpzJztcblxuY2xhc3MgU2hvdyB7XG4gIHN0YXRpYyBiYXNlID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuXG4gIHN0YXRpYyBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVzLXJvdycpO1xuXG4gIHN0YXRpYyBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ib2R5Jyk7XG5cbiAgc3RhdGljIG1vZGFsRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvb3RlcicpO1xuXG4gIHN0YXRpYyBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1kYXRhJyk7XG5cbiAgc3RhdGljIGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZX0/cGFnZT0xYCwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCBMaWtlcy5jb3VudExpa2VzKCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMucG9wdWxhdGUoZWxlbWVudCwgbGlrZXNEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvdW50TW92aWVzKHJlc3VsdC5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjb3VudE1vdmllcyA9IChjb3VudCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZXMtY291bnRlcicpLnRleHRDb250ZW50ID0gY291bnQ7XG4gIH1cblxuICBzdGF0aWMgcG9wdWxhdGUgPSAobW92aWUsIGxpa2VzRGF0YSkgPT4ge1xuICAgIGxldCBsaWtlc051bWJlcjtcbiAgICBpZiAobGlrZXNEYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgdGhlUG9zdCA9IGxpa2VzRGF0YS5maWx0ZXIoKGxpaykgPT4gcGFyc2VJbnQobGlrLml0ZW1faWQsIDEwKSA9PT0gbW92aWUuaWQpO1xuICAgICAgbGlrZXNOdW1iZXIgPSAodGhlUG9zdC5sZW5ndGgpID8gdGhlUG9zdFswXS5saWtlcyA6IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpa2VzTnVtYmVyID0gMDtcbiAgICB9XG4gICAgY29uc3QgbW92aWVDYWRyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmllQ2FkcmUuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGNvbnN0IHBvc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwb3N0ZXIuaHJlZiA9ICcjJztcbiAgICBwb3N0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICBwb3N0ZXIuY2xhc3NMaXN0LmFkZCgncG9zdGVyJyk7XG4gICAgY29uc3QgcG9zdGVySW1hZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgcG9zdGVySW1hZ2VyLnNyYyA9IG1vdmllLmltYWdlLm1lZGl1bTtcbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ0bi5pbm5lclRleHQgPSAnQ29tbWVudHMnO1xuICAgIGNvbW1lbnRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWNvbW1lbnQtaXRlbS1pZCcsIG1vdmllLmlkKTtcbiAgICBjb21tZW50QnRuLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXBCdXR0b24tY29tbWVudCcpO1xuICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMuZ2V0T25lU2hvdyhjb21tZW50QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb21tZW50LWl0ZW0taWQnKSk7XG4gICAgfSk7XG4gICAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNlcnZhdGlvbkJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVzZXJ2YXRpb24taXRlbS1pZCcsIG1vdmllLmlkKTtcbiAgICByZXNlcnZhdGlvbkJ0bi5pbm5lclRleHQgPSAncmVzZXJ2YXRpb25zJztcbiAgICByZXNlcnZhdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKCdvdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uJyk7XG4gICAgcG9zdGVyLmFwcGVuZChwb3N0ZXJJbWFnZXIpO1xuICAgIG1vdmllQ2FkcmUuYXBwZW5kKHBvc3Rlcik7XG4gICAgY29uc3QgbW92aWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBtb3ZpZU5hbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1vdmllTmFtZUxpbmsuaHJlZiA9ICcjJztcbiAgICBtb3ZpZU5hbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgbW92aWVOYW1lTGluay5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG1vdmllTmFtZUxpbmsuaW5uZXJUZXh0ID0gbW92aWUubmFtZTtcbiAgICBtb3ZpZU5hbWUuYXBwZW5kKG1vdmllTmFtZUxpbmspO1xuICAgIG1vdmllQ2FkcmUuYXBwZW5kKG1vdmllTmFtZSk7XG4gICAgY29uc3Qgc21hbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc21hbEluZm8uY2xhc3NMaXN0LmFkZCgnbWV0YScpO1xuICAgIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2UtYnRuJyk7XG4gICAgbGlrZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtb3ZpZS5pZCk7XG4gICAgaWYgKExpa2VzLnNldExpa2VkKCkuaW5jbHVkZXMobW92aWUuaWQpKSB7XG4gICAgICBsaWtlQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPiA8aT4ke2xpa2VzTnVtYmVyfTwvaT4gbGlrZXNgO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWtlQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0LW9cIj48L2k+IDxpPiR7bGlrZXNOdW1iZXJ9PC9pPiBsaWtlc2A7XG4gICAgfVxuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIUxpa2VzLnNldExpa2VkKCkuaW5jbHVkZXMobW92aWUuaWQpKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IGxpa2VCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGNvbnN0IGxpa2UgPSBuZXcgTGlrZXMoaXRlbUlkKTtcbiAgICAgICAgTGlrZXMucG9zdExpa2UobGlrZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc21hbEluZm8uaW5uZXJIVE1MID0gYCR7bmV3IERhdGUobW92aWUucHJlbWllcmVkKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCl9PGkgY2xhc3M9XCJkb3RcIj48L2k+JHttb3ZpZS5ydW50aW1lfSBtaW4gYDtcbiAgICBzbWFsSW5mby5hcHBlbmQobGlrZUJ1dHRvbik7XG4gICAgbW92aWVDYWRyZS5hcHBlbmQoY29tbWVudEJ0bik7XG4gICAgbW92aWVDYWRyZS5hcHBlbmQocmVzZXJ2YXRpb25CdG4pO1xuICAgIG1vdmllQ2FkcmUuYXBwZW5kKHNtYWxJbmZvKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQobW92aWVDYWRyZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0T25lU2hvdyA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlfS8ke2lkfWAsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgY29tbWVudHNMaXN0ID0gYXdhaXQgQ29tbWVudC5nZXRDb21tZW50KHJlc3VsdC5pZCk7XG4gICAgICAgIGNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IExpa2VzLmNvdW50TGlrZXMoKTtcbiAgICAgICAgdGhpcy5wcmV2aWV3T25lU2hvdyhyZXN1bHQsIGNvbW1lbnRzTGlzdCwgbGlrZXNEYXRhKTtcbiAgICAgICAgdGhpcy5hZGRDb21tZW50Rm9ybSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9zdC1pZCcpLnZhbHVlID0gaWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHByZXZpZXdPbmVTaG93ID0gKHJlc3VsdCwgY29tbWVudHNMaXN0LCBsaWtlc0RhdGEpID0+IHtcbiAgICBsZXQgbGlrZXNOdW1iZXI7XG4gICAgaWYgKGxpa2VzRGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRoZVBvc3QgPSBsaWtlc0RhdGEuZmlsdGVyKChsaWspID0+IHBhcnNlSW50KGxpay5pdGVtX2lkLCAxMCkgPT09IHJlc3VsdC5pZCk7XG4gICAgICBsaWtlc051bWJlciA9ICh0aGVQb3N0Lmxlbmd0aCkgPyB0aGVQb3N0WzBdLmxpa2VzIDogMDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlrZXNOdW1iZXIgPSAwO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGJhbm5lciA9IG5ldyBJbWFnZSgpO1xuICAgIGJhbm5lci5zcmMgPSByZXN1bHQuaW1hZ2Uub3JpZ2luYWw7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1pbWFnZScpO1xuICAgIGNvbnN0IGRpdkJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkJhbm5lci5hcHBlbmQoYmFubmVyKTtcbiAgICBjb25zdCBockVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBkaXZCYW5uZXIuYXBwZW5kKGhyRWwpO1xuICAgIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxpa2VzLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPiAke2xpa2VzTnVtYmVyfSBMaWtlc2A7XG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY29tbWVudHNOdW1iZXIgPSBjb21tZW50c0xpc3QubGVuZ3RoO1xuICAgIGNvbW1lbnRzLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWNvbW1lbnRzLW9cIj48L2k+ICR7Y29tbWVudHNOdW1iZXJ9IENvbW1lbnRzYDtcbiAgICBjb25zdCB1bmRlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdW5kZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCd1bmRlckltYWdlJyk7XG4gICAgdW5kZXJJbWFnZS5hcHBlbmQobGlrZXMpO1xuICAgIHVuZGVySW1hZ2UuYXBwZW5kKGNvbW1lbnRzKTtcbiAgICBkaXZCYW5uZXIuYXBwZW5kKHVuZGVySW1hZ2UpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tZGF0YScpO1xuICAgIGNvbnN0IHNob3duYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzaG93bmFtZS5jbGFzc0xpc3QuYWRkKCdtb3ZpZS1uYW1lLXRpdGxlJyk7XG4gICAgc2hvd25hbWUuaW5uZXJUZXh0ID0gYE5hbWU6ICR7cmVzdWx0Lm5hbWV9YDtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoc2hvd25hbWUpO1xuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdHlwZS5pbm5lclRleHQgPSBgVHlwZTogJHtyZXN1bHQudHlwZX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZCh0eXBlKTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsYW5ndWFnZS5pbm5lclRleHQgPSBgTGFuZ3VhZ2U6ICR7cmVzdWx0Lmxhbmd1YWdlfWA7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kKGxhbmd1YWdlKTtcbiAgICBjb25zdCBnZW5yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ2VucmVzLmlubmVyVGV4dCA9IGBUeXBlOiAke3Jlc3VsdC5nZW5yZXMuam9pbignLCAnKX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChnZW5yZXMpO1xuICAgIGNvbnN0IHJ1bnRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcnVudGltZS5pbm5lclRleHQgPSBgUnVudGltZTogJHtyZXN1bHQucnVudGltZX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChydW50aW1lKTtcbiAgICBjb25zdCBvZmZpY2lhbFNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb2ZmaWNpYWxTaXRlLmlubmVySFRNTCA9IGBPZmZpY2lhbCBTaXRlOiA8YSBocmVmPVwiJHtyZXN1bHQub2ZmaWNpYWxTaXRlfVwiIHRhcmdldD1cImJsYW5jXCI+JHtyZXN1bHQub2ZmaWNpYWxTaXRlfTwvYT5gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChvZmZpY2lhbFNpdGUpO1xuICAgIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByYXRpbmcuaW5uZXJUZXh0ID0gYFJhdGluZzogJHtyZXN1bHQucmF0aW5nfWA7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kKHJ1bnRpbWUpO1xuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSBgU3VtbWFyeTogJHtyZXN1bHQuc3VtbWFyeX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChzdW1tYXJ5KTtcbiAgICBjb25zdCBwcm9kdWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3Qgc3R1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBzdHVkaW8uaW5uZXJUZXh0ID0gYFN0dWR1aW86ICR7cmVzdWx0Lm5ldHdvcmsubmFtZX1gO1xuICAgIHByb2R1Y2VyLmFwcGVuZChzdHVkaW8pO1xuICAgIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvdW50cnkuaW5uZXJUZXh0ID0gYFN0dWR1aW86ICR7cmVzdWx0Lm5ldHdvcmsuY291bnRyeS5uYW1lfWA7XG4gICAgcHJvZHVjZXIuYXBwZW5kKGNvdW50cnkpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChwcm9kdWNlcik7XG4gICAgdGhpcy5tb2RhbC5hcHBlbmQoZGl2QmFubmVyKTtcbiAgICB0aGlzLm1vZGFsLmFwcGVuZChkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5jb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBjb21tZW50c0xpc3QuZm9yRWFjaCgoY29tKSA9PiB7XG4gICAgICBjb25zdCBkYXRlcyA9IG5ldyBEYXRlKGNvbS5jcmVhdGlvbl9kYXRlKTtcbiAgICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGRhdGVzLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGRhdGVzLmdldE1pbnV0ZXMoKTtcbiAgICAgIHRoaXMuY29tbWVudExpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxsaSBjbGFzcz1cImRhdGEtaXRlbXNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ1c2VyLXByZWZpeFwiPiR7Y29tLnVzZXJuYW1lLmNoYXJBdCgwKX08L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+JHtjb20uY29tbWVudH08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aW1lLXBvc3RlZFwiPiR7ZGF0ZXMuZ2V0RGF5KCl9IC0gJHttb250aE5hbWVzW2RhdGVzLmdldE1vbnRoKCldfSAtICR7ZGF0ZXMuZ2V0RnVsbFllYXIoKX0gYXQgJHsoYDAke2N1cnJlbnRIb3Vyc31gKS5zbGljZSgtMil9OiR7KGAwJHtjdXJyZW50TWludXRlc31gKS5zbGljZSgtMil9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFkZENvbW1lbnRGb3JtID0gKCkgPT4ge1xuICAgIHRoaXMubW9kYWxGb290ZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgY29tbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbW1lbnREaXYuY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xuICAgIGNvbnN0IGNvbW1lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbW1lbnRIZWFkZXIuaW5uZXJUZXh0ID0gJ0FkZCBDb21tZW50JztcbiAgICBjb21tZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtaGVhZGVyJyk7XG4gICAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29tbWVudEZvcm0uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1mb3JtJyk7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHVzZXJOYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBuYW1lJztcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBtZXNzYWdlLmNvbHMgPSAnMTAnO1xuICAgIG1lc3NhZ2Uucm93cyA9ICcxMCc7XG4gICAgbWVzc2FnZS5wbGFjZWhvbGRlciA9ICd5b3VyIGluc2lnaHRzJztcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtY29tbWVudC1idG4nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuICAgIGNvbnN0IHBvc3RJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcG9zdElkLmlkID0gJ3Bvc3QtaWQnO1xuICAgIHBvc3RJZC50eXBlID0gJ2hpZGRlbic7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh1c2VyTmFtZS52YWx1ZSAhPT0gJycgJiYgbWVzc2FnZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IG5ldyBDb21tZW50KHVzZXJOYW1lLnZhbHVlLCBtZXNzYWdlLnZhbHVlLCBwb3N0SWQudmFsdWUpO1xuICAgICAgICBDb21tZW50LnBvc3RDb21tZW50KGNvbW1lbnQpO1xuICAgICAgICBjb25zdCBkYXRlcyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcicsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGRhdGVzLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gZGF0ZXMuZ2V0TWludXRlcygpO1xuICAgICAgICB0aGlzLmNvbW1lbnRMaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgPGxpIGNsYXNzPVwiZGF0YS1pdGVtc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ1c2VyLXByZWZpeFwiPiR7dXNlck5hbWUudmFsdWUuY2hhckF0KDApfTwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPiR7bWVzc2FnZS52YWx1ZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGltZS1wb3N0ZWRcIj4ke2RhdGVzLmdldERheSgpfSAtICR7bW9udGhOYW1lc1tkYXRlcy5nZXRNb250aCgpXX0gLSAke2RhdGVzLmdldEZ1bGxZZWFyKCl9IGF0ICR7KGAwJHtjdXJyZW50SG91cnN9YCkuc2xpY2UoLTIpfTokeyhgMCR7Y3VycmVudE1pbnV0ZXN9YCkuc2xpY2UoLTIpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgICB1c2VyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBtZXNzYWdlLnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29tbWVudEZvcm0uYXBwZW5kKHBvc3RJZCk7XG4gICAgY29tbWVudEZvcm0uYXBwZW5kKHVzZXJOYW1lKTtcbiAgICBjb21tZW50Rm9ybS5hcHBlbmQobWVzc2FnZSk7XG4gICAgY29tbWVudEZvcm0uYXBwZW5kKGJ1dHRvbik7XG4gICAgY29tbWVudERpdi5hcHBlbmQoY29tbWVudEhlYWRlcik7XG4gICAgY29tbWVudERpdi5hcHBlbmQoY29tbWVudEZvcm0pO1xuICAgIHRoaXMubW9kYWxGb290ZXIuYXBwZW5kKGNvbW1lbnREaXYpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3c7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgU2hvdyBmcm9tICcuLi8uLi9jb21wb25lbnQvU2hvdy5qcyc7XG5pbXBvcnQgTG9nb0ltYWdlIGZyb20gJy4uL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnO1xuXG4oKCkgPT4ge1xuICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gTG9nb0ltYWdlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpLmFwcGVuZChsb2dvKTtcbiAgU2hvdy5nZXRNb3ZpZXMoKTtcbn0pKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==