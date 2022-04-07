/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SECTION_CONTAINER": () => (/* binding */ SECTION_CONTAINER),
/* harmony export */   "PRODUCT": () => (/* binding */ PRODUCT),
/* harmony export */   "COIN": () => (/* binding */ COIN),
/* harmony export */   "CONFIRM_DELETE_MESSAGE": () => (/* binding */ CONFIRM_DELETE_MESSAGE),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "SNACKBAR_MESSAGE": () => (/* binding */ SNACKBAR_MESSAGE)
/* harmony export */ });
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");

var SECTION_CONTAINER = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('#section-container');
var PRODUCT = {
  MAX_LENGTH: 10,
  PRICE_UNIT: 10,
  PRICE_RANGE: {
    MIN: 100,
    MAX: 10000
  },
  QUANTITY_RANGE: {
    MIN: 1,
    MAX: 20
  }
};
var COIN = {
  UNIT_LIST: [10, 50, 100, 500],
  MIN_UNIT: 10,
  MAX_AMOUNT: 100000
};
var CONFIRM_DELETE_MESSAGE = '상품을 삭제하시겠습니까?';
var ERROR_MESSAGE = {
  EMPTY_NAME: '상품명을 입력해 주세요.',
  EMPTY_PRICE: '상품가격을 입력해 주세요.',
  EMPTY_QUANTITY: '상품수량을 입력해 주세요.',
  OVER_MAX_LENGTH: '상품명은 10글자 이하로 입력해 주세요.',
  NOT_DIVIDE_NUMBER: '10원 단위로 입력해 주세요.',
  OUT_OF_PRICE_RANGE: '상품 가격은 100원 이상 10000원 이하로 입력해 주세요.',
  OUT_OF_QUANTITY_RANGE: '상품 수량은 1개 이상 20개 이하로 입력해 주세요.',
  DUPLICATE_PRODUCT: '중복된 상품 입니다. 다른 상품을 입력해 주세요.',
  OVER_MAX_AMOUNT: '최대 보유 금액은 100,000원 을 넘을 수 없습니다.',
  SHORTAGE_OF_MONEY: '잔액이 부족합니다. 금액을 투입해 주세요.',
  INVALID_PASSWORD: '비밀번호는 8~16자 영어, 숫자, 특수문자를 포함하여 입력해 주세요.',
  NOT_SAME_PASSWORD: '비밀번호를 똑같이 입력해 주세요.'
};
var SNACKBAR_MESSAGE = {
  HAVE_NO_MONEY: '반환할 금액이 없습니다.',
  RETURNED_COIN: '잔돈이 반환되었습니다.',
  LACK_COINS: '보유한 동전이 부족합니다.'
};

/***/ }),

/***/ "./src/js/controller/Charge.js":
/*!*************************************!*\
  !*** ./src/js/controller/Charge.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Charge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _views_ChargeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/ChargeView.js */ "./src/js/views/ChargeView.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _handleChargeCoin = /*#__PURE__*/new WeakSet();

var Charge = /*#__PURE__*/function () {
  function Charge(coin) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Charge);

    _classPrivateMethodInitSpec(this, _handleChargeCoin);

    this.coinModel = coin;
    this.chargeView = new _views_ChargeView_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_2__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@charge', _classPrivateMethodGet(this, _handleChargeCoin, _handleChargeCoin2).bind(this));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Charge, [{
    key: "initCharge",
    value: function initCharge() {
      this.chargeView.initChargeDOM();
      var coins = this.coinModel.getCoins();
      this.chargeView.renderCoins(this.coinModel.getTotalAmount(coins), coins);
    }
  }]);

  return Charge;
}();

function _handleChargeCoin2(e) {
  try {
    var amount = e.detail.amount;
    this.coinModel.makeRandomCoins(amount);
    var coins = this.coinModel.getCoins();
    this.chargeView.renderCoins(this.coinModel.getTotalAmount(coins), coins);
    this.chargeView.resetChargeInput();
  } catch (error) {
    alert(error.message);
  }
}



/***/ }),

/***/ "./src/js/controller/ProductManage.js":
/*!********************************************!*\
  !*** ./src/js/controller/ProductManage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductManage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _views_menuCategoryView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/menuCategoryView.js */ "./src/js/views/menuCategoryView.js");
/* harmony import */ var _Charge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Charge.js */ "./src/js/controller/Charge.js");
/* harmony import */ var _ProductPurchase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductPurchase.js */ "./src/js/controller/ProductPurchase.js");
/* harmony import */ var _models_ProductManger_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/ProductManger.ts */ "./src/js/models/ProductManger.ts");
/* harmony import */ var _models_Coin_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/Coin.ts */ "./src/js/models/Coin.ts");
/* harmony import */ var _views_ProductManageView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/ProductManageView.js */ "./src/js/views/ProductManageView.js");
/* harmony import */ var _views_UserView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/UserView.js */ "./src/js/views/UserView.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }











var _renderSavedProducts = /*#__PURE__*/new WeakSet();

var _handleProductInfo = /*#__PURE__*/new WeakSet();

var _modifyProduct = /*#__PURE__*/new WeakSet();

var _deleteProduct = /*#__PURE__*/new WeakSet();

var ProductManage = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function ProductManage() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProductManage);

  _classPrivateMethodInitSpec(this, _deleteProduct);

  _classPrivateMethodInitSpec(this, _modifyProduct);

  _classPrivateMethodInitSpec(this, _handleProductInfo);

  _classPrivateMethodInitSpec(this, _renderSavedProducts);

  this.productManagerModel = new _models_ProductManger_ts__WEBPACK_IMPORTED_MODULE_7__["default"]();
  this.coinModel = new _models_Coin_ts__WEBPACK_IMPORTED_MODULE_8__["default"]();
  this.charge = new _Charge_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.coinModel);
  this.productPurchase = new _ProductPurchase_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.productManagerModel, this.coinModel);
  this.productManageView = new _views_ProductManageView_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
  this.userView = new _views_UserView_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@render', _classPrivateMethodGet(this, _renderSavedProducts, _renderSavedProducts2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@manage', _classPrivateMethodGet(this, _handleProductInfo, _handleProductInfo2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@modify', _classPrivateMethodGet(this, _modifyProduct, _modifyProduct2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@delete', _classPrivateMethodGet(this, _deleteProduct, _deleteProduct2).bind(this));
});

