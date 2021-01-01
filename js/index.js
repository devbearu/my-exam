"use strict"

anychart.onDocumentLoad(function () {
	// create chart and set data
	let chart = anychart.column([
		["HTML", 30],
		["CSS", 30],
		["JavaScript", 20],
		["Creative", 80]
	]);
	// set chart title
	chart.title();
	// set chart container and draw
	chart.container("skillstab").draw();
});