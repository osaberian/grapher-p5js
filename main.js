let y1 = "";
let y2 = "";
let y3 = "";

let points = [];

let x;

const tickLength = 10;
const tickFrequency = 25;

let y1Input;
let y2Input;
let y3Input;

let xInterval = 0.05;

let xIntervalInput;

function setup() {
	createCanvas(500, 500);
	x = -10;
	y1Input = createInput();
	y1Input.width = 200;
	y1Input.style("border", "1px solid black");
	y1Input.style("font-size", "22px");
	y1Input.style("font-family", "monospace");
	y1Input.parent("main");
	y1Input.attribute("placeholder", "y1=");
	y1Input.input(y1Changed);

	y2Input = createInput();
	y2Input.width = 200;
	y2Input.style("border", "2px solid black");
	y2Input.style("font-size", "22px");
	y2Input.style("font-family", "monospace");
	y2Input.parent("main");
	y2Input.attribute("placeholder", "y2=");
	y2Input.input(y2Changed);

	y3Input = createInput();
	y3Input.width = 200;
	y3Input.style("border", "2px solid black");
	y3Input.style("font-size", "22px");
	y3Input.style("font-family", "monospace");
	y3Input.parent("main");
	y3Input.attribute("placeholder", "y3=");
	y3Input.input(y3Changed);

	xIntervalInput = createInput("0.05");
	xIntervalInput.width = 200;
	xIntervalInput.style("border", "2px solid black");
	xIntervalInput.style("font-size", "22px");
	xIntervalInput.style("font-family", "monospace");
	xIntervalInput.parent("main");
	xIntervalInput.attribute("placeholder", "x-interval:");
	xIntervalInput.input(xIntervalChanged);
}

function draw() {
	background(255);
	drawGrid();
	if (y1 !== "") {
		graph(y1, "blue");
	}
	if (y2 !== "") {
		graph(y2, "red");
	}
	if (y3 !== "") {
		graph(y3, "green");
	}
	if (x < 10) {
		x += xInterval;
	}
}

function graph(y, color) {
	push();

	try {
		points.push({
			x: x,
			y: math.evaluate(y, { x: x }),
			color: color,
		});
	} catch (e) {
		console.log(e);
	}

	for (let point of points) {
		stroke(point.color);
		ellipse(point.x * 25 + width / 2, -(point.y * 25) + width / 2, 1);
	}
	pop();
}

function drawGrid() {
	stroke(0);
	line(width / 2, 0, width / 2, height);
	line(0, height / 2, width, height / 2);

	for (let x = 0; x < width; x += tickFrequency) {
		line(x, width / 2 - tickLength / 2, x, width / 2 + tickLength / 2);
	}

	for (let y = 0; y < height; y += tickFrequency) {
		line(height / 2 - tickLength / 2, y, height / 2 + tickLength / 2, y);
	}
}

function y1Changed() {
	y1 = y1Input.value();
	points = [];
	x = -10;
}

function y2Changed() {
	y2 = y2Input.value();
	points = [];
	x = -10;
}

function y3Changed() {
	y3 = y3Input.value();
	points = [];
	x = -10;
}

function xIntervalChanged() {
	xInterval = parseFloat(xIntervalInput.value());
	points = [];
	x = -10;
}
