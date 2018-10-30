function fechaHoraActual(){
	//Se obtiene el día, mes y año actual  
	var fechaHoy = new Date();
	var dd = fechaHoy.getDate();
	var mm = fechaHoy.getMonth()+1; //Se suma 1 porque Enero es el mes 0
	var yyyy = fechaHoy.getFullYear();
	
	//Para los días y meses menores a 10, se agrega 0 para mantener el formato de fecha
	if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    //Asignamos el formato a la variable
    fechaHoy = yyyy+'-'+mm+'-'+dd;
    //Se obtiene el id "fecha" del formulario y le asignamos la fecha actual a los atributos 'max' y 'value' 
    document.getElementById("fecha").setAttribute("value", fechaHoy);
    document.getElementById("fecha").setAttribute("max", fechaHoy);
    
    
    var hora = new Date();
	var HH = hora.getHours();	
	var MM = hora.getMinutes();

	if(HH<10){
        HH='0'+HH
    } 
    if(MM<10){
        MM='0'+MM
    } 
	hora = HH+':'+MM;
	document.getElementById("hora").setAttribute("value", hora);
}

function fechaHoraOpinion(){
	//Se obtiene el día, mes y año actual  
	var fechaHoy = new Date();
	var dd = fechaHoy.getDate();
	var mm = fechaHoy.getMonth()+1; //Se suma 1 porque Enero es el mes 0
	var yyyy = fechaHoy.getFullYear();
	
	//Para los días y meses menores a 10, se agrega 0 para mantener el formato de fecha
	if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    //Asignamos el formato a la variable
    fechaHoy = yyyy+'-'+mm+'-'+dd;
    //Se obtiene el id "fecha" del formulario y le asignamos la fecha actual a los atributos 'max' y 'value' 
    document.getElementById("fechaOpinion").setAttribute("value", fechaHoy);
   
    var hora = new Date();
	var HH = hora.getHours();	
	var MM = hora.getMinutes();

	if(HH<10){
        HH='0'+HH
    } 
    if(MM<10){
        MM='0'+MM
    } 
	hora = HH+':'+MM;
	document.getElementById("horaOpinion").setAttribute("value", hora);
}
