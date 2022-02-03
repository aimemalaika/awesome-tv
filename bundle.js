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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark-bg: #090909;\n  --light-bg: #111;\n  --white-color: #fff;\n  --blue-color: #57d2eb;\n  --transparent-dark-bg: #090909ce;\n}\n\n* {\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n  font-weight: 100;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: var(--white-color);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--light-bg);\n}\n\n.app-header {\n  background-color: var(--dark-bg);\n  height: 70px;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 95%;\n  margin: auto;\n  height: 100%;\n}\n\n.movie-list {\n  width: 95%;\n  margin: auto;\n}\n\n.movie-list .section-title {\n  color: var(--white-color);\n  font-weight: 400;\n  font-size: 2em;\n}\n\n.movie-list .section-title::before {\n  position: absolute;\n  content: \"\";\n  height: 3px;\n  width: 4%;\n  top: 17%;\n  background: #343a40;\n}\n\n.app-header .logo {\n  width: 5%;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0;\n}\n\n.app-header .logo img {\n  height: 35px;\n  margin: auto;\n}\n\n.navigation {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  justify-content: end;\n}\n\n.navigation ul {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 30%;\n  align-items: center;\n}\n\n.navigation ul li a {\n  text-decoration: none;\n  font-size: 15px;\n  color: var(--white-color);\n}\n\n.navigation ul li a:hover {\n  color: var(--blue-color);\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: var(--transparent-dark-bg);\n  top: 0;\n  z-index: 100;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}\n\n.modal-content {\n  width: 70%;\n  background-color: var(--light-bg);\n  margin: 10px auto;\n  padding: 10px 20px;\n}\n\n.modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.modal-body {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  color: var(--white-color);\n  font-size: 15px;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.comments-list {\n  border-bottom: 1px solid var(--white-color);\n}\n\n.close-button {\n  font-size: 25px;\n  font-weight: 500;\n  background-color: transparent;\n  border: none;\n  color: rgba(255, 0, 0, 0.71);\n  cursor: pointer;\n  padding-bottom: 10px;\n}\n\n.close-button:hover {\n  color: red;\n}\n\n.banner-image {\n  width: 100%;\n}\n\n.description-data {\n  padding: 0 20px;\n}\n\n.movie-name-title {\n  margin: 0;\n}\n\n.underImage {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.underImage i {\n  color: red;\n}\n\n.modal-footer .comment {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n}\n\n.modal-footer .comment .comment-form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.modal-footer .comment .comment-form input,\n.modal-footer .comment .comment-form textarea {\n  display: block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1.2rem;\n  line-height: 2;\n  font-weight: 300;\n  color: #000;\n  background-color: var(--white-color);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  margin-bottom: 20px;\n}\n\nfooter {\n  display: block;\n  border: 1px solid;\n  background: var(--dark-bg);\n}\n\nfooter p {\n  width: 95%;\n  margin: auto;\n  color: var(--white-color);\n  padding: 2% 0;\n}\n\n.movies-row {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px;\n  margin-top: 45px;\n}\n\n.movies-row .item {\n  position: relative;\n}\n\n.movies-row .item .poster {\n  width: 100%;\n  padding-bottom: 145%;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n  background: #212529;\n}\n\n.movies-row .item .poster::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background: rgba(0, 0, 0, 0);\n  z-index: 1;\n  transition: all 0.2s ease-in-out 0s;\n}\n\n.movies-row .item:hover .poster::after {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.movies-row .item .poster img {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n}\n\n.movies-row .item .poster img[src] {\n  visibility: visible;\n}\n\n.movies-row .item h3 {\n  font-size: 1em;\n  font-weight: 500;\n  display: grid;\n}\n\n.movies-row .item .title {\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 400;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-decoration: none;\n}\n\n.movies-row .item .meta {\n  font-size: 0.9em !important;\n  font-weight: 300;\n  height: 50px;\n  display: block;\n  overflow: hidden;\n  color: #959595;\n}\n\n.movies-row .item .meta .dot {\n  width: 3px;\n  height: 3px;\n  vertical-align: 2px;\n  border-radius: 50%;\n  display: inline-block;\n  background: #d5d5d5;\n  content: \"\";\n  margin: 0 5px;\n}\n\n.movies-row .item .meta .like-btn {\n  font-style: normal;\n  border-radius: 3px;\n  padding: 0 3px;\n  font-size: 1em;\n  float: right;\n  border: none;\n  background-color: transparent;\n  color: var(--white-color);\n  cursor: pointer;\n}\n\n.movies-row .item .meta .like-btn i {\n  color: red;\n}\n\n.movies-counter {\n  text-align: center;\n  color: var(--white-color);\n  background-color: red;\n  font-weight: 500;\n  padding: 6px 4px;\n  border-radius: 50%;\n  font-size: 13px;\n}\n\n.overlapButton-comment,\n.overlapButton-reservation,\n.submit-comment-btn {\n  position: absolute;\n  top: 28%;\n  z-index: 10;\n  width: 70%;\n  left: 15%;\n  border: none;\n  background-color: var(--light-bg);\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 300;\n  cursor: pointer;\n  padding: 5px 0;\n  display: none;\n  border-radius: 5px;\n}\n\n.overlapButton-reservation {\n  top: 40%;\n}\n\n.submit-comment-btn {\n  position: inherit;\n  display: inherit;\n  width: 100%;\n  text-align: center;\n  background-color: var(--dark-bg);\n  border: 1px solid #f0f8ff2e;\n  padding-left: 40%;\n}\n\n.overlapButton-comment:hover,\n.overlapButton-reservation:hover,\n.submit-comment-btn:hover {\n  background-color: var(--dark-bg);\n  color: var(--blue-color);\n}\n\n.movies-row .item:hover .overlapButton-comment,\n.movies-row .item:hover .overlapButton-reservation {\n  display: block;\n}\n\n.fa-spinner {\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.comment-header {\n  color: var(--white-color);\n}\n\n#comments-data {\n  padding: 0;\n  list-style-type: none;\n}\n\n.data-items {\n  display: grid;\n  grid-template-columns: 5% 90%;\n  gap: 15px;\n  color: var(--white-color);\n  border: 1px solid #242424;\n  border-radius: 4px;\n  margin-top: 7px;\n  padding: 5px;\n}\n\n.user-prefix {\n  color: var(--dark-bg);\n  background-color: var(--white-color);\n  font-size: 2em;\n  text-align: center;\n  font-weight: 900;\n  border-radius: 52%;\n  padding: 0 10px;\n  margin: auto auto auto 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.time-posted {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.animate-load {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  color: red;\n  padding: 52% 50%;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.753);\n}", "",{"version":3,"sources":["webpack://./src/assets/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,500;1,700;1,900&display=swap');\n\n:root {\n  --dark-bg: #090909;\n  --light-bg: #111;\n  --white-color: #fff;\n  --blue-color: #57d2eb;\n  --transparent-dark-bg: #090909ce;\n}\n\n* {\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n  font-weight: 100;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: var(--white-color);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--light-bg);\n}\n\n.app-header {\n  background-color: var(--dark-bg);\n  height: 70px;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 95%;\n  margin: auto;\n  height: 100%;\n}\n\n.movie-list {\n  width: 95%;\n  margin: auto;\n}\n\n.movie-list .section-title {\n  color: var(--white-color);\n  font-weight: 400;\n  font-size: 2em;\n}\n\n.movie-list .section-title::before {\n  position: absolute;\n  content: \"\";\n  height: 3px;\n  width: 4%;\n  top: 17%;\n  background: #343a40;\n}\n\n.app-header .logo {\n  width: 5%;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0;\n}\n\n.app-header .logo img {\n  height: 35px;\n  margin: auto;\n}\n\n.navigation {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  justify-content: end;\n}\n\n.navigation ul {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 30%;\n  align-items: center;\n}\n\n.navigation ul li a {\n  text-decoration: none;\n  font-size: 15px;\n  color: var(--white-color);\n}\n\n.navigation ul li a:hover {\n  color: var(--blue-color);\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: var(--transparent-dark-bg);\n  top: 0;\n  z-index: 100;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}\n\n.modal-content {\n  width: 70%;\n  background-color: var(--light-bg);\n  margin: 10px auto;\n  padding: 10px 20px;\n}\n\n.modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.modal-body {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  color: var(--white-color);\n  font-size: 15px;\n  border-bottom: 1px solid var(--white-color);\n}\n\n.comments-list {\n  border-bottom: 1px solid var(--white-color);\n}\n\n.close-button {\n  font-size: 25px;\n  font-weight: 500;\n  background-color: transparent;\n  border: none;\n  color: rgba(255, 0, 0, 0.71);\n  cursor: pointer;\n  padding-bottom: 10px;\n}\n\n.close-button:hover {\n  color: red;\n}\n\n.banner-image {\n  width: 100%;\n}\n\n.description-data {\n  padding: 0 20px;\n}\n\n.movie-name-title {\n  margin: 0;\n}\n\n.underImage {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.underImage i {\n  color: red;\n}\n\n.modal-footer .comment {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n}\n\n.modal-footer .comment .comment-form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.modal-footer .comment .comment-form input,\n.modal-footer .comment .comment-form textarea {\n  display: block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1.2rem;\n  line-height: 2;\n  font-weight: 300;\n  color: #000;\n  background-color: var(--white-color);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  margin-bottom: 20px;\n}\n\nfooter {\n  display: block;\n  border: 1px solid;\n  background: var(--dark-bg);\n}\n\nfooter p {\n  width: 95%;\n  margin: auto;\n  color: var(--white-color);\n  padding: 2% 0;\n}\n\n.movies-row {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px;\n  margin-top: 45px;\n}\n\n.movies-row .item {\n  position: relative;\n}\n\n.movies-row .item .poster {\n  width: 100%;\n  padding-bottom: 145%;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n  background: #212529;\n}\n\n.movies-row .item .poster::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background: rgba(0, 0, 0, 0);\n  z-index: 1;\n  transition: all 0.2s ease-in-out 0s;\n}\n\n.movies-row .item:hover .poster::after {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.movies-row .item .poster img {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n}\n\n.movies-row .item .poster img[src] {\n  visibility: visible;\n}\n\n.movies-row .item h3 {\n  font-size: 1em;\n  font-weight: 500;\n  display: grid;\n}\n\n.movies-row .item .title {\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 400;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-decoration: none;\n}\n\n.movies-row .item .meta {\n  font-size: 0.9em !important;\n  font-weight: 300;\n  height: 50px;\n  display: block;\n  overflow: hidden;\n  color: #959595;\n}\n\n.movies-row .item .meta .dot {\n  width: 3px;\n  height: 3px;\n  vertical-align: 2px;\n  border-radius: 50%;\n  display: inline-block;\n  background: #d5d5d5;\n  content: \"\";\n  margin: 0 5px;\n}\n\n.movies-row .item .meta .like-btn {\n  font-style: normal;\n  border-radius: 3px;\n  padding: 0 3px;\n  font-size: 1em;\n  float: right;\n  border: none;\n  background-color: transparent;\n  color: var(--white-color);\n  cursor: pointer;\n}\n\n.movies-row .item .meta .like-btn i {\n  color: red;\n}\n\n.movies-counter {\n  text-align: center;\n  color: var(--white-color);\n  background-color: red;\n  font-weight: 500;\n  padding: 6px 4px;\n  border-radius: 50%;\n  font-size: 13px;\n}\n\n.overlapButton-comment,\n.overlapButton-reservation,\n.submit-comment-btn {\n  position: absolute;\n  top: 28%;\n  z-index: 10;\n  width: 70%;\n  left: 15%;\n  border: none;\n  background-color: var(--light-bg);\n  color: var(--white-color);\n  font-size: 1em;\n  font-weight: 300;\n  cursor: pointer;\n  padding: 5px 0;\n  display: none;\n  border-radius: 5px;\n}\n\n.overlapButton-reservation {\n  top: 40%;\n}\n\n.submit-comment-btn {\n  position: inherit;\n  display: inherit;\n  width: 100%;\n  text-align: center;\n  background-color: var(--dark-bg);\n  border: 1px solid #f0f8ff2e;\n  padding-left: 40%;\n}\n\n.overlapButton-comment:hover,\n.overlapButton-reservation:hover,\n.submit-comment-btn:hover {\n  background-color: var(--dark-bg);\n  color: var(--blue-color);\n}\n\n.movies-row .item:hover .overlapButton-comment,\n.movies-row .item:hover .overlapButton-reservation {\n  display: block;\n}\n\n.fa-spinner {\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.comment-header {\n  color: var(--white-color);\n}\n\n#comments-data {\n  padding: 0;\n  list-style-type: none;\n}\n\n.data-items {\n  display: grid;\n  grid-template-columns: 5% 90%;\n  gap: 15px;\n  color: var(--white-color);\n  border: 1px solid #242424;\n  border-radius: 4px;\n  margin-top: 7px;\n  padding: 5px;\n}\n\n.user-prefix {\n  color: var(--dark-bg);\n  background-color: var(--white-color);\n  font-size: 2em;\n  text-align: center;\n  font-weight: 900;\n  border-radius: 52%;\n  padding: 0 10px;\n  margin: auto auto auto 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.time-posted {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.animate-load {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  color: red;\n  padding: 52% 50%;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.753);\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/index.css */ "./src/assets/css/index.css");
/* harmony import */ var _css_responsive_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/responsive.css */ "./src/assets/css/responsive.css");






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
  const logo = new Image();
  logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_2__;
  document.querySelector('.logo').append(logo);
  await _component_Show_js__WEBPACK_IMPORTED_MODULE_0__["default"].getMovies();
  infinitScroll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLHdHQUF3RyxNQUFNLE1BQU0sTUFBTSxxQkFBcUIs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Q0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjJDO0FBQ0U7QUFDRjtBQUNqQjtBQUNLOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsc0VBQWdCO0FBQzFDLFFBQVEseUVBQW1CO0FBQzNCLElBQUksbUVBQWE7QUFDakIsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkNBQVM7QUFDdEI7QUFDQSxRQUFRLG9FQUFjO0FBQ3RCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL3NyYy9hc3NldHMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vc3JjL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3MiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5jc3M/MTI5MyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vc3JjL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3M/ZGNlNyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2F3ZXNvbWUtdHYvLi9zcmMvY29tcG9uZW50L0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL3NyYy9jb21wb25lbnQvTGlrZXMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di8uL3NyYy9jb21wb25lbnQvU2hvdy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F3ZXNvbWUtdHYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2F3ZXNvbWUtdHYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXdlc29tZS10di93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hd2Vzb21lLXR2Ly4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGFyay1iZzogIzA5MDkwOTtcXG4gIC0tbGlnaHQtYmc6ICMxMTE7XFxuICAtLXdoaXRlLWNvbG9yOiAjZmZmO1xcbiAgLS1ibHVlLWNvbG9yOiAjNTdkMmViO1xcbiAgLS10cmFuc3BhcmVudC1kYXJrLWJnOiAjMDkwOTA5Y2U7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG59XFxuXFxuLmFwcC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW92aWUtbGlzdCB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubW92aWUtbGlzdCAuc2VjdGlvbi10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ubW92aWUtbGlzdCAuc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogNCU7XFxuICB0b3A6IDE3JTtcXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XFxufVxcblxcbi5hcHAtaGVhZGVyIC5sb2dvIHtcXG4gIHdpZHRoOiA1JTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5hcHAtaGVhZGVyIC5sb2dvIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMzAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24gdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstYmcpO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iZyk7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmJhbm5lci1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWRhdGEge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubW92aWUtbmFtZS10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51bmRlckltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi51bmRlckltYWdlIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIGlucHV0LFxcbi5tb2RhbC1mb290ZXIgLmNvbW1lbnQgLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBwYWRkaW5nOiAyJSAwO1xcbn1cXG5cXG4ubW92aWVzLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLnBvc3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNDUlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5wb3N0ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLnBvc3Rlcjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIGltZ1tzcmNdIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIGgzIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC50aXRsZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEge1xcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjOTU5NTk1O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAuZG90IHtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZDVkNWQ1O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAubGlrZS1idG4ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEgLmxpa2UtYnRuIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vdmllcy1jb3VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogNnB4IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tY29tbWVudCxcXG4ub3ZlcmxhcEJ1dHRvbi1yZXNlcnZhdGlvbixcXG4uc3VibWl0LWNvbW1lbnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjglO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogNzAlO1xcbiAgbGVmdDogMTUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24ge1xcbiAgdG9wOiA0MCU7XFxufVxcblxcbi5zdWJtaXQtY29tbWVudC1idG4ge1xcbiAgcG9zaXRpb246IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGY4ZmYyZTtcXG4gIHBhZGRpbmctbGVmdDogNDAlO1xcbn1cXG5cXG4ub3ZlcmxhcEJ1dHRvbi1jb21tZW50OmhvdmVyLFxcbi5vdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uOmhvdmVyLFxcbi5zdWJtaXQtY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtOmhvdmVyIC5vdmVybGFwQnV0dG9uLWNvbW1lbnQsXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mYS1zcGlubmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmNvbW1lbnQtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbiNjb21tZW50cy1kYXRhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5kYXRhLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDkwJTtcXG4gIGdhcDogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjQyNDI0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udXNlci1wcmVmaXgge1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTIlO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLnRpbWUtcG9zdGVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYW5pbWF0ZS1sb2FkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBjb2xvcjogcmVkO1xcbiAgcGFkZGluZzogNTIlIDUwJTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Myk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FB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KCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tZGFyay1iZzogIzA5MDkwOTtcXG4gIC0tbGlnaHQtYmc6ICMxMTE7XFxuICAtLXdoaXRlLWNvbG9yOiAjZmZmO1xcbiAgLS1ibHVlLWNvbG9yOiAjNTdkMmViO1xcbiAgLS10cmFuc3BhcmVudC1kYXJrLWJnOiAjMDkwOTA5Y2U7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG59XFxuXFxuLmFwcC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW92aWUtbGlzdCB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubW92aWUtbGlzdCAuc2VjdGlvbi10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ubW92aWUtbGlzdCAuc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogNCU7XFxuICB0b3A6IDE3JTtcXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XFxufVxcblxcbi5hcHAtaGVhZGVyIC5sb2dvIHtcXG4gIHdpZHRoOiA1JTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5hcHAtaGVhZGVyIC5sb2dvIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMzAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24gdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstYmcpO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iZyk7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmJhbm5lci1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWRhdGEge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubW92aWUtbmFtZS10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51bmRlckltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi51bmRlckltYWdlIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciAuY29tbWVudCAuY29tbWVudC1mb3JtIGlucHV0LFxcbi5tb2RhbC1mb290ZXIgLmNvbW1lbnQgLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBwYWRkaW5nOiAyJSAwO1xcbn1cXG5cXG4ubW92aWVzLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLnBvc3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNDUlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC5wb3N0ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLnBvc3Rlcjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAucG9zdGVyIGltZ1tzcmNdIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIGgzIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtIC50aXRsZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEge1xcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjOTU5NTk1O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAuZG90IHtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZDVkNWQ1O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4ubW92aWVzLXJvdyAuaXRlbSAubWV0YSAubGlrZS1idG4ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vdmllcy1yb3cgLml0ZW0gLm1ldGEgLmxpa2UtYnRuIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vdmllcy1jb3VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogNnB4IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tY29tbWVudCxcXG4ub3ZlcmxhcEJ1dHRvbi1yZXNlcnZhdGlvbixcXG4uc3VibWl0LWNvbW1lbnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjglO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogNzAlO1xcbiAgbGVmdDogMTUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24ge1xcbiAgdG9wOiA0MCU7XFxufVxcblxcbi5zdWJtaXQtY29tbWVudC1idG4ge1xcbiAgcG9zaXRpb246IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGY4ZmYyZTtcXG4gIHBhZGRpbmctbGVmdDogNDAlO1xcbn1cXG5cXG4ub3ZlcmxhcEJ1dHRvbi1jb21tZW50OmhvdmVyLFxcbi5vdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uOmhvdmVyLFxcbi5zdWJtaXQtY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxufVxcblxcbi5tb3ZpZXMtcm93IC5pdGVtOmhvdmVyIC5vdmVybGFwQnV0dG9uLWNvbW1lbnQsXFxuLm1vdmllcy1yb3cgLml0ZW06aG92ZXIgLm92ZXJsYXBCdXR0b24tcmVzZXJ2YXRpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mYS1zcGlubmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmNvbW1lbnQtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbiNjb21tZW50cy1kYXRhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5kYXRhLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDkwJTtcXG4gIGdhcDogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjQyNDI0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udXNlci1wcmVmaXgge1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTIlO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLnRpbWUtcG9zdGVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYW5pbWF0ZS1sb2FkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBjb2xvcjogcmVkO1xcbiAgcGFkZGluZzogNTIlIDUwJTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Myk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAubW92aWVzLXJvdyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbiB1bCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XFxuICAubW92aWVzLXJvdyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbiB1bCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICAubW9kYWwtZm9vdGVyIC5jb21tZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAubW9kYWwtYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcblxcbiAgLmRhdGEtaXRlbXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMnB4IDIwcHg7XFxuICB9XFxuXFxuICAudXNlci1wcmVmaXgge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTBweCkge1xcbiAgLm1vdmllcy1yb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24gdWwge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xcbiAgLm1vdmllcy1yb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24gdWwge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9yZXNwb25zaXZlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAubW92aWVzLXJvdyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbiB1bCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XFxuICAubW92aWVzLXJvdyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbiB1bCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICAubW9kYWwtZm9vdGVyIC5jb21tZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAubW9kYWwtYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcblxcbiAgLmRhdGEtaXRlbXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMnB4IDIwcHg7XFxuICB9XFxuXFxuICAudXNlci1wcmVmaXgge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTBweCkge1xcbiAgLm1vdmllcy1yb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24gdWwge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xcbiAgLm1vdmllcy1yb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24gdWwge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc3BvbnNpdmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNwb25zaXZlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb21tZW50IHtcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIG1lc3NhZ2UsIGl0ZW1JZCkge1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLmNvbW1lbnQgPSBtZXNzYWdlO1xuICAgIHRoaXMuaXRlbV9pZCA9IGl0ZW1JZDtcbiAgfVxuXG4gIHN0YXRpYyBhcHBJZCA9ICdETjBPZjJwa1ViT0hDTTBqRHRuaic7XG5cbiAgc3RhdGljIGJhc2UgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMnO1xuXG4gIHN0YXRpYyBwb3N0Q29tbWVudCA9IGFzeW5jIChjb21tZW50KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50KSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZX0vJHt0aGlzLmFwcElkfS9jb21tZW50c2AsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgcmV0dXJuICdjcmVhdGVkJztcbiAgICB9XG4gICAgcmV0dXJuICdGYWlsZWQnO1xuICB9XG5cbiAgc3RhdGljIGdldENvbW1lbnQgPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lICYmIGl0ZW0pIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2V9LyR7dGhpcy5hcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW19YCwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDsiLCJpbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQuanMnO1xuXG5jbGFzcyBMaWtlcyBleHRlbmRzIENvbW1lbnQge1xuICBjb25zdHJ1Y3RvcihpdGVtSWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaXRlbV9pZCA9IGl0ZW1JZDtcbiAgfVxuXG4gIHN0YXRpYyBwb3N0TGlrZSA9IGFzeW5jIChsaWtlKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2xpa2UuaXRlbV9pZH1cIl1gKS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1oZWFydC1vJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2xpa2UuaXRlbV9pZH1cIl1gKS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdmYS1zcGlubmVyJyk7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsaWtlKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke3N1cGVyLmJhc2V9LyR7c3VwZXIuYXBwSWR9L2xpa2VzYCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7bGlrZS5pdGVtX2lkfVwiXWApLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXNwaW5uZXInKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtsaWtlLml0ZW1faWR9XCJdYCkuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnZmEtaGVhcnQnKTtcbiAgICAgIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtsaWtlLml0ZW1faWR9XCJdYCkuY2hpbGRyZW5bMV07XG4gICAgICBsaWtlQ291bnQuaW5uZXJUZXh0ID0gcGFyc2VJbnQobGlrZUNvdW50LmlubmVyVGV4dCwgMTApICsgMTtcbiAgICAgIHRoaXMuc2V0TGlrZWQobGlrZS5pdGVtX2lkKTtcbiAgICAgIHJldHVybiAnY3JlYXRlZCc7XG4gICAgfVxuICAgIHJldHVybiAnRmFpbGVkJztcbiAgfVxuXG4gIHN0YXRpYyBzZXRMaWtlZCA9IChpZCA9IG51bGwpID0+IHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZHNMaWtlcycpID09PSBudWxsKSA/IFtdIDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkc0xpa2VzJykpO1xuICAgICAgc3RvcmFnZS5wdXNoKGlkKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRzTGlrZXMnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG4gICAgfVxuICAgIHJldHVybiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZHNMaWtlcycpID09PSBudWxsKSA/IFtdIDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkc0xpa2VzJykpO1xuICB9XG5cbiAgc3RhdGljIGNvdW50TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtzdXBlci5iYXNlfS8ke3N1cGVyLmFwcElkfS9saWtlc2AsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExpa2VzOyIsImltcG9ydCBMaWtlcyBmcm9tICcuL0xpa2VzLmpzJztcbmltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudC5qcyc7XG5cbmNsYXNzIFNob3cge1xuICBzdGF0aWMgYmFzZSA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcblxuICBzdGF0aWMgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcy1yb3cnKTtcblxuICBzdGF0aWMgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpO1xuXG4gIHN0YXRpYyBtb2RhbEZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb290ZXInKTtcblxuICBzdGF0aWMgY29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMtZGF0YScpO1xuXG4gIHN0YXRpYyBmdWxsRGF0YTtcblxuICBzdGF0aWMgZ2V0TW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlfT9wYWdlPTFgLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZnVsbERhdGEgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3VudE1vdmllcyhyZXN1bHQubGVuZ3RoKTtcbiAgICAgIHJldHVybiByZXN1bHQubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHN0YXRpYyBjb3VudE1vdmllcyA9IChjb3VudCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZXMtY291bnRlcicpLnRleHRDb250ZW50ID0gY291bnQ7XG4gIH1cblxuICBzdGF0aWMgcG9wdWxhdGUgPSAobW92aWUsIGxpa2VzRGF0YSkgPT4ge1xuICAgIGxldCBsaWtlc051bWJlcjtcbiAgICBpZiAobGlrZXNEYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgdGhlUG9zdCA9IGxpa2VzRGF0YS5maWx0ZXIoKGxpaykgPT4gcGFyc2VJbnQobGlrLml0ZW1faWQsIDEwKSA9PT0gbW92aWUuaWQpO1xuICAgICAgbGlrZXNOdW1iZXIgPSAodGhlUG9zdC5sZW5ndGgpID8gdGhlUG9zdFswXS5saWtlcyA6IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpa2VzTnVtYmVyID0gMDtcbiAgICB9XG4gICAgY29uc3QgbW92aWVDYWRyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmllQ2FkcmUuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGNvbnN0IHBvc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwb3N0ZXIuaHJlZiA9ICcjJztcbiAgICBwb3N0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICBwb3N0ZXIuY2xhc3NMaXN0LmFkZCgncG9zdGVyJyk7XG4gICAgY29uc3QgcG9zdGVySW1hZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgcG9zdGVySW1hZ2VyLnNyYyA9IG1vdmllLmltYWdlLm1lZGl1bTtcbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ0bi5pbm5lclRleHQgPSAnQ29tbWVudHMnO1xuICAgIGNvbW1lbnRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWNvbW1lbnQtaXRlbS1pZCcsIG1vdmllLmlkKTtcbiAgICBjb21tZW50QnRuLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXBCdXR0b24tY29tbWVudCcpO1xuICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMuZ2V0T25lU2hvdyhjb21tZW50QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb21tZW50LWl0ZW0taWQnKSk7XG4gICAgfSk7XG4gICAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNlcnZhdGlvbkJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVzZXJ2YXRpb24taXRlbS1pZCcsIG1vdmllLmlkKTtcbiAgICByZXNlcnZhdGlvbkJ0bi5pbm5lclRleHQgPSAncmVzZXJ2YXRpb25zJztcbiAgICByZXNlcnZhdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKCdvdmVybGFwQnV0dG9uLXJlc2VydmF0aW9uJyk7XG4gICAgcG9zdGVyLmFwcGVuZChwb3N0ZXJJbWFnZXIpO1xuICAgIG1vdmllQ2FkcmUuYXBwZW5kKHBvc3Rlcik7XG4gICAgY29uc3QgbW92aWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBtb3ZpZU5hbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1vdmllTmFtZUxpbmsuaHJlZiA9ICcjJztcbiAgICBtb3ZpZU5hbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgbW92aWVOYW1lTGluay5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG1vdmllTmFtZUxpbmsuaW5uZXJUZXh0ID0gbW92aWUubmFtZTtcbiAgICBtb3ZpZU5hbWUuYXBwZW5kKG1vdmllTmFtZUxpbmspO1xuICAgIG1vdmllQ2FkcmUuYXBwZW5kKG1vdmllTmFtZSk7XG4gICAgY29uc3Qgc21hbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc21hbEluZm8uY2xhc3NMaXN0LmFkZCgnbWV0YScpO1xuICAgIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2UtYnRuJyk7XG4gICAgbGlrZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtb3ZpZS5pZCk7XG4gICAgaWYgKExpa2VzLnNldExpa2VkKCkuaW5jbHVkZXMobW92aWUuaWQpKSB7XG4gICAgICBsaWtlQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPiA8aT4ke2xpa2VzTnVtYmVyfTwvaT4gbGlrZXNgO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWtlQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0LW9cIj48L2k+IDxpPiR7bGlrZXNOdW1iZXJ9PC9pPiBsaWtlc2A7XG4gICAgfVxuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIUxpa2VzLnNldExpa2VkKCkuaW5jbHVkZXMobW92aWUuaWQpKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IGxpa2VCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGNvbnN0IGxpa2UgPSBuZXcgTGlrZXMoaXRlbUlkKTtcbiAgICAgICAgTGlrZXMucG9zdExpa2UobGlrZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc21hbEluZm8uaW5uZXJIVE1MID0gYCR7bmV3IERhdGUobW92aWUucHJlbWllcmVkKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCl9PGkgY2xhc3M9XCJkb3RcIj48L2k+JHttb3ZpZS5ydW50aW1lfSBtaW4gYDtcbiAgICBzbWFsSW5mby5hcHBlbmQobGlrZUJ1dHRvbik7XG4gICAgbW92aWVDYWRyZS5hcHBlbmQoY29tbWVudEJ0bik7XG4gICAgbW92aWVDYWRyZS5hcHBlbmQocmVzZXJ2YXRpb25CdG4pO1xuICAgIG1vdmllQ2FkcmUuYXBwZW5kKHNtYWxJbmZvKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQobW92aWVDYWRyZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0T25lU2hvdyA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlfS8ke2lkfWAsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgY29tbWVudHNMaXN0ID0gYXdhaXQgQ29tbWVudC5nZXRDb21tZW50KHJlc3VsdC5pZCk7XG4gICAgICAgIGNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IExpa2VzLmNvdW50TGlrZXMoKTtcbiAgICAgICAgdGhpcy5wcmV2aWV3T25lU2hvdyhyZXN1bHQsIGNvbW1lbnRzTGlzdCwgbGlrZXNEYXRhKTtcbiAgICAgICAgdGhpcy5hZGRDb21tZW50Rm9ybSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9zdC1pZCcpLnZhbHVlID0gaWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHByZXZpZXdPbmVTaG93ID0gKHJlc3VsdCwgY29tbWVudHNMaXN0LCBsaWtlc0RhdGEpID0+IHtcbiAgICBsZXQgbGlrZXNOdW1iZXI7XG4gICAgaWYgKGxpa2VzRGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRoZVBvc3QgPSBsaWtlc0RhdGEuZmlsdGVyKChsaWspID0+IHBhcnNlSW50KGxpay5pdGVtX2lkLCAxMCkgPT09IHJlc3VsdC5pZCk7XG4gICAgICBsaWtlc051bWJlciA9ICh0aGVQb3N0Lmxlbmd0aCkgPyB0aGVQb3N0WzBdLmxpa2VzIDogMDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlrZXNOdW1iZXIgPSAwO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGJhbm5lciA9IG5ldyBJbWFnZSgpO1xuICAgIGJhbm5lci5zcmMgPSByZXN1bHQuaW1hZ2Uub3JpZ2luYWw7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1pbWFnZScpO1xuICAgIGNvbnN0IGRpdkJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkJhbm5lci5hcHBlbmQoYmFubmVyKTtcbiAgICBjb25zdCBockVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBkaXZCYW5uZXIuYXBwZW5kKGhyRWwpO1xuICAgIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxpa2VzLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPiAke2xpa2VzTnVtYmVyfSBMaWtlc2A7XG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29tbWVudHMuY2xhc3NMaXN0LmFkZCgnY29tbWVudGNvdW50Jyk7XG4gICAgY29uc3QgY29tbWVudHNOdW1iZXIgPSBjb21tZW50c0xpc3QubGVuZ3RoO1xuICAgIGNvbW1lbnRzLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWNvbW1lbnRzLW9cIj48L2k+ICR7Y29tbWVudHNOdW1iZXJ9IENvbW1lbnRzYDtcbiAgICBjb25zdCB1bmRlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdW5kZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCd1bmRlckltYWdlJyk7XG4gICAgdW5kZXJJbWFnZS5hcHBlbmQobGlrZXMpO1xuICAgIHVuZGVySW1hZ2UuYXBwZW5kKGNvbW1lbnRzKTtcbiAgICBkaXZCYW5uZXIuYXBwZW5kKHVuZGVySW1hZ2UpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tZGF0YScpO1xuICAgIGNvbnN0IHNob3duYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzaG93bmFtZS5jbGFzc0xpc3QuYWRkKCdtb3ZpZS1uYW1lLXRpdGxlJyk7XG4gICAgc2hvd25hbWUuaW5uZXJUZXh0ID0gYE5hbWU6ICR7cmVzdWx0Lm5hbWV9YDtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoc2hvd25hbWUpO1xuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdHlwZS5pbm5lclRleHQgPSBgVHlwZTogJHtyZXN1bHQudHlwZX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZCh0eXBlKTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsYW5ndWFnZS5pbm5lclRleHQgPSBgTGFuZ3VhZ2U6ICR7cmVzdWx0Lmxhbmd1YWdlfWA7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kKGxhbmd1YWdlKTtcbiAgICBjb25zdCBnZW5yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ2VucmVzLmlubmVyVGV4dCA9IGBUeXBlOiAke3Jlc3VsdC5nZW5yZXMuam9pbignLCAnKX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChnZW5yZXMpO1xuICAgIGNvbnN0IHJ1bnRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcnVudGltZS5pbm5lclRleHQgPSBgUnVudGltZTogJHtyZXN1bHQucnVudGltZX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChydW50aW1lKTtcbiAgICBjb25zdCBvZmZpY2lhbFNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb2ZmaWNpYWxTaXRlLmlubmVySFRNTCA9IGBPZmZpY2lhbCBTaXRlOiA8YSBocmVmPVwiJHtyZXN1bHQub2ZmaWNpYWxTaXRlfVwiIHRhcmdldD1cImJsYW5jXCI+JHtyZXN1bHQub2ZmaWNpYWxTaXRlfTwvYT5gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChvZmZpY2lhbFNpdGUpO1xuICAgIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByYXRpbmcuaW5uZXJUZXh0ID0gYFJhdGluZzogJHtyZXN1bHQucmF0aW5nfWA7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kKHJ1bnRpbWUpO1xuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSBgU3VtbWFyeTogJHtyZXN1bHQuc3VtbWFyeX1gO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChzdW1tYXJ5KTtcbiAgICBjb25zdCBwcm9kdWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3Qgc3R1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBzdHVkaW8uaW5uZXJUZXh0ID0gYFN0dWR1aW86ICR7cmVzdWx0Lm5ldHdvcmsubmFtZX1gO1xuICAgIHByb2R1Y2VyLmFwcGVuZChzdHVkaW8pO1xuICAgIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvdW50cnkuaW5uZXJUZXh0ID0gYFN0dWR1aW86ICR7cmVzdWx0Lm5ldHdvcmsuY291bnRyeS5uYW1lfWA7XG4gICAgcHJvZHVjZXIuYXBwZW5kKGNvdW50cnkpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChwcm9kdWNlcik7XG4gICAgdGhpcy5tb2RhbC5hcHBlbmQoZGl2QmFubmVyKTtcbiAgICB0aGlzLm1vZGFsLmFwcGVuZChkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5jb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBjb21tZW50c0xpc3QuZm9yRWFjaCgoY29tKSA9PiB7XG4gICAgICBjb25zdCBkYXRlcyA9IG5ldyBEYXRlKGNvbS5jcmVhdGlvbl9kYXRlKTtcbiAgICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGRhdGVzLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGRhdGVzLmdldE1pbnV0ZXMoKTtcbiAgICAgIHRoaXMuY29tbWVudExpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxsaSBjbGFzcz1cImRhdGEtaXRlbXNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ1c2VyLXByZWZpeFwiPiR7Y29tLnVzZXJuYW1lLmNoYXJBdCgwKX08L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+JHtjb20uY29tbWVudH08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aW1lLXBvc3RlZFwiPjxzcGFuPiR7Y29tLnVzZXJuYW1lfTwvc3Bhbj4gPHNwYW4+JHtkYXRlcy5nZXREYXkoKX0gLSAke21vbnRoTmFtZXNbZGF0ZXMuZ2V0TW9udGgoKV19IC0gJHtkYXRlcy5nZXRGdWxsWWVhcigpfSBhdCAkeyhgMCR7Y3VycmVudEhvdXJzfWApLnNsaWNlKC0yKX06JHsoYDAke2N1cnJlbnRNaW51dGVzfWApLnNsaWNlKC0yKX08L3NwYW4+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFkZENvbW1lbnRGb3JtID0gKCkgPT4ge1xuICAgIHRoaXMubW9kYWxGb290ZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgY29tbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbW1lbnREaXYuY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xuICAgIGNvbnN0IGNvbW1lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbW1lbnRIZWFkZXIuaW5uZXJUZXh0ID0gJ0FkZCBDb21tZW50JztcbiAgICBjb21tZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtaGVhZGVyJyk7XG4gICAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29tbWVudEZvcm0uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1mb3JtJyk7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHVzZXJOYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBuYW1lJztcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBtZXNzYWdlLmNvbHMgPSAnMTAnO1xuICAgIG1lc3NhZ2Uucm93cyA9ICcxMCc7XG4gICAgbWVzc2FnZS5wbGFjZWhvbGRlciA9ICd5b3VyIGluc2lnaHRzJztcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtY29tbWVudC1idG4nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuICAgIGNvbnN0IHBvc3RJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcG9zdElkLmlkID0gJ3Bvc3QtaWQnO1xuICAgIHBvc3RJZC50eXBlID0gJ2hpZGRlbic7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh1c2VyTmFtZS52YWx1ZSAhPT0gJycgJiYgbWVzc2FnZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IG5ldyBDb21tZW50KHVzZXJOYW1lLnZhbHVlLCBtZXNzYWdlLnZhbHVlLCBwb3N0SWQudmFsdWUpO1xuICAgICAgICBDb21tZW50LnBvc3RDb21tZW50KGNvbW1lbnQpO1xuICAgICAgICBjb25zdCBkYXRlcyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcicsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGRhdGVzLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gZGF0ZXMuZ2V0TWludXRlcygpO1xuICAgICAgICB0aGlzLmNvbW1lbnRMaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgPGxpIGNsYXNzPVwiZGF0YS1pdGVtc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ1c2VyLXByZWZpeFwiPiR7dXNlck5hbWUudmFsdWUuY2hhckF0KDApfTwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPiR7bWVzc2FnZS52YWx1ZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGltZS1wb3N0ZWRcIj48c3Bhbj4ke3VzZXJOYW1lfTwvc3Bhbj48c3Bhbj4ke2RhdGVzLmdldERheSgpfSAtICR7bW9udGhOYW1lc1tkYXRlcy5nZXRNb250aCgpXX0gLSAke2RhdGVzLmdldEZ1bGxZZWFyKCl9IGF0ICR7KGAwJHtjdXJyZW50SG91cnN9YCkuc2xpY2UoLTIpfTokeyhgMCR7Y3VycmVudE1pbnV0ZXN9YCkuc2xpY2UoLTIpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgICAgY29uc3QgbmV3Q291bnQgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGNvdW50JykudGV4dENvbnRlbnQuc3BsaXQoJyAnKVsxXSwgMTApICsgMTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRjb3VudCcpLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWNvbW1lbnRzLW9cIj48L2k+ICR7bmV3Q291bnR9IENvbW1lbnRzYDtcbiAgICAgICAgdXNlck5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgbWVzc2FnZS52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbW1lbnRGb3JtLmFwcGVuZChwb3N0SWQpO1xuICAgIGNvbW1lbnRGb3JtLmFwcGVuZCh1c2VyTmFtZSk7XG4gICAgY29tbWVudEZvcm0uYXBwZW5kKG1lc3NhZ2UpO1xuICAgIGNvbW1lbnRGb3JtLmFwcGVuZChidXR0b24pO1xuICAgIGNvbW1lbnREaXYuYXBwZW5kKGNvbW1lbnRIZWFkZXIpO1xuICAgIGNvbW1lbnREaXYuYXBwZW5kKGNvbW1lbnRGb3JtKTtcbiAgICB0aGlzLm1vZGFsRm9vdGVyLmFwcGVuZChjb21tZW50RGl2KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFNob3cgZnJvbSAnLi4vLi4vY29tcG9uZW50L1Nob3cuanMnO1xuaW1wb3J0IExpa2VzIGZyb20gJy4uLy4uL2NvbXBvbmVudC9MaWtlcy5qcyc7XG5pbXBvcnQgTG9nb0ltYWdlIGZyb20gJy4uL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvcmVzcG9uc2l2ZS5jc3MnO1xuXG5sZXQgc3RhcnQgPSAwO1xubGV0IGxpbWl0ID0gMjQ7XG5cbmNvbnN0IGluZmluaXRTY3JvbGwgPSBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYXRlLWxvYWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgY29uc3QgbGlrZXNEYXRhID0gYXdhaXQgTGlrZXMuY291bnRMaWtlcygpO1xuICBhd2FpdCBTaG93LmZ1bGxEYXRhLnNsaWNlKHN0YXJ0LCBsaW1pdCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIFNob3cucG9wdWxhdGUoZWxlbWVudCwgbGlrZXNEYXRhKTtcbiAgfSk7XG4gIGF3YWl0IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYXRlLWxvYWQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn07XG5cbihhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nby5zcmMgPSBMb2dvSW1hZ2U7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJykuYXBwZW5kKGxvZ28pO1xuICBhd2FpdCBTaG93LmdldE1vdmllcygpO1xuICBpbmZpbml0U2Nyb2xsKCk7XG59KSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufSk7XG5cbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgaWYgKE1hdGgucm91bmQoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZKSkgPj0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpIHtcbiAgICBzdGFydCArPSAyNDtcbiAgICBsaW1pdCArPSAyNDtcbiAgICBpbmZpbml0U2Nyb2xsKCk7XG4gIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9