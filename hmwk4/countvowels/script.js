window.onload = function () {
	document.getElementById("btn").onclick = function () {
		var input = document.getElementById("input").value;
		input = sanitize(input);

		countem(input);
	};
};

function sanitize(num) {
	if (isNaN(num)) {
		num = num.toString();
		if (isNaN(num)) return NaN;
		else return num;
	}
	else return num;
}

function countem(string) {
	clearOutput();
	var vowels = ["a", "e", "i", "o", "u"];
	var output;

	for (var x of string) {
		for (var y of vowels) {
			if (x === y) output++;
		}
	}

	write(output);
}

function clearOutput(destination) {
	document.getElementById(destination).innerHTML = "";
}

function write(output) {

	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(output));
	section.appendChild(li);
}
