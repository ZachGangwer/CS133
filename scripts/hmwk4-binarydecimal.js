window.onload = function () {
	document.getElementById("start").onclick = function () {
		let input = document.getElementById("input").value;
		let direction = document.querySelector("input[name ='resultType']:checked").value;
		let output = convert(input, direction);

		write(output, direction);
	};
};


function convert(enn, direction) {
	switch (direction) {
	case "binary":
		return binary(enn);

	case "decimal":
		return decimal(enn);

	default:
		return "error";
	}
}

function binary(enn) {
	let output = enn + " => ";
	let temp = 1;

	do {
		output += enn % 2;
		enn /= 2;
		temp = enn;
	} while (temp > 0);

	return [output.toString(), "green"];
}
function decimal(enn) {
	let output = "DECIMAL: " + enn;

	return [output, "blue"];
}

function write(output, id) {

	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(output));
	li.setAttribute("id", id);

	section.appendChild(li);
}