function _renderSavedProducts2(e) {
  var hash = e.detail.hash || '#!purchase';
  (0,_views_menuCategoryView_js__WEBPACK_IMPORTED_MODULE_4__.initHashContents)(hash);
  var savedProductList = this.productManagerModel.getProducts();

  switch (hash) {
    case '#!manage':
      this.productManageView.initManageDOM();

      if (savedProductList.length !== 0) {
        this.productManageView.render(savedProductList);
      }

      break;

    case '#!charge':
      this.charge.initCharge();
      break;

    case '#!purchase':
      this.productPurchase.initPurchase();
      break;

    default:
  }
}

function _handleProductInfo2(e) {
  try {
    var product = e.detail.product;
    this.productManagerModel.addProduct(product);
    this.productManageView.render(product);
    this.productManageView.resetProductInput();
  } catch (error) {
    alert(error.message);
  }
}

function _modifyProduct2(e) {
  try {
    var _e$detail = e.detail,
        index = _e$detail.index,
        product = _e$detail.product;
    this.productManagerModel.modifyProduct(index, product);
    this.productManageView.renderModifiedProduct(index, product);
  } catch (error) {
    alert(error.message);
  }
}

function _deleteProduct2(e) {
  var index = e.detail.index;
  this.productManagerModel.deleteProduct(index);
}



/***/ }),

/***/ "./src/js/controller/ProductPurchase.js":
/*!**********************************************!*\
  !*** ./src/js/controller/ProductPurchase.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPurchase)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _models_PurchaseAmount_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/PurchaseAmount.ts */ "./src/js/models/PurchaseAmount.ts");
/* harmony import */ var _views_ProductPurchaseView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/ProductPurchaseView.js */ "./src/js/views/ProductPurchaseView.js");
/* harmony import */ var _utils_validation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/validation.js */ "./src/js/utils/validation.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }







var _handlePurchaseAmount = /*#__PURE__*/new WeakSet();

var _handleProductPurchase = /*#__PURE__*/new WeakSet();

var _handleChangeCoin = /*#__PURE__*/new WeakSet();

var ProductPurchase = /*#__PURE__*/function () {
  function ProductPurchase(_product, coin) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductPurchase);

    _classPrivateMethodInitSpec(this, _handleChangeCoin);

    _classPrivateMethodInitSpec(this, _handleProductPurchase);

    _classPrivateMethodInitSpec(this, _handlePurchaseAmount);

    this.productModel = _product;
    this.coinModel = coin;
    this.purchaseAmountModel = new _models_PurchaseAmount_ts__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.productPurchaseView = new _views_ProductPurchaseView_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_2__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@purchase', _classPrivateMethodGet(this, _handlePurchaseAmount, _handlePurchaseAmount2).bind(this));
    (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_2__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@buy', _classPrivateMethodGet(this, _handleProductPurchase, _handleProductPurchase2).bind(this));
    (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_2__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, 'click', _classPrivateMethodGet(this, _handleChangeCoin, _handleChangeCoin2).bind(this));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductPurchase, [{
    key: "initPurchase",
    value: function initPurchase() {
      this.productPurchaseView.initPurchaseDom();
      this.productPurchaseView.renderTotalAmount(this.purchaseAmountModel.getAmount());
      var products = this.productModel.getProducts();

      if (products.length > 0) {
        this.productPurchaseView.renderProducts(products);
      }
    }
  }]);

  return ProductPurchase;
}();

function _handlePurchaseAmount2(e) {
  var inputAmount = e.detail.inputAmount;
  this.purchaseAmountModel.addAmount(inputAmount);
  this.productPurchaseView.renderTotalAmount(this.purchaseAmountModel.getAmount());
  this.productPurchaseView.resetAmountInput();
}

function _handleProductPurchase2(e) {
  var _e$detail = e.detail,
      index = _e$detail.index,
      product = _e$detail.product;

  try {
    (0,_utils_validation_js__WEBPACK_IMPORTED_MODULE_6__.validAffordablePrice)(this.purchaseAmountModel.getAmount(), product.price);

    if (product.quantity === 0) {
      this.productModel.deleteProduct(index);
    } else {
      this.productModel.modifyProduct(index, product);
    }

    this.purchaseAmountModel.deductAmount(product.price);
    this.productPurchaseView.renderTotalAmount(this.purchaseAmountModel.getAmount());
    this.productPurchaseView.renderProducts(this.productModel.getProducts());
  } catch (error) {
    alert(error.message);
  }
}

function _handleChangeCoin2(e) {
  if (e.target.id !== 'change-button') return;
  var currentAmount = this.purchaseAmountModel.getAmount();

  if (!currentAmount) {
    this.productPurchaseView.showSnackbar(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.HAVE_NO_MONEY);
    return;
  }

  var returnedCoins = this.coinModel.returnCoins(currentAmount);
  var returnedAmount = this.coinModel.getTotalAmount(returnedCoins);
  this.purchaseAmountModel.deductAmount(returnedAmount);
  this.productPurchaseView.renderTotalAmount(this.purchaseAmountModel.getAmount());
  this.productPurchaseView.renderReturnedCoin(returnedCoins);
  this.productPurchaseView.showSnackbar(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.RETURNED_COIN);
}



/***/ }),

/***/ "./src/js/route/route.js":
/*!*******************************!*\
  !*** ./src/js/route/route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");



var render = function render() {
  var hash = window.location.hash;
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_0__.emit)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.SECTION_CONTAINER, '@render', {
    hash: hash
  });
};

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

/***/ }),

/***/ "./src/js/utils/api.js":
/*!*****************************!*\
  !*** ./src/js/utils/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestRegister": () => (/* binding */ requestRegister),
/* harmony export */   "requestLogin": () => (/* binding */ requestLogin),
/* harmony export */   "requestUpdate": () => (/* binding */ requestUpdate),
/* harmony export */   "requestUserInfo": () => (/* binding */ requestUserInfo)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var BASE_URL = 'https://ahn-project.herokuapp.com';

