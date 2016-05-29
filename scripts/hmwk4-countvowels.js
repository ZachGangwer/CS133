window.onload = function () {
	document.getElementById("btn").onclick = function () {
		let input = document.getElementById("input").value;

		let output = countem(input);
		write(output);
	};
};

function countem(string) {
	clearOutput("output");
	let output = 0;

	for (let index of string) {
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
	return output;
}

function clearOutput(destination) {
	document.getElementById(destination).innerHTML = "";
}

function write(obj) {
	let li = document.createElement("li");
	let section = document.getElementById("output");

	li.appendChild(document.createTextNode(obj));

	section.appendChild(li);
}
