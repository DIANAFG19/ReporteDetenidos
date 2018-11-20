function verificarCamposReg(){
	var todo_correcto = true;
	if(document.getElementById("idIncidenteFK").value == 0){
		todo_correcto = false;
		alert("Elija un tipo de incidente a registrar.");
	}
	if(document.getElementById("lat").value == 0.0 && document.getElementById("lng").value == 0.0){
		todo_correcto = false;
		alert("Arrastre el marcador para obtener una latitud y longitud.");
	}
	if(document.getElementById("descripcion").value == ""){
		todo_correcto = false;
		alert("Escriba algo breve de lo que haya ocurrido para saber los detalles.");
	}	
	if(document.getElementById("usuarioReporte").value == ""){
		todo_correcto = false;
		document.getElementById("usuarioReporte").setAttribute("value", "An\u00F3nimo")
		alert("No es necesario colocar su nombre.");		
	}
	if(document.getElementById("idIncidenteFK").value != 0 &&  document.getElementById("lat").value != 0.0 && document.getElementById("lng").value != 0.0 && document.getElementById("descripcion").value != "" && document.getElementById("usuarioReporte").value != ""){
		alert("Gracias por tomarse de su tiempo para registrar el incidente.");
		todo_correcto = true;
	}
	return todo_correcto;
	
}

function verificarOpinion(){
	var todo_correcto = true;
	if(document.getElementById("idReporteFK").value == 0){
		todo_correcto = false;
		alert("Elija un marcador del mapa para agregar un comentario.");
	}
	if(document.getElementById("usuarioOpinion").value == ""){
		todo_correcto = false;
		document.getElementById("usuarioOpinion").setAttribute("value", "An\u00F3nimo")
		alert("No es necesario colocar su nombre.");		
	}
	if(document.getElementById("comentario").value == ""){
		todo_correcto = false;
		alert("No puedes dejar este espacio en blanco, comenta algo relacionado al incidente.");
	}
	if(document.getElementById("valoracion").value == 0){
		todo_correcto = false;
		alert("La clasificaci\u00F3n debe ser entre 1 y 5. Dependiendo la relevancia del incidente.");
	}
	if(document.getElementById("idReporteFK").value != 0 &&  document.getElementById("usuarioOpinion").value != "" && document.getElementById("comentario").value != "" && document.getElementById("valoracion").value != 0){
		alert("Su comentario se ha agregado. Gracias por colaborar.");
		todo_correcto = true;
	}
	return todo_correcto;
}