var request = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url, option) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, option);

          case 2:
            response = _context.sent;

            if (response.ok) {
              _context.next = 5;
              break;
            }

            throw new Error();

          case 5:
            return _context.abrupt("return", response.json());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function request(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var requestRegister = function requestRegister(user) {
  return request("".concat(BASE_URL, "/register"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
};
var requestLogin = function requestLogin(email, password) {
  return request("".concat(BASE_URL, "/login"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
};
var requestUpdate = function requestUpdate(user, id) {
  return request("".concat(BASE_URL, "/users/").concat(id), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
};
var requestUserInfo = function requestUserInfo(id, accessToken) {
  return request("".concat(BASE_URL, "/users/").concat(id), {
    method: 'GET',
    headers: {
      Authorization: "Bearer ".concat(accessToken)
    }
  });
};

/***/ }),

/***/ "./src/js/utils/common.js":
/*!********************************!*\
  !*** ./src/js/utils/common.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isMaximumLength": () => (/* binding */ isMaximumLength),
/* harmony export */   "isDivideUnit": () => (/* binding */ isDivideUnit),
/* harmony export */   "isRangeNumber": () => (/* binding */ isRangeNumber),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber),
/* harmony export */   "isOverMaxNumber": () => (/* binding */ isOverMaxNumber)
/* harmony export */ });
var isEmpty = function isEmpty(name) {
  return !name;
};
var isMaximumLength = function isMaximumLength(value, max) {
  return value.length > max;
};
var isDivideUnit = function isDivideUnit(number, unit) {
  return number % unit !== 0;
};
var isRangeNumber = function isRangeNumber(number, min, max) {
  return number < min || number > max;
};
var getRandomNumber = function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
};
var isOverMaxNumber = function isOverMaxNumber(number, max) {
  return number > max;
};

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "replaceElement": () => (/* binding */ replaceElement)
/* harmony export */ });
var $ = function $(select) {
  return document.querySelector(select);
};
var replaceElement = function replaceElement(element, content) {
  element.replaceChildren();
  element.insertAdjacentHTML('beforeend', content);
};

/***/ }),

/***/ "./src/js/utils/event.js":
/*!*******************************!*\
  !*** ./src/js/utils/event.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "on": () => (/* binding */ on)
/* harmony export */ });
var emit = function emit(target, eventName, detail) {
  var event = new CustomEvent(eventName, {
    detail: detail
  });
  target.dispatchEvent(event);
};
var on = function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
};

/***/ }),

/***/ "./src/js/utils/validation.js":
/*!************************************!*\
  !*** ./src/js/utils/validation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validProductInfo": () => (/* binding */ validProductInfo),
/* harmony export */   "validChargeAmount": () => (/* binding */ validChargeAmount),
/* harmony export */   "validPurchaseAmount": () => (/* binding */ validPurchaseAmount),
/* harmony export */   "validAffordablePrice": () => (/* binding */ validAffordablePrice),
/* harmony export */   "validPassword": () => (/* binding */ validPassword)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/js/utils/common.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");



var isDuplicateProduct = function isDuplicateProduct(name, products) {
  return products.some(function (product) {
    return product.name === name;
  });
};

var validProductInfo = function validProductInfo(_ref, products) {
  var name = _ref.name,
      price = _ref.price,
      quantity = _ref.quantity;

  if ((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(name)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.EMPTY_NAME);
  }

  if (Number.isNaN(price)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.EMPTY_PRICE);
  }

  if (Number.isNaN(quantity)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.EMPTY_QUANTITY);
  }

  if (isDuplicateProduct(name, products)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.DUPLICATE_PRODUCT);
  }

  if ((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isMaximumLength)(name, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT.MAX_LENGTH)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OVER_MAX_LENGTH);
  }

  if ((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isDivideUnit)(price, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT.PRICE_UNIT)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.NOT_DIVIDE_NUMBER);
  }

  if ((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isRangeNumber)(price, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT.PRICE_RANGE.MIN, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT.PRICE_RANGE.MAX)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OUT_OF_PRICE_RANGE);
  }

  if ((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isRangeNumber)(quantity, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT.QUANTITY_RANGE.MIN, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT.QUANTITY_RANGE.MAX)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OUT_OF_QUANTITY_RANGE);
  }

  return true;
};
var validChargeAmount = function validChargeAmount(amount, totalAmount) {
  if ((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isDivideUnit)(amount, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.COIN.MIN_UNIT)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.NOT_DIVIDE_NUMBER);
  }

  if ((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isOverMaxNumber)(totalAmount, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.COIN.MAX_AMOUNT)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OVER_MAX_AMOUNT);
  }
};
var validPurchaseAmount = function validPurchaseAmount(amount) {
  if ((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isDivideUnit)(amount, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.COIN.MIN_UNIT)) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.NOT_DIVIDE_NUMBER);
  }
};
var validAffordablePrice = function validAffordablePrice(amount, price) {
  if (amount < price) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.SHORTAGE_OF_MONEY);
  }
};
var validPassword = function validPassword(password, passwordConfirm) {
  var passwordRule = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  if (!passwordRule.test(password)) {
    throw Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.INVALID_PASSWORD);
  }

  if (password !== passwordConfirm) {
    throw Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.NOT_SAME_PASSWORD);
  }
};

/***/ }),

/***/ "./src/js/views/ChargeView.js":
/*!************************************!*\
  !*** ./src/js/views/ChargeView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChargeView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _onSubmitChargeAmount = /*#__PURE__*/new WeakSet();

var ChargeView = /*#__PURE__*/function () {
  function ChargeView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChargeView);

    _classPrivateMethodInitSpec(this, _onSubmitChargeAmount);

    (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, 'submit', _classPrivateMethodGet(this, _onSubmitChargeAmount, _onSubmitChargeAmount2).bind(this));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChargeView, [{
    key: "initChargeDOM",
    value: function initChargeDOM() {
      this.$chargeAmountInput = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#charge-amount-input');
      this.$currentAmount = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.current-amount');
      this.$fiveHundredCoin = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.five-hundred-coin');
      this.$oneHundredCoin = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.one-hundred-coin');
      this.$fiftyCoin = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.fifty-coin');
      this.$tenCoin = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.ten-coin');
    }
  }, {
    key: "renderCoins",
    value: function renderCoins(amount, coins) {
      this.$currentAmount.textContent = "\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: ".concat(amount, "\uC6D0");
      this.$fiveHundredCoin.textContent = "".concat(coins[500], "\uAC1C");
      this.$oneHundredCoin.textContent = "".concat(coins[100], "\uAC1C");
      this.$fiftyCoin.textContent = "".concat(coins[50], "\uAC1C");
      this.$tenCoin.textContent = "".concat(coins[10], "\uAC1C");
    }
  }, {
    key: "resetChargeInput",
    value: function resetChargeInput() {
      this.$chargeAmountInput.value = '';
    }
  }]);

  return ChargeView;
}();

function _onSubmitChargeAmount2(e) {
  e.preventDefault();
  if (e.target.id !== 'charge-form') return;
  var amount = this.$chargeAmountInput.valueAsNumber;
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@charge', {
    amount: amount
  });
}



/***/ }),

