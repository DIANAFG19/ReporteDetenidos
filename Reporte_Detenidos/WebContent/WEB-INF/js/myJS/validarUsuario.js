function iniciarSesion(){
	var todo_correcto = true;
	if(document.getElementById("user").value == "" && document.getElementById("pass").value == ""){
		todo_correcto = false;
		alert("Agregue usuario y contrase\u00F1a.");
	}
	else if(document.getElementById("user").value != "ADMIN" || document.getElementById("pass").value != "123"){
		todo_correcto = false;
		alert("Datos incorrectos, intente de nuevo.");
	}
	else if(document.getElementById("user").value == "ADMIN" && document.getElementById("pass").value == "123"){
		alert("Bienvenid@.");
		todo_correcto = true;		
	}
	
	return todo_correcto;
}