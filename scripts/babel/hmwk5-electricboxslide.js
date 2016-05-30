"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
	var context = document.getElementById("canvas").getContext("2d");
	rectSpawn(context);
};

function rectSpawn(context) {
	var obj = new Box();
	var objProps = obj.getProps();
	context.fillStyle = obj.color;
	context.fillRect(objProps.x, objProps.y, objProps.dimensions, objProps.dimensions);
}

function getRandom(max, min) {
	return Math.random() * (max - min) + min;
}

var Box = function () {
	function Box() {
		_classCallCheck(this, Box);

		this.color = "#0022b5";
		this.dimensions = getRandom(100, 10);
		this.x = getRandom(600, 0);
		this.y = getRandom(400, 0);
	}

	_createClass(Box, [{
		key: "getProps",
		value: function getProps() {
			return {
				x: this.x,
				y: this.y,
				dimensions: this.dimensions
			};
		}
	}]);

	return Box;
}();