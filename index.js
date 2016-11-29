/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _appComponent = __webpack_require__(1);

	var _appComponent2 = _interopRequireDefault(_appComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('calcApp', ['ui.bootstrap', _appComponent2.default]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _nfzFormModule = __webpack_require__(2);

	var _nfzFormModule2 = _interopRequireDefault(_nfzFormModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _module = 'app.components';

	(function () {
	    "use strict";

	    angular.module(_module, [_nfzFormModule2.default]);
	})();

	exports.default = _module;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _nfzFormComponent = __webpack_require__(3);

	var _nfzFormComponent2 = _interopRequireDefault(_nfzFormComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _module = 'app.components.nfzForm';

	angular.module(_module, []).component('nfzForm', _nfzFormComponent2.default);

	exports.default = _module;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NfzFormController = function () {
	  function NfzFormController($scope) {
	    _classCallCheck(this, NfzFormController);

	    this.$scope = $scope;
	    this.headItemsTur = ["Punkty - Turośń", "Kwota - Turośń", "Prywatni - Turośń", "Suma"];
	    this.headItemsBia = ["Punkty - Białystok", "Kwota - Białystok", "Prywatni - Białystok", "Suma"];
	    this.pointsTur = 0;
	    this.pointsBia = 0;
	    this.privateMoneyTur = 0;
	    this.privateMoneyBia = 0;
	    this.newPrivateMoneyTur = 0;
	    this.newPrivateMoneyBia = 0;
	    this.newPointsTur = 0;
	    this.newPointsBia = 0;
	    this.newPrivateTur = 0;
	    this.newPrivateBia = 0;
	    this.newValueTur = 0;
	    this.newValueBia = 0;
	    this.sumTur = 0;
	    this.sumBia = 0;
	    this.sum = 0;

	    this.validMessage = {
	      validPointsMessage: "Please enter any points value",
	      validValueMessage: "Please enter any private money",
	      validTypeMessage: "Please fill field with numbers"
	    };
	  }

	  _createClass(NfzFormController, [{
	    key: "$onInit",
	    value: function $onInit() {
	      var _this = this;

	      this.$scope.$watchGroup(["sumTur", "sumBia", "pointsTur", "newPointsTur"], function () {
	        _this.newPointsTur = parseFloat(_this.newPointsTur);
	        // this.newValueTur = (this.newPointsTur * 0.38).toFixedNumber(2);
	        // this.sum = (this.sumTur + this.sumBia).toFixedNumber(2);
	      });
	    }
	  }, {
	    key: "formSubmit",
	    value: function formSubmit(isValid) {
	      var _this2 = this;

	      /* .toFixedNumber() is highly recommended to use instead of .toFixed() 
	      which converts numbers to strings for some purpose, please visit 
	      http://stackoverflow.com/questions/2283566/tofixed-returns-a-string-in-javascript 
	      to get more info */
	      Number.prototype.toFixedNumber = function (x, base) {
	        var pow = Math.pow(base || 10, x);
	        return +(Math.round(_this2 * pow) / pow);
	      };

	      if (!isValid) {
	        return;
	      }

	      this.sumTur = 0;
	      this.sumBia = 0;

	      if (this.pointsTur) {
	        this.pointsTur = parseFloat(this.pointsTur);
	        this.newPointsTur = parseFloat(this.newPointsTur);
	        this.newPointsTur = this.newPointsTur + this.pointsTur;

	        //this.newValueTur = (this.newPointsTur * 0.38).toFixedNumber(2);
	        // this.pointsTur = ""; //empty string assigning here is needed to clear input field
	      }

	      if (this.pointsBia) {
	        this.pointsBia = parseFloat(this.pointsBia);
	        this.newPointsBia = this.newPointsBia + this.pointsBia;
	        this.newValueBia = (this.newPointsBia * 0.322).toFixedNumber(2);
	        this.pointsBia = ""; //empty string assigning here is needed to clear input field
	      }

	      if (this.privateMoneyTur) {
	        this.privateMoneyTur = parseFloat(this.privateMoneyTur);
	        this.newPrivateMoneyTur = this.newPrivateMoneyTur + this.privateMoneyTur;
	        this.newPrivateTur = this.newPrivateTur + this.privateMoneyTur * 0.45;
	        this.privateMoneyTur = ""; //empty string assigning here is needed to clear input field
	      }

	      if (this.privateMoneyBia) {
	        this.privateMoneyBia = parseFloat(this.privateMoneyBia);
	        this.newPrivateMoneyBia = this.newPrivateMoneyBia + this.privateMoneyBia;
	        this.newPrivateBia = this.newPrivateBia + this.privateMoneyBia * 0.40;
	        this.privateMoneyBia = ""; //empty string assigning here is needed to clear input field
	      }

	      this.sumTur = (this.sumTur + this.newPrivateTur + this.newValueTur).toFixedNumber(2);
	      this.sumBia = (this.sumBia + this.newPrivateBia + this.newValueBia).toFixedNumber(2);
	    }
	  }]);

	  return NfzFormController;
	}();

	var nfzForm = {
	  templateUrl: 'app/components/nfzForm/nfzForm.html',
	  controller: NfzFormController
	};

	exports.default = nfzForm;

/***/ }
/******/ ]);