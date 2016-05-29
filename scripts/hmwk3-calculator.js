window.onload = function () {
	document.getElementById("add").onclick = function () {
		var vals = getVals();

		if (!isNaN(vals)) return;

		else {
			var sum = Number(vals[0]) + Number(vals[1]);

			write(sum);
		}
	};

	document.getElementById("sub").onclick = function () {
		var vals = getVals();

		if (!isNaN(vals)) return;

		else {
			var diff = Number(vals[0]) - Number(vals[1]);

			write(diff);
		}
	};

	document.getElementById("mlt").onclick = function () {
		var vals = getVals();

		if (!isNaN(vals)) return;

		else {
			var prod = Number(vals[0]) * Number(vals[1]);

			write(prod);
		}
	};

	document.getElementById("dvd").onclick = function () {
		var vals = getVals();

		if (!isNaN(vals)) return;

		else {
			var quot = Number(vals[0]) / Number(vals[1]);
			var divCheck = NaN;
			Number(vals[1]) === 0 ? quot = "div by 0" : divCheck = sanitize(quot);
			isNaN(divCheck) ? write("Division == NaN: " + quot, "error") : write(divCheck);
		}
	};
};

function getVals() {
	var ex = sanitize(document.getElementById("val1").value);
	var why = sanitize(document.getElementById("val2").value);

	if (isNaN(ex) + isNaN(why) > 0) {
		write("ERROR -- Bad Input", "error");
		return 0;
	}
	else {
		return [ex, why];
	}
}

function sanitize(num) {
	if (isNaN(num)) {
		num = num.toString();
		if (isNaN(num)) return NaN;
		else return num;
	}
	else return num;
}

function write(output, id) {
	if (id == undefined) id = "valid";

	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(output));
	li.setAttribute("id", id);
	section.insertBefore(li, section.firstChild);
}