/***/ "./src/js/views/ProductManageView.js":
/*!*******************************************!*\
  !*** ./src/js/views/ProductManageView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductManageView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var tableTemplate = function tableTemplate(_ref) {
  var name = _ref.name,
      price = _ref.price,
      quantity = _ref.quantity;
  return "\n    <tr>\n      <td>".concat(name, "</td>\n      <td>").concat(price, "</td>\n      <td>").concat(quantity, "</td>\n      <td>\n        <button class=\"modify-button\" type=\"button\" data-name=").concat(name, " data-price=").concat(price, " data-quantity=").concat(quantity, ">\uC218\uC815</button>\n        <button class=\"delete-button\" type=\"button\">\uC0AD\uC81C</button>\n      </td>\n    </tr>\n  ");
};

var tableInputTemplate = function tableInputTemplate(_ref2) {
  var name = _ref2.name,
      price = _ref2.price,
      quantity = _ref2.quantity;
  return "\n    <td><input id=\"modify-name\" type=\"text\" class=\"modify-input\" placeholder=\"\uC0C1\uD488\uBA85\" value=".concat(name, " /></td>\n    <td><input id=\"modify-price\" type=\"number\" min=\"100\" max=\"10000\" step=\"10\" class=\"modify-input\" placeholder=\"\uAC00\uACA9\" value=").concat(price, " /></td>\n    <td><input id=\"modify-quantity\" type=\"number\" min=\"1\" max=\"20\" class=\"modify-input\" placeholder=\"\uC218\uB7C9\" value=").concat(quantity, " /></td>\n    <td><button class=\"confirm-button\" type=\"button\">\uD655\uC778</button></td>\n  ");
};

var _bindMangeEvent = /*#__PURE__*/new WeakSet();

var _onSubmitProductInfo = /*#__PURE__*/new WeakSet();

var _modifyProductInfo = /*#__PURE__*/new WeakSet();

var _confirmProductInfo = /*#__PURE__*/new WeakSet();

var _deleteProductInfo = /*#__PURE__*/new WeakSet();

var ProductManageView = /*#__PURE__*/function () {
  function ProductManageView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductManageView);

    _classPrivateMethodInitSpec(this, _deleteProductInfo);

    _classPrivateMethodInitSpec(this, _confirmProductInfo);

    _classPrivateMethodInitSpec(this, _modifyProductInfo);

    _classPrivateMethodInitSpec(this, _onSubmitProductInfo);

    _classPrivateMethodInitSpec(this, _bindMangeEvent);

    this.$productNameInput = '';
    this.$productPriceInput = '';
    this.$productQuantityInput = '';
    this.$productTbody = '';
    (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, 'submit', _classPrivateMethodGet(this, _onSubmitProductInfo, _onSubmitProductInfo2).bind(this));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductManageView, [{
    key: "initManageDOM",
    value: function initManageDOM() {
      this.$productNameInput = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#product-name-input');
      this.$productPriceInput = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#product-price-input');
      this.$productQuantityInput = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#product-quantity-input');
      this.$productTbody = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#product-tbody');

      _classPrivateMethodGet(this, _bindMangeEvent, _bindMangeEvent2).call(this);
    }
  }, {
    key: "renderModifiedProduct",
    value: function renderModifiedProduct(index, product) {
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.replaceElement)(this.$productTbody.children[index], tableTemplate(product));
    }
  }, {
    key: "render",
    value: function render(productList) {
      var _this = this;

      if (Array.isArray(productList)) {
        productList.forEach(function (product) {
          _this.$productTbody.insertAdjacentHTML('beforeend', tableTemplate(product));
        });
        return;
      }

      this.$productTbody.insertAdjacentHTML('beforeend', tableTemplate(productList));
    }
  }, {
    key: "resetProductInput",
    value: function resetProductInput() {
      this.$productNameInput.value = '';
      this.$productPriceInput.value = '';
      this.$productQuantityInput.value = '';
    }
  }]);

  return ProductManageView;
}();

function _bindMangeEvent2() {
  var _this2 = this;

  this.$productTbody.addEventListener('click', function (e) {
    var className = e.target.className;

    switch (className) {
      case 'modify-button':
        _classPrivateMethodGet(_this2, _modifyProductInfo, _modifyProductInfo2).call(_this2, e.target);

        break;

      case 'confirm-button':
        _classPrivateMethodGet(_this2, _confirmProductInfo, _confirmProductInfo2).call(_this2, e.target.closest('tr'));

        break;

      case 'delete-button':
        if (window.confirm(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.CONFIRM_DELETE_MESSAGE)) {
          _classPrivateMethodGet(_this2, _deleteProductInfo, _deleteProductInfo2).call(_this2, e.target.closest('tr'));
        }

        break;

      default:
    }
  });
}

function _onSubmitProductInfo2(e) {
  e.preventDefault();
  if (e.target.id !== 'product-add-form') return;
  var product = {
    name: this.$productNameInput.value.trim(),
    price: this.$productPriceInput.valueAsNumber,
    quantity: this.$productQuantityInput.valueAsNumber
  };
  this.$productNameInput.focus();
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@manage', {
    product: product
  });
}

function _modifyProductInfo2(selectedProductButton) {
  var product = {
    name: selectedProductButton.dataset.name,
    price: selectedProductButton.dataset.price,
    quantity: selectedProductButton.dataset.quantity
  };
  (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.replaceElement)(selectedProductButton.closest('tr'), tableInputTemplate(product));
}

function _confirmProductInfo2(selectedProduct) {
  var index = selectedProduct.rowIndex - 1;
  var product = {
    name: selectedProduct.querySelector('#modify-name').value.trim(),
    price: selectedProduct.querySelector('#modify-price').valueAsNumber,
    quantity: selectedProduct.querySelector('#modify-quantity').valueAsNumber
  };
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@modify', {
    index: index,
    product: product
  });
}

function _deleteProductInfo2(selectedProduct) {
  var index = selectedProduct.rowIndex - 1;
  this.$productTbody.removeChild(selectedProduct);
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@delete', {
    index: index
  });
}



/***/ }),

/***/ "./src/js/views/ProductPurchaseView.js":
/*!*********************************************!*\
  !*** ./src/js/views/ProductPurchaseView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPurchaseView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var purchaseTemplate = function purchaseTemplate(_ref) {
  var name = _ref.name,
      price = _ref.price,
      quantity = _ref.quantity;
  return "\n    <tr>\n      <td>".concat(name, "</td>\n      <td>").concat(price, "</td>\n      <td>").concat(quantity, "</td>\n      <td>\n        <button class=\"purchase-button\" type=\"button\" data-name=").concat(name, " data-price=").concat(price, " data-quantity=").concat(quantity, ">\uAD6C\uB9E4</button>\n      </td>\n    </tr>\n  ");
};

var _onSubmitPurchaseAmount = /*#__PURE__*/new WeakSet();

var _onClickPurchaseButton = /*#__PURE__*/new WeakSet();

