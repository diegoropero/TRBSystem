
// VALIDAR ACTUALIZACION DE DATOS
function actualizar(){
	var direccion, telefono, correo, expresion;
	direccion = document.getElementById("direccion").value;
	telefono =  document.getElementById("telefono").value;
	correo = document.getElementById("correo").value;
	

	if (direccion == "" || telefono == "" || correo== "") {
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


// VALIDAR INVENTARIO
function crearInventario(){
	var idInventario, cantidadProductos, entradaProductos, salidaProductos;
	idInventario = document.getElementById("idInven").value;
	cantidadProductos = document.getElementById("cantidadProd").value;
	entradaProductos = document.getElementById("entradaProd").value;
	salidaProductos = document.getElementById("salidaProd").value;
	contador = cantidadProductos;

	if (idInventario == "" || cantidadProductos == "" || entradaProductos == "" || salidaProductos == "") {
		swal({
			title: "Incorrecto",
			text: "Los campos estan vacios",
			icon: "error",
			button: "Volver"
		});
		return false;
	} 

}

// VALIDAR REGISTRO DE PRODUCTOS
function registrarProductos(){
	var nombreProducto, descripcion, precio;
	nombreProducto = document.getElementById("nombreProd").value;
	descripcion = document.getElementById("descripcion").value;
	precio = document.getElementById("precio").value;

	if (nombreProducto == "" || descripcion == "" || precio == "") {
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
			text: "El nombre del producto es muy largo",
			icon: "error",
			button: "Volver"
		});
		return false;

	}else if (descripcion.length>30) {
		swal({
			title: "Incorrecto",
			text: "La descripcion es muy larga",
			icon: "error",
			button: "Volver"
		});
		return false;

	}else if (isNaN(precio)){
		swal({
			title: "Incorrecto",
			text: "El precio es incorrecto",
			icon: "error",
			button: "Volver"
		});
		return false;

	}

}


// VALIDAR REGISTRO DE CATEGORIAS
function registrarCategoria(){
	var idCategoria, nombreCategoria;
	idCategoria = document.getElementById("idCategoria").value;
	nombreCategoria = document.getElementById("nombreCategoria").value;

	if (idCategoria == "" || nombreCategoria == "") {
		swal({
			title: "Incorrecto",
			text: "Los campos estan vacios",
			icon: "error",
			button: "Volver"
		});
		return false;
	}else if (nombreCategoria.length>20) {
		swal({
			title: "Incorrecto",
			text: "El nombre de la categoria es muy largo",
			icon: "error",
			button: "Volver"
		});
		return false;
	}
}

// VALIDAR PUNTOS DE ENCUENTRO
function crearPuntos(){
	var idPunto, puntoEntrega;
	idPunto = document.getElementById("idPunto").value;
	puntoEntrega = document.getElementById("puntoEntrega").value;

	if (idPunto == "" ||puntoEntrega == "") {
		swal({
			title: "Incorrecto",
			text: "Los campos estan vacios",
			icon: "error",
			button: "Volver"
		});
		return false;
	}else if (puntoEntrega.length>20) {
		swal({
			title: "Incorrecto",
			text: "El nombre del punto es muy largo",
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

