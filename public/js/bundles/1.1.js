webpackJsonp([1],{

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	var View = __webpack_require__(3);

	__webpack_require__(10);

	module.exports = View.extend({

	    initialize: function(options) {

	        $.simpleLightbox.open({
	            content: $('.loginModal').clone(),
	            elementClass: 'slbContentEl'
	        });

	    }

	});


/***/ }

});