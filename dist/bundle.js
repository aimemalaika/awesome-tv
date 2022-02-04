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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark-bg: #090909;\n  --light-bg: #111;\n  --white-color: #fff;\n  --blue-color: #57d2eb;\n  --transparent-dark-bg: #090909ce;\n}\n\n* {\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n  font-weight: 100;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: var(--white-color);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--light-bg);\n}\n\n.app-header {\n  background-color: var(--dark-bg);\n  height: 70px;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 95%;\n  margin: auto;\n  height: 100%;\n}\n\n.movie-list {\n  width: 95%;\n  margin: auto;\n}\n\n.movie-list .section-title {\n  color: var(--white-color);\n  font-weight: 400;\n  font-size: 2em;\n}\n\n.movie-list .section-title::before {\n  position: absolute;\n  content: \"\";\n  height: 3px;\n  width: 4%;\n  top: 17%;\n  background: #343a40;\n}\n\n.app-header .logo {\n  width: 5%;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0;\n}\n\n.app-header .logo img {\n  height: 35px;\n  margin: auto;\n}\n\n.navigation {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  justify-content: end;\n}\n\n.navigation ul {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 30%;\n  align-items: center;\n}\n\n.navigation ul li a {\n  text-decoration: none;\n  font-size: 15px;\n  color: var(--white-color);\n}\n\n.navigation ul li a:hover {\n  color: var(--blue-color);\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: var(--transparent-dark-bg);\n  top: 0;\n  z-index: 100;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}\n\n.modal-content {\n  width: 70%;\n  background-color: var(--light-bg);\n  margin: 10px auto;\n  padding: 10px 20px;\n}\n\n.modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.modal-body {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  color: var(--white-color);\n  font-size: 15px;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.comments-list {\n  border-bottom: 1px solid var(--white-color);\n}\n\n.close-button {\n  font-size: 25px;\n  font-weight: 500;\n  background-color: transparent;\n  border: none;\n  color: rgba(255, 0, 0, 0.71);\n  cursor: pointer;\n  padding-bottom: 10px;\n}\n\n.close-button:hover {\n  color: red;\n}\n\n.banner-image {\n  width: 100%;\n}\n\n.description-data {\n  padding: 0 20px;\n}\n\n.movie-name-title {\n  margin: 0;\n}\n\n.underImage {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.underImage i {\n  color: red;\n}\n\n.modal-footer .comment {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n}\n\n.modal-footer .comment .comment-form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.modal-footer .comment .comment-form input,\n.modal-footer .comment .comment-form textarea {\n  display: block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1.2rem;\n  line-height: 2;\n  font-weight: 300;\n  color: #000;\n  background-color: var(--white-color);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  margin-bottom: 20px;\n}\n\nfooter {\n  display: block;\n  border: 1px solid;\n  background: var(--dark-bg);\n}\n\nfooter p {\n  width: 95%;\n  margin: auto;\n  color: var(--white-color);\n  padding: 2% 0;\n}\n\n.movies-row {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px;\n  margin-top: 45px;\n}\n\n.movies-row .item {\n  position: relative;\n}\n\n.movies-row .item .poster {\n  width: 100%;\n  padding-bottom: 145%;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n  background: #212529;\n}\n\n.movies-row .item .poster::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background: rgba(0, 0, 0, 0);\n  z-index: 1;\n  transition: all 0.2s ease-in-out 0s;\n}\n\n.movies-row .item:hover .poster::after {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.notification .message img {\n  height: 50px;\n  width: 60px;\n  margin: auto 10px;\n}\n\n.movies-row .item .poster img {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n}\n\n.movies-row .item .poster img[src] {\n  visibility: visible;\n}\n\n.movies-row .item h3 {\n  font-size: 1em;\n  font-weight: 500;\n  display: grid;\n}\n\n.movies-row .item .title {\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 400;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-decoration: none;\n}\n\n.movies-row .item .meta {\n  font-size: 0.9em !important;\n  font-weight: 300;\n  height: 50px;\n  display: block;\n  overflow: hidden;\n  color: #959595;\n}\n\n.movies-row .item .meta .dot {\n  width: 3px;\n  height: 3px;\n  vertical-align: 2px;\n  border-radius: 50%;\n  display: inline-block;\n  background: #d5d5d5;\n  content: \"\";\n  margin: 0 5px;\n}\n\n.movies-row .item .meta .like-btn {\n  font-style: normal;\n  border-radius: 3px;\n  padding: 0 3px;\n  font-size: 1em;\n  float: right;\n  border: none;\n  background-color: transparent;\n  color: var(--white-color);\n  cursor: pointer;\n}\n\n.movies-row .item .meta .like-btn i {\n  color: red;\n}\n\n.movies-counter {\n  text-align: center;\n  color: var(--white-color);\n  background-color: red;\n  font-weight: 500;\n  padding: 6px 4px;\n  border-radius: 50%;\n  font-size: 13px;\n}\n\n.overlapButton-comment,\n.overlapButton-reservation,\n.submit-comment-btn {\n  position: absolute;\n  top: 28%;\n  z-index: 10;\n  width: 70%;\n  left: 15%;\n  border: none;\n  background-color: var(--light-bg);\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 300;\n  cursor: pointer;\n  padding: 5px 0;\n  display: none;\n  border-radius: 5px;\n}\n\n.overlapButton-reservation {\n  top: 40%;\n}\n\n.submit-comment-btn {\n  position: inherit;\n  display: inherit;\n  width: 100%;\n  text-align: center;\n  background-color: var(--dark-bg);\n  border: 1px solid #f0f8ff2e;\n  padding-left: 40%;\n}\n\n.overlapButton-comment:hover,\n.overlapButton-reservation:hover,\n.submit-comment-btn:hover {\n  background-color: var(--dark-bg);\n  color: var(--blue-color);\n}\n\n.movies-row .item:hover .overlapButton-comment,\n.movies-row .item:hover .overlapButton-reservation {\n  display: block;\n}\n\n.fa-spinner {\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.comment-header {\n  color: var(--white-color);\n}\n\n#comments-data {\n  padding: 0;\n  list-style-type: none;\n}\n\n.data-items {\n  display: grid;\n  grid-template-columns: 5% 90%;\n  gap: 15px;\n  color: var(--white-color);\n  border: 1px solid #242424;\n  border-radius: 4px;\n  margin-top: 7px;\n  padding: 5px;\n}\n\n.user-prefix {\n  color: var(--dark-bg);\n  background-color: var(--white-color);\n  font-size: 2em;\n  text-align: center;\n  font-weight: 900;\n  border-radius: 52%;\n  padding: 0 10px;\n  margin: auto auto auto 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.time-posted {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.animate-load {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  color: red;\n  padding: 52% 50%;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.753);\n}\n\n.notification {\n  position: fixed;\n  width: 40%;\n  right: 2%;\n  top: 10%;\n  color: var(--white-color);\n  background-color: var(--dark-bg);\n  border-radius: 4px;\n  z-index: 20;\n}\n\n.notification .message {\n  font-weight: 700;\n  font-size: 1.1em;\n  display: flex;\n  padding: 5px 20px;\n}\n\n.progress-bar {\n  height: 3px;\n  width: 0;\n  background-color: red;\n  transition: 300ms linear;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,500;1,700;1,900&display=swap');\n\n:root {\n  --dark-bg: #090909;\n  --light-bg: #111;\n  --white-color: #fff;\n  --blue-color: #57d2eb;\n  --transparent-dark-bg: #090909ce;\n}\n\n* {\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n  font-weight: 100;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: var(--white-color);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--light-bg);\n}\n\n.app-header {\n  background-color: var(--dark-bg);\n  height: 70px;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 95%;\n  margin: auto;\n  height: 100%;\n}\n\n.movie-list {\n  width: 95%;\n  margin: auto;\n}\n\n.movie-list .section-title {\n  color: var(--white-color);\n  font-weight: 400;\n  font-size: 2em;\n}\n\n.movie-list .section-title::before {\n  position: absolute;\n  content: \"\";\n  height: 3px;\n  width: 4%;\n  top: 17%;\n  background: #343a40;\n}\n\n.app-header .logo {\n  width: 5%;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0;\n}\n\n.app-header .logo img {\n  height: 35px;\n  margin: auto;\n}\n\n.navigation {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  justify-content: end;\n}\n\n.navigation ul {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 30%;\n  align-items: center;\n}\n\n.navigation ul li a {\n  text-decoration: none;\n  font-size: 15px;\n  color: var(--white-color);\n}\n\n.navigation ul li a:hover {\n  color: var(--blue-color);\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: var(--transparent-dark-bg);\n  top: 0;\n  z-index: 100;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}\n\n.modal-content {\n  width: 70%;\n  background-color: var(--light-bg);\n  margin: 10px auto;\n  padding: 10px 20px;\n}\n\n.modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.modal-body {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  color: var(--white-color);\n  font-size: 15px;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.comments-list {\n  border-bottom: 1px solid var(--white-color);\n}\n\n.close-button {\n  font-size: 25px;\n  font-weight: 500;\n  background-color: transparent;\n  border: none;\n  color: rgba(255, 0, 0, 0.71);\n  cursor: pointer;\n  padding-bottom: 10px;\n}\n\n.close-button:hover {\n  color: red;\n}\n\n.banner-image {\n  width: 100%;\n}\n\n.description-data {\n  padding: 0 20px;\n}\n\n.movie-name-title {\n  margin: 0;\n}\n\n.underImage {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.underImage i {\n  color: red;\n}\n\n.modal-footer .comment {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n}\n\n.modal-footer .comment .comment-form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.modal-footer .comment .comment-form input,\n.modal-footer .comment .comment-form textarea {\n  display: block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1.2rem;\n  line-height: 2;\n  font-weight: 300;\n  color: #000;\n  background-color: var(--white-color);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  margin-bottom: 20px;\n}\n\nfooter {\n  display: block;\n  border: 1px solid;\n  background: var(--dark-bg);\n}\n\nfooter p {\n  width: 95%;\n  margin: auto;\n  color: var(--white-color);\n  padding: 2% 0;\n}\n\n.movies-row {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px;\n  margin-top: 45px;\n}\n\n.movies-row .item {\n  position: relative;\n}\n\n.movies-row .item .poster {\n  width: 100%;\n  padding-bottom: 145%;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n  background: #212529;\n}\n\n.movies-row .item .poster::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background: rgba(0, 0, 0, 0);\n  z-index: 1;\n  transition: all 0.2s ease-in-out 0s;\n}\n\n.movies-row .item:hover .poster::after {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.notification .message img {\n  height: 50px;\n  width: 60px;\n  margin: auto 10px;\n}\n\n.movies-row .item .poster img {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n}\n\n.movies-row .item .poster img[src] {\n  visibility: visible;\n}\n\n.movies-row .item h3 {\n  font-size: 1em;\n  font-weight: 500;\n  display: grid;\n}\n\n.movies-row .item .title {\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 400;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-decoration: none;\n}\n\n.movies-row .item .meta {\n  font-size: 0.9em !important;\n  font-weight: 300;\n  height: 50px;\n  display: block;\n  overflow: hidden;\n  color: #959595;\n}\n\n.movies-row .item .meta .dot {\n  width: 3px;\n  height: 3px;\n  vertical-align: 2px;\n  border-radius: 50%;\n  display: inline-block;\n  background: #d5d5d5;\n  content: \"\";\n  margin: 0 5px;\n}\n\n.movies-row .item .meta .like-btn {\n  font-style: normal;\n  border-radius: 3px;\n  padding: 0 3px;\n  font-size: 1em;\n  float: right;\n  border: none;\n  background-color: transparent;\n  color: var(--white-color);\n  cursor: pointer;\n}\n\n.movies-row .item .meta .like-btn i {\n  color: red;\n}\n\n.movies-counter {\n  text-align: center;\n  color: var(--white-color);\n  background-color: red;\n  font-weight: 500;\n  padding: 6px 4px;\n  border-radius: 50%;\n  font-size: 13px;\n}\n\n.overlapButton-comment,\n.overlapButton-reservation,\n.submit-comment-btn {\n  position: absolute;\n  top: 28%;\n  z-index: 10;\n  width: 70%;\n  left: 15%;\n  border: none;\n  background-color: var(--light-bg);\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 300;\n  cursor: pointer;\n  padding: 5px 0;\n  display: none;\n  border-radius: 5px;\n}\n\n.overlapButton-reservation {\n  top: 40%;\n}\n\n.submit-comment-btn {\n  position: inherit;\n  display: inherit;\n  width: 100%;\n  text-align: center;\n  background-color: var(--dark-bg);\n  border: 1px solid #f0f8ff2e;\n  padding-left: 40%;\n}\n\n.overlapButton-comment:hover,\n.overlapButton-reservation:hover,\n.submit-comment-btn:hover {\n  background-color: var(--dark-bg);\n  color: var(--blue-color);\n}\n\n.movies-row .item:hover .overlapButton-comment,\n.movies-row .item:hover .overlapButton-reservation {\n  display: block;\n}\n\n.fa-spinner {\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.comment-header {\n  color: var(--white-color);\n}\n\n#comments-data {\n  padding: 0;\n  list-style-type: none;\n}\n\n.data-items {\n  display: grid;\n  grid-template-columns: 5% 90%;\n  gap: 15px;\n  color: var(--white-color);\n  border: 1px solid #242424;\n  border-radius: 4px;\n  margin-top: 7px;\n  padding: 5px;\n}\n\n.user-prefix {\n  color: var(--dark-bg);\n  background-color: var(--white-color);\n  font-size: 2em;\n  text-align: center;\n  font-weight: 900;\n  border-radius: 52%;\n  padding: 0 10px;\n  margin: auto auto auto 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.time-posted {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.animate-load {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  color: red;\n  padding: 52% 50%;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.753);\n}\n\n.notification {\n  position: fixed;\n  width: 40%;\n  right: 2%;\n  top: 10%;\n  color: var(--white-color);\n  background-color: var(--dark-bg);\n  border-radius: 4px;\n  z-index: 20;\n}\n\n.notification .message {\n  font-weight: 700;\n  font-size: 1.1em;\n  display: flex;\n  padding: 5px 20px;\n}\n\n.progress-bar {\n  height: 3px;\n  width: 0;\n  background-color: red;\n  transition: 300ms linear;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/responsive.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/responsive.css ***!
  \*****************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 980px) {\n  .movies-row {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .navigation ul {\n    width: 40%;\n  }\n}\n\n@media screen and (max-width: 680px) {\n  .movies-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .navigation ul {\n    width: 60%;\n  }\n\n  .modal-footer .comment {\n    width: 100%;\n  }\n\n  .modal-content {\n    width: 95%;\n  }\n\n  .modal-body {\n    grid-template-columns: 1fr;\n  }\n\n  .data-items {\n    grid-template-columns: 1fr;\n    padding: 2px 20px;\n  }\n\n  .user-prefix {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .movies-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .navigation ul {\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 340px) {\n  .movies-row {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .navigation ul {\n    width: 90%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/responsive.css"],"names":[],"mappings":"AAAA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;IAC1B,iBAAiB;EACnB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["@media screen and (max-width: 980px) {\n  .movies-row {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .navigation ul {\n    width: 40%;\n  }\n}\n\n@media screen and (max-width: 680px) {\n  .movies-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .navigation ul {\n    width: 60%;\n  }\n\n  .modal-footer .comment {\n    width: 100%;\n  }\n\n  .modal-content {\n    width: 95%;\n  }\n\n  .modal-body {\n    grid-template-columns: 1fr;\n  }\n\n  .data-items {\n    grid-template-columns: 1fr;\n    padding: 2px 20px;\n  }\n\n  .user-prefix {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .movies-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .navigation ul {\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 340px) {\n  .movies-row {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .navigation ul {\n    width: 90%;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/css/responsive.css":
/*!***************************************!*\
  !*** ./src/assets/css/responsive.css ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/responsive.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

  static fullData;

  static getMovies = async () => {
    if (navigator.onLine) {
      const request = await fetch(`${this.base}?page=1`, { method: 'GET' });
      const result = await request.json();
      if (result.length) {
        this.fullData = result;
        this.container.innerHTML = '';
      }
      this.countMovies(result.length);
      return result.length;
    }
    return 0;
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
    comments.classList.add('commentcount');
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
          <p class="time-posted"><span>${com.username}</span> <span>${dates.getDay()} - ${monthNames[dates.getMonth()]} - ${dates.getFullYear()} at ${(`0${currentHours}`).slice(-2)}:${(`0${currentMinutes}`).slice(-2)}</span></p>
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
              <p class="time-posted"><span>${userName}</span><span>${dates.getDay()} - ${monthNames[dates.getMonth()]} - ${dates.getFullYear()} at ${(`0${currentHours}`).slice(-2)}:${(`0${currentMinutes}`).slice(-2)}</span></p>
            </div>
          </li>
      `;
        const newCount = parseInt(document.querySelector('.commentcount').textContent.split(' ')[1], 10) + 1;
        document.querySelector('.commentcount').innerHTML = `<i class="fa fa-comments-o"></i> ${newCount} Comments`;
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

/***/ }),

/***/ "./src/assets/images/success.gif":
/*!***************************************!*\
  !*** ./src/assets/images/success.gif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26c7ecd5b197fa054bfe.gif";

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
/* harmony import */ var _component_Likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Likes.js */ "./src/component/Likes.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _images_success_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/success.gif */ "./src/assets/images/success.gif");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ "./src/assets/css/index.css");
/* harmony import */ var _css_responsive_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/responsive.css */ "./src/assets/css/responsive.css");







let start = 0;
let limit = 24;

const infinitScroll = async () => {
  document.querySelector('.animate-load').classList.remove('hidden');
  const likesData = await _component_Likes_js__WEBPACK_IMPORTED_MODULE_1__["default"].countLikes();
  await _component_Show_js__WEBPACK_IMPORTED_MODULE_0__["default"].fullData.slice(start, limit).forEach((element) => {
    _component_Show_js__WEBPACK_IMPORTED_MODULE_0__["default"].populate(element, likesData);
  });
  await document.querySelector('.animate-load').classList.add('hidden');
};

(async () => {
  let purcent = 0;
  const logo = new Image();
  logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_2__;
  document.querySelector('.logo').append(logo);
  const infoImg = new Image();
  infoImg.src = _images_success_gif__WEBPACK_IMPORTED_MODULE_3__;
  document.querySelector('.message').prepend(infoImg);
  await _component_Show_js__WEBPACK_IMPORTED_MODULE_0__["default"].getMovies();
  infinitScroll();
  const loaderpurcent = setInterval(() => {
    document.querySelector('.progress-bar').style.width = `${purcent}%`;
    if (purcent >= 100) {
      clearInterval(loaderpurcent);
      document.querySelector('.notification').classList.add('hidden');
    }
    purcent += 5;
  }, 300);
})();

document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('hidden');
});

window.onscroll = () => {
  if (Math.round((window.innerHeight + window.scrollY)) >= document.body.offsetHeight) {
    start += 24;
    limit += 24;
    infinitScroll();
  }
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxX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Q0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL3NyYy9hc3NldHMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vc3JjL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3MiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5jc3M/MTI5MyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vc3JjL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3M/ZGNlNyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9zcmMvY29tcG9uZW50L0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL3NyYy9jb21wb25lbnQvTGlrZXMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL3NyYy9jb21wb25lbnQvU2hvdy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F3ZXNvbWUtdHYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2F3ZXNvbWUtdHYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGFyay1iZzogIzA5MDkwOTtcXG4gIC0tbGlnaHQtYmc6ICMxMTE7XFxuICAtLXdoaXRlLWNvbG9yOiAjZmZmO1xcbiAgLS1ibHVlLWNvbG9yOiAjNTdkMmViO1xcbiAgLS10cmFuc3BhcmVudC1kYXJrLWJnOiAjMDkwOTA5Y2U7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG59XFxuXFxuLmFwcC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW92aWUtbGlzdCB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubW92aWUtbGlzdCAuc2VjdGlvbi10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ubW92aWUtbGlzdCAuc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogNCU7XFxuICB0b3A6IDE3JTtcXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XFxufVxcblxcbi5hcHAtaGVhZGVyIC5sb2dvIHtcXG4gIHdpZHRoOiA1JTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5hcHAtaGVhZGVyIC5sb2dvIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMzAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24gdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstYmcpO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iZyk7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmJhbm5lci1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWRhdGEge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubW92aWUtbmFtZS10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51bmRlckltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi51bmRlckltYWdlIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIGlucHV0LFxcbi5tb2RhbC1mb290ZXIgLmNvbW1lbnQgLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBwYWRkaW5nOiAyJSAwO1xcbn1cXG5cXG4ubW92aWVzLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLnBvc3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNDUlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5wb3N0ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLnBvc3Rlcjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uIC5tZXNzYWdlIGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbjogYXV0byAxMHB4O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIGltZ1tzcmNdIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIGgzIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC50aXRsZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEge1xcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjOTU5NTk1O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAuZG90IHtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZDVkNWQ1O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAubGlrZS1idG4ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEgLmxpa2UtYnRuIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vdmllcy1jb3VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogNnB4IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tY29tbWVudCxcXG4ub3ZlcmxhcEJ1dHRvbi1yZXNlcnZhdGlvbixcXG4uc3VibWl0LWNvbW1lbnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjglO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogNzAlO1xcbiAgbGVmdDogMTUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24ge1xcbiAgdG9wOiA0MCU7XFxufVxcblxcbi5zdWJtaXQtY29tbWVudC1idG4ge1xcbiAgcG9zaXRpb246IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGY4ZmYyZTtcXG4gIHBhZGRpbmctbGVmdDogNDAlO1xcbn1cXG5cXG4ub3ZlcmxhcEJ1dHRvbi1jb21tZW50OmhvdmVyLFxcbi5vdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uOmhvdmVyLFxcbi5zdWJtaXQtY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtOmhvdmVyIC5vdmVybGFwQnV0dG9uLWNvbW1lbnQsXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mYS1zcGlubmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmNvbW1lbnQtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbiNjb21tZW50cy1kYXRhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5kYXRhLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDkwJTtcXG4gIGdhcDogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjQyNDI0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udXNlci1wcmVmaXgge1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTIlO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLnRpbWUtcG9zdGVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYW5pbWF0ZS1sb2FkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBjb2xvcjogcmVkO1xcbiAgcGFkZGluZzogNTIlIDUwJTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Myk7XFxufVxcblxcbi5ub3RpZmljYXRpb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDQwJTtcXG4gIHJpZ2h0OiAyJTtcXG4gIHRvcDogMTAlO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgei1pbmRleDogMjA7XFxufVxcblxcbi5ub3RpZmljYXRpb24gLm1lc3NhZ2Uge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxufVxcblxcbi5wcm9ncmVzcy1iYXIge1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IDMwMG1zIGxpbmVhcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUF5QjtBQUMz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Q2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWJnOiAjMDkwOTA5O1xcbiAgLS1saWdodC1iZzogIzExMTtcXG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XFxuICAtLWJsdWUtY29sb3I6ICM1N2QyZWI7XFxuICAtLXRyYW5zcGFyZW50LWRhcmstYmc6ICMwOTA5MDljZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcbn1cXG5cXG4uYXBwLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb3ZpZS1saXN0IHtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5tb3ZpZS1saXN0IC5zZWN0aW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5tb3ZpZS1saXN0IC5zZWN0aW9uLXRpdGxlOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiA0JTtcXG4gIHRvcDogMTclO1xcbiAgYmFja2dyb3VuZDogIzM0M2E0MDtcXG59XFxuXFxuLmFwcC1oZWFkZXIgLmxvZ28ge1xcbiAgd2lkdGg6IDUlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmFwcC1oZWFkZXIgLmxvZ28gaW1nIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAzMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHVsIGxpIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtZGFyay1iZyk7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4uY29tbWVudHMtbGlzdCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43MSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYmFubmVyLWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tZGF0YSB7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5tb3ZpZS1uYW1lLXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnVuZGVySW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnVuZGVySW1hZ2UgaSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubW9kYWwtZm9vdGVyIC5jb21tZW50IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwtZm9vdGVyIC5jb21tZW50IC5jb21tZW50LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtZm9vdGVyIC5jb21tZW50IC5jb21tZW50LWZvcm0gaW5wdXQsXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIHRleHRhcmVhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmcpO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDIlIDA7XFxufVxcblxcbi5tb3ZpZXMtcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNDVweDtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDE0NSU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLnBvc3Rlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbTpob3ZlciAucG9zdGVyOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5ub3RpZmljYXRpb24gLm1lc3NhZ2UgaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luOiBhdXRvIDEwcHg7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5wb3N0ZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5wb3N0ZXIgaW1nW3NyY10ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gaDMge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLnRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSB7XFxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICM5NTk1OTU7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5tZXRhIC5kb3Qge1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogM3B4O1xcbiAgdmVydGljYWwtYWxpZ246IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6ICNkNWQ1ZDU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5tZXRhIC5saWtlLWJ0biB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAwIDNweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAubGlrZS1idG4gaSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubW92aWVzLWNvdW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiA2cHggNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ub3ZlcmxhcEJ1dHRvbi1jb21tZW50LFxcbi5vdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uLFxcbi5zdWJtaXQtY29tbWVudC1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyOCU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiA3MCU7XFxuICBsZWZ0OiAxNSU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iZyk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ub3ZlcmxhcEJ1dHRvbi1yZXNlcnZhdGlvbiB7XFxuICB0b3A6IDQwJTtcXG59XFxuXFxuLnN1Ym1pdC1jb21tZW50LWJ0biB7XFxuICBwb3NpdGlvbjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjhmZjJlO1xcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XFxufVxcblxcbi5vdmVybGFwQnV0dG9uLWNvbW1lbnQ6aG92ZXIsXFxuLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb246aG92ZXIsXFxuLnN1Ym1pdC1jb21tZW50LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLm92ZXJsYXBCdXR0b24tY29tbWVudCxcXG4ubW92aWVzLXJvdyAuaXRlbTpob3ZlciAub3ZlcmxhcEJ1dHRvbi1yZXNlcnZhdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZhLXNwaW5uZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNwaW47XFxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uY29tbWVudC1oZWFkZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuI2NvbW1lbnRzLWRhdGEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmRhdGEtaXRlbXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgOTAlO1xcbiAgZ2FwOiAxNXB4O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNDI0MjQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi51c2VyLXByZWZpeCB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiA1MiU7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4udGltZS1wb3N0ZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hbmltYXRlLWxvYWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDVlbTtcXG4gIGNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiA1MiUgNTAlO1xcbiAgei1pbmRleDogMTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUzKTtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogNDAlO1xcbiAgcmlnaHQ6IDIlO1xcbiAgdG9wOiAxMCU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbiAubWVzc2FnZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG59XFxuXFxuLnByb2dyZXNzLWJhciB7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdHJhbnNpdGlvbjogMzAwbXMgbGluZWFyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xcbiAgLm1vdmllcy1yb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24gdWwge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xcbiAgLm1vdmllcy1yb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24gdWwge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLm1vZGFsLWZvb3RlciAuY29tbWVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLm1vZGFsLWJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIC5kYXRhLWl0ZW1zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmc6IDJweCAyMHB4O1xcbiAgfVxcblxcbiAgLnVzZXItcHJlZml4IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDkwcHgpIHtcXG4gIC5tb3ZpZXMtcm93IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uIHVsIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcXG4gIC5tb3ZpZXMtcm93IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uIHVsIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xcbiAgLm1vdmllcy1yb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24gdWwge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xcbiAgLm1vdmllcy1yb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24gdWwge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLm1vZGFsLWZvb3RlciAuY29tbWVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLm1vZGFsLWJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIC5kYXRhLWl0ZW1zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmc6IDJweCAyMHB4O1xcbiAgfVxcblxcbiAgLnVzZXItcHJlZml4IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDkwcHgpIHtcXG4gIC5tb3ZpZXMtcm93IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uIHVsIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcXG4gIC5tb3ZpZXMtcm93IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uIHVsIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNwb25zaXZlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzcG9uc2l2ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgQ29tbWVudCB7XG4gIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBtZXNzYWdlLCBpdGVtSWQpIHtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgdGhpcy5jb21tZW50ID0gbWVzc2FnZTtcbiAgICB0aGlzLml0ZW1faWQgPSBpdGVtSWQ7XG4gIH1cblxuICBzdGF0aWMgYXBwSWQgPSAnRE4wT2YycGtVYk9IQ00wakR0bmonO1xuXG4gIHN0YXRpYyBiYXNlID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzJztcblxuICBzdGF0aWMgcG9zdENvbW1lbnQgPSBhc3luYyAoY29tbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudCksXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2V9LyR7dGhpcy5hcHBJZH0vY29tbWVudHNgLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDEpIHtcbiAgICAgIHJldHVybiAnY3JlYXRlZCc7XG4gICAgfVxuICAgIHJldHVybiAnRmFpbGVkJztcbiAgfVxuXG4gIHN0YXRpYyBnZXRDb21tZW50ID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSAmJiBpdGVtKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlfS8ke3RoaXMuYXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtfWAsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7IiwiaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9Db21tZW50LmpzJztcblxuY2xhc3MgTGlrZXMgZXh0ZW5kcyBDb21tZW50IHtcbiAgY29uc3RydWN0b3IoaXRlbUlkKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLml0ZW1faWQgPSBpdGVtSWQ7XG4gIH1cblxuICBzdGF0aWMgcG9zdExpa2UgPSBhc3luYyAobGlrZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtsaWtlLml0ZW1faWR9XCJdYCkuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnZmEtaGVhcnQtbycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtsaWtlLml0ZW1faWR9XCJdYCkuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnZmEtc3Bpbm5lcicpO1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobGlrZSksXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtzdXBlci5iYXNlfS8ke3N1cGVyLmFwcElkfS9saWtlc2AsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2xpa2UuaXRlbV9pZH1cIl1gKS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zcGlubmVyJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7bGlrZS5pdGVtX2lkfVwiXWApLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2ZhLWhlYXJ0Jyk7XG4gICAgICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7bGlrZS5pdGVtX2lkfVwiXWApLmNoaWxkcmVuWzFdO1xuICAgICAgbGlrZUNvdW50LmlubmVyVGV4dCA9IHBhcnNlSW50KGxpa2VDb3VudC5pbm5lclRleHQsIDEwKSArIDE7XG4gICAgICB0aGlzLnNldExpa2VkKGxpa2UuaXRlbV9pZCk7XG4gICAgICByZXR1cm4gJ2NyZWF0ZWQnO1xuICAgIH1cbiAgICByZXR1cm4gJ0ZhaWxlZCc7XG4gIH1cblxuICBzdGF0aWMgc2V0TGlrZWQgPSAoaWQgPSBudWxsKSA9PiB7XG4gICAgaWYgKGlkKSB7XG4gICAgICBjb25zdCBzdG9yYWdlID0gKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRzTGlrZXMnKSA9PT0gbnVsbCkgPyBbXSA6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZHNMaWtlcycpKTtcbiAgICAgIHN0b3JhZ2UucHVzaChpZCk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkc0xpa2VzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICAgIH1cbiAgICByZXR1cm4gKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRzTGlrZXMnKSA9PT0gbnVsbCkgPyBbXSA6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZHNMaWtlcycpKTtcbiAgfVxuXG4gIHN0YXRpYyBjb3VudExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7c3VwZXIuYmFzZX0vJHtzdXBlci5hcHBJZH0vbGlrZXNgLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMaWtlczsiLCJpbXBvcnQgTGlrZXMgZnJvbSAnLi9MaWtlcy5qcyc7XG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQuanMnO1xuXG5jbGFzcyBTaG93IHtcbiAgc3RhdGljIGJhc2UgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5cbiAgc3RhdGljIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZXMtcm93Jyk7XG5cbiAgc3RhdGljIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKTtcblxuICBzdGF0aWMgbW9kYWxGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9vdGVyJyk7XG5cbiAgc3RhdGljIGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLWRhdGEnKTtcblxuICBzdGF0aWMgZnVsbERhdGE7XG5cbiAgc3RhdGljIGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZX0/cGFnZT0xYCwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLmZ1bGxEYXRhID0gcmVzdWx0O1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cbiAgICAgIHRoaXMuY291bnRNb3ZpZXMocmVzdWx0Lmxlbmd0aCk7XG4gICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBzdGF0aWMgY291bnRNb3ZpZXMgPSAoY291bnQpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVzLWNvdW50ZXInKS50ZXh0Q29udGVudCA9IGNvdW50O1xuICB9XG5cbiAgc3RhdGljIHBvcHVsYXRlID0gKG1vdmllLCBsaWtlc0RhdGEpID0+IHtcbiAgICBsZXQgbGlrZXNOdW1iZXI7XG4gICAgaWYgKGxpa2VzRGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRoZVBvc3QgPSBsaWtlc0RhdGEuZmlsdGVyKChsaWspID0+IHBhcnNlSW50KGxpay5pdGVtX2lkLCAxMCkgPT09IG1vdmllLmlkKTtcbiAgICAgIGxpa2VzTnVtYmVyID0gKHRoZVBvc3QubGVuZ3RoKSA/IHRoZVBvc3RbMF0ubGlrZXMgOiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWtlc051bWJlciA9IDA7XG4gICAgfVxuICAgIGNvbnN0IG1vdmllQ2FkcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZUNhZHJlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBjb25zdCBwb3N0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcG9zdGVyLmhyZWYgPSAnIyc7XG4gICAgcG9zdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgcG9zdGVyLmNsYXNzTGlzdC5hZGQoJ3Bvc3RlcicpO1xuICAgIGNvbnN0IHBvc3RlckltYWdlciA9IG5ldyBJbWFnZSgpO1xuICAgIHBvc3RlckltYWdlci5zcmMgPSBtb3ZpZS5pbWFnZS5tZWRpdW07XG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbW1lbnRCdG4uaW5uZXJUZXh0ID0gJ0NvbW1lbnRzJztcbiAgICBjb21tZW50QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1jb21tZW50LWl0ZW0taWQnLCBtb3ZpZS5pZCk7XG4gICAgY29tbWVudEJ0bi5jbGFzc0xpc3QuYWRkKCdvdmVybGFwQnV0dG9uLWNvbW1lbnQnKTtcbiAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB0aGlzLmdldE9uZVNob3coY29tbWVudEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29tbWVudC1pdGVtLWlkJykpO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlc2VydmF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXJ2YXRpb25CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXJlc2VydmF0aW9uLWl0ZW0taWQnLCBtb3ZpZS5pZCk7XG4gICAgcmVzZXJ2YXRpb25CdG4uaW5uZXJUZXh0ID0gJ3Jlc2VydmF0aW9ucyc7XG4gICAgcmVzZXJ2YXRpb25CdG4uY2xhc3NMaXN0LmFkZCgnb3ZlcmxhcEJ1dHRvbi1yZXNlcnZhdGlvbicpO1xuICAgIHBvc3Rlci5hcHBlbmQocG9zdGVySW1hZ2VyKTtcbiAgICBtb3ZpZUNhZHJlLmFwcGVuZChwb3N0ZXIpO1xuICAgIGNvbnN0IG1vdmllTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgbW92aWVOYW1lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBtb3ZpZU5hbWVMaW5rLmhyZWYgPSAnIyc7XG4gICAgbW92aWVOYW1lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuICAgIG1vdmllTmFtZUxpbmsuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBtb3ZpZU5hbWVMaW5rLmlubmVyVGV4dCA9IG1vdmllLm5hbWU7XG4gICAgbW92aWVOYW1lLmFwcGVuZChtb3ZpZU5hbWVMaW5rKTtcbiAgICBtb3ZpZUNhZHJlLmFwcGVuZChtb3ZpZU5hbWUpO1xuICAgIGNvbnN0IHNtYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNtYWxJbmZvLmNsYXNzTGlzdC5hZGQoJ21ldGEnKTtcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaWtlLWJ0bicpO1xuICAgIGxpa2VCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgbW92aWUuaWQpO1xuICAgIGlmIChMaWtlcy5zZXRMaWtlZCgpLmluY2x1ZGVzKG1vdmllLmlkKSkge1xuICAgICAgbGlrZUJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT4gPGk+JHtsaWtlc051bWJlcn08L2k+IGxpa2VzYDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlrZUJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS1oZWFydC1vXCI+PC9pPiA8aT4ke2xpa2VzTnVtYmVyfTwvaT4gbGlrZXNgO1xuICAgIH1cbiAgICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFMaWtlcy5zZXRMaWtlZCgpLmluY2x1ZGVzKG1vdmllLmlkKSkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSBsaWtlQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBjb25zdCBsaWtlID0gbmV3IExpa2VzKGl0ZW1JZCk7XG4gICAgICAgIExpa2VzLnBvc3RMaWtlKGxpa2UpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNtYWxJbmZvLmlubmVySFRNTCA9IGAke25ldyBEYXRlKG1vdmllLnByZW1pZXJlZCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfTxpIGNsYXNzPVwiZG90XCI+PC9pPiR7bW92aWUucnVudGltZX0gbWluIGA7XG4gICAgc21hbEluZm8uYXBwZW5kKGxpa2VCdXR0b24pO1xuICAgIG1vdmllQ2FkcmUuYXBwZW5kKGNvbW1lbnRCdG4pO1xuICAgIG1vdmllQ2FkcmUuYXBwZW5kKHJlc2VydmF0aW9uQnRuKTtcbiAgICBtb3ZpZUNhZHJlLmFwcGVuZChzbWFsSW5mbyk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKG1vdmllQ2FkcmUpO1xuICB9XG5cbiAgc3RhdGljIGdldE9uZVNob3cgPSBhc3luYyAoaWQpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZX0vJHtpZH1gLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRzTGlzdCA9IGF3YWl0IENvbW1lbnQuZ2V0Q29tbWVudChyZXN1bHQuaWQpO1xuICAgICAgICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCBMaWtlcy5jb3VudExpa2VzKCk7XG4gICAgICAgIHRoaXMucHJldmlld09uZVNob3cocmVzdWx0LCBjb21tZW50c0xpc3QsIGxpa2VzRGF0YSk7XG4gICAgICAgIHRoaXMuYWRkQ29tbWVudEZvcm0oKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bvc3QtaWQnKS52YWx1ZSA9IGlkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwcmV2aWV3T25lU2hvdyA9IChyZXN1bHQsIGNvbW1lbnRzTGlzdCwgbGlrZXNEYXRhKSA9PiB7XG4gICAgbGV0IGxpa2VzTnVtYmVyO1xuICAgIGlmIChsaWtlc0RhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCB0aGVQb3N0ID0gbGlrZXNEYXRhLmZpbHRlcigobGlrKSA9PiBwYXJzZUludChsaWsuaXRlbV9pZCwgMTApID09PSByZXN1bHQuaWQpO1xuICAgICAgbGlrZXNOdW1iZXIgPSAodGhlUG9zdC5sZW5ndGgpID8gdGhlUG9zdFswXS5saWtlcyA6IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpa2VzTnVtYmVyID0gMDtcbiAgICB9XG4gICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBiYW5uZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYW5uZXIuc3JjID0gcmVzdWx0LmltYWdlLm9yaWdpbmFsO1xuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXItaW1hZ2UnKTtcbiAgICBjb25zdCBkaXZCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZCYW5uZXIuYXBwZW5kKGJhbm5lcik7XG4gICAgY29uc3QgaHJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgZGl2QmFubmVyLmFwcGVuZChockVsKTtcbiAgICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaWtlcy5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT4gJHtsaWtlc051bWJlcn0gTGlrZXNgO1xuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRjb3VudCcpO1xuICAgIGNvbnN0IGNvbW1lbnRzTnVtYmVyID0gY29tbWVudHNMaXN0Lmxlbmd0aDtcbiAgICBjb21tZW50cy5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS1jb21tZW50cy1vXCI+PC9pPiAke2NvbW1lbnRzTnVtYmVyfSBDb21tZW50c2A7XG4gICAgY29uc3QgdW5kZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVuZGVySW1hZ2UuY2xhc3NMaXN0LmFkZCgndW5kZXJJbWFnZScpO1xuICAgIHVuZGVySW1hZ2UuYXBwZW5kKGxpa2VzKTtcbiAgICB1bmRlckltYWdlLmFwcGVuZChjb21tZW50cyk7XG4gICAgZGl2QmFubmVyLmFwcGVuZCh1bmRlckltYWdlKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWRhdGEnKTtcbiAgICBjb25zdCBzaG93bmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc2hvd25hbWUuY2xhc3NMaXN0LmFkZCgnbW92aWUtbmFtZS10aXRsZScpO1xuICAgIHNob3duYW1lLmlubmVyVGV4dCA9IGBOYW1lOiAke3Jlc3VsdC5uYW1lfWA7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kKHNob3duYW1lKTtcbiAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHR5cGUuaW5uZXJUZXh0ID0gYFR5cGU6ICR7cmVzdWx0LnR5cGV9YDtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQodHlwZSk7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGFuZ3VhZ2UuaW5uZXJUZXh0ID0gYExhbmd1YWdlOiAke3Jlc3VsdC5sYW5ndWFnZX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChsYW5ndWFnZSk7XG4gICAgY29uc3QgZ2VucmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGdlbnJlcy5pbm5lclRleHQgPSBgVHlwZTogJHtyZXN1bHQuZ2VucmVzLmpvaW4oJywgJyl9YDtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoZ2VucmVzKTtcbiAgICBjb25zdCBydW50aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJ1bnRpbWUuaW5uZXJUZXh0ID0gYFJ1bnRpbWU6ICR7cmVzdWx0LnJ1bnRpbWV9YDtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQocnVudGltZSk7XG4gICAgY29uc3Qgb2ZmaWNpYWxTaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9mZmljaWFsU2l0ZS5pbm5lckhUTUwgPSBgT2ZmaWNpYWwgU2l0ZTogPGEgaHJlZj1cIiR7cmVzdWx0Lm9mZmljaWFsU2l0ZX1cIiB0YXJnZXQ9XCJibGFuY1wiPiR7cmVzdWx0Lm9mZmljaWFsU2l0ZX08L2E+YDtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQob2ZmaWNpYWxTaXRlKTtcbiAgICBjb25zdCByYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmF0aW5nLmlubmVyVGV4dCA9IGBSYXRpbmc6ICR7cmVzdWx0LnJhdGluZ31gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChydW50aW1lKTtcbiAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN1bW1hcnkuaW5uZXJIVE1MID0gYFN1bW1hcnk6ICR7cmVzdWx0LnN1bW1hcnl9YDtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoc3VtbWFyeSk7XG4gICAgY29uc3QgcHJvZHVjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHN0dWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgc3R1ZGlvLmlubmVyVGV4dCA9IGBTdHVkdWlvOiAke3Jlc3VsdC5uZXR3b3JrLm5hbWV9YDtcbiAgICBwcm9kdWNlci5hcHBlbmQoc3R1ZGlvKTtcbiAgICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb3VudHJ5LmlubmVyVGV4dCA9IGBTdHVkdWlvOiAke3Jlc3VsdC5uZXR3b3JrLmNvdW50cnkubmFtZX1gO1xuICAgIHByb2R1Y2VyLmFwcGVuZChjb3VudHJ5KTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQocHJvZHVjZXIpO1xuICAgIHRoaXMubW9kYWwuYXBwZW5kKGRpdkJhbm5lcik7XG4gICAgdGhpcy5tb2RhbC5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuY29tbWVudExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tbWVudHNMaXN0LmZvckVhY2goKGNvbSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZXMgPSBuZXcgRGF0ZShjb20uY3JlYXRpb25fZGF0ZSk7XG4gICAgICBjb25zdCBtb250aE5hbWVzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJyxcbiAgICAgIF07XG4gICAgICBjb25zdCBjdXJyZW50SG91cnMgPSBkYXRlcy5nZXRIb3VycygpO1xuICAgICAgY29uc3QgY3VycmVudE1pbnV0ZXMgPSBkYXRlcy5nZXRNaW51dGVzKCk7XG4gICAgICB0aGlzLmNvbW1lbnRMaXN0LmlubmVySFRNTCArPSBgXG4gICAgICA8bGkgY2xhc3M9XCJkYXRhLWl0ZW1zXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidXNlci1wcmVmaXhcIj4ke2NvbS51c2VybmFtZS5jaGFyQXQoMCl9PC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPiR7Y29tLmNvbW1lbnR9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGltZS1wb3N0ZWRcIj48c3Bhbj4ke2NvbS51c2VybmFtZX08L3NwYW4+IDxzcGFuPiR7ZGF0ZXMuZ2V0RGF5KCl9IC0gJHttb250aE5hbWVzW2RhdGVzLmdldE1vbnRoKCldfSAtICR7ZGF0ZXMuZ2V0RnVsbFllYXIoKX0gYXQgJHsoYDAke2N1cnJlbnRIb3Vyc31gKS5zbGljZSgtMil9OiR7KGAwJHtjdXJyZW50TWludXRlc31gKS5zbGljZSgtMil9PC9zcGFuPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRDb21tZW50Rm9ybSA9ICgpID0+IHtcbiAgICB0aGlzLm1vZGFsRm9vdGVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGNvbW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21tZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQnKTtcbiAgICBjb25zdCBjb21tZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb21tZW50SGVhZGVyLmlubmVyVGV4dCA9ICdBZGQgQ29tbWVudCc7XG4gICAgY29tbWVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWhlYWRlcicpO1xuICAgIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtZm9ybScpO1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB1c2VyTmFtZS50eXBlID0gJ3RleHQnO1xuICAgIHVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgbmFtZSc7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbWVzc2FnZS5jb2xzID0gJzEwJztcbiAgICBtZXNzYWdlLnJvd3MgPSAnMTAnO1xuICAgIG1lc3NhZ2UucGxhY2Vob2xkZXIgPSAneW91ciBpbnNpZ2h0cyc7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNvbW1lbnQtYnRuJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9ICdDb21tZW50JztcbiAgICBjb25zdCBwb3N0SWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHBvc3RJZC5pZCA9ICdwb3N0LWlkJztcbiAgICBwb3N0SWQudHlwZSA9ICdoaWRkZW4nO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodXNlck5hbWUudmFsdWUgIT09ICcnICYmIG1lc3NhZ2UudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBuZXcgQ29tbWVudCh1c2VyTmFtZS52YWx1ZSwgbWVzc2FnZS52YWx1ZSwgcG9zdElkLnZhbHVlKTtcbiAgICAgICAgQ29tbWVudC5wb3N0Q29tbWVudChjb21tZW50KTtcbiAgICAgICAgY29uc3QgZGF0ZXMgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBtb250aE5hbWVzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcbiAgICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBjdXJyZW50SG91cnMgPSBkYXRlcy5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGRhdGVzLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgdGhpcy5jb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgIDxsaSBjbGFzcz1cImRhdGEtaXRlbXNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidXNlci1wcmVmaXhcIj4ke3VzZXJOYW1lLnZhbHVlLmNoYXJBdCgwKX08L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD4ke21lc3NhZ2UudmFsdWV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpbWUtcG9zdGVkXCI+PHNwYW4+JHt1c2VyTmFtZX08L3NwYW4+PHNwYW4+JHtkYXRlcy5nZXREYXkoKX0gLSAke21vbnRoTmFtZXNbZGF0ZXMuZ2V0TW9udGgoKV19IC0gJHtkYXRlcy5nZXRGdWxsWWVhcigpfSBhdCAkeyhgMCR7Y3VycmVudEhvdXJzfWApLnNsaWNlKC0yKX06JHsoYDAke2N1cnJlbnRNaW51dGVzfWApLnNsaWNlKC0yKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICAgIGNvbnN0IG5ld0NvdW50ID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRjb3VudCcpLnRleHRDb250ZW50LnNwbGl0KCcgJylbMV0sIDEwKSArIDE7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50Y291bnQnKS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS1jb21tZW50cy1vXCI+PC9pPiAke25ld0NvdW50fSBDb21tZW50c2A7XG4gICAgICAgIHVzZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICAgIG1lc3NhZ2UudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb21tZW50Rm9ybS5hcHBlbmQocG9zdElkKTtcbiAgICBjb21tZW50Rm9ybS5hcHBlbmQodXNlck5hbWUpO1xuICAgIGNvbW1lbnRGb3JtLmFwcGVuZChtZXNzYWdlKTtcbiAgICBjb21tZW50Rm9ybS5hcHBlbmQoYnV0dG9uKTtcbiAgICBjb21tZW50RGl2LmFwcGVuZChjb21tZW50SGVhZGVyKTtcbiAgICBjb21tZW50RGl2LmFwcGVuZChjb21tZW50Rm9ybSk7XG4gICAgdGhpcy5tb2RhbEZvb3Rlci5hcHBlbmQoY29tbWVudERpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvdzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBTaG93IGZyb20gJy4uLy4uL2NvbXBvbmVudC9TaG93LmpzJztcbmltcG9ydCBMaWtlcyBmcm9tICcuLi8uLi9jb21wb25lbnQvTGlrZXMuanMnO1xuaW1wb3J0IExvZ29JbWFnZSBmcm9tICcuLi9pbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi4vaW1hZ2VzL3N1Y2Nlc3MuZ2lmJztcbmltcG9ydCAnLi4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9yZXNwb25zaXZlLmNzcyc7XG5cbmxldCBzdGFydCA9IDA7XG5sZXQgbGltaXQgPSAyNDtcblxuY29uc3QgaW5maW5pdFNjcm9sbCA9IGFzeW5jICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW1hdGUtbG9hZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCBMaWtlcy5jb3VudExpa2VzKCk7XG4gIGF3YWl0IFNob3cuZnVsbERhdGEuc2xpY2Uoc3RhcnQsIGxpbWl0KS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgU2hvdy5wb3B1bGF0ZShlbGVtZW50LCBsaWtlc0RhdGEpO1xuICB9KTtcbiAgYXdhaXQgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW1hdGUtbG9hZCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufTtcblxuKGFzeW5jICgpID0+IHtcbiAgbGV0IHB1cmNlbnQgPSAwO1xuICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gTG9nb0ltYWdlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpLmFwcGVuZChsb2dvKTtcbiAgY29uc3QgaW5mb0ltZyA9IG5ldyBJbWFnZSgpO1xuICBpbmZvSW1nLnNyYyA9IEluZm87XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykucHJlcGVuZChpbmZvSW1nKTtcbiAgYXdhaXQgU2hvdy5nZXRNb3ZpZXMoKTtcbiAgaW5maW5pdFNjcm9sbCgpO1xuICBjb25zdCBsb2FkZXJwdXJjZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXInKS5zdHlsZS53aWR0aCA9IGAke3B1cmNlbnR9JWA7XG4gICAgaWYgKHB1cmNlbnQgPj0gMTAwKSB7XG4gICAgICBjbGVhckludGVydmFsKGxvYWRlcnB1cmNlbnQpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBwdXJjZW50ICs9IDU7XG4gIH0sIDMwMCk7XG59KSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufSk7XG5cbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgaWYgKE1hdGgucm91bmQoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZKSkgPj0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpIHtcbiAgICBzdGFydCArPSAyNDtcbiAgICBsaW1pdCArPSAyNDtcbiAgICBpbmZpbml0U2Nyb2xsKCk7XG4gIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9