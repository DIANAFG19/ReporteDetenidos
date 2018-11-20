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

<meta http-equiv="Content-Type" name="viewport" content="text/html; charset=ISO-8859-1, width=device-width, initial-scale=1">
<title>Tramitar reporte</title>
</head>
<body>

<%
	//Conectando a la base de datos
	Connection con;
	String url="jdbc:mysql://172.33.31.45:3306/bd_reportes";
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
	        </tr>
	       	 <%}%> 
           </table></div><br>
           <%} %>

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