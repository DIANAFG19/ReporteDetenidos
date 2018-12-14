<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="tag"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.sql.*" %>
<%@ page import="org.springframework.web.servlet.ModelAndView" %>
<%@page session="true"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="<c:url value="/recursos/css/myCSS/mybase.css"/>"/>
<link rel="stylesheet" href="<c:url value="/recursos/css/select2/select2.min.css"/>"/>
<link rel="stylesheet" href="<c:url value="/recursos/css/select2/select2-bootstrap.min.css"/>"/>
<link rel="stylesheet" href="<c:url value="/recursos/css/bootstrap/bootstrap.min.css"/>"/>
<script src="<c:url value="/recursos/js/bootstrap/jquery.min.js"/>"></script>
<script src="<c:url value="/recursos/js/bootstrap/bootstrap.min.js"/>"></script>
<!-- <script src="<c:url value="/recursos/js/select2/select2.js"/>"></script> -->
<!-- <script src="<c:url value="/recursos/js/myJS/obtenerFecha.js"/>"></script> -->
<script src="<c:url value="/recursos/js/myJS/formulario.js"/>"></script>
<script>
function start(){  
	fechaDeHoy();
	genList();
	 };
</script>

<meta http-equiv="Content-Type" name="viewport" content="text/html; charset=ISO-8859-1, width=device-width, initial-scale=1">
<title>Modificando Reporte</title>
</head>
<body onload="start()">

