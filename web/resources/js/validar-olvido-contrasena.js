function olvidar(){
	var documento = document.getElementById('identificacion').value;
	var contrasena = document.getElementById('contra1').value;
	var contrasena1 = document.getElementById('contra2').value;

	if (documento == '80909001' && contrasena == '54321' && contrasena1 == '54321') {
		window.location.href = "si/index-cliente.html";
	}

	else if (documento == '80505002' && contrasena == '09876' && contrasena1 == '09876') {
		window.location.href = "si/index-vendedor.html";

	}else{
		swal({
			title: "Incorrecto",
			text: "Los datos no coinciden",
			icon: "error",
			button: "Volver",
		});
	}
}