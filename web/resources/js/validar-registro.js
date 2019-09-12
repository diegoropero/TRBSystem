function registrarse() {
    var nombre, apellido, documento, direccion, telefono, correo, contra, fechaNacimiento;
    
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    documento = document.getElementById("documento").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("coreo").value;
    contra = document.getElementById("contrasena").value;
    fechaNacimiento = document.getElementById("fecha").value;
    
    if (nombre === "" || apellido === "" || documento === "" || direccion === "" || telefono === "" || correo === "" || contra === "" || fechaNacimiento === "") {
         swal({
			title: "Incorrecto",
			text: "Todos los campos deben estar llenos",
			icon: "error",
			button: "Volver"
		});
        return false;
        
    }else if (nombre.length>10){
         swal({
			title: "Incorrecto",
			text: "El nombre es muy largo",
			icon: "error",
			button: "Volver"
		});
        return false;
        
    }else if (direccion.length>25) {
		swal({
			title: "Incorrecto",
			text: "La direccion es muy larga",
			icon: "error",
			button: "Volver"
		});
		return false;
        
    }else if (telefono.length>10){
        swal({
			title: "Incorrecto",
			text: "El telefono es muy largo",
			icon: "error",
			button: "Volver"
		});
		return false;
        
    }else if (isNaN(telefono)){
        swal({
			title: "Incorrecto",
			text: "El telefono es incorrecto",
			icon: "error",
			button: "Volver"
		});
		return false;
        
    }else if (correo.length>20){
         swal({
			title: "Incorrecto",
			text: "El correo es muy largo",
			icon: "error",
			button: "Volver"
		});
		return false;
        
    }
    
    
}