var ProductPurchaseView = /*#__PURE__*/function () {
  function ProductPurchaseView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductPurchaseView);

    _classPrivateMethodInitSpec(this, _onClickPurchaseButton);

    _classPrivateMethodInitSpec(this, _onSubmitPurchaseAmount);

    (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, 'submit', _classPrivateMethodGet(this, _onSubmitPurchaseAmount, _onSubmitPurchaseAmount2).bind(this));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductPurchaseView, [{
    key: "initPurchaseDom",
    value: function initPurchaseDom() {
      var _this = this;

      this.$productPurchaseInput = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#product-purchase-input');
      this.$currentAmount = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.current-amount');
      this.$purchaseTbody = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#product-purchase-tbody');
      this.$fiveHundredCoin = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.returned-five-hundred-coin');
      this.$oneHundredCoin = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.returned-one-hundred-coin');
      this.$fiftyCoin = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.returned-fifty-coin');
      this.$tenCoin = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.returned-ten-coin');
      this.$snackbar = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#snackbar');
      this.$purchaseTbody.addEventListener('click', function (e) {
        if (e.target.classList.contains('purchase-button')) {
          _classPrivateMethodGet(_this, _onClickPurchaseButton, _onClickPurchaseButton2).call(_this, e.target);
        }
      });
    }
  }, {
    key: "showSnackbar",
    value: function showSnackbar(message) {
      var _this2 = this;

      this.$snackbar.textContent = message;
      this.$snackbar.classList.toggle('show');
      setTimeout(function () {
        _this2.$snackbar.classList.toggle('show');
      }, 3000);
    }
  }, {
    key: "renderTotalAmount",
    value: function renderTotalAmount(amount) {
      this.$currentAmount.textContent = "\uD22C\uC785\uD55C \uAE08\uC561: ".concat(amount, "\uC6D0");
    }
  }, {
    key: "renderProducts",
    value: function renderProducts(products) {
      var _this3 = this;

      this.$purchaseTbody.replaceChildren();
      products.forEach(function (product) {
        _this3.$purchaseTbody.insertAdjacentHTML('beforeend', purchaseTemplate(product));
      });
    }
  }, {
    key: "renderReturnedCoin",
    value: function renderReturnedCoin(coins) {
      this.$fiveHundredCoin.textContent = "".concat(coins[500], "\uAC1C");
      this.$oneHundredCoin.textContent = "".concat(coins[100], "\uAC1C");
      this.$fiftyCoin.textContent = "".concat(coins[50], "\uAC1C");
      this.$tenCoin.textContent = "".concat(coins[10], "\uAC1C");
    }
  }, {
    key: "resetAmountInput",
    value: function resetAmountInput() {
      this.$productPurchaseInput.value = '';
    }
  }]);

  return ProductPurchaseView;
}();

function _onSubmitPurchaseAmount2(e) {
  e.preventDefault();
  if (e.target.id !== 'purchase-form') return;
  var inputAmount = this.$productPurchaseInput.valueAsNumber;
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@purchase', {
    inputAmount: inputAmount
  });
}

function _onClickPurchaseButton2(target) {
  var index = target.closest('tr').rowIndex - 1;
  var product = {
    name: target.dataset.name,
    price: target.dataset.price,
    quantity: target.dataset.quantity - 1
  };
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECTION_CONTAINER, '@buy', {
    index: index,
    product: product
  });
}



/***/ }),

/***/ "./src/js/views/UserView.js":
/*!**********************************!*\
  !*** ./src/js/views/UserView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/api.js */ "./src/js/utils/api.js");





function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _onClickLoginContainer = /*#__PURE__*/new WeakSet();

var UserView = /*#__PURE__*/function () {
  function UserView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserView);

    _classPrivateMethodInitSpec(this, _onClickLoginContainer);

    this.$loginContainer = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('#login-container');
    this.$selectBox = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.select-box');
    this.$login = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.login');
    this.$menuCategory = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('#menu-category');
    this.$thumbnail = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.thumbnail');
    this.$loginContainer.addEventListener('click', _classPrivateMethodGet(this, _onClickLoginContainer, _onClickLoginContainer2).bind(this));
    this.confirmLogin();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UserView, [{
    key: "confirmLogin",
    value: function () {
      var _confirmLogin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var userInfo, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userInfo = JSON.parse(sessionStorage.getItem('user'));

                if (!userInfo) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return (0,_utils_api_js__WEBPACK_IMPORTED_MODULE_5__.requestUserInfo)(userInfo.id, userInfo.accessToken);

              case 4:
                response = _context.sent;
                // eslint-disable-next-line prefer-destructuring
                this.$thumbnail.textContent = response.name[0];
                this.toggleHide();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function confirmLogin() {
        return _confirmLogin.apply(this, arguments);
      }

      return confirmLogin;
    }()
  }, {
    key: "toggleHide",
    value: function toggleHide() {
      this.$login.classList.toggle('hide');
      this.$menuCategory.classList.toggle('hide');
      this.$thumbnail.classList.toggle('hide');
    }
  }]);

  return UserView;
}();

function _onClickLoginContainer2(e) {
  switch (e.target.name) {
    case 'login':
      document.location.href = './login.html';
      break;

    case 'thumbnail':
      this.$selectBox.classList.toggle('hide');
      break;

    case 'edit':
      document.location.href = './profile.html';
      break;

    case 'logout':
      this.$selectBox.classList.add('hide');
      sessionStorage.removeItem('user');
      this.toggleHide();
      break;

    default:
  }
}



/***/ }),

/***/ "./src/js/views/menuCategoryView.js":
/*!******************************************!*\
  !*** ./src/js/views/menuCategoryView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initHashContents": () => (/* binding */ initHashContents)
/* harmony export */ });
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.js */ "./src/js/views/template.js");



var routes = {
  '#!manage': _template_js__WEBPACK_IMPORTED_MODULE_2__.CATEGORY_TEMPLATE.MANAGE,
  '#!charge': _template_js__WEBPACK_IMPORTED_MODULE_2__.CATEGORY_TEMPLATE.CHARGE,
  '#!purchase': _template_js__WEBPACK_IMPORTED_MODULE_2__.CATEGORY_TEMPLATE.PURCHASE
};
var menu = {
  manage: (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)('#manage-menu'),
  charge: (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)('#charge-menu'),
  purchase: (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)('#purchase-menu')
};

var selectTab = function selectTab(hash) {
  menu.manage.classList.toggle('select', hash === '#!manage');
  menu.charge.classList.toggle('select', hash === '#!charge');
  menu.purchase.classList.toggle('select', hash === '#!purchase');
};

var initHashContents = function initHashContents(hash) {
  var content = routes[hash];
  selectTab(hash);
  (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.replaceElement)(_constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.SECTION_CONTAINER, content);
};

/***/ }),