<%
	//Conectando a la base de datos
	Connection con;
	String url="jdbc:mysql://127.0.0.1:3306/bd_reportes";
	String Driver="com.mysql.jdbc.Driver";
	String user="root";
	String clave="";
	Class.forName(Driver);
	con=DriverManager.getConnection(url,user,clave);
	//Listamos los datos de la tabla reporte
	PreparedStatement ps;
	ResultSet rs;
	int id = Integer.parseInt(request.getParameter("id"));
	ps=con.prepareStatement("SELECT reporte.Id, ct.Tipo_CT, reporte.Carpeta_Investigacion, reporte.Hora, reporte.Fecha_Inicio as 'Fecha_Inicio', delito.Tipo_Delito, "
			+"reporte.Lugar_Hechos, remite.Tipo_Remite, reporte.Total_Imputados, reporte.Probable_Responsable, reporte.M, reporte.F, reporte.Denunciante, " 
			+"reporte.Descripcion, reporte.Tramite_Id_Tramite, reporte.Tiene_Antecedentes, DATE_FORMAT(reporte.Fecha, '%d/%m/%Y') as Fecha, reporte.Turno "
			+"FROM reporte, ct, delito, remite, tramite "
			+"WHERE reporte.CT_Id_CT = ct.Id_CT "
			+"AND reporte.Id = "+id
			+" AND reporte.Delito_Id_Delito = delito.Id_Delito "
			+"AND reporte.Tramite_Id_Tramite = tramite.Id_Tramite "
			+"AND reporte.Remite_Id_Remite = remite.Id_Remite");
	rs=ps.executeQuery();
	while(rs.next()){
%>
<div class="container-fluid">
	<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div class="navbar-brand" ><img src="<c:url value="/recursos/img/PGJCDMX.png"/>" class="centrarVertical" width="40px" height="auto"/></div>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav pull-right">
      	<li><a href="registrar_main">Registrar</a></li>
        <li class="active"><a><strong>Modificando</strong></a></li>
        <li><a href="reportes">Total Reportes</a></li>
        <%
        HttpSession sesion = request.getSession();
		String usuario;
		String nivel;
		//Atributos de Login.jsp
		if(sesion.getAttribute("user")!=null && sesion.getAttribute("level")=="1"){
			usuario = sesion.getAttribute("user").toString();
			nivel = sesion.getAttribute("level").toString();			
			out.print("<li><a href='login?cerrar=true'>Cerrar sesión ("+usuario+")</a><li>");
		}else{
			out.print("<script>location.replace('login');</script>");
		}
	%>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>
<div class="container">	
 <div class="row">
	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
	<br>
	<a class="btn btn-danger positionRight" href="tramitar_main">Cancelar</a>
	<br><br>
    <form action="" method="POST" class="form-horizontal" role="form">
		<font size="2"><strong>No. </strong></font>	
		<input class="campoSombra" id="idReporte" style="padding-left:20px" readonly="readonly" value="<%=rs.getInt(1)%>"/>
		<br><br>
		<label>Tipo </label>	
		<select id="ct" class="form-control" style="width:15em;">
			<option value="0" class="letraNegrita"><%=rs.getString(2)%></option>
			<option value="1">GAM-1</option>
			<option value="2">GAM-2</option>
			<option value="3">GAM-3</option>
			<option value="4">GAM-4</option>
			<option value="5">GAM-5</option>
			<option value="6">GAM-6</option>
			<option value="7">GAM-7</option>
			<option value="8">GAM-8</option>
			<option value="9">H-5</option>
		</select>
		<br>
		</div>
		<label>Carpeta de Investigación</label>
		<input style="width:40em;" style="padding-left:10px" id="carpetaInvestigacion" readonly="readonly" class="form-control textoMayuscula letraNegrita" value="<%=rs.getString(3)%>"/><br>	
		<font size="2"><strong>Hora</strong></font>	
		<input class="campoSombra" id="horaReporte" style="padding-left:20px" readonly="readonly" value="<%=rs.getString(4)%>"/>
		<font size="2"><strong>Fecha de Inicio</strong></font>	
		<input class="campoSombra" id="fechaInicioReporte" style="padding-left:20px" readonly="readonly" value="<%=rs.getDate(5)%>"/>
		<br><br>
		<div class="form-group" id="grupoFecha">
		<label for="idDelito" class="col-lg-1 control-label">Delito</label>
		<div class="col-lg-10">
		<select id="ct" class="form-control" style="width:15em;">
			<option value="0" class="letraNegrita"><%=rs.getString(6)%></option>
			<option value="1">ABANDONO DE PERSONAS</option>
			<option value="2">ABORTO</option>
			<option value="3">ABUSO DE AUTORIDAD</option>
			<option value="4">ABUSO DE CONFIANZA</option>
			<option value="5">ALLANAMIENTO DE MORADA</option>
			<option value="6">ATAQUE A LAS VÍAS DE COMUNICACIÓN</option>
			<option value="7">COALICIÓN DE SERVIDORES PÚBLICOS</option>
			<option value="8">COHECHO</option>
			<option value="9">DAÑO EN PROPIEDAD AJENA</option>
			<option value="10">DAÑO EN PROPIEDAD AJENA POR TRANSITO VEHICULAR</option>
			<option value="11">DELITOS CONTRA LA SALUD</option>
			<option value="12">DENUNCIA DE HECHOS</option>
			<option value="13">DISPARO DE ARMA DE FUEGO</option>
			<option value="14">ENCUBRIMIENTO</option>
			<option value="15">ENCUBRIMIENTO POR RECEPTACION</option>
			<option value="16">EVASIÓN DE PRESOS</option>
			<option value="17">EXTORSIÓN</option>
			<option value="18">FALSEDAD EN DECLARACIONES JUD. Y EN INFORMES DADOS A UNA AUT.</option>
			<option value="19">FALSIFICACIÓN DE DOCUMENTOS EN GENERAL</option>
			<option value="20">FRAUDE</option>
			<option value="21">HOMICIDIO DOLOSO POR ARMA BLANCA</option>
			<option value="22">HOMICIDIO DOLOSO POR D.A.F.</option>
			<option value="23">HOMICIDIO CULPOSO</option>
			<option value="24">HOMICIDIO CULPOSO POR T.V.</option>
			<option value="25">LESIONES CULPOSAS</option>
			<option value="26">LESIONES CULPOSAS POR T.V.</option>
			<option value="27">LESIONES DOLOSAS</option>
			<option value="28">LESIONES POR ARMA BLANCA</option>
			<option value="29">LESIONES POR ARMA DE FUEGO</option>
			<option value="30">OTROS DELITOS</option>
			<option value="31">PLAGIO O SECUESTRO</option>
			<option value="32">PORTACIÓN DE ARMAS PROHIBIDAS</option>
			<option value="33">PRIVACIÓN ILEGAL DE LA LIBERTAD</option>
			<option value="34">QUEBRANTAMIENTO DE SELLOS</option>
			<option value="35">RESPONSABILIDAD PROFESIONAL</option>
			<option value="36">ROBO SIMPLE</option>
			<option value="37">ROBO A CASA HABITACIÓN CON VIOLENCIA</option>
			<option value="38">ROBO A CASA HABITACIÓN SIN VIOLENCIA</option>
			<option value="39">ROBO A CUENTAHABIENTE (BANCO O CAJERO)</option>
			<option value="40">ROBO A NEGOCIO SIN VIOLENCIA</option>
			<option value="41">ROBO A NEGOCIO CON VIOLENCIA</option>
			<option value="42">ROBO A REPARTIDOR</option>
			<option value="43">ROBO A TRANSEUNTE</option>
			<option value="44">ROBO A TRANSPORTISTA</option>
			<option value="45">ROBO DE ACCESORIOS DE AUTOMÓVIL</option>
			<option value="46">ROBO DE AUTO C/V</option>
			<option value="47">ROBO DE AUTO S/V</option>
			<option value="48">ROBO A BORDO DE TRANSPORTE PUBLICO</option>
			<option value="49">TENTATIVA DE HOMICIDIO</option>
			<option value="50">TENTATIVA DE ROBO</option>
			<option value="51">VIOLACIÓN</option>
			<option value="52">VIOLENCIA FAMILIAR</option>
		</select>
		</div>
		<br><br>
		</div>
		<div class="form-group" id="grupoHechos">
		<label for="idHechos" class="col-lg-2 control-label">Lugar de los Hechos</label>
		<div class="col-lg-10">
		<textarea name="Lugar de los Hechos" id="idHechos" maxlength="1500" rows="5" class="form-control textoMayuscula"><%=rs.getString(7)%></textarea>
		</div>
		<br><br>
		</div>
		<label>Tipo de Remite</label>	
		<select id="ct" class="form-control" style="width:15em;">
			<option value="0" class="letraNegrita"><%=rs.getString(8)%></option>
			<option value="1">S.S.P.</option>
			<option value="2">P.D.I.</option>
			<option value="3">OTROS</option>
		</select>
		<br>
		<div class="form-group">
		<label for="probableResponsable" class="col-lg-3 control-label">Imputado(s)<br><br><small style="color: red">Nota:<br>Escribir si cada persona tiene ANTECEDENTES, en caso contrario escriba NO.</small></label>
		<div class="col-lg-9">
	 <input style="padding-left:15px" placeholder="No." value="<%=rs.getInt(9)%>" readonly class="campoSombra" id="noImputados"/>
	 <br><br>	
	<textarea name="losImputados" id="probableResponsable" placeholder="Datos de (los) imputado(s)" maxlength="700" class="form-control textoMayuscula" onchange="mayusculas()" rows="5" readonly="readonly"><%=rs.getString(10)%></textarea>
	<br>
	<div id="input_list"></div>
		</div>
		</div>
<script type="text/javascript">
function genList(){
	var	num = document.getElementById("noImputados").value;
	list = document.getElementById("input_list");
	
	for(var i = 1; i <= num; i++){ 
		var elem4 = list.appendChild(document.createElement("input"));
		elem4.setAttribute("type","text");
	 	elem4.setAttribute("placeholder","Antecedentes de la persona "+i);
	 	elem4.setAttribute("maxlength",140);
	 	elem4.setAttribute("onchange","concatLista()");
	 	elem4.setAttribute("required","required");
		elem4.setAttribute("style","padding-left:10px");

	 	elem4.id = "antecedentesTxt"+i;
	 	elem4.className = "campo3 textoMayuscula";
	 	
	 	list.appendChild(document.createElement("br"));
	 	list.appendChild(document.createElement("br"));
	 }	
}

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
	    //Se obtiene el id "fecha" del formulario y le asignamos la fecha actual a los atributos 'max' y 'value' 
	    document.getElementById("fecha").setAttribute("max", fHoy);
	}

