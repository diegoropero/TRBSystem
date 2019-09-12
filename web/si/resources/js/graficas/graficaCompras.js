
window.onload = function () {

var chart = new CanvasJS.Chart("compras", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "REPORTE DE COMPRAS EN EL AÑO 2017"
	},
	data: [{
		type: "column", //change type to bar, line, area, pie, etc
		//indexLabel: "{y}", //Shows y value on all Data Points
		indexLabelFontColor: "black",
		indexLabelPlacement: "outside",
		dataPoints: [
			{ x: 10, y: 71, indexLabel: "Enero" },
			{ x: 20, y: 55, indexLabel: "Febrero" },
			{ x: 30, y: 50, indexLabel: "Marzo" },
			{ x: 40, y: 65, indexLabel: "Abril" },
			{ x: 50, y: 92, indexLabel: "Mayo" },
			{ x: 60, y: 68, indexLabel: "Junio" },
			{ x: 70, y: 38, indexLabel: "Julio" },
			{ x: 80, y: 71, indexLabel: "Agosto" },
			{ x: 90, y: 54, indexLabel: "Septiembre" },
			{ x: 100, y: 60, indexLabel: "Octubre" },
			{ x: 110, y: 36, indexLabel: "Noviembre" },
			{ x: 120, y: 49, indexLabel: "Diciembre" },
		]
	}]
});
chart.render();

}