window.onload = function () {
	document.getElementById("start").onclick = function () {
		let input = document.getElementById("input").value;
		let direction = document.querySelector("input[name ='resultType']:checked").value;
		let output = convert(input, direction);

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
			"value": 	"error",
			"id":		"red"
		};
	}
}

function binary(enn) {
	let output = enn + " => ";

	do {
		output += (enn % 2);
		enn = Math.trunc(enn/2);
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
	let output = enn + " => ";
	let temp = 0;
	enn = enn.trim();
	let counter = enn.length-1;

	for (let x of enn) {
		temp += (x * (Math.pow(2, counter)));
		counter -= 1;
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