function concatLista(){
	var num = document.getElementById("noImputados").value;
	var antecedentes;
	var concatenadoAnteced = [];
	for(var i = 1; i <= num; i++){
		antecedentes = document.getElementById("antecedentesTxt"+i).value.toUpperCase();	
		concatenadoAnteced[i-1] = (" "+i+".- "+antecedentes);		
	}
	document.getElementById("tieneAntecedentes").value = concatenadoAnteced;	
}
</script>
		<div class="form-group">
		<label for="tieneAntecedentes" class="col-lg-2 control-label">Antecedentes de Imputado(s)</label>
		<div class="col-lg-10">
		<textarea readonly="readonly" id="tieneAntecedentes" placeholder="Antecedentes capturados" maxlength="1500" class="form-control textoMayuscula" onchange="mayusculas()" rows="5" name="losAntecedentes"></textarea>
		</div>
		</div> 
		<div class="form-group">
		<label for="listasTramite" class="col-lg-2 control-label">Trámite</label>
		<div class="col-lg-10">
		<input type="hidden" id="idTramiteFK" name="elTramite"/>
		<div id="listasTramite">		
		<select name="categoriaTramite" id="categoriaTramite" onChange="categoriaOpciones(); valorC()" class="form-control">
                <option selected value="0">--- Elija Trámite ---</option>
                <option value="15" class="letraNegrita" disabled>CONTINUADA</option>
                <option value="1" class="letraNegrita">LIBERTADES</option>
                <option value="2" class="letraNegrita">INCOMPETENCIAS</option>                
                <option value="16" class="letraNegrita">JUDICIALIZADA</option>
        </select> 
 
            <!-- Si son Libertades mostrar esta lista -->
            <select name="Libertades" id="Libertades" class="form-control" onChange="valorA()">
                <option selected value="0">--- Elija una opción ---</option>
                <option value="1" class="letraNegrita">DELITO QUE NO TENGA PENA PRIVATIVA DE LIBERTAD</option>
                <option value="2" class="letraNegrita">DELITO PATRIMONIAL O CULPOSO</option>
                <option value="3" class="letraNegrita">ART. 100 PERDÓN</option>
                <option value="4" class="letraNegrita">ART. 140 CNPP</option>
                <option value="5" class="letraNegrita">ART. 148 FALTA DE QUERELLA</option>
                <option value="6" class="letraNegrita">ART. 149 NO FLAGRANCIA</option>
                <option value="7" class="letraNegrita">ART. 149 ILEGAL DETENCIÓN</option>
                <option value="8" class="letraNegrita">ART. 186 ACUERDOS REPARATORIOS</option>
            </select>
 
            <!-- Si son Incompetencias mostrar esta lista -->
            <select name="Incompetencias" id="Incompetencias" class="form-control" onChange="valorB()">
                <option selected value="0">--- Elija una opción ---</option>
                <option value="9" class="letraNegrita">P.G.R.</option>
                <option value="10" class="letraNegrita">A PGJ DE ESTADOS</option>
                <option value="11" class="letraNegrita">A FISCALIAS CENTRALES</option>
                <option value="12" class="letraNegrita">A FISCALIAS DESCONCENTRADAS</option>
                <option value="13" class="letraNegrita">A OTRAS ÁREAS DE LA PGJ</option>
                <option value="14" class="letraNegrita">JUEZ CÍVICO / OTRAS ÁREAS</option>
            </select>
            </div>
            </div>
		</div>	
		<div class="form-group" id="grupoFecha">
		<label for="fecha" class="col-lg-2 control-label">Fecha</label>
		<div class="col-lg-10">
		<input type="date" id="fecha" min="<%=rs.getString(5)%>" required="true" class="form-control textoMayuscula" name="laFecha"/>
		</div>
		<br>
		</div>
		<div class="form-group" id="grupoTurno">
		<input type="hidden" id="turno" name="elTurno"/>
		<label for="idTurnoFK" class="col-lg-2 control-label">Turno</label>
		<div class="col-lg-10">
		<select id="idTurnoFK" class="form-control" onchange="selectTurno()">
			<option value="0">--- Elija Turno ---</option>
			<option value="1" class="letraNegrita">T1</option>
			<option value="2" class="letraNegrita">T2</option>
			<option value="3" class="letraNegrita">T3</option>
		</select>
		</div>		
		</div>
	<br><br>
		<center><button onclick="return verificarCamposReg()" class="btn btn-warning">Guardar Cambios</button></center>
	</form>
	<%}%>
	</div>
 </div>
 <br><br><br><br><br><br><br>
