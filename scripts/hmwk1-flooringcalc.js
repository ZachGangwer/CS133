window.onload = function() {
	/**
	 * Computes and Displays the Square Footage
	 */
	document.getElementById("computebtn").onclick = function () {
		var length = document.querySelector("#length").value;
		var width = document.querySelector("#width").value;
		var overage = document.querySelector("#overage").value;

		var sqft = computeFeet(length, width, overage);

		document.querySelector("#resultft").value = sqft;
		document.querySelector("#resultyrd").value = Math.round(sqft/9);
	};

	/**
	 * Resets all fields
	 */
	document.getElementById("resetbtn").onclick = function () {

	};
};

/**
 * Computes the Square footage in Feet
 * @param  {int} length -> Length of the room
 * @param  {int} width  -> Width of the room
 * @param  {int} ovr    -> Percent of acceptable overage (i.e. 20% ==> 20)
 * @return {int}        => The Square Footage
 */
function computeFeet(length, width, ovr) {
	var sqft = length*width;
	sqft += sqft*(ovr/100);

	return sqft;
}
