"use strict";

window.onload = function () {
	document.getElementById("start").onclick = function () {
		var paid = document.getElementById("paid").value;
		var cost = document.getElementById("cost").value;
		var output = calculator(paid, cost);

		write(output);
	};
};

function calculator(paid, cost) {
	var value = paid - cost;
	var change = {
		quarters: 0.25,
		dimes: 0.10,
		nickles: 0.05,
		pennies: 0.01
	};

	while (value >= 1) {
		value -= 1;
	}

	for (var key in change) {
		var currCoin = change[key];
		change[key] = changify(value, currCoin);
		value -= change[key] * currCoin;
	}

	change.id = "green";

	return change;
}

function changify(value, coin) {
	var output = void 0;

	value % coin > 0 ? output = Math.floor(value / coin) : output = 0;

	return output;
}

/**
 * WRITE
 * Prints a 'value' to a ul and gives it the 'id' attribute passed in the 'param'
 * @param  {OBJECT} output A dictionary containing a 'value' and an 'id'
 */
function write(obj) {
	var li = document.createElement("li");
	var section = document.getElementById("output");

	for (var key in obj) {
		if (key != "id") {
			li.appendChild(document.createTextNode(key + " " + obj[key]));
			li.appendChild(document.createElement("br"));
		}
	}
	li.appendChild(document.createTextNode("---END---"));
	li.setAttribute("id", obj.id);

	section.appendChild(li);
}