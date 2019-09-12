
// VALIDAR ACTUALIZACION DE DATOS
function actualizar(){
    
	var direccion, telefono, correo, expresion;

	direccion = document.getElementById("direccion").value;
	telefono =  document.getElementById("telefono").value;
	correo = document.getElementById("correo").value;
	

	if (direccion === "" || telefono === "" || correo=== "") {
		swal({
			title: "Incorrecto",
			text: "Los datos estan incompletos",
			icon: "error",
			button: "Volver"
		});
		return false;

	}else if (direccion.length>25) {
		swal({
			title: "Incorrecto",
			text: "La direccion es demasiado larga",
			icon: "error",
			button: "Volver"
		});
		return false;

	}else if (telefono.length>10) {
		swal({
			title: "Incorrecto",
			text: "El telefono es demasiado largo",
			icon: "error",
			button: "Volver"
		});
		return false;

	}else if (correo.length>20) {
		swal({
			title: "Incorrecto",
			text: "El correo es demasiado largo",
			icon: "error",
			button: "Volver"
		});
		return false;

	}else if (isNaN(telefono)) {
		swal({
			title: "Incorrecto",
			text: "El telefono es incorrecto",
			icon: "error",
			button: "Volver"
		});
		return false;
	}

}

// VALIDACION COMPRA
function comprar (){
	var categoria, nombreProducto, cantidadProducto;
	categoria = document.getElementById("categoria").value;
	nombreProducto = document.getElementById("nombreProd").value;
	cantidadProducto = document.getElementById("cantProd").value;

	if (categoria == "Rines") {
		swal({
			title: "Incorrecto",
			text: "El producto no esta disponible",
			icon: "error",
			button: "Volver"
		});
		return false;
	}

	if (nombreProducto == "" || cantidadProducto == "") {
		swal({
			title: "Incorrecto",
			text: "Los campos estan vacios",
			icon: "error",
			button: "Volver"
		});
		return false;
	}else if (nombreProducto.length>20) {
		swal({
			title: "Incorrecto",
			text: "El producto no existe",
			icon: "error",
			button: "Volver"
		});
		return false;
	}
}

// ELIMINAR FILAS
function eliminar() {
	swal({
			title: "Correcto",
			text: "La fila se ha eliminado correctamente",
			icon: "success",
			button: "Volver"
		});
}


// SALIR
function salir(){
	swal({
			title: "Correcto",
			text: "La sesion se ha cerrado correctamente",
			icon: "success",
			button: "Volver"
		});
}