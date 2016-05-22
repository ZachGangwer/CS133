window.onload = function() {
	console.log("Window Loaded, Script Open");

	document.getElementById('computebtn').onclick = function () {
		console.log("Comptute Pressed");

		var length = document.querySelector('#length').value;
		var width = document.querySelector('#width').value;
		var overage = document.querySelector('#overage').value;

		var sqft = computeFeet(length, width, overage);

		document.querySelector('#resultft').value = sqft;
		document.querySelector('#resultyrd').value = Math.round(sqft/9);
	}

	document.getElementById('resetbtn').onclick = function () {
		console.log("Reset Pressed");
	}
}

function computeFeet(length, width, ovr) {
	var sqft = length*width;
	sqft += sqft*(ovr/100);

	return sqft;
}
