<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="tag"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
<script src="<c:url value="/recursos/js/select2/select2.js"/>"></script>
<script src="<c:url value="/recursos/js/myJS/obtenerFecha.js"/>"></script>
<script src="<c:url value="/recursos/js/myJS/formularioContinuada.js"/>"></script>

<meta http-equiv="Content-Type" name="viewport" content="text/html; charset=ISO-8859-1, width=device-width, initial-scale=1">
<title>Registrar reporte</title>
</head>
<body onload="fechaDeHoy()">
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
        <li class="active"><a href="registrar_user"><strong>Registrar</strong></a></li>
        <li><a href="tramitar_user">Tramitar</a></li>
        <li><a href="reportes_user">Reportes de hoy (3 días atrás)</a></li>
        <%
		HttpSession sesion = request.getSession();
		String usuario;
		String nivel;
		
		//Atributos de Login.jsp
		if(sesion.getAttribute("user")!=null && sesion.getAttribute("level")=="2"){
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
	
    <tag:form action="registrado_user" method="POST" modelAttribute="reporteFrmUser" class="form-horizontal" role="form">
	<tag:hidden path="idReporte" id="idReporte"/>
	<br>
	<div id="coordTerritorial" class="form-group">
	<label for="idCTFK" class="col-lg-2 control-label">Coordinación Territorial</label>	
	<div class="col-lg-10">
	<tag:select path="idCTFK" id="idCTFK" class="form-control" onChange="valorCT(); carpeta(); carpetaRel()">
			<tag:option value="0">--- Elija C.T. ---</tag:option>
			<tag:option value="1">GAM-1</tag:option>
			<tag:option value="2" class="letraNegrita">GAM-2</tag:option>
			<tag:option value="3">GAM-3</tag:option>
			<tag:option value="4" class="letraNegrita">GAM-4</tag:option>
			<tag:option value="5">GAM-5</tag:option>
			<tag:option value="6">GAM-6</tag:option>
			<tag:option value="7">GAM-7</tag:option>
			<tag:option value="8">GAM-8</tag:option>
			<tag:option value="9">H-5</tag:option>						
	</tag:select>
	<br>
	</div>		
	</div>
	
	
	<label>Carpeta de Investigación</label>
	<select id="categoriaAveriguacion" onChange="categOpcAveriguacion(); cleanCampos()" class="form-control">
                <option selected value="0">--- Elija Averiguación ---</option>
                <option value="1" class="letraNegrita">DIRECTA</option>
                <option value="2" class="letraNegrita">RELACIONADA</option>
                <option value="3" class="letraNegrita">COLABORACION</option>
    </select>
    <br>
    
    
    <div id="esDeGAM" class="form-group">
		<label for="perteneceGAM" class="col-lg-3 control-label">¿Pertenece a GAM?</label>
		<div class="col-lg-9">
		<select id="perteneceGAM" onChange="categoriaEsGAM(); limpiarRelGAM()" class="form-control">
			<option value="0">--- Elija una opción ---</option>
			<option value="1" class="letraNegrita">SI</option>
			<option value="2" class="letraNegrita">NO</option>			
		</select>
		</div> <br><br><br>
		</div> 
        
	<tag:hidden path="fiscalia" id="fiscalia" placeholder="fisc"/>
	<tag:hidden path="coord" id="coord" placeholder="coord"/>	
	<tag:hidden path="conDetenido" id="conDetenido" placeholder="unid"/>
	<tag:hidden path="folio" id="folio" placeholder="fol"/>
	<tag:hidden path="mes" id="mes" placeholder="mes"/>	
	<tag:hidden path="anhio" id="anhio" placeholder="anhio"/>
	<tag:hidden path="bis" id="bis" placeholder="bis"/>
	<tag:hidden path="relacionada" id="relacionada" placeholder="rel"/>
	
	<!-- Si es Directa mostrar lo siguiente-->
	<center>	
	<div id="camposDirecta" class="form-inline">	
	<input style="padding-left:15px" onchange="valorFiscalia(); carpeta()" id="fiscaliaD" class="campoSombra" readonly="readonly" placeholder="Fiscalía"/><font size="5"><strong>/</strong></font>
	<input style="padding-left:15px" onchange="valorCoord(); carpeta()" id="coordD" class="campoSombra" readonly="readonly" placeholder="Coordinación"/><font size="5"><strong>/</strong></font>	
	<select id="conDetD" class="campo" onChange="valorCDet(); carpeta()">
                <option selected value="0">-- Elija Unidad --</option>
                <option value="1" class="letraNegrita">UI-1CD</option>                
                <option value="2" class="letraNegrita">UI-2CD</option>                
                <option value="3" class="letraNegrita">UI-3CD</option>
    </select><font size="5"><strong>/</strong></font>
	<input style="padding-left:15px" onchange="valorFolio(); carpeta()" required="required" type="number" id="numFolioD" class="campo" min="1" max="99999" placeholder="Folio" step="1"/><font size="5"><strong>/</strong></font>
	<input style="padding-left:15px" onchange="valornumMes(); carpeta()" required="required" type="number" id="numMesD" class="campo" placeholder="Mes (MM)" min="01" max="12" step="1"/><font size="5"><strong>-</strong></font>
	<input style="padding-left:15px" onchange="valorAnhio(); carpeta()" required="required" type="number" id="anhioD" class="campo" placeholder="Año (AAAA)" min="2015" step="1"/><span > </span>
	<input style="padding-left:15px" onchange="valorBis(); carpeta()" id="bisD" class="campo textoMayuscula" placeholder="Bis (OPC.)" maxlength="3"/>	
	<br><br>
	</div>
	</center>
	
	<!-- Si es Relacionada -->
	<center>
	<div id="camposRelacionada" class="form-inline">
	<input style="padding-left:15px" onchange="valorFiscaliaR(); carpetaRel()" id="fiscaliaR" class="campoSombra" readonly="readonly" placeholder="Fiscalía"/><font size="5"><strong>/</strong></font>
	<input style="padding-left:15px" onchange="valorCoordR(); carpetaRel()" id="coordR" class="campoSombra" readonly="readonly" placeholder="Coordinación"/><font size="5"><strong>/</strong></font>
	<select id="conDetR" class="campo" onChange="valorCDetR(); carpetaRel()">
                <option selected value="0">-- Elija Unidad --</option>
                <option value="1" class="letraNegrita">UI-1CD</option>                
                <option value="2" class="letraNegrita">UI-2CD</option>                
                <option value="3" class="letraNegrita">UI-3CD</option>
    </select><font size="5"><strong>/</strong></font>
	<input style="padding-left:15px" onchange="valorFolioR(); carpetaRel()" required="required" type="number" id="numFolioR" class="campo" min="1" max="99999" placeholder="Folio" step="1"/><font size="5"><strong>/</strong></font>
	<input style="padding-left:15px" onchange="valornumMesR(); carpetaRel()" required="required" type="number" id="numMesR" class="campo" placeholder="Mes (MM)" min="01" max="12" step="1"/><font size="5"><strong>-</strong></font>
	<input style="padding-left:15px" onchange="valorAnhioR(); carpetaRel()" required="required" type="number" id="anhioR" class="campo" placeholder="Año (AAAA)" min="2015" step="1"/><span > </span>
	<input style="padding-left:15px" onchange="valorRelacionada(); carpetaRel()" required="required" id="relacionadaR" class="campo textoMayuscula" placeholder="Relacionada" maxlength="3"/>	
	<br><br>
	</div>
	</center>
	
	<!-- Si es colaborativa -->
	<div id="colaborativa">
	<input style="padding-left:15px" id="colaboracion" placeholder="Escriba la carpeta de colaboración, Máx. 40 caracteres" maxlength="40" onchange="valorColaboracion()" class="form-control textoMayuscula">
	<br>
	</div>
	
	<!-- Relacionada No Gam -->
	<div id="relacNoGAM">
	<input style="padding-left:15px" id="relacionadaNoGAM" placeholder="Escriba la carpeta relacionada, Máx. 40 caracteres" maxlength="40" onchange="valorRelacionadaGAM()" class="form-control textoMayuscula">
	<br>
	</div>
	
	<!-- Formato Carpeta -->
	<tag:input style="padding-left:15px" path="carpetaInvestigacion" id="carpetaInvestigacion" readonly="true" class="form-control textoMayuscula letraNegrita" placeholder="Formato de Carpeta de Investigación"/><br>	
	
	<div class="form-group">
	<label for="hora" class="col-lg-2 control-label">Hora</label>
	<div class="col-lg-10">
	<tag:input type="time" path="hora" id="hora" required="true" class="form-control textoMayuscula"/>
	</div>
	</div> 
	
	<div class="form-group">
	<label for="fechaInicio" class="col-lg-2 control-label">Fecha de Inicio</label>
	<div class="col-lg-10">
	<tag:input type="date" path="fechaInicio" id="fechaInicio" required="true" class="form-control textoMayuscula" />
	</div>
	</div>
			
	<div class="form-group">
	<label for="idDelitoFK" class="col-lg-2 control-label">Delito</label>
	<div class="col-lg-10">
	<tag:select path="idDelitoFK" id="idDelitoFK" class="form-control" style="width: 100%;">
			<tag:option value="0">--- Elija un Delito ---</tag:option>
			<tag:option value="1">ABANDONO DE PERSONAS</tag:option>
			<tag:option value="2">ABORTO</tag:option>
			<tag:option value="3">ABUSO DE AUTORIDAD</tag:option>
			<tag:option value="4">ABUSO DE CONFIANZA</tag:option>
			<tag:option value="5">ALLANAMIENTO DE MORADA</tag:option>
			<tag:option value="6">ATAQUE A LAS VÍAS DE COMUNICACIÓN</tag:option>
			<tag:option value="7">COALICIÓN DE SERVIDORES PÚBLICOS</tag:option>
			<tag:option value="8">COHECHO</tag:option>
			<tag:option value="9">DAÑO EN PROPIEDAD AJENA</tag:option>
			<tag:option value="10">DAÑO EN PROPIEDAD AJENA POR TRANSITO VEHICULAR</tag:option>
			<tag:option value="11">DENUNCIA DE HECHOS</tag:option>
			<tag:option value="12">DISPARO DE ARMA DE FUEGO</tag:option>
			<tag:option value="13">ABUSO DE AUTORIDAD</tag:option>
			<tag:option value="14">ENCUBRIMIENTO</tag:option>
			<tag:option value="15">ENCUBRIMIENTO POR RECEPTACION</tag:option>
			<tag:option value="16">EVASIÓN DE PRESOS</tag:option>
			<tag:option value="17">EXTORSIÓN</tag:option>
			<tag:option value="18">FALSEDAD EN DECLARACIONES JUD. Y EN INFORMES DADOS A UNA AUT.</tag:option>
			<tag:option value="19">FALSIFICACIÓN DE DOCUMENTOS EN GENERAL</tag:option>
			<tag:option value="20">FRAUDE</tag:option>
			<tag:option value="21">HOMICIDIO DOLOSO POR ARMA BLANCA</tag:option>
			<tag:option value="22">HOMICIDIO DOLOSO POR D.A.F.</tag:option>
			<tag:option value="23">HOMICIDIO CULPOSO</tag:option>
			<tag:option value="24">LESIONES CULPOSAS</tag:option>
			<tag:option value="25">LESIONES DOLOSAS</tag:option>
			<tag:option value="26">LESIONES POR ARMA BLANCA</tag:option>
			<tag:option value="27">LESIONES POR ARMA DE FUEGO</tag:option>
			<tag:option value="28">OTROS DELITOS</tag:option>
			<tag:option value="29">PLAGIO O SECUESTRO</tag:option>
			<tag:option value="30">PORTACIÓN DE ARMAS PROHIBIDAS</tag:option>
			<tag:option value="31">PRIVACIÓN ILEGAL DE LA LIBERTAD</tag:option>
			<tag:option value="32">QUEBRANTAMIENTO DE SELLOS</tag:option>
			<tag:option value="33">RESPONSABILIDAD PROFESIONAL</tag:option>
			<tag:option value="34">ROBO SIMPLE</tag:option>
			<tag:option value="35">ROBO A CASA HABITACIÓN CON VIOLENCIA</tag:option>
			<tag:option value="36">ROBO A CASA HABITACIÓN SIN VIOLENCIA</tag:option>
			<tag:option value="37">ROBO A CUENTAHABIENTE (BANCO O CAJERO)</tag:option>
			<tag:option value="38">ROBO A NEGOCIO SIN VIOLENCIA</tag:option>
			<tag:option value="39">ROBO A NEGOCIO CON VIOLENCIA</tag:option>
			<tag:option value="40">ROBO A REPARTIDOR</tag:option>
			<tag:option value="41">ROBO A TRANSEÚNTE</tag:option>
			<tag:option value="42">ROBO A TRANSPORTISTA</tag:option>
			<tag:option value="43">ROBO DE ACCESORIOS DE AUTOMÓVIL</tag:option>
			<tag:option value="44">ROBO DE AUTO C/V</tag:option>
			<tag:option value="45">ROBO DE AUTO S/V</tag:option>
			<tag:option value="46">ROBO A BORDO DE TRANSPORTE PUBLICO</tag:option>
			<tag:option value="47">TENTATIVA DE HOMICIDIO</tag:option>
			<tag:option value="48">TENTATIVA DE ROBO</tag:option>
			<tag:option value="49">VIOLACIÓN</tag:option>
			<tag:option value="50">VIOLENCIA FAMILIAR</tag:option>
		</tag:select>
		</div>
	</div>
	
		<div class="form-group">
	    <label for="lugarHechos" class="col-lg-2 control-label">Lugar de los Hechos</label>
	    <div class="col-lg-10">
		<tag:textarea required="true" path="lugarHechos" id="lugarHechos" placeholder="Máx. 255 caracteres" maxlength="255" class="form-control textoMayuscula" onchange="mayusculas()"/>
		</div>
		</div>
		
		<div class="form-group">
		<label for="idRemiteFK" class="col-lg-2 control-label">Remite</label>
		<div class="col-lg-10">
		<tag:select path="idRemiteFK" id="idRemiteFK" maxlength="6" class="form-control">
			<tag:option value="0">--- Elija Remitente ---</tag:option>
			<tag:option value="1" class="letraNegrita">S.S.P.</tag:option>
			<tag:option value="2" class="letraNegrita">P.D.I.</tag:option>
			<tag:option value="3" class="letraNegrita">OTROS</tag:option>
		</tag:select>
		</div>
		</div> 
		
		<div class="form-group">
		<label for="probableResponsable" class="col-lg-4 control-label">Imputado(s). ¿Cuántos son? <br><br><small style="color: red">Nota:<br>Si después de escribir en los campos NOMBRE, EDAD y GÉNERO, si cambia el no. de ¿Cuántos son?, estos se limpiarán</small></label>
		<div class="col-lg-8">

	<tag:input path="totalImputados" style="padding-left:15px" placeholder="No." value="0" type="number" class="campo" min="1" max="10" id="noImputados" onchange="genList(this.value); limpiarImputados()"/>		
	 <br><br>
	<div id="input_list"></div>
	<tag:textarea readonly="true" path="probableResponsable" id="probableResponsable" placeholder="Datos de (los) imputado(s)" maxlength="700" class="form-control textoMayuscula" onchange="mayusculas()" rows="5"/>
	
		</div>
		</div>
		
<script type="text/javascript">
function genList(num){
	clean();
	list = document.getElementById("input_list");
	
	 for(var i = 1; i <= num; i++){ 
		 var elem = list.appendChild(document.createElement("input"));
		 var elem2 = list.appendChild(document.createElement("input"));
		 var elem3 = list.appendChild(document.createElement("input"));
		 
		 
	 elem.setAttribute("type","text");
	 elem.setAttribute("placeholder"," Nombre "+i);
	 elem.setAttribute("maxlength",45);
	 elem.setAttribute("onchange","concatLista()");
	 elem.setAttribute("required","required");
	 elem.id = "nombreTxt"+i;
	 elem.className = "campo3 textoMayuscula";
	 elem.setAttribute("style","padding-left:15px");
	 	 
	 elem2.setAttribute("type","text");
	 elem2.setAttribute("type","number");
	 elem2.setAttribute("min",1);
	 elem2.setAttribute("max",100);
	 elem2.setAttribute("onchange","concatLista()");
	 elem2.setAttribute("required","required");
	 elem2.setAttribute("placeholder"," Edad (#)");
	 elem2.id = "edadTxt"+i;
	 elem2.className = "campo2 textoMayuscula";
	 elem2.setAttribute("style","padding-left:8px");
	 
	 elem3.setAttribute("type","text");
	 elem3.setAttribute("placeholder","M/F");
	 elem3.setAttribute("maxlength",1);
	 elem3.setAttribute("onchange","concatLista()");
	 elem3.setAttribute("required","required");
	 elem3.setAttribute("pattern","[M,F,m,f]{1}");
	 elem3.setAttribute("title","Masculino o Femenino");
	 elem3.id = "generoTxt"+i;
	 elem3.className = "campo4 textoMayuscula";
	 elem3.setAttribute("style","padding-left:8px");
	 
	 list.appendChild(document.createElement("br"));
	 list.appendChild(document.createElement("br"));
	 }	
	}
	
function clean(){
	list = document.getElementById("input_list");
	 while(list.childNodes.length){
	 list.removeChild(list.childNodes[list.childNodes.length - 1]);
	 }
	}
	
function concatLista(){
	var num = document.getElementById("noImputados").value;
	var nombres;
	var edades;
	var generos; 
	var concatenado = [];
	var count = 0;
	var count2 = 0;
	
	for(var i = 1; i <= num; i++){
		nombres = document.getElementById("nombreTxt"+i).value.toUpperCase();		
		edades = document.getElementById("edadTxt"+i).value;
		generos = document.getElementById("generoTxt"+i).value.toUpperCase();	
		
		concatenado[i-1] = (" "+i+".- "+nombres +", "+ edades +" Años");	
						
		if(generos=="M"||generos=="m"){
			++count;			
		}		
		if(generos=="F"||generos=="f"){
			++count2;			
		}		
	}
	document.getElementById("masculino").value = count;
	document.getElementById("femenino").value = count2;
	document.getElementById("probableResponsable").value = concatenado;
		
}
</script>

		
		<div class="form-inline">		
		<label for="masculino" class="col-lg-3 control-label">Total Masculino</label>
		<div class="col-lg-3">		
		<tag:input path="masculino" id="masculino" class="campo5 form-control" readonly="true"/>
		</div>
		
		<label for="femenino" class="col-lg-3 control-label">Total Femenino</label>
		<div class="col-lg-3">		
		<tag:input path="femenino" id="femenino" class="campo5 form-control" readonly="true"/>
		</div>		
		</div><br><br><br>
		
		
		<br>
		
		<div class="form-group">
		<label for="denunciante" class="col-lg-2 control-label">Denunciante</label>
		<div class="col-lg-10">
		<tag:textarea required="true" path="denunciante" id="denunciante" placeholder="Máx. 255 caracteres" maxlength="255" class="form-control textoMayuscula" onchange="mayusculas()"/>
		</div>
		</div> 
		
		<div class="form-group">
		<label for="descripcion" class="col-lg-2 control-label">Descripción Breve de los Hechos</label>
		<div class="col-lg-10">
		<tag:textarea required="true" path="descripcion" id="descripcion" placeholder="Máx. 400 caracteres" maxlength="400" class="form-control textoMayuscula" rows="3" onchange="mayusculas()"/>
		</div>
		</div> 
		
		<div class="form-group">
		<label for="listasTramite" class="col-lg-2 control-label">Trámite</label>
		<div class="col-lg-10">
		<tag:hidden path="idTramiteFK" id="idTramiteFK" placeholder="tram"/>
		<div id="listasTramite">		
		<select name="categoriaTramite" id="categoriaTramite" onChange="valorC()" class="form-control">
                <option selected value="0">--- Elija Trámite ---</option>
                <option value="15" class="letraNegrita">CONTINUADA</option>
                <option value="1" class="letraNegrita" disabled>LIBERTADES</option>
                <option value="2" class="letraNegrita" disabled>INCOMPETENCIAS</option>
                <option value="16" class="letraNegrita" disabled>JUDICIALIZADA</option>
        </select> 
 
            
            </div>
            </div>
		</div>
		
		
	<br><br>
	
		<center><tag:button onclick="return verificarCamposReg()" class="btn btn-primary">REGISTRAR REPORTE</tag:button></center>
	</tag:form>
	
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

$('#idDelitoFK').select2({
	theme: 'bootstrap'
});	


//Año Actual
var dia = new Date();		
var anhioActual = dia.getFullYear();		
document.getElementById("anhioD").setAttribute("max", anhioActual);
document.getElementById("anhioR").setAttribute("max", anhioActual);

var varCT = document.getElementById("categoriaTramite");

var varAver = document.getElementById("categoriaAveriguacion");
var varDirecta = document.getElementById("camposDirecta");
var varRelacionada = document.getElementById("camposRelacionada");    
var varColaboracion = document.getElementById("colaborativa");
var varCoordT = document.getElementById("coordTerritorial");
hideCombosAveriguacion();

var varListaEsGAM = document.getElementById("esDeGAM"); //---form-group de perteneceGAM
var varCampoNoGAM = document.getElementById("relacNoGAM"); //----form-group de relacNoGAM
hideComboesGAM();

</script>

</body>
</html>