/***/ "./src/js/views/template.js":
/*!**********************************!*\
  !*** ./src/js/views/template.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY_TEMPLATE": () => (/* binding */ CATEGORY_TEMPLATE)
/* harmony export */ });
var CATEGORY_TEMPLATE = {
  MANAGE: "\n    <h2 hidden>\uC0C1\uD488 \uAD00\uB9AC</h2>\n    <form id=\"product-add-form\">\n      <label>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n      <div class=\"form-input product-manage-input-width\">\n        <input\n          id=\"product-name-input\"\n          type=\"text\"\n          placeholder=\"\uC0C1\uD488\uBA85\"\n          maxlength=\"10\"\n          required\n          aria-labelledby=\"product-information\"\n        />\n        <input\n          id=\"product-price-input\"\n          type=\"number\"\n          placeholder=\"\uAC00\uACA9\"\n          min=\"100\"\n          max=\"10000\"\n          step=\"10\"\n          required\n          aria-labelledby=\"product-information\"\n        />\n        <input\n          id=\"product-quantity-input\"\n          type=\"number\"\n          placeholder=\"\uC218\uB7C9\"\n          min=\"1\"\n          max=\"20\"\n          required\n          aria-labelledby=\"product-information\"\n        />\n        <button class=\"hover-button\">\uCD94\uAC00</button>\n      </div>\n    </form>\n    <table class=\"table\">\n      <caption class=\"caption\">\n        \uC0C1\uD488 \uD604\uD669\n      </caption>\n      <colgroup>\n        <col>\n        <col width=\"24%\">\n        <col width=\"24%\">\n        <col width=\"24%\">\n      </colgroup>\n      <thead></thead>\n        <tr>\n          <th>\uC0C1\uD488\uBA85</th>\n          <th>\uAC00\uACA9</th>\n          <th>\uC218\uB7C9</th>\n        </tr>\n      </thead>\n      <tbody id=\"product-tbody\"></tbody>\n    </table>\n  ",
  CHARGE: "\n    <h2 hidden>\uC794\uB3C8 \uCDA9\uC804</h2>\n    <form id=\"charge-form\">\n      <label>\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n      <div class=\"form-input\">\n        <input\n          id=\"charge-amount-input\"\n          class=\"input-width\"\n          type=\"number\"\n          placeholder=\"\uAE08\uC561\"\n          min=\"10\"\n          max=\"100000\"\n          step=\"10\"\n          required\n        />\n        <button class=\"hover-button\">\uAD6C\uC785</button>\n      </div>\n      <p class=\"current-amount\"></p>\n    </form>\n    <table class=\"table\">\n      <caption class=\"caption\">\n        \uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804\n      </caption>\n      <thead>\n        <tr>\n          <th>\uB3D9\uC804</th>\n          <th>\uAC1C\uC218</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>500\uC6D0</td>\n          <td class=\"five-hundred-coin\"></td>\n        </tr>\n        <tr>\n          <td>100\uC6D0</td>\n          <td class=\"one-hundred-coin\"></td>\n        </tr>\n        <tr>\n          <td>50\uC6D0</td>\n          <td class=\"fifty-coin\"></td>\n        </tr>\n        <tr>\n          <td>10\uC6D0</td>\n          <td class=\"ten-coin\"></td>\n        </tr>\n      </tbody>\n    </table>\n  ",
  PURCHASE: "\n    <h2 hidden>\uC0C1\uD488 \uAD6C\uB9E4</h2>\n    <form id=\"purchase-form\">\n      <label>\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694.</label>\n      <div class=\"form-input\">\n        <input id=\"product-purchase-input\" class=\"input-width\" type=\"number\" step=\"10\" min=\"10\" max=\"10000\" required placeholder=\"\uAE08\uC561\" />\n        <button class=\"hover-button\">\uD22C\uC785</button>\n      </div>\n      <p class=\"current-amount\"></p>\n    </form>\n    <table class=\"table\">\n      <caption class=\"caption\">\n        \uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669\n      </caption>\n      <thead>\n        <tr>\n          <th>\uC0C1\uD488\uBA85</th>\n          <th>\uAC00\uACA9</th>\n          <th>\uC218\uB7C9</th>\n          <th>\uAD6C\uB9E4</th>\n        </tr>\n      </thead>\n      <tbody id=\"product-purchase-tbody\"></tbody>\n    </table>\n    <table class=\"table\">\n      <caption class=\"caption\">\n        \uC794\uB3C8 \uBC18\uD658\n      </caption>\n      <thead>\n        <tr>\n          <th>\uB3D9\uC804</th>\n          <th>\uAC1C\uC218</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>500\uC6D0</td>\n          <td class=\"returned-five-hundred-coin\">0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>100\uC6D0</td>\n          <td class=\"returned-one-hundred-coin\">0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>50\uC6D0</td>\n          <td class=\"returned-fifty-coin\">0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>10\uC6D0</td>\n          <td class=\"returned-ten-coin\">0\uAC1C</td>\n        </tr>\n      </tbody>\n    </table>\n    <button id=\"change-button\" class=\"button\" type=\"button\">\uBC18\uD658\uD558\uAE30</button>\n    <div id=\"snackbar\"></div>\n  "
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#app {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 600px;\n  padding: 44px 80px;\n  margin: 100px auto 100px;\n  border: 1px solid var(--color-dark-gray);\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.vending-machine-header {\n  margin-bottom: 32px;\n  line-height: 36px;\n  font-size: 34px;\n  font-weight: 600;\n}\n\n.menu-list {\n  display: flex;\n  margin-bottom: 52px;\n  gap: 4px;\n}\n\n.button {\n  display: block;\n  text-align: center;\n  width: 117px;\n  height: 36px;\n  margin: 0 auto;\n  border: none;\n  border-radius: 4px;\n  line-height: 38px;\n  font-weight: 500;\n  font-size: 16px;\n  background-color: var(--color-light-white);\n}\n\n.section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button:hover,\n.modify-button:hover,\n.delete-button:hover,\n.confirm-button:hover {\n  background-color: var(--color-dark-white);\n}\n\n.menu-list li .select {\n  background-color: var(--color-sky-blue);\n}\n\n.form-input {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin: 8px 0 0;\n  gap: 3px;\n}\n\n.product-manage-input-width input {\n  width: 120px;\n}\n\n.form-input input {\n  height: 36px;\n  padding-left: 8px;\n  font-size: 16px;\n  border-radius: 4px;\n  border: 1px solid var(--color-light-gray);\n}\n\n.form-input button {\n  width: 56px;\n  margin-left: 16px;\n  line-height: 16px;\n  font-size: 14px;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  color: var(--color-white);\n  background-color: var(--color-light-blue);\n}\n\n.current-amount {\n  margin-top: 20px;\n}\n\n.hover-button:hover {\n  background-color: var(--color-dark-blue);\n}\n\n/* table */\n.table {\n  margin: 48px auto 20px;\n  font-size: 16px;\n  line-height: 24px;\n  table-layout: fixed;\n  word-break: break-all;\n  border-collapse: collapse;\n}\n\n.caption {\n  margin-bottom: 16px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.table tr {\n  border: 1px solid var(--color-light-gray);\n  border-width: 1px 0;\n}\n\n.table th {\n  padding: 8px 36px;\n  font-weight: 600;\n}\n\n.table td {\n  text-align: center;\n  padding: 8px 0;\n  font-weight: 400;\n}\n\n.table button {\n  width: 50px;\n  height: 32px;\n  border: 0px;\n  border-radius: 4px;\n  background-color: var(--color-light-white);\n}\n\n.input-width {\n  width: 300px;\n}\n\n.modify-input {\n  width: 60%;\n  padding: 5px 0;\n}\n\n#purchase-form {\n  width: 375px;\n  margin: 0 auto;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,wBAAwB;EACxB,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;;;EAIE,yCAAyC;AAC3C;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,UAAU;AACV;EACE,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB","sourcesContent":["#app {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 600px;\n  padding: 44px 80px;\n  margin: 100px auto 100px;\n  border: 1px solid var(--color-dark-gray);\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.vending-machine-header {\n  margin-bottom: 32px;\n  line-height: 36px;\n  font-size: 34px;\n  font-weight: 600;\n}\n\n.menu-list {\n  display: flex;\n  margin-bottom: 52px;\n  gap: 4px;\n}\n\n.button {\n  display: block;\n  text-align: center;\n  width: 117px;\n  height: 36px;\n  margin: 0 auto;\n  border: none;\n  border-radius: 4px;\n  line-height: 38px;\n  font-weight: 500;\n  font-size: 16px;\n  background-color: var(--color-light-white);\n}\n\n.section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button:hover,\n.modify-button:hover,\n.delete-button:hover,\n.confirm-button:hover {\n  background-color: var(--color-dark-white);\n}\n\n.menu-list li .select {\n  background-color: var(--color-sky-blue);\n}\n\n.form-input {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin: 8px 0 0;\n  gap: 3px;\n}\n\n.product-manage-input-width input {\n  width: 120px;\n}\n\n.form-input input {\n  height: 36px;\n  padding-left: 8px;\n  font-size: 16px;\n  border-radius: 4px;\n  border: 1px solid var(--color-light-gray);\n}\n\n.form-input button {\n  width: 56px;\n  margin-left: 16px;\n  line-height: 16px;\n  font-size: 14px;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  color: var(--color-white);\n  background-color: var(--color-light-blue);\n}\n\n.current-amount {\n  margin-top: 20px;\n}\n\n.hover-button:hover {\n  background-color: var(--color-dark-blue);\n}\n\n/* table */\n.table {\n  margin: 48px auto 20px;\n  font-size: 16px;\n  line-height: 24px;\n  table-layout: fixed;\n  word-break: break-all;\n  border-collapse: collapse;\n}\n\n.caption {\n  margin-bottom: 16px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.table tr {\n  border: 1px solid var(--color-light-gray);\n  border-width: 1px 0;\n}\n\n.table th {\n  padding: 8px 36px;\n  font-weight: 600;\n}\n\n.table td {\n  text-align: center;\n  padding: 8px 0;\n  font-weight: 400;\n}\n\n.table button {\n  width: 50px;\n  height: 32px;\n  border: 0px;\n  border-radius: 4px;\n  background-color: var(--color-light-white);\n}\n\n.input-width {\n  width: 300px;\n}\n\n.modify-input {\n  width: 60%;\n  padding: 5px 0;\n}\n\n#purchase-form {\n  width: 375px;\n  margin: 0 auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./snackbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./login.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-white: #ffffff;\n  --color-light-white: #f5f5f5;\n  --color-dark-white: #ebebeb;\n  --color-light-gray: #b4b4b4;\n  --color-dark-gray: rgba(0, 0, 0, 0.12);\n  --color-black: #000000;\n  --color-sky-blue: rgba(0, 188, 212, 0.16);\n  --color-light-blue: #00bcd4;\n  --color-dark-blue: #0098ac;\n  --color-blue: #3581d7;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\na {\n  text-decoration-line: none;\n  color: var(--color-black);\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,sBAAsB;EACtB,yCAAyC;EACzC,2BAA2B;EAC3B,0BAA0B;EAC1B,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B","sourcesContent":["@import './app.css';\n@import './snackbar.css';\n@import './login.css';\n\n:root {\n  --color-white: #ffffff;\n  --color-light-white: #f5f5f5;\n  --color-dark-white: #ebebeb;\n  --color-light-gray: #b4b4b4;\n  --color-dark-gray: rgba(0, 0, 0, 0.12);\n  --color-black: #000000;\n  --color-sky-blue: rgba(0, 188, 212, 0.16);\n  --color-light-blue: #00bcd4;\n  --color-dark-blue: #0098ac;\n  --color-blue: #3581d7;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\na {\n  text-decoration-line: none;\n  color: var(--color-black);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/login.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".login {\n  position: relative;\n  top: -30px;\n  right: -225px;\n  cursor: pointer;\n}\n\n.title {\n  font-size: 34px;\n  margin-bottom: 48px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n.login-input {\n  width: 300px;\n  height: 38px;\n  margin: 4px 0 16px;\n  padding-left: 8px;\n  font-size: 16px;\n  border-radius: 4px;\n  border: 1px solid var(--color-light-gray);\n}\n\n.submit-button {\n  height: 36px;\n  width: 300px;\n  margin: 14px 0;\n  border-radius: 4px;\n  border: none;\n  font-size: 14px;\n  background-color: var(--color-light-blue);\n  color: var(--color-white);\n}\n\n#sign-up {\n  color: var(--color-blue);\n}\n\n.thumbnail {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  top: -30px;\n  right: -260px;\n  border-radius: 50%;\n  border: none;\n  background: #d6f4f8;\n}\n\n.select-box {\n  position: absolute;\n  top: 110px;\n  right: 480px;\n  background: white;\n  border-radius: 3px;\n  width: 100px;\n  text-align: center;\n}\n\n.select-box-item {\n  width: 100px;\n  height: 35px;\n  background: none;\n}\n\n.hide {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/login.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,yCAAyC;EACzC,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".login {\n  position: relative;\n  top: -30px;\n  right: -225px;\n  cursor: pointer;\n}\n\n.title {\n  font-size: 34px;\n  margin-bottom: 48px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n.login-input {\n  width: 300px;\n  height: 38px;\n  margin: 4px 0 16px;\n  padding-left: 8px;\n  font-size: 16px;\n  border-radius: 4px;\n  border: 1px solid var(--color-light-gray);\n}\n\n.submit-button {\n  height: 36px;\n  width: 300px;\n  margin: 14px 0;\n  border-radius: 4px;\n  border: none;\n  font-size: 14px;\n  background-color: var(--color-light-blue);\n  color: var(--color-white);\n}\n\n#sign-up {\n  color: var(--color-blue);\n}\n\n.thumbnail {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  top: -30px;\n  right: -260px;\n  border-radius: 50%;\n  border: none;\n  background: #d6f4f8;\n}\n\n.select-box {\n  position: absolute;\n  top: 110px;\n  right: 480px;\n  background: white;\n  border-radius: 3px;\n  width: 100px;\n  text-align: center;\n}\n\n.select-box-item {\n  width: 100px;\n  height: 35px;\n  background: none;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 0;\n}\n\n.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/snackbar.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,SAAS;AACX;;AAEA;EACE,8BAA8B,EAAE,sBAAsB;EACtD,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 0;\n}\n\n.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/js/models/Coin.ts":
/*!*******************************!*\
  !*** ./src/js/models/Coin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoinModel)
/* harmony export */ });
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/js/utils/common.js");
/* harmony import */ var _utils_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validation.js */ "./src/js/utils/validation.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CoinModel_coins;



