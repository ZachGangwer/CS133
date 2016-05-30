window.onload = function () {
	document.getElementById("run").onclick = function() {
		let input = document.getElementById("input").value;

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
	let temp = Array.from(string);
	let gnirts = [];

	while (temp[0]) {
		gnirts.push(temp.shift());
	}

	let output = string + " => " + gnirts.join("");

	return output;
}

function write(obj) {
	let li = document.createElement("li");
	let section = document.getElementById("output");

	li.appendChild(document.createTextNode(obj));

	section.appendChild(li);
}
