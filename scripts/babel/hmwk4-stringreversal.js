"use strict";

window.onload = function () {
	document.getElementById("run").onclick = function () {
		var input = document.getElementById("input").value;

		write(reverse(input.toLowerCase()));
	};
};

/**
 * REVERSE
 * Uses a QUEUE and a STACK to reverse a string. Cause String.reverse() is too boring.
 * @param	{STRING}	string	String to reverse
 * @return	{STRING}			The original string and its mirror
 */
function reverse(string) {
	var temp = Array.from(string);
	var gnirts = [];

	while (temp[0]) {
		gnirts.push(temp.shift());
	}

	var output = string + " => " + gnirts.join("");

	return output;
}

function write(obj) {
	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(obj));

	section.appendChild(li);
}