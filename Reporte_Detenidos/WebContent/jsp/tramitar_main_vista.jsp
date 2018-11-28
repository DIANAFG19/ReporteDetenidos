<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="tag"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@page import="reporte.objetos.Reporte2"%>
<%@page import="reporte.operaciones.FiltradoReporte"%>
<%@ page import="java.util.*" %>

<%@ page import="java.sql.*" %>
<%@page session="true"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="<c:url value="/recursos/css/myCSS/mybase.css"/>"/>
<link rel="stylesheet" href="<c:url value="/recursos/css/bootstrap/bootstrap.min.css"/>"/>
<script src="<c:url value="/recursos/js/bootstrap/jquery.min.js"/>"></script>
<script src="<c:url value="/recursos/js/bootstrap/bootstrap.min.js"/>"></script>

<!-- excel -->
<script src="<c:url value="/recursos/tableExport/tableExport.js"/>"></script>
<script src="<c:url value="/recursos/tableExport/jquery.base64.js"/>"></script>

<!-- pdf -->
<script src="<c:url value="/recursos/tableExport/jspdf/libs/sprintf.js"/>"></script>
<script src="<c:url value="/recursos/tableExport/jspdf/jspdf.js"/>"></script>
<script src="<c:url value="/recursos/tableExport/jspdf/libs/base64.js"/>"></script>

