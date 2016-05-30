"use strict";

window.onload = function () {
	startClock();
	/**
  * Add
  * Adds a new alarm to the list
  */
	document.getElementById("add").onclick = function () {
		var input = document.getElementById("input");

		var alarm = parse(input);
		write(alarm);
	};

	document.getElementById("reset").onclick = function () {
		document.getElementById("clock").value = "00:00:00";
	};
};

function parse(input) {
	return input;
}

/**
 * Write
 * Takes a string and injectes it into a <ul> with id "output"
 * @param  {string} output	-> Text to output
 * @param  {string} idTag	-> Tag to attach to output
 */
function write(output, idTag) {

	var li = document.createElement("li");
	var section = document.getElementById("output");

	li.appendChild(document.createTextNode(output));
	li.setAttribute("id", idTag);
	section.appendChild(li);
}

/**
 * StartClock
 * Run's the Clock
 */
function startClock() {
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);

	document.getElementById("clock").value = hours + ":" + minutes + ":" + seconds;
	setTimeout(startClock, 500);
}

/**
 * CheckTime
 * Prepends '0' to time values that are less than 10
 * @param  {int} enn	-> Time Value to check
 */
function checkTime(enn) {
	if (enn < 10) {
		enn = "0" + enn;
	}
	return enn;
}