"use strict";

window.onload = function () {
	document.getElementById("start").onclick = function () {
		var input = document.getElementById("input").value;
		var direction = document.querySelector("input[name ='resultType']:checked").value;
		var output = convert(input, direction);

		write(output);
	};
};

function convert(enn, direction) {
	switch (direction) {
		case "binary":
			return binary(enn);

		case "decimal":
			return decimal(enn);

		default:
			return {
				"value": "error",
				"id": "red"
			};
	}
}

function binary(enn) {
	var output = enn + " => ";

	do {
		output += enn % 2;
		enn = Math.trunc(enn / 2);
	} while (enn > 0);

	return {
		"value": output.toString(),
		"id": "green"
	};
}

/**
 * DECIMAL
 * Takes in a binary number and converts it to decimal
 * @param  {STRING} enn A number in binary form
 * @return {OBJECT}     Returns a dictionary with the number in decimal,
 *                              as well as the id to give the output tag
 */
function decimal(enn) {
	var output = enn + " => ";
	var temp = 0;
	enn = enn.trim();
	var counter = enn.length - 1;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = enn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;

			temp += x * Math.pow(2, counter);
			counter -= 1;
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

	output += temp;

	return {
		"value": output.toString(),
		"id": "blue"
	};
}

/**
 * WRITE
 * Prints a 'value' to a ul and gives it the 'id' attribute passed in the 'param'
 * @param  {OBJECT} output A dictionary containing a 'value' and an 'id'
 */
function write(obj) {

	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(obj["value"]));
	li.setAttribute("id", obj["id"]);

	section.appendChild(li);
}