<!-- Modificar campos  -->
<script type="text/javascript">
	var editando=false;
	function transformarEnEditable(nodo){
		//El nodo recibido es SPAN
		if (editando == false) {
			var nodoTd = nodo.parentNode; //Nodo TD
			var nodoTr = nodoTd.parentNode; //Nodo TR
			var nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV
			var nodosEnTr = nodoTr.getElementsByTagName('td');
			var numero = nodosEnTr[0].textContent; 
			var ct = nodosEnTr[1].textContent;
			var carpetaInvestigacion = nodosEnTr[2].textContent; 
			var hora = nodosEnTr[3].textContent;
			var fechaInicio = nodosEnTr[4].textContent; 
			var delito = nodosEnTr[5].textContent;
			var lugarHechos = nodosEnTr[6].textContent; 
			var remite = nodosEnTr[7].textContent;
			var imputados = nodosEnTr[8].textContent;
			var sexoM = nodosEnTr[9].textContent;
			var sexoF = nodosEnTr[10].textContent; 
			var denunciante = nodosEnTr[11].textContent;
			var descripcionHechos = nodosEnTr[12].textContent;
			var tramite = nodosEnTr[13].textContent; 
			var antecedentes = nodosEnTr[14].textContent;
			var fecha = nodosEnTr[15].textContent; 
			var turno = nodosEnTr[16].textContent;
			var nuevoCodigoHtml = '<td><input type="text" name="numero" id="numero" value="'+numero+'" size="5"></td>'+
			'<td><select name="ct" selected="'+ct+'">'+
				'<option value="1">GAM-1</option>'+
				'<option value="2">GAM-2</option>'+
				'<option value="3">GAM-3</option>'+
				'<option value="4">GAM-4</option>'+
				'<option value="5">GAM-5</option>'+
				'<option value="6">GAM-6</option>'+
				'<option value="7">GAM-7</option>'+
				'<option value="8">GAM-8</option>'+
				'<option value="9">H-5</option>'+						
				'</select></td>'+
			'<td><input type="text" name="carpetaInvestigacion" id="carpetaInvestigacion" value="'+carpetaInvestigacion+'" size="10"</td>'+
			'<td><input type="text" name="hora" id="hora" value="'+hora+'" size="5"</td>'+
			'<td><input type="text" name="fechaInicio" id="fechaInicio" value="'+fechaInicio+'" size="7"</td>'+
			'<td><select name="delito" selected="'+delito+'">'+
				'<option value="1">ABANDONO DE PERSONAS</option>'+
				'<option value="2">ABORTO</option>'+
				'<option value="3">ABUSO DE AUTORIDAD</option>'+
				'<option value="4">ABUSO DE CONFIANZA</option>'+
				'<option value="5">ALLANAMIENTO DE MORADA</option>'+
				'<option value="6">ATAQUE A LAS VÍAS DE COMUNICACIÓN</option>'+
				'<option value="7">COALICIÓN DE SERVIDORES PÚBLICOS</option>'+
				'<option value="8">COHECHO</option>'+
				'<option value="9">DAÑO EN PROPIEDAD AJENA</option>'+
				'<option value="10>DAÑO EN PROPIEDAD AJENA POR TRANSITO VEHICULAR</option>'+
				'<option value="11">DENUNCIA DE HECHOS</option>'+
				'<option value="12">DISPARO DE ARMA DE FUEGO</option>'+
				'<option value="13">ENCUBRIMIENTO</option>'+
				'<option value="14">ENCUBRIMIENTO POR RECEPTACION</option>'+
				'<option value="15">EVASIÓN DE PRESOS</option>'+
				'<option value="16">EXTORSIÓN</option>'+
				'<option value="17">FALSEDAD EN DECLARACIONES JUD. Y EN INFORMES DADOS A UNA AUT.</option>'+
				'<option value="18">FALSIFICACIÓN DE DOCUMENTOS EN GENERAL</option>'+
				'<option value="19">FRAUDE</option>'+
				'<option value="20">HOMICIDIO DOLOSO POR ARMA BLANCA</option>'+
				'<option value="21">HOMICIDIO DOLOSO POR D.A.F.</option>'+
				'<option value="22">HOMICIDIO CULPOSO</option>'+
				'<option value="23">LESIONES CULPOSAS</option>'+
				'<option value="24">LESIONES DOLOSAS</option>'+
				'<option value="25">LESIONES POR ARMA BLANCA</option>'+
				'<option value="26">LESIONES POR ARMA DE FUEGO</option>'+
				'<option value="27">OTROS DELITOS</option>'+
				'<option value="28">PLAGIO O SECUESTRO</option>'+
				'<option value="29">PORTACIÓN DE ARMAS PROHIBIDAS</option>'+
				'<option value="30">PRIVACIÓN ILEGAL DE LA LIBERTAD</option>'+
				'<option value="31">QUEBRANTAMIENTO DE SELLOS</option>'+
				'<option value="32">RESPONSABILIDAD PROFESIONAL</option>'+
				'<option value="33">ROBO SIMPLE</option>'+
				'<option value="34">ROBO A CASA HABITACIÓN CON VIOLENCIA</option>'+
				'<option value="35">ROBO A CASA HABITACIÓN SIN VIOLENCIA</option>'+
				'<option value="36">ROBO A CUENTAHABIENTE (BANCO O CAJERO)</option>'+
				'<option value="37">ROBO A NEGOCIO SIN VIOLENCIA</option>'+
				'<option value="38">ROBO A NEGOCIO CON VIOLENCIA</option>'+
				'<option value="39">ROBO A REPARTIDOR</option>'+
				'<option value="40">ROBO A TRANSEÚNTE</option>'+
				'<option value="41">ROBO A TRANSPORTISTA</option>'+
				'<option value="42">ROBO DE ACCESORIOS DE AUTOMÓVIL</option>'+
				'<option value="43">ROBO DE AUTO C/V</option>'+
				'<option value="44">ROBO DE AUTO S/V</option>'+
				'<option value="45">ROBO A BORDO DE TRANSPORTE PUBLICO</option>'+
				'<option value="46">TENTATIVA DE HOMICIDIO</option>'+
				'<option value="47">TENTATIVA DE ROBO</option>'+
				'<option value="48">VIOLACIÓN</option>'+
				'<option value="49">VIOLENCIA FAMILIAR</option>'+
				'</select></td>'+
			'<td><input type="text" name="lugarHechos" id="lugarHechos" value="'+lugarHechos+'" size="50"</td>'+
			'<td><select name="remite" selected="'+remite+'">'+
				'<option value="1">S.S.P.</option>'+
				'<option value="2">P.D.I.</option>'+
				'<option value="3">OTROS</option>'+					
			'</select></td>'+
			'<td><input type="text" name="imputados" id="imputados" value="'+imputados+'" size="40"</td>'+
			'<td><input type="text" name="sexoM" id="sexoM" value="'+sexoM+'" size="5"</td>'+
			'<td><input type="text" name="sexoF" id="sexoF" value="'+sexoF+'" size="5"</td>'+
			'<td><input type="text" name="denunciante" id="denunciante" value="'+denunciante+'" size="30"</td>'+
			'<td><input type="text" name="descripcionHechos" id="descripcionHechos" value="'+descripcionHechos+'" size="50"</td>'+
			'<td><select name="tramite" selected="'+tramite+'">'+
				'<option value="1">CONTINUADA</option>'+
				'<option value="2">LIBERTADES</option>'+
				'<option value="3">INCOMPETENCIAS</option>'+
				'<option value="3">JUDICIALIZADA</option>'+
				'</select></td>'+
			'<td><input type="text" name="antecedentes" id="antecedentes" value="'+antecedentes+'" size="40"</td>'+
			'<td><input type="text" name="fecha" id="fecha" value="'+fecha+'" size="5"</td>'+
			'<td><input type="text" name="turno" id="turno" value="'+turno+'" size="5"</td> <td>En edición</td>';
			nodoTr.innerHTML = nuevoCodigoHtml;
			nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
			'<form name = "formulario" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
			'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
			editando = "true";
		}
		else {
			alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
		}
	}
	function capturarEnvio(){
		var nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV
		nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
		'<form name = "formulario" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
		'<input type="hidden" name="numero" value="'+document.querySelector('#numero').value+'">'+
		'<input type="hidden" name="ct" value="'+document.querySelector('#ct').value+'">'+
		'<input type="hidden" name="carpetaInvestigacion" value="'+document.querySelector('#carpetaInvestigacion').value+'">'+
		'<input type="hidden" name="hora" value="'+document.querySelector('#hora').value+'">'+
		'<input type="hidden" name="fechaInicio" value="'+document.querySelector('#fechaInicio').value+'">'+
		'<input type="hidden" name="delito" value="'+document.querySelector('#delito').value+'">'+
		'<input type="hidden" name="lugarHechos" value="'+document.querySelector('#lugarHechos').value+'">'+
		'<input type="hidden" name="remite" value="'+document.querySelector('#remite').value+'">'+
		'<input type="hidden" name="imputados" value="'+document.querySelector('#imputados').value+'">'+
		'<input type="hidden" name="sexoM" value="'+document.querySelector('#sexoM').value+'">'+
		'<input type="hidden" name="sexoF" value="'+document.querySelector('#sexoF').value+'">'+
		'<input type="hidden" name="denunciante" value="'+document.querySelector('#denunciante').value+'">'+
		'<input type="hidden" name="descripcionHechos" value="'+document.querySelector('#descripcionHechos').value+'">'+
		'<input type="hidden" name="tramite" value="'+document.querySelector('#tramite').value+'">'+
		'<input type="hidden" name="antecedentes" value="'+document.querySelector('#antecedentes').value+'">'+
		'<input type="hidden" name="fecha" value="'+document.querySelector('#fecha').value+'">'+
		'<input type="hidden" name="turno" value="'+document.querySelector('#turno').value+'">'+
		'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
		document.formulario.submit();
	}
	function anular(){
		window.location.reload();
	}
