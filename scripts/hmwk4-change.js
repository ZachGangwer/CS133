window.onload = function () {
	document.getElementById("start").onclick = function () {
		let paid = document.getElementById("paid").value;
		let cost = document.getElementById("cost").value;
		let output = calculator(paid, cost);

		write(output);
	};
};


function calculator(paid, cost) {
	let value = paid - cost;
	let change = {
		quarters:	0.25,
		dimes:		0.10,
		nickles:	0.05,
		pennies:	0.01
	};

	while (value >= 1) {value -= 1;}

	for (let key in change) {
		let currCoin = change[key];
		change[key] = changify(value, currCoin);
		value -= change[key] * currCoin;
	}

	change.id = "green";

	return change;
}

function changify(value, coin) {
	let output;

	((value % coin) > 0) 	? 	(output = Math.floor(value/coin))
							: 	(output = 0);

	return output;
}

/**
 * WRITE
 * Prints a 'value' to a ul and gives it the 'id' attribute passed in the 'param'
 * @param  {OBJECT} output A dictionary containing a 'value' and an 'id'
 */
function write(obj) {
	let li = document.createElement("li");
	let section = document.getElementById("output");

	for (let key in obj) {
		if (key != "id") {
			li.appendChild(document.createTextNode(key + " " + obj[key]));
			li.appendChild(document.createElement("br"));
		}
	}
	li.appendChild(document.createTextNode("---END---"));
	li.setAttribute("id", obj.id);

	section.appendChild(li);
}