</div>
		
	<footer>	
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 estiloFooter centrarVertical">
		<br>
		 <h4>Procuraduría General de Justicia de la CDMX. Fiscalía Desconcentrada de Investigación en Gustavo A. Madero.</h4>
		</div>	
	</footer>
</div>

<script>
$(window).scroll(function() {
	  if ($(document).scrollTop() > 50) {
	    $("nav").addClass("shrink");
	  } else {
	    $("nav").removeClass("shrink");
	  }
	});

$("#categoriaTramite").click(function() {
    $('#Libertades').prop('selectedIndex', 0);
    $('#Incompetencias').prop('selectedIndex', 0);
});  


var varCT = document.getElementById("categoriaTramite");
var varLibertades = document.getElementById("Libertades");
var varIncompetencias = document.getElementById("Incompetencias");    
var fecha = document.getElementById("grupoFecha");
var turno = document.getElementById("grupoTurno");
hideCombos();
</script>
</body>
</html>

<% 
	String antec, imputad, tram, fech, turn;
	antec=request.getParameter("losAntecedentes");
	imputad=request.getParameter("losImputados");
	tram=request.getParameter("elTramite");
	fech=request.getParameter("laFecha");
	turn=request.getParameter("elTurno");
	
	if(antec!=null && imputad!=null && tram!=null && fech!=null && turn!=null){
		ps=con.prepareStatement("UPDATE reporte SET Tiene_Antecedentes='"+antec+"', Probable_Responsable='"+imputad+"', Tramite_Id_Tramite='"+tram+"', Fecha='"+fech+"', Turno='"+turn+"' WHERE Id="+id);
		ps.executeUpdate();
		response.sendRedirect("tramitar_main"); 	
	}
%>