</script>

<meta http-equiv="Content-Type" name="viewport" content="text/html; charset=ISO-8859-1, width=device-width, initial-scale=1">
<title>Tramitar reporte</title>
</head>
<body>

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
	ps=con.prepareStatement("SELECT reporte.Id, ct.Tipo_CT, reporte.Carpeta_Investigacion, reporte.Hora, DATE_FORMAT(reporte.Fecha_Inicio, '%d/%m/%Y') as 'Fecha_Inicio', delito.Tipo_Delito, "
			+"reporte.Lugar_Hechos, remite.Tipo_Remite, reporte.Probable_Responsable, reporte.M, reporte.F, reporte.Denunciante, " 
			+"reporte.Descripcion, tramite.Tipo_Tramite, reporte.Tiene_Antecedentes, DATE_FORMAT(reporte.Fecha, '%d/%m/%Y') as Fecha, reporte.Turno "
			+"FROM reporte, ct, delito, remite, tramite "
			+"WHERE reporte.CT_Id_CT = ct.Id_CT "
			+"AND reporte.Delito_Id_Delito = delito.Id_Delito "
			+"AND reporte.Tramite_Id_Tramite = tramite.Id_Tramite "
			+"AND reporte.Remite_Id_Remite = remite.Id_Remite "
			+"AND reporte.Tramite_Id_Tramite = 15 ORDER BY ct.Tipo_CT asc, reporte.Id asc");
	rs=ps.executeQuery();
	
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
        <li class="active"><a href="tramitar_main"><strong>Tramitar</strong></a></li>
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
	
	<%if(!rs.isBeforeFirst()) {%>           		
           		<center><h3>No hay reportes registrados.</h3></center>
           <%} 
	else {    
           %>
           
    <center><h3>Reportes con Trámite Continuada</h3></center>
	<br> 
		
	<center><a class="btn btn-success" href="#" onclick="$('#tablaIncidente').tableExport({type:'excel', escape:'false'});">Exportar a Excel</a></center>
	<br><br>
	<center><a class="btn btn-danger" href="impresion_continuadas" target="_blank">Formato PDF Continuadas</a></center>
	
	<!-- <br>
	<center><h4>Carpetas de Investigación: <span class="label label-danger"></span></h4></center> -->
	<br>
	<div id="tablaReportes"><table class="table table-hover table-responsive" id="tablaIncidente">
	       	<tr class="active">
	       		<td class="text-center"><strong>NO.</strong></td>
	       		<td class="text-center"><strong>C.T.</strong></td>
	       		<td class="text-center"><strong>CARPETA DE INVESTIGACIÓN</strong></td>
	       		<td class="text-center"><strong>HORA</strong></td>
	       		<td class="text-center"><strong>FECHA DE INICIO</strong></td>
	       		<td class="text-center"><strong>DELITO</strong></td>
	       		<td class="text-center"><strong>LUGAR DE LOS HECHOS</strong></td>
	       		<td class="text-center"><strong>REMITE</strong></td>
	       		<td class="text-center"><strong>IMPUTADO(S)</strong></td>
	       		<td class="text-center"><strong>M</strong></td>
	       		<td class="text-center"><strong>F</strong></td>
	       		<td class="text-center"><strong>DENUNCIANTE</strong></td>
	       		<td class="text-center"><strong>DESCRIPCIÓN DE LOS HECHOS</strong></td>
	       		<td class="text-center"><strong>TRAMITE</strong></td>
	       		<td class="text-center"><strong>ANTECEDENTES</strong></td>
	       		<td class="text-center"><strong>FECHA</strong></td>
	       		<td class="text-center"><strong>TURNO</strong></td>
	       		<th class="text-center"></th>
	       		<th class="text-center"></th>
	       		
	       	</tr>
	       	
	       	
           <%while(rs.next()){ %>
	       	<tr>
	       		<td class="text-center"><%= rs.getInt("Id")%></td>
	       		<td class="text-center"><%= rs.getString("Tipo_CT")%></td>
	       		<td class="text-center"><%= rs.getString("Carpeta_Investigacion")%></td>
	       		<td class="text-center"><%= rs.getString("Hora")%></td>
	       		<td class="text-center"><%= rs.getString("Fecha_Inicio")%></td>
	       		<td class="text-center"><%= rs.getString("Tipo_Delito")%></td>
	       		<td class="text-center"><%= rs.getString("Lugar_Hechos")%></td>
	       		<td class="text-center"><%= rs.getString("Tipo_Remite")%></td>
	       		<td class="text-center"><%= rs.getString("Probable_Responsable")%></td>
	       		<td class="text-center"><%= rs.getInt("M")%></td>
	       		<td class="text-center"><%= rs.getInt("F")%></td>
	       		<td class="text-center"><%= rs.getString("Denunciante")%></td>
	       		<td class="text-center"><%= rs.getString("Descripcion")%></td>
	       		<td class="text-center"><%= rs.getString("Tipo_Tramite")%></td>
	       		
	       		<td class="text-center"><%if(rs.getString("Tiene_Antecedentes")==null){out.println("");} else{out.println(rs.getString("Tiene_Antecedentes"));}%></td>
	       		<td class="text-center"><%if(rs.getString("Fecha")==null){out.println("");} else{out.println(rs.getString("Fecha"));}%></td>
	       		<td class="text-center"><%if(rs.getString("Turno")==null){out.println("");} else{out.println(rs.getString("Turno"));}%></td>
	       		<th class="text-center"><a class="btn btn-warning btn-sm" href="editar_main?id=<%=rs.getInt("Id")%>">Dar Trámite</a></th>
	        	<th class="text-center"><a class="btn btn-warning btn-sm" onclick="transformarEnEditable(this)">Modificar</a></th>
	        </tr>
	       	 <%}%> 
           </table></div><br>
           <%} %>
           <div id="contenedorForm">
		</div>
	</div>
 </div>
</div>
	<br><br><br><br><br><br>
	<footer>	
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 estiloFooter centrarVertical">
		<br>
		 <h4>Procuraduría General de Justicia de la CDMX. Fiscalía Desconcentrada de Investigación en Gustavo A. Madero.</h4>
		</div>	
	</footer>
</div>

</body>
</html>