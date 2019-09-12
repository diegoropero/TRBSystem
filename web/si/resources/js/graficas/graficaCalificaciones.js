window.onload = function() {

var chart = new CanvasJS.Chart("calificaciones", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "GRAFICA DE CALIFIFCACIONES EN EL AÑO 2017"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 51.08, label: "Excelente" },
			{ y: 27.34, label: "Buena" },
			{ y: 10.62, label: "Regular" },
			{ y: 5.02, label: "Mala" },
			{ y: 4.07, label: "Muy mala" },
		]
	}]
});
chart.render();

}