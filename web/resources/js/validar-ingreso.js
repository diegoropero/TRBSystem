function ingresar () { 
    
    var documento, contrasena, tipoUsuario;
    
    documento = document.getElementById("cedula").value;
    contrasena = document.getElementById("contra").value;
    tipoUsuario = document.getElementById("tipo").value;
    
    if (documento === "" || contrasena === ""){
       swal({
			title: "Incorrecto",
			text: "Todos los campos deben estar llenos",
			icon: "error",
			button: "Volver"
		});
        return false;
    }
    if (documento == "80909001" && contrasena == "12345" && tipoUsuario == "Cliente"){
        
       window.location.href = "si/index-cliente.html";
        return false;  
        
    }else if (documento == "80909002" && contrasena == "67890" && tipoUsuario == "Vendedor"){
        
        window.location.href = "si/index-vendedor.html";
        return false;
        
    }else if (documento == "80909003" && contrasena == "54321" && tipoUsuario == "Administrador"){
        window.location.href = "si/index-admin.html";
        return false;
    }else{
         swal({
			title: "Incorrecto",
			text: "Los datos no coinciden",
			icon: "error",
			button: "Volver"
		});
        return false;
    }
    
    
}

