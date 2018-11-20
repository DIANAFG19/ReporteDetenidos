
//Mayusculas en cajas de texto
	function mayusculas() {
		//Lugar Hechos
		var lugar = document.getElementById("lugarHechos").value.toUpperCase();
		document.getElementById("lugarHechos").value = lugar;
		
		//Imputado(s)
		var responsable = document.getElementById("probableResponsable").value.toUpperCase();
		document.getElementById("probableResponsable").value = responsable;
		
		//Denunciante
		var denunciante = document.getElementById("denunciante").value.toUpperCase();
		document.getElementById("denunciante").value = denunciante;
		
		//Descripcion
		var descripcion = document.getElementById("descripcion").value.toUpperCase();
		document.getElementById("descripcion").value = descripcion;
		
		/*//Antecedentes
		var antecedentes = document.getElementById("tieneAntecedentes").value.toUpperCase();
		document.getElementById("tieneAntecedentes").value = antecedentes;*/
		
	}

//Coord. Territorial
	function valorCT() {
		var CT = document.getElementById("idCTFK").value;
		var coord = document.getElementById("coord");
		var coordD = document.getElementById("coordD");
		var coordR = document.getElementById("coordR");
		var fisc = document.getElementById("fiscalia");
		var fiscD = document.getElementById("fiscaliaD");		
		var fiscR = document.getElementById("fiscaliaR");				
		
		if(CT==1){
        	coord.setAttribute("value", "GAM-1");
        	coordD.value ="GAM-1";
        	coordR.value ="GAM-1";
        	fisc.setAttribute("value", "CI-FGAM");
        	fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==2){
	        coord.setAttribute("value", "GAM-2");
	        coordD.value ="GAM-2";
        	coordR.value ="GAM-2";
	        fisc.setAttribute("value", "CI-FGAM");
	        fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==3){
	        coord.setAttribute("value", "GAM-3");
	        coordD.value ="GAM-3";
        	coordR.value ="GAM-3";
	        fisc.setAttribute("value", "CI-FGAM");
	        fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==4){
	        coord.setAttribute("value", "GAM-4");
	        coordD.value ="GAM-4";
        	coordR.value ="GAM-4";
	        fisc.setAttribute("value", "CI-FGAM");
	        fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==5){
	        coord.setAttribute("value", "GAM-5");
	        coordD.value ="GAM-5";
        	coordR.value ="GAM-5";
	        fisc.setAttribute("value", "CI-FGAM");
	        fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==6){
	        coord.setAttribute("value", "GAM-6");
	        coordD.value ="GAM-6";
        	coordR.value ="GAM-6";
	        fisc.setAttribute("value", "CI-FGAM");
	        fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==7){
	        coord.setAttribute("value", "GAM-7");
	        coordD.value ="GAM-7";
        	coordR.value ="GAM-7";
	        fisc.setAttribute("value", "CI-FGAM");
	        fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==8){
	        coord.setAttribute("value", "GAM-8");
	        coordD.value ="GAM-8";
        	coordR.value ="GAM-8";
	        fisc.setAttribute("value", "CI-FGAM");
	        fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==9){
	        coord.setAttribute("value", "H-5");
	        coordD.value ="H-5";
        	coordR.value ="H-5";
        	fisc.setAttribute("value", "CI-FGAM");
	        fiscD.value = "CI-FGAM";
        	fiscR.value = "CI-FGAM";
		}
		else if(CT==0){
	        coord.setAttribute("value", "");
	        coordD.value ="";
        	coordR.value ="";
	        fisc.setAttribute("value", "");
        	fiscD.value = "";
        	fiscR.value = "";
		}
    }
	
	//Tipo Averiguacion
	function categOpcAveriguacion() {    	
        var value = parseInt( varAver.options[varAver.selectedIndex].value);
        hideCombosAveriguacion();
        
        switch (value) {   
        	case 0:
        		hide(varListaEsGAM);
                hide(varCampoNoGAM);
        	break;
        	case 1 :
        		document.getElementById("idCTFK").disabled = false;
        		
            	document.getElementById("numFolioD").required = true;
        		document.getElementById("numMesD").required = true;
        		document.getElementById("anhioD").required = true;
        		document.getElementById("numFolioR").required = false;
        		document.getElementById("numMesR").required = false;
        		document.getElementById("anhioR").required = false;
        		document.getElementById("relacionadaR").required = false;
        		
        		document.getElementById("conDetD").disabled = false;
        		document.getElementById("conDetR").disabled = true;        		
                
        		hide(varListaEsGAM);
                hide(varCampoNoGAM);
                
        		show(varDirecta);
                show(varCoordT);                
                break;
            case 2 :
            	show(varListaEsGAM);
            	
            	
                //hide(varCampoNoGAM);
                
        		hide(varRelacionada);
                show(varCoordT); //********************************************** era hide() 
            	/*if(perteneceA_Gam.value == 1){ //Es de GAM relacionada
            		show(varCoordT); 
            		show(varRelacionada);
                                     
            		document.getElementById("numFolioD").required = false;
            		document.getElementById("numMesD").required = false;
            		document.getElementById("anhioD").required = false;
            		document.getElementById("numFolioR").required = true;
            		document.getElementById("numMesR").required = true;
            		document.getElementById("anhioR").required = true;
            		document.getElementById("relacionadaR").required = true;
            		
            		document.getElementById("conDetD").disabled = true;
            		document.getElementById("conDetR").disabled = false; 
            		
                    hide(varCampoNoGAM);            		
            		                   
            	}
            	else if(perteneceA_Gam.value == 2){ //No es de GAM relacionada
                    show(varCampoNoGAM);
                    hide(varRelacionada);
                    hide(varCoordT); 
                    
            		document.getElementById("numFolioD").required = false;
            		document.getElementById("numMesD").required = false;
            		document.getElementById("anhioD").required = false;
            		document.getElementById("numFolioR").required = false;
            		document.getElementById("numMesR").required = false;
            		document.getElementById("anhioR").required = false;
            		document.getElementById("relacionadaR").required = false;
            		
            		document.getElementById("conDetD").disabled = true;
            		document.getElementById("conDetR").disabled = true;
                    
            	}*/
            	            	
                break;
            case 3 :
            	document.getElementById("idCTFK").disabled = false;
            	
            	//Si es Colaborativa deshabilitar campos de directa y relacionada
            	document.getElementById("numFolioD").required = false;
        		document.getElementById("numMesD").required = false;
        		document.getElementById("anhioD").required = false;
        		document.getElementById("numFolioR").required = false;
        		document.getElementById("numMesR").required = false;
        		document.getElementById("anhioR").required = false;
        		document.getElementById("relacionadaR").required = false;
        		
        		document.getElementById("conDetD").disabled = true;
        		document.getElementById("conDetR").disabled = true;
        		
        		hide(varListaEsGAM);
                hide(varCampoNoGAM);
                
                show(varColaboracion);
                show(varCoordT);                
                break;
            default :            	
                break; 
        }               
    }		
    function hideCombosAveriguacion() {
        hide(varDirecta);
        hide(varRelacionada);         
        hide(varColaboracion);
        show(varCoordT); //********************************************** era hide()
        
        
    }
    function hide(elem) {
        elem.style.display = 'none';
    }
    function show(elem) {
        elem.style.display = 'inline';
    }
    
    function categoriaEsGAM() {
    	var perteneceA_Gam = document.getElementById("perteneceGAM");
        var value2 = parseInt( perteneceA_Gam.options[perteneceA_Gam.selectedIndex].value);
        /*var varListaEsGAM = document.getElementById("esDeGAM"); //----SE AGREGO
        var varCampoNoGAM = document.getElementById("relacNoGAM"); //----SE AGREGO*/
        hideComboesGAM();
        
        switch (value2) {
        case 0:
        	//document.getElementById("idCTFK").disabled = false;
        	document.getElementById("fiscaliaR").value = "";
        	//document.getElementById("coordR").value = "";
        	document.getElementById("fiscalia").setAttribute("value", "");
        	//document.getElementById("coord").setAttribute("value", ""); /*----*/
        	
        	show(varListaEsGAM);
        	hide(varCampoNoGAM); 
			hide(varRelacionada);
            show(varCoordT); //********************************************** era hide()
        	break;
        case 1:
        	show(varListaEsGAM);
        	hide(varCampoNoGAM); 
			show(varRelacionada);
            show(varCoordT); 
            //document.getElementById("idCTFK").disabled = false;
            document.getElementById("fiscaliaR").value = "CI-FGAM";
            document.getElementById("fiscalia").setAttribute("value", "CI-FGAM");
            
    		document.getElementById("numFolioD").required = false;
    		document.getElementById("numMesD").required = false;
    		document.getElementById("anhioD").required = false;
    		document.getElementById("numFolioR").required = true;
    		document.getElementById("numMesR").required = true;
    		document.getElementById("anhioR").required = true;
    		document.getElementById("relacionadaR").required = true;
    		
    		document.getElementById("conDetD").disabled = true;
    		document.getElementById("conDetR").disabled = false; 
    		
            
			break;
		case 2:
			show(varListaEsGAM);
            show(varCampoNoGAM);
            hide(varRelacionada);
            show(varCoordT); /*<----------------*/
            //document.getElementById("idCTFK").disabled = false; 
            //document.getElementById("idCTFK").selectedIndex = 0;
            /*----------------*/
            
            document.getElementById("fiscaliaR").value = "";
        	//document.getElementById("coordR").value = "";
        	document.getElementById("fiscalia").setAttribute("value", "");
        	//document.getElementById("coord").setAttribute("value", ""); /*----setAttribute funcionó*/
            
    		document.getElementById("numFolioD").required = false;
    		document.getElementById("numMesD").required = false;
    		document.getElementById("anhioD").required = false;
    		document.getElementById("numFolioR").required = false;
    		document.getElementById("numMesR").required = false;
    		document.getElementById("anhioR").required = false;
    		document.getElementById("relacionadaR").required = false;
    		
    		document.getElementById("conDetD").disabled = true;
    		document.getElementById("conDetR").disabled = true;                  
            
			break;

		default:
			break;
		}
        
	}
    
    function hideComboesGAM(){
    	hide(varListaEsGAM);
        hide(varCampoNoGAM);
    }
    
    function cleanCampos() {
    	var Averiguacion = document.getElementById("categoriaAveriguacion");
        if(Averiguacion.value==1) {		
        	document.getElementById("perteneceGAM").selectedIndex = 0;
        	
        	//document.getElementById("coordD").value = "";
        	document.getElementById("conDetD").selectedIndex = 0;        	
        	document.getElementById("numFolioD").value = "";
        	document.getElementById("numMesD").value = "";
        	document.getElementById("anhioD").value = "";
        	document.getElementById("bisD").value = "";
        	
        	//document.getElementById("coordR").value = "";
        	document.getElementById("conDetR").selectedIndex = 0;
        	document.getElementById("numFolioR").value = "";
        	document.getElementById("numMesR").value = "";
        	document.getElementById("anhioR").value = "";
        	document.getElementById("relacionadaR").value = "";
        	
        	//document.getElementById("fiscalia").setAttribute("value", "");
        	//document.getElementById("coord").setAttribute("value", ""); ////ESTABA COMENTADO
        	document.getElementById("conDetenido").setAttribute("value", "");
        	document.getElementById("folio").setAttribute("value", "");
        	document.getElementById("mes").setAttribute("value", "");
        	document.getElementById("anhio").setAttribute("value", "");
        	document.getElementById("bis").setAttribute("value", "");
        	document.getElementById("relacionada").setAttribute("value", "");
        	
        	//document.getElementById("idCTFK").selectedIndex = 0;
        	
        	document.getElementById("carpetaInvestigacion").setAttribute("value", "");
        	document.getElementById("relacionadaNoGAM").value = "";
    	}
        else if(Averiguacion.value==2) {
        	//document.getElementById("coordR").value = "";
        	document.getElementById("conDetR").selectedIndex = 0;
        	document.getElementById("numFolioR").value = "";
        	document.getElementById("numMesR").value = "";
        	document.getElementById("anhioR").value = "";
        	document.getElementById("relacionadaR").value = "";
        	
        	//document.getElementById("coordD").value = "";
        	document.getElementById("conDetD").selectedIndex = 0;        	
        	document.getElementById("numFolioD").value = "";
        	document.getElementById("numMesD").value = "";
        	document.getElementById("anhioD").value = "";
        	document.getElementById("bisD").value = "";
        	
        	//document.getElementById("fiscalia").setAttribute("value", ""); //-------
        	//document.getElementById("coord").setAttribute("value", ""); /*----------------------*/
        	document.getElementById("conDetenido").setAttribute("value", "");
        	document.getElementById("folio").setAttribute("value", "");
        	document.getElementById("mes").setAttribute("value", "");
        	document.getElementById("anhio").setAttribute("value", "");
        	document.getElementById("bis").setAttribute("value", "");
        	document.getElementById("relacionada").setAttribute("value", "");
        	
        	//document.getElementById("idCTFK").selectedIndex = 0;
        	
        	document.getElementById("carpetaInvestigacion").setAttribute("value", "");
    	}
        else if(Averiguacion.value==3) {
        	document.getElementById("perteneceGAM").selectedIndex = 0;
        	
        	//document.getElementById("idCTFK").selectedIndex = 0;
        	
        	document.getElementById("colaboracion").value = "";
        	document.getElementById("carpetaInvestigacion").setAttribute("value", "");
        	
        	//document.getElementById("fiscaliaD").value = "";
        	//document.getElementById("coordD").value = "";
        	document.getElementById("conDetD").selectedIndex = 0;
        	document.getElementById("numFolioD").value = "";
        	document.getElementById("numMesD").value = "";
        	document.getElementById("anhioD").value = "";
        	document.getElementById("bisD").value = "";
        	
        	//document.getElementById("fiscaliaR").value = "";
        	//document.getElementById("coordR").value = "";
        	document.getElementById("conDetR").selectedIndex = 0;
        	document.getElementById("numFolioR").value = "";
        	document.getElementById("numMesR").value = "";
        	document.getElementById("anhioR").value = "";
        	document.getElementById("relacionadaR").value = "";
        	
        	//document.getElementById("fiscalia").setAttribute("value", "");
        	//document.getElementById("coord").setAttribute("value", "");
        	document.getElementById("conDetenido").setAttribute("value", "");
        	document.getElementById("folio").setAttribute("value", "");
        	document.getElementById("mes").setAttribute("value", "");
        	document.getElementById("anhio").setAttribute("value", "");
        	document.getElementById("bis").setAttribute("value", "");
        	document.getElementById("relacionada").setAttribute("value", "");
        	
        	document.getElementById("relacionadaNoGAM").value = "";
        }
        else if(Averiguacion.value==0) {
        	document.getElementById("perteneceGAM").selectedIndex = 0;
        	//document.getElementById("idCTFK").selectedIndex = 0;
        	
        	//document.getElementById("fiscaliaD").value = "";
        	//document.getElementById("coordD").value = "";
        	document.getElementById("conDetD").selectedIndex = 0;
        	document.getElementById("numFolioD").value = "";
        	document.getElementById("numMesD").value = "";
        	document.getElementById("anhioD").value = "";
        	document.getElementById("bisD").value = "";
        	
        	//document.getElementById("fiscaliaR").value = "";
        	//document.getElementById("coordR").value = "";
        	document.getElementById("conDetR").selectedIndex = 0;
        	document.getElementById("numFolioR").value = "";
        	document.getElementById("numMesR").value = "";
        	document.getElementById("anhioR").value = "";
        	document.getElementById("relacionadaR").value = "";
        	
        	//document.getElementById("fiscalia").setAttribute("value", "");
        	//document.getElementById("coord").setAttribute("value", "");
        	document.getElementById("conDetenido").setAttribute("value", "");
        	document.getElementById("folio").setAttribute("value", "");
        	document.getElementById("mes").setAttribute("value", "");
        	document.getElementById("anhio").setAttribute("value", "");
        	document.getElementById("bis").setAttribute("value", "");
        	document.getElementById("relacionada").setAttribute("value", "");
        	
        	document.getElementById("carpetaInvestigacion").setAttribute("value", "");
        	document.getElementById("relacionadaNoGAM").value = "";
    	}
	}
    
    function limpiarRelGAM() {
    	var opcionRelacionada = document.getElementById("perteneceGAM");
    	if(opcionRelacionada.value==1) {
    		//document.getElementById("idCTFK").selectedIndex = 0;
    		document.getElementById("relacionadaNoGAM").value = "";
    		
    		//document.getElementById("coordR").value = "";
        	document.getElementById("conDetR").selectedIndex = 0;
        	document.getElementById("numFolioR").value = "";
        	document.getElementById("numMesR").value = "";
        	document.getElementById("anhioR").value = "";
        	document.getElementById("relacionadaR").value = "";
        	
        	//document.getElementById("fiscalia").setAttribute("value", "");
        	//document.getElementById("coord").setAttribute("value", "");
        	document.getElementById("conDetenido").setAttribute("value", "");
        	document.getElementById("folio").setAttribute("value", "");
        	document.getElementById("mes").setAttribute("value", "");
        	document.getElementById("anhio").setAttribute("value", "");
        	document.getElementById("bis").setAttribute("value", "");
        	document.getElementById("relacionada").setAttribute("value", "");
        	
        	document.getElementById("carpetaInvestigacion").setAttribute("value", "");
   	 	} 
    	if(opcionRelacionada.value==2) {
    		//document.getElementById("idCTFK").selectedIndex = 0;
    		document.getElementById("relacionadaNoGAM").value = "";
    		
    		//document.getElementById("coordR").value = "";
        	document.getElementById("conDetR").selectedIndex = 0;
        	document.getElementById("numFolioR").value = "";
        	document.getElementById("numMesR").value = "";
        	document.getElementById("anhioR").value = "";
        	document.getElementById("relacionadaR").value = "";
        	
        	//document.getElementById("fiscalia").setAttribute("value", "");
        	//document.getElementById("coord").setAttribute("value", "");
        	document.getElementById("conDetenido").setAttribute("value", "");
        	document.getElementById("folio").setAttribute("value", "");
        	document.getElementById("mes").setAttribute("value", "");
        	document.getElementById("anhio").setAttribute("value", "");
        	document.getElementById("bis").setAttribute("value", "");
        	document.getElementById("relacionada").setAttribute("value", "");
        	
        	document.getElementById("carpetaInvestigacion").setAttribute("value", "");    		 
    	}
    	if(opcionRelacionada.value==0) {	
    		//document.getElementById("idCTFK").selectedIndex = 0;
    		document.getElementById("relacionadaNoGAM").value = "";
    		
    		//document.getElementById("coordR").value = "";
        	document.getElementById("conDetR").selectedIndex = 0;
        	document.getElementById("numFolioR").value = "";
        	document.getElementById("numMesR").value = "";
        	document.getElementById("anhioR").value = "";
        	document.getElementById("relacionadaR").value = "";
        	
        	//document.getElementById("fiscalia").setAttribute("value", "");
        	//document.getElementById("coord").setAttribute("value", "");
        	document.getElementById("conDetenido").setAttribute("value", "");
        	document.getElementById("folio").setAttribute("value", "");
        	document.getElementById("mes").setAttribute("value", "");
        	document.getElementById("anhio").setAttribute("value", "");
        	document.getElementById("bis").setAttribute("value", "");
        	document.getElementById("relacionada").setAttribute("value", "");
        	
        	document.getElementById("carpetaInvestigacion").setAttribute("value", "");   		 
   	 }
	}
    	
	//Con detenido
	function valorCDet() {
		var conDet = document.getElementById("conDetD").value;
		var conDeten = document.getElementById("conDetenido");
		if(conDet==1){
        	conDeten.setAttribute("value", "UI-1CD");        	
		}
		else if(conDet==2){
        	conDeten.setAttribute("value", "UI-2CD");        	
		}
		else if(conDet==3){
        	conDeten.setAttribute("value", "UI-3CD");        	
		}
		else if(conDet==0){
        	conDeten.setAttribute("value", "");        	
		}
	}
	function valorCDetR() {
		var conDet = document.getElementById("conDetR").value;
		var conDeten = document.getElementById("conDetenido");
		if(conDet==1){
        	conDeten.setAttribute("value", "UI-1CD");        	
		}
		else if(conDet==2){
        	conDeten.setAttribute("value", "UI-2CD");        	
		}
		else if(conDet==3){
        	conDeten.setAttribute("value", "UI-3CD");        	
		}
		else if(conDet==0){
        	conDeten.setAttribute("value", "");        	
		}
	}
			
	//Folio
	function valorFolio() {
		var noFolioD = parseInt(document.getElementById("numFolioD").value);
		document.getElementById("folio").setAttribute("value", noFolioD);
	}
	function valorFolioR() {
		var noFolioR = parseInt(document.getElementById("numFolioR").value);
		document.getElementById("folio").setAttribute("value", noFolioR);
	}
	
	//Mes
	function valornumMes() {
		var mes = parseInt(document.getElementById("numMesD").value);		
		if(mes <= 9) {			
		    mes='0'+mes;
		}
		document.getElementById("mes").setAttribute("value", mes);
	}
	
	function valornumMesR() {
		var mes = parseInt(document.getElementById("numMesR").value);
		if(mes <= 9) {
		    mes='0'+mes;
		}						
		document.getElementById("mes").setAttribute("value", mes);
	}
	
	//Anhio
	function valorAnhio() {
		var anhioD = document.getElementById("anhioD").value;
		document.getElementById("anhio").setAttribute("value", anhioD);
	}
	function valorAnhioR() {
		var anhioR = document.getElementById("anhioR").value;
		document.getElementById("anhio").setAttribute("value", anhioR);
	}
	
	//Bis
	function valorBis() {
		var bisD = document.getElementById("bisD").value.toUpperCase();
		document.getElementById("bis").setAttribute("value", bisD);
	}
	
	//Relacionada
	function valorRelacionada() {
		var relR = document.getElementById("relacionadaR").value.toUpperCase();
		document.getElementById("relacionada").setAttribute("value", relR);
	}	
	
	//CONCATENAR CAMPOS C.I. Directa
	function carpeta() {
		var fiscalia = document.getElementById("fiscalia").value;
		var coord = document.getElementById("coord").value;
		var conDeten = document.getElementById("conDetenido").value;		
		var folio = document.getElementById("folio").value; 
		var mes = document.getElementById("mes").value;
		var anhio = document.getElementById("anhio").value;
		var bis = document.getElementById("bis").value;
		var diagonal = "/";
		var guion = "-";
		var espacio = " ";
		
		if(document.getElementById("categoriaAveriguacion").value == 1){ //se agrego el if
			var carpetaInv = fiscalia+diagonal+coord+diagonal+conDeten+diagonal+folio+diagonal+mes+guion+anhio+espacio+bis;		
			document.getElementById("carpetaInvestigacion").setAttribute("value", carpetaInv);
		}
	    }
	
	 //Concatenara C.I. Relacionada
    function carpetaRel() {	
		
		if(document.getElementById("categoriaAveriguacion").value == 2 && document.getElementById("perteneceGAM").value == 1){ //se agrego el if
			var fiscalia = document.getElementById("fiscalia").value;
			var coord = document.getElementById("coord").value;
			var conDeten = document.getElementById("conDetenido").value;		
			var folio = document.getElementById("folio").value; 
			var mes = document.getElementById("mes").value;
			var anhio = document.getElementById("anhio").value;
			var relacionada = document.getElementById("relacionada").value;
			var diagonal = "/";
			var guion = "-";
			var espacio = " ";
			
			var carpetaInv = fiscalia+diagonal+coord+diagonal+conDeten+diagonal+folio+diagonal+mes+guion+anhio+espacio+relacionada;		
			document.getElementById("carpetaInvestigacion").setAttribute("value", carpetaInv);
		}
	    }
    
  //Colaboracion
	function valorColaboracion() {
		var carpetaInv = document.getElementById("colaboracion").value.toUpperCase();
		document.getElementById("carpetaInvestigacion").setAttribute("value", carpetaInv);
	}
	
	//
	function valorRelacionadaGAM() {
		var relacionadaGAM = document.getElementById("relacionadaNoGAM").value.toUpperCase();
		document.getElementById("carpetaInvestigacion").setAttribute("value", relacionadaGAM);
	}

	
    
   
	function valorC() {
		if(document.getElementById("categoriaTramite").value == 15){			
		var cd = document.getElementById("categoriaTramite").value;
        document.getElementById("idTramiteFK").value = cd;        /////////////////////
		}
		else if(document.getElementById("categoriaTramite").value == 16){			
			var cd = document.getElementById("categoriaTramite").value;
	        document.getElementById("idTramiteFK").setAttribute("value", cd);
		}
		else {		
	    document.getElementById("idTramiteFK").value = 0; //////////////////
		}
	}
			
	//VALIDAR CAMPOS
	function verificarCamposReg(){
		var todo_correcto = true;
		
		//Relacionada opcion pertenece
		if(document.getElementById("categoriaAveriguacion").value == 2 && document.getElementById("perteneceGAM").value == 0) {
			todo_correcto = false;
			alert("Falta elegir opci\u00f3n de Relacionada");
		}
		//Relacionada NO GAM
		if(document.getElementById("categoriaAveriguacion").value == 2 && document.getElementById("perteneceGAM").value == 2 && document.getElementById("relacionadaNoGAM").value == "") {
			todo_correcto = false;
			alert("Falta escribir la Carpeta Relacionada");
		}
		//C.T			
		if(document.getElementById("idCTFK").value == 0 && document.getElementById("categoriaAveriguacion").value == 1){
			todo_correcto = false;
			alert("Falta elegir Coordinaci\u00f3n Territorial para Directa.");
		}
		if(document.getElementById("categoriaAveriguacion").value == 2 && document.getElementById("perteneceGAM").value == 1 && document.getElementById("idCTFK").value == 0){
			todo_correcto = false;
			alert("Falta elegir Coordinaci\u00f3n Territorial para Relacionada.");
		}
		if(document.getElementById("categoriaAveriguacion").value == 3 && document.getElementById("idCTFK").value == 0){
			todo_correcto = false;
			alert("Falta elegir Coordinaci\u00f3n Territorial de Colaboraci\u00f3n");
		}
		
		//Carpeta de Investigación
		if(document.getElementById("categoriaAveriguacion").value == 0){
			todo_correcto = false;
			alert("Falta elegir Carpeta de Investigaci\u00f3n.");
		}
				
		//Con Detenido (Unidad)
		if(document.getElementById("conDetD").value == 0 && document.getElementById("categoriaAveriguacion").value == 1){
			todo_correcto = false;
			alert("Falta elegir unidad en Directa.");
		}
		if(document.getElementById("conDetR").value == 0 && document.getElementById("categoriaAveriguacion").value == 2 && document.getElementById("perteneceGAM").value == 1){
			todo_correcto = false;
			alert("Falta elegir unidad en Relacionada.");
		}
		
		
		//Delito
		if(document.getElementById("idDelitoFK").value == 0){
			todo_correcto = false;
			alert("Falta elegir Delito");
		}
		
		//Remite
		if(document.getElementById("idRemiteFK").value == 0){
			todo_correcto = false;
			alert("Falta elegir quien Remite");
		}
		

		//Tramite
		if(document.getElementById("categoriaTramite").value == 0){
			todo_correcto = false;
			alert("Falta elegir Tr\u00e1mite");
		}
		
		
		//Colaborativa
		if(document.getElementById("colaboracion").value == "" && document.getElementById("categoriaAveriguacion").value == 3){
			todo_correcto = false;
			alert("Falta escribir la Carpeta de Colaboraci\u00f3n");
		}
		/*
		else if(document.getElementById("categoriaAveriguacion").value != 0 &&  document.getElementById("idCTFK").value != 0 && document.getElementById("hora").value != "" && document.getElementById("fechaInicio").value != "" && document.getElementById("idDelitoFK").value != 0 && document.getElementById("lugarHechos").value != "" && document.getElementById("idRemiteFK").value != 0 && document.getElementById("noImputados").value != 0 && document.getElementById("denunciante").value != "" && document.getElementById("descripcion").value != "" && document.getElementById("categoriaTramite").value != "" && document.getElementById("fecha").value != "" && document.getElementById("idTurnoFK").value != 0){		
			alert("Su reporte se ha registrado.");
			todo_correcto = true;
		}
		else if(document.getElementById("categoriaAveriguacion").value != 0 &&  document.getElementById("idCTFK").value != 0 && document.getElementById("hora").value != "" && document.getElementById("fechaInicio").value != "" && document.getElementById("idDelitoFK").value != 0 && document.getElementById("lugarHechos").value != "" && document.getElementById("idRemiteFK").value != 0 && document.getElementById("noImputados").value != 0 && document.getElementById("denunciante").value != "" && document.getElementById("descripcion").value != "" && document.getElementById("categoriaTramite").value == 3){
			alert("Su reporte se ha registrado.");
			todo_correcto = true;
		}*/
		return todo_correcto;
	}
	
    
    //Imputado(s) (PROBABLES RESPONSABLES)
    function limpiarImputados() {
		document.getElementById("probableResponsable").value = "";
		
	}
    
    
    
    