class CoinModel {
    constructor() {
        _CoinModel_coins.set(this, void 0);
        __classPrivateFieldSet(this, _CoinModel_coins, {
            500: 0,
            100: 0,
            50: 0,
            10: 0,
        }, "f");
    }
    getCoins() {
        return __classPrivateFieldGet(this, _CoinModel_coins, "f");
    }
    getTotalAmount(coins) {
        let total = 0;
        for (const unit in coins) {
            total += Number(unit) * coins[unit];
        }
        return total;
    }
    // 뽑을 수 있는 동전리스트 인덱스 범위를 찾는다. ex) 잔돈이 120원 일 경우 [10, 50, 100] 중 랜덤 인덱스
    // 해당 동전의 카운트를 증가한다
    // 0원이 될때까지 반복한다
    addCoinCount(index) {
        const coinCount = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(index);
        const coin = _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST[coinCount];
        __classPrivateFieldGet(this, _CoinModel_coins, "f")[coin] += 1;
        return coin;
    }
    makeRandomCoins(amount) {
        (0,_utils_validation_js__WEBPACK_IMPORTED_MODULE_2__.validChargeAmount)(amount);
        let currentAmount = amount;
        while (currentAmount > 0) {
            if (currentAmount >= _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST[3]) {
                currentAmount -= this.addCoinCount(3);
            }
            else if (currentAmount >= _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST[2]) {
                currentAmount -= this.addCoinCount(2);
            }
            else if (currentAmount >= _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST[1]) {
                currentAmount -= this.addCoinCount(1);
            }
            else {
                __classPrivateFieldGet(this, _CoinModel_coins, "f")[_constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST[0]] += currentAmount / _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST[0];
                break;
            }
        }
    }
    returnCoins(amount) {
        const returnedCoins = {};
        let currentAmount = amount;
        _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST.reverse().forEach((unit) => {
            const maxAmount = Math.min(Math.floor(currentAmount / unit), __classPrivateFieldGet(this, _CoinModel_coins, "f")[unit]);
            __classPrivateFieldGet(this, _CoinModel_coins, "f")[unit] -= maxAmount;
            returnedCoins[unit] = maxAmount;
            currentAmount -= maxAmount * unit;
        });
        return returnedCoins;
    }
}
_CoinModel_coins = new WeakMap();


