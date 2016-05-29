window.onload = function () {
	document.getElementById("run").onclick = function() {
		let input = document.getElementById("input").value;

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
	let queue = [];
	let post = [];
	for (let char of string) queue.push(char);

	let current = queue[0];
	do {
		post.push(queue.shift());
		current = queue[1];
	} while (vowelCheck(current));

	let result = queue.join("") + post + "ay";
	return result;
}

function write(obj) {
	let li = document.createElement("li");
	let section = document.getElementById("output");

	li.appendChild(document.createTextNode(obj));

	section.appendChild(li);
}
