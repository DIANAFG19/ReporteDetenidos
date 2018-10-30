function fechaDeHoy(){

	//Se obtiene el día, mes y año actual  
	var fHoy = new Date();
	var dd = fHoy.getDate();
	var mm = fHoy.getMonth()+1; //Se suma 1 porque Enero es el mes 0
	var yyyy = fHoy.getFullYear();
	
	//Para los días y meses menores a 10, se agrega 0 para mantener el formato de fecha
	if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    //Asignamos el formato a la variable
    fHoy = yyyy+'-'+mm+'-'+dd;
    //dd/mm/yyyy
    
    //Se obtiene el id "fecha" del formulario y le asignamos la fecha actual a los atributos 'max' y 'value' 
    document.getElementById("fechaInicio").value = fHoy;
    document.getElementById("fechaInicio").setAttribute("max", fHoy);
    //document.getElementById("fecha").setAttribute("max", fHoy);
}