/***/ }),

/***/ "./src/js/models/ProductManger.ts":
/*!****************************************!*\
  !*** ./src/js/models/ProductManger.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductManagerModel)
/* harmony export */ });
/* harmony import */ var _utils_validation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/validation.js */ "./src/js/utils/validation.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProductManagerModel_products;

class ProductManagerModel {
    constructor() {
        _ProductManagerModel_products.set(this, void 0);
        __classPrivateFieldSet(this, _ProductManagerModel_products, [], "f");
    }
    addProduct(product) {
        (0,_utils_validation_js__WEBPACK_IMPORTED_MODULE_0__.validProductInfo)(product, __classPrivateFieldGet(this, _ProductManagerModel_products, "f"));
        __classPrivateFieldGet(this, _ProductManagerModel_products, "f").push(product);
    }
    getProducts() {
        return __classPrivateFieldGet(this, _ProductManagerModel_products, "f");
    }
    modifyProduct(index, product) {
        const productsList = [...__classPrivateFieldGet(this, _ProductManagerModel_products, "f")];
        productsList.splice(index, 1);
        (0,_utils_validation_js__WEBPACK_IMPORTED_MODULE_0__.validProductInfo)(product, productsList);
        __classPrivateFieldGet(this, _ProductManagerModel_products, "f").splice(index, 1, product);
    }
    deleteProduct(index) {
        __classPrivateFieldGet(this, _ProductManagerModel_products, "f").splice(index, 1);
    }
}
_ProductManagerModel_products = new WeakMap();


/***/ }),

/***/ "./src/js/models/PurchaseAmount.ts":
/*!*****************************************!*\
  !*** ./src/js/models/PurchaseAmount.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseAmountModel)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PurchaseAmountModel_amount;
class PurchaseAmountModel {
    constructor() {
        _PurchaseAmountModel_amount.set(this, void 0);
        __classPrivateFieldSet(this, _PurchaseAmountModel_amount, 0, "f");
    }
    setAmount(amount) {
        __classPrivateFieldSet(this, _PurchaseAmountModel_amount, amount, "f");
    }
    getAmount() {
        return __classPrivateFieldGet(this, _PurchaseAmountModel_amount, "f");
    }
    addAmount(inputAmount) {
        const addedAmount = __classPrivateFieldGet(this, _PurchaseAmountModel_amount, "f") + inputAmount;
        this.setAmount(addedAmount);
    }
    deductAmount(productPrice) {
        const deductedAmount = __classPrivateFieldGet(this, _PurchaseAmountModel_amount, "f") - productPrice;
        this.setAmount(deductedAmount);
    }
}
_PurchaseAmountModel_amount = new WeakMap();


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _route_route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route/route.js */ "./src/js/route/route.js");
/* harmony import */ var _controller_ProductManage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/ProductManage.js */ "./src/js/controller/ProductManage.js");



new _controller_ProductManage_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map