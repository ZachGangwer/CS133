"use strict";

window.onload = function () {
	document.getElementById("run").onclick = function () {
		var input = document.getElementById("input").value;

		write(piggify(input.toLowerCase()));
	};
};

function piggify(string) {
	switch (vowelCheck(string[0])) {
		case true:
			return string + "yay";

		case false:
			return ayiffy(string);
		default:
			return "ERROR......ay";
	}
}

function vowelCheck(char) {
	char = char.toLowerCase();

	switch (char) {
		case "a":
			return true;
		case "e":
			return true;
		case "i":
			return true;
		case "o":
			return true;
		case "u":
			return true;
		default:
			return false;
	}
}

function ayiffy(string) {
	var queue = [];
	var post = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var char = _step.value;
			queue.push(char);
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

	var current = queue[0];
	do {
		post.push(queue.shift());
		current = queue[1];
	} while (vowelCheck(current));

	var result = queue.join("") + post + "ay";
	return result;
}

function write(obj) {
	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(obj));

	section.appendChild(li);
}