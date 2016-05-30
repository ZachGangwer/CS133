window.onload = () => {
	let context = document.getElementById("canvas").getContext("2d");
	rectSpawn(context);
};


function rectSpawn(context) {
	let obj = new Box();
	let objProps = obj.getProps();
	context.fillStyle = obj.color;
	context.fillRect(objProps.x, objProps.y, objProps.dimensions, objProps.dimensions);
}

function getRandom(max, min) {
	return Math.random() * (max - min) + min;
}


class Box {
	constructor() {
		this.color = "#0022b5";
		this.dimensions = getRandom(100, 10);
		this.x = getRandom(600, 0);
		this.y = getRandom(400, 0);
	}

	getProps() {
		return ({
			x: this.x,
			y: this.y,
			dimensions: this.dimensions
		});
	}
}
