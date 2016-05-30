"use strict";

window.onload = function () {
	document.getElementById("btn").onclick = function () {
		var input = document.getElementById("input").value;

		var output = countem(input);
		write(output);
	};
};

function countem(string) {
	clearOutput("output");
	var output = 0;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var index = _step.value;

			switch (index) {
				case "a":
					output++;
					break;
				case "e":
					output++;
					break;
				case "i":
					output++;
					break;
				case "o":
					output++;
					break;
				case "u":
					output++;
					break;
				default:

			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return output;
}

function clearOutput(destination) {
	document.getElementById(destination).innerHTML = "";
}

function write(obj) {
	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(obj));

	section.appendChild(li);
}