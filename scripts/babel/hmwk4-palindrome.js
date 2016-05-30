"use strict";

window.onload = function () {
	document.getElementById("submit").onclick = function () {
		var input = document.getElementById("input").value;

		input.toString();
		var upped = input.toUpperCase();
		if (checker(upped)) {
			write(input + " Is a Palindrome", true);
		} else {
			write("Not a Palindrome", false);
		}
	};
};

function checker(input) {
	if (input === null || input === undefined) {
		write("Bad Input", false);
		return;
	} else {
		for (var i = 0, j = input.length - 1; i < input.length / 2; i++, j--) {
			if (input[i] !== input[j]) {
				return false;
			}
		}
		return true;
	}
}

function write(output, idTag) {

	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(output));
	li.setAttribute("id", idTag);
	section.appendChild(li);
}