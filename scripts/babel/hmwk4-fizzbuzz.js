"use strict";

window.onload = function () {
	document.getElementById("btn").onclick = function () {
		var input = document.getElementById("input").value;
		input = sanitize(input);

		fizzify(input);
	};
};

function sanitize(num) {
	if (isNaN(num)) {
		num = num.toString();
		if (isNaN(num)) return NaN;else return num;
	} else return num;
}

function fizzify(enn) {
	clearOutput();

	var output;
	while (enn > 0) {
		output = "";

		if (enn % 3 === 0) output += "fizz";
		if (enn % 5 === 0) output += "buzz";
		if (output === "") output = enn;

		write(output);
		enn--;
	}
}

function clearOutput() {
	document.getElementById("output").innerHTML = "";
}

function write(output, id) {

	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(output));
	section.appendChild(li);
}