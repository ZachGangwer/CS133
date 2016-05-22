window.onload = function () {
	document.getElementById("start").onclick = function () {
		var input = document.getElementById("input").value;

		write(input);
	};

	document.getElementById("reset").onclick = function () {
		document.getElementById("clock").value = "00:00:00";
	};
};

/*function intSift(value) {
	var theNums = "";
	value.toString();

	for (var index = 0; index < value.length; index++) {
		if (isNaN(value[index])) continue;
		else {
			theNums += Number(value[index]);
		}
	}

	return theNums;
}*/

function write(output, idTag) {

	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(output));
	li.setAttribute("id", idTag);
	section.appendChild(li);
}
