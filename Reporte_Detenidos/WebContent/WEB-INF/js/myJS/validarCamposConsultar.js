function verificarIncidente(){
	var todo_correcto = true;
	if(document.getElementById("reporIdIncidente").value == 0){
		todo_correcto = false;
		alert("Elija un tipo de incidente a consultar.");
	}
	return todo_correcto;
}

function verificarEspacio(){
	var todo_correcto = true;
	if(document.getElementById("reporIdEspacio").value == 0){
		todo_correcto = false;
		alert("Elija un espacio f\u00EDsico a consultar.");
	}
	return todo_correcto;
}

function verificarOpinionAgregada(){
	var todo_correcto = true;
	if(document.getElementById("idReporteFK").value == 0){
		todo_correcto = false;
		alert("Elija un marcador del mapa para ver si contiene opiniones.");
	}	
	return todo_correcto;
}