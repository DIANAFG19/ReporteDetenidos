function initMapa() {    	 
	  //Mapa creado para la consulta de incidentes
	  var map = new google.maps.Map(document.getElementById('mapa'), {	  
	     zoom: 18,
	     streetViewControl: false,
	     fullscreenControl: true,
	     clickableIcons: false,
	     keyboardShortcuts: false,
	     minZoom: 17,
	     center: new google.maps.LatLng(19.503226554097157, -99.18702644418028),
	     mapTypeId: google.maps.MapTypeId.ROADMAP
	   });

	   //LIMITES DEL MAPA
	   //Coordenadas para indicar los límites para la región de la UAM Azcapotzalco
	   var limites = new google.maps.LatLngBounds(
	   new google.maps.LatLng(19.501294912898693, -99.19066351960447), //Esquina inferior izquierda
	   new google.maps.LatLng(19.50516828535336, -99.18338936875608)); //Esquina superior derecha

	   //Escucha el evento 'dragend' para saber cuando se arrastrar el mapa
	   google.maps.event.addListener(map, 'dragend', function () {
	       if (limites.contains(map.getCenter())) return;

	   //Cuando está fuera de los límites: mueve el mapa dentro de ellos
	   var c = map.getCenter(),
	       x = c.lng(),
	       y = c.lat(),
	       maxX = limites.getNorthEast().lng(),
	       maxY = limites.getNorthEast().lat(),
	       minX = limites.getSouthWest().lng(),
	       minY = limites.getSouthWest().lat();
	   if (x < minX) x = minX;
	   if (x > maxX) x = maxX;
	   if (y < minY) y = minY;
	   if (y > maxY) y = maxY;

	   map.setCenter(new google.maps.LatLng(y, x));
	  });
    
	  //COORDENADAS PARA COLOCAR MARCADORES DE LOS EDIFICIOS, ENTRADAS, VIGILANCIA, PROT.CIVIL, SERV. MEDICO  
	   var coordVigilancia = {lat: 19.502998290514554, lng: -99.18617762681936}; 
	   var coordPCivil = {lat: 19.503371216495335, lng: -99.1852482413957};
	   var coordServMedico = {lat: 19.50304000770083, lng: -99.18638650384639};
	   	var coordB = {lat: 19.503106459275735, lng: -99.18461379717138};
        var coordC = {lat: 19.50305210053815 , lng: -99.18531385372427};
        var coordD = {lat: 19.502385888478255, lng: -99.1852105886772};
        var coordE = {lat: 19.502959101632772, lng: -99.18596305009817};
        var coordF = {lat: 19.50368797021138, lng: -99.18546942184713};
        var coordG = {lat: 19.5035843097196, lng: -99.18615740845945};
        var coordGbis = {lat: 19.503976611779493, lng: -99.18580369214561};
        var coordH = {lat: 19.503106459276612, lng: -99.18698889325407};
        var coordHO = {lat: 19.502808118072423, lng: -99.18659460852888};
        var coordHP = {lat: 19.502967402004234, lng: -99.1874260933235};
        var coordI = {lat: 19.503907932498965, lng: -99.1868494183853};
        var coordJ = {lat: 19.503603055115825, lng: -99.18734830926206};
        var coordK = {lat: 19.5032996582078, lng: -99.18785256455686};
        var coordL = {lat: 19.503833130725248, lng: -99.18801349709776};
        var coordM = {lat: 19.504452563431514, lng: -99.18841582844999};
        var coordO = {lat: 19.5037610741138, lng: -99.18880340765264};
        var coordP = {lat: 19.503513300256927, lng: -99.18907967518118};
        var coordP1 = {lat: 19.503871055245327, lng: -99.18842789839056};
        var coordP2 = {lat: 19.503940583508356, lng: -99.1889750690296};
        var coordP3 = {lat: 19.50404171547381, lng: -99.18953699181822};
        var coordP4 = {lat: 19.503798998651092, lng: -99.18934789608267};
        var coordQ = {lat: 19.504308450729056, lng: -99.19035104225424};
        var coordR = {lat: 19.50306705352769, lng: -99.18961209367063};
        var coordS = {lat: 19.504199734043443, lng: -99.1887055070236};
        var coordT = {lat: 19.504245243362977, lng: -99.18747169087675};
        var coordW = {lat: 19.503045562861416, lng: -99.18890935490873};
        var coordE2 = {lat: 19.501794176181956, lng: -99.18384980467056};
        var coordE4 = {lat: 19.50279444501755, lng: -99.18361980524753};
        var coordE5 = {lat: 19.503311485188423, lng: -99.183502123327};
        var coordE6 = {lat: 19.504810765924432, lng: -99.18906670120452};
        var coordE7 = {lat: 19.502932238280973, lng: -99.19016808328126};
        
     //ICONOS DE LOS MARCADORES EDIFICIOS, ENTRADAS, VIGILANCIA, PROT.CIVIL, SERV. MEDICO
      var vigilancia = document.getElementById("vigilancia").src; //icono vigilancia
      var proteccionCivil = document.getElementById("protCivil").src; //icono protección civil
      var servicioMedico = document.getElementById("servMedico").src; //icono servicio médico
      var circleWhite = document.getElementById("circleW").src; //icono edificios
      var circleBlack = document.getElementById("circleB").src; //icono entradas                                
      
      //SE CREAN LOS MARCADORES
      var markerVigilancia = new google.maps.Marker({
    		position: coordVigilancia, map: map, icon: vigilancia});
      var markerPCivil = new google.maps.Marker({
  		position: coordPCivil, map: map, icon: proteccionCivil});
      var markerservMedico = new google.maps.Marker({
    		position: coordServMedico, map: map, icon: servicioMedico});      
      var markerB = new google.maps.Marker({
      		position: coordB, map: map, icon: circleWhite,    	
      		label:{text:"B", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerC = new google.maps.Marker({
      		position: coordC, map: map, icon: circleWhite,
      		label:{text:"C", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerD = new google.maps.Marker({
      		position: coordD, map: map, icon: circleWhite,
      		label:{text:"D", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerE = new google.maps.Marker({
      		position: coordE, map: map, icon: circleWhite,
      		label:{text:"E", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerF = new google.maps.Marker({
      		position: coordF, map: map, icon: circleWhite,
      		label:{text:"F", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerG = new google.maps.Marker({
      		position: coordG, map: map, icon: circleWhite,
      		label:{text:"G", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerGbis = new google.maps.Marker({
      		position: coordGbis, map: map, icon: circleWhite,
      		label:{text:"Gbis", fontSize:"8px", color:'red', fontWeight:"bold"}});        
      var markerH = new google.maps.Marker({
      		position: coordH, map: map, icon: circleWhite,
      		label:{text:"H", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerHO = new google.maps.Marker({
      		position: coordHO, map: map, icon: circleWhite,
      		label:{text:"HO", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerHP = new google.maps.Marker({
      		position: coordHP, map: map, icon: circleWhite,
      		label:{text:"HP", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerI = new google.maps.Marker({
      		position: coordI, map: map, icon: circleWhite,
      		label:{text:"I", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerJ = new google.maps.Marker({
      		position: coordJ, map: map, icon: circleWhite,
      		label:{text:"J", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerK = new google.maps.Marker({
      		position: coordK, map: map, icon: circleWhite,
      		label:{text:"K", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerL = new google.maps.Marker({
      		position: coordL, map: map, icon: circleWhite,
      		label:{text:"L", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerM = new google.maps.Marker({
      		position: coordM, map: map, icon: circleWhite,
      		label:{text:"M", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerO = new google.maps.Marker({
      		position: coordO, map: map, icon: circleWhite,
      		label:{text:"O", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerP = new google.maps.Marker({
      		position: coordP, map: map, icon: circleWhite,
      		label:{text:"P", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerP1 = new google.maps.Marker({
      		position: coordP1, map: map, icon: circleWhite,
      		label:{text:"P1", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerP2 = new google.maps.Marker({
      		position: coordP2, map: map, icon: circleWhite,
      		label:{text:"P2", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerP3 = new google.maps.Marker({
      		position: coordP3, map: map, icon: circleWhite,
      		label:{text:"P3", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerP4 = new google.maps.Marker({
      		position: coordP4, map: map, icon: circleWhite,
      		label:{text:"P4", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerQ = new google.maps.Marker({
      		position: coordQ, map: map, icon: circleWhite,
      		label:{text:"Q", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerR = new google.maps.Marker({
      		position: coordR, map: map, icon: circleWhite,
      		label:{text:"R", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerS = new google.maps.Marker({
      		position: coordS, map: map, icon: circleWhite,
      		label:{text:"S", fontSize:"10px", color:'red', fontWeight:"bold"}});        
      var markerT = new google.maps.Marker({
      		position: coordT, map: map, icon: circleWhite,
      		label:{text:"T", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerW = new google.maps.Marker({
      		position: coordW, map: map, icon: circleWhite,
      		label:{text:"W", fontSize:"10px", color:'red', fontWeight:"bold"}});
      var markerE2 = new google.maps.Marker({
  		position: coordE2, map: map, icon: circleBlack,
  		label:{text:"2", fontSize:"10px", color:'white', fontWeight:"bold"}});
      var markerE4 = new google.maps.Marker({
  		position: coordE4, map: map, icon: circleBlack,
  		label:{text:"4", fontSize:"10px", color:'white', fontWeight:"bold"}});
      var markerE5 = new google.maps.Marker({
  		position: coordE5, map: map, icon: circleBlack,
  		label:{text:"5", fontSize:"10px", color:'white', fontWeight:"bold"}});
      var markerE6 = new google.maps.Marker({
  		position: coordE6, map: map, icon: circleBlack,
  		label:{text:"6", fontSize:"10px", color:'white', fontWeight:"bold"}});
      var markerE7 = new google.maps.Marker({
  		position: coordE7, map: map, icon: circleBlack,
  		label:{text:"7", fontSize:"10px", color:'white', fontWeight:"bold"}});

    //REGIÓN PRINCIPAL DE LA UAM AZCAPOTZALCO
    //Se definen las coordenadas que serán los vértices que conformarán al polígono 
      var uamCoords = [            
          {lat: 19.505117653391295, lng: -99.19064350482915},
          {lat: 19.503739734092143, lng: -99.18340154048894},
          {lat: 19.501301155908514, lng: -99.18396212217306},
          {lat: 19.502953429927732, lng: -99.19025190230263}];        
   /*  //Luego se recorre la matriz, agregando cada coordenada a un objeto de límites
     var objLimites = new google.maps.LatLngBounds(); //Este objeto se usará para que el marcador no salga de la región de la UAM Azc 
     for(var i = 0; i < uamCoords.length; i++) {
  	objLimites.extend(uamCoords[i]);
		}*/
   //Se construye el polígono (región de la UAM Azc)
     var poligonoUam = new google.maps.Polygon({
         paths: uamCoords,
         strokeColor: '#FF0000', //
         strokeOpacity: 0.5,
         strokeWeight: 3,
         //fillColor: '#FFFFFF', //
         fillOpacity: 0
       });
     poligonoUam.setMap(map);
      
    //REGIONES DE CADA UNO DE LOS ESPACIOS QUE CONFORMAN LA UNIVERSIDAD 
    //espacio edificio B
      var coordsB = [
    	  {lat: 19.50328432286218, lng: -99.1851620754311}, //sup izq.
    	  {lat: 19.50306941635431, lng: -99.18402347770427}, //sup. der.
    	  {lat: 19.502893681462158, lng: -99.18405532893632}, //inf. der.
    	  {lat: 19.503099423068907, lng: -99.1851996263573} ];//inf. izq.
    //Se construye el polígono (edif B)
      var poligonoB = new google.maps.Polygon({
          paths: coordsB, strokeColor: '#FFFF00', strokeOpacity: 0.5, strokeWeight: 1,
          fillColor: '#FFFF00', fillOpacity: 0.3});
      poligonoB.setMap(map);
        
    //espacio edificio C
      var coordsC = [
    	  {lat: 19.503594040562525, lng: -99.18532166686748}, //sup izq.
    	  {lat: 19.503552323519084, lng: -99.1851084312508}, //sup. der.
    	  {lat: 19.502484000166795, lng: -99.18532468435262}, //inf. der.
    	  {lat: 19.502524292249124, lng: -99.1855365788648} ];//inf. izq.
    //Se construye el polígono (edif C)
      var poligonoC = new google.maps.Polygon({
          paths: coordsC,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#0000FF', //
          fillOpacity: 0.3
        });
      poligonoC.setMap(map);
      
      //espacio edificio D
      var coordsD = [
    	  {lat: 19.502554903731465, lng: -99.18569985833858}, //sup izq.
    	  {lat: 19.50234029528903, lng: -99.18455120232795}, //sup. der.
    	  {lat: 19.50221577523821, lng: -99.1845766833136}, //inf. der.
    	  {lat: 19.502421833747555, lng: -99.1857250040481} ];//inf. izq.
    //Se construye el polígono (edif D)
      var poligonoD = new google.maps.Polygon({
          paths: coordsD,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF0000', //
          fillOpacity: 0.3
        });
      poligonoD.setMap(map);
      
        //espacio edificio E
      var coordsE = [
    	  {lat: 19.50314431762548, lng: -99.18665036615823}, //sup izq.
    	  {lat: 19.50292215534105, lng: -99.18545845952724}, //sup. der.
    	  {lat: 19.50279888657962, lng: -99.18548259940837}, //inf. der.
    	  {lat: 19.50301924512483, lng: -99.18667560293858} ];//inf. izq.
    //Se construye el polígono (edif E)
      var poligonoE = new google.maps.Polygon({
          paths: coordsE,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#00FF00', //
          fillOpacity: 0.3
        });
      poligonoE.setMap(map);
      
       //espacio edificio F
      var coordsF = [
    	  {lat: 19.503854438796825, lng: -99.18599858936761}, //sup izq.
    	  {lat: 19.503652508003253, lng: -99.18491430626989}, //sup. der.
    	  {lat: 19.503522931959267, lng: -99.18493978735904}, //inf. der.
    	  {lat: 19.5037254953808, lng: -99.1860264172862} ];//inf. izq.
    //Se construye el polígono (edif F)
      var poligonoF = new google.maps.Polygon({
          paths: coordsF,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#00FFFF', //
          fillOpacity: 0.3
        });
      poligonoF.setMap(map);
      
      //espacio edificio G
      var coordsG = [
        {lat: 19.504253277830237, lng: -99.18611593601213}, //sup izq.
        {lat: 19.504216617548, lng: -99.1859221464108}, //sup. der.
    	  {lat: 19.503056125701747, lng: -99.18617092129682}, //inf. der.
    	  {lat: 19.503093119291957, lng: -99.18636974004005} ];//inf. izq.
    //Se construye el polígono (edif G)
      var poligonoG = new google.maps.Polygon({
          paths: coordsG,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#800080', //
          fillOpacity: 0.3
        });
      poligonoG.setMap(map);
      
    //espacio edificio Gbis
      var coordsGbis = [
    	  {lat: 19.50421661751712, lng: -99.18592147586497}, //sup izq.
    	  {lat: 19.504149933737665, lng: -99.18556340095495}, //sup. der.
    	  {lat: 19.50378965106396, lng: -99.18564587888216}, //inf. der.
    	  {lat: 19.503856651060424, lng: -99.18599825409149} ];//inf. izq.
    //Se construye el polígono (edif Gbis)
      var poligonoGbis = new google.maps.Polygon({
          paths: coordsGbis,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#660000', //
          fillOpacity: 0.3
        });
      poligonoGbis.setMap(map);
      
      //espacio edificio H
      var coordsH = [
    	  {lat: 19.503253213880683, lng: -99.18724145796989}, //sup izq.
    	  {lat: 19.50314196817321, lng: -99.18665271309112}, //sup. der.
    	  {lat: 19.502562488695876, lng: -99.18676871863101}, //inf. der.
    	  {lat: 19.502672470641997, lng: -99.1873614868233} ];//inf. izq.
    //Se construye el polígono (edif )
      var poligonoH = new google.maps.Polygon({
          paths: coordsH,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#800000', //
          fillOpacity: 0.3
        });
      poligonoH.setMap(map);
      
      //espacio edificio HO 
      var coordsHO = [
    	  {lat: 19.50301946514831, lng: -99.18667651769618}, //sup izq. 
    	  {lat: 19.50296953093281, lng: -99.18641097900365},
    	  {lat: 19.502796358261847, lng: -99.18644551244472},
    	  {lat: 19.502707867114495, lng: -99.18657828179096},
    	  {lat: 19.502736942782548, lng: -99.18659839835857},
    	  {lat: 19.502690168879234, lng: -99.18667886462902},
    	  {lat: 19.50275620420576, lng: -99.18672915604805}];//inf. izq.
    //Se construye el polígono (edif HO)
      var poligonoHO = new google.maps.Polygon({
          paths: coordsHO,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#008080', //
          fillOpacity: 0.3
        });
      poligonoHO.setMap(map);

      //espacio edificio HP 
      var coordsHP = [
    	  {lat: 19.503182857378558, lng: -99.18753147181963}, //sup izq.
    	  {lat: 19.503134819447965, lng: -99.18726626840328},
    	  {lat: 19.502864622828174, lng: -99.18732225951646}, //
    	  {lat: 19.502815952723687, lng: -99.18740473744367},
    	  {lat: 19.50288864183544, lng: -99.18744899389242},
    	  {lat: 19.502869679461607, lng: -99.18747983929609},
    	  {lat: 19.50301219624447, lng: -99.18757908102964}];//inf. izq.
    //Se construye el polígono (edif HP)
      var poligonoHP = new google.maps.Polygon({
          paths: coordsHP,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#008000', //
          fillOpacity: 0.3
        });
      poligonoHP.setMap(map);
      
      //espacio edificio I
      var coordsI = [
    	  {lat: 19.504441003627473, lng: -99.18709494230245}, //sup izq.
    	  {lat: 19.504332287030657, lng: -99.18651960846876}, 
    	  {lat: 19.503886059565485, lng: -99.18662253823965}, 
    	  {lat: 19.50387468221161, lng: -99.18656755295484},
    	  {lat: 19.503759012401733, lng: -99.18659236338823},
    	  {lat: 19.503764701082854, lng: -99.18664600756853},
    	  {lat: 19.503661040640154, lng: -99.18666478303163},
    	  {lat: 19.50374447466022, lng: -99.18713282850473},
    	  {lat: 19.504030172645383, lng: -99.18708320763795},
    	  {lat: 19.50404913488319, lng: -99.18717440274446}]; //inf. izq.
    //Se construye el polígono (edif I)
      var poligonoI = new google.maps.Polygon({
          paths: coordsI,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#000080', //
          fillOpacity: 0.3
        });
      poligonoI.setMap(map);
      
      //espacio edificio J
      var coordsJ = [
    	  {lat: 19.50385319165202, lng: -99.18767396417354}, //sup izq.
    	  {lat: 19.503772285990607, lng: -99.18724481073116}, //sup. der.
    	  {lat: 19.50331053707225, lng: -99.1873376822183}, //inf. der.
    	  {lat: 19.503388282578957, lng: -99.18776482400392} ];//inf. izq.
    //Se construye el polígono (edif J)
      var poligonoJ = new google.maps.Polygon({
          paths: coordsJ,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF9A00', //
          fillOpacity: 0.3
        });
      poligonoJ.setMap(map);
      
      //espacio edificio K
      var coordsK = [
    	  {lat: 19.503498280969513, lng: -99.18836329189037}, //sup izq.
    	  {lat: 19.503292539870046, lng: -99.18723475244735}, //sup. der.
    	  {lat: 19.50313546853199, lng: -99.18726626840328}, //inf. der.
    	  {lat: 19.50333994567653, lng: -99.18839681950305} ];//inf. izq.
    //Se construye el polígono (edif K)
      var poligonoK = new google.maps.Polygon({
          paths: coordsK,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF00FF', //
          fillOpacity: 0.3
        });
      poligonoK.setMap(map);
      
       //espacio edificio L
      var coordsL = [
    	  {lat: 19.504279192852163, lng: -99.18821040597658}, //sup izq.
    	  {lat: 19.504194494959933, lng: -99.18772861418222}, //sup. der.
    	  {lat: 19.503412634837023, lng: -99.18789088767687}, //inf. der.
    	  {lat: 19.503497947925283, lng: -99.18836262133811} ];//inf. izq.
    //Se construye el polígono (edif L)
      var poligonoL = new google.maps.Polygon({
          paths: coordsL,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#0066FF', //
          fillOpacity: 0.3
        });
      poligonoL.setMap(map);
      
      //espacio edificio M
      var coordsM = [
    	  {lat: 19.504801600077375, lng: -99.18898791037475}, //sup izq.
    	  {lat: 19.504547191860777, lng: -99.18765418288206}, 
    	  {lat: 19.50419417892291, lng: -99.18772794362997}, 
    	  {lat: 19.504431838568316, lng: -99.18906234261487} ];//inf. izq.
    //Se construye el polígono (edif M)
      var poligonoM = new google.maps.Polygon({
          paths: coordsM,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#808000', //
          fillOpacity: 0.3
        });
      poligonoM.setMap(map);
      
    //espacio edificio O
      var coordsO = [
    	  {lat: 19.50400803302592, lng: -99.18888263461088}, //sup izq.
    	  {lat: 19.503958731043024, lng: -99.18863017163522}, //sup. der.
    	  {lat: 19.50352891968118, lng: -99.18871868458484}, //inf. der.
    	  {lat: 19.503576641456522, lng: -99.18897349444126} ];//inf. izq.
    //Se construye el polígono (edif O)
      var poligonoO = new google.maps.Polygon({
          paths: coordsO,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#CC3333', //
          fillOpacity: 0.3
        });
      poligonoO.setMap(map);
      
      //espacio edificio P
      var coordsP = [
    	  {lat: 19.50370971049035, lng: -99.18968562093471}, //sup izq.
    	  {lat: 19.503463516746805, lng: -99.18837167379354}, //sup. der.
    	  {lat: 19.503318672669195, lng: -99.188402380367}, //inf. der.
    	  {lat: 19.503557380130967, lng: -99.18971613106226} ];//inf. izq.
    //Se construye el polígono (edif P)
      var poligonoP = new google.maps.Polygon({
          paths: coordsP,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#0099FF', //
          fillOpacity: 0.3
        });
      poligonoP.setMap(map);
      
      
      //espacio edificio P1 
      var coordsP1 = [
    	  {lat: 19.5043401879486, lng: -99.18855104652141}, //sup izq.
    	  {lat: 19.504279192852188, lng: -99.18821074125259}, //sup. der.
    	  {lat: 19.50346413181785, lng: -99.1883713385173}, //inf. der.
    	  {lat: 19.503528919681102, lng: -99.18871801403259} ];//inf. izq.
    //Se construye el polígono (edif P1)
      var poligonoP1 = new google.maps.Polygon({
          paths: coordsP1,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FFCC00', //
          fillOpacity: 0.3
        });
      poligonoP1.setMap(map);
      
      //espacio edificio P2
      var coordsP2 = [
    	  {lat: 19.504410664096476, lng: -99.18894734290336}, //sup izq.
    	  {lat: 19.504384749118437, lng: -99.18880384472106}, //sup. der.
    	  {lat: 19.503576658462425, lng: -99.18897382971738}, //inf. der.
    	  {lat: 19.50360413677768, lng: -99.1891200101087} ];//inf. izq.
    //Se construye el polígono (edif P2)
      var poligonoP2 = new google.maps.Polygon({
          paths: coordsP2,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#9999FF', //
          fillOpacity: 0.3
        });
      poligonoP2.setMap(map);
      
      //espacio edificio P3 
      var coordsP3 = [
    	  {lat: 19.504511163718032, lng: -99.18951865342353}, //sup izq.
    	  {lat: 19.50447797989525, lng: -99.18932821658348}, //sup. der.
    	  {lat: 19.50367745761128, lng: -99.18951228317712}, //inf. der.
    	  {lat: 19.503710009522436, lng: -99.18968495038246} ];//inf. izq.
    //Se construye el polígono (edif P3)
      var poligonoP3 = new google.maps.Polygon({
          paths: coordsP3,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#003333', //
          fillOpacity: 0.3
        });
      poligonoP3.setMap(map);
      
      //espacio edificio P4
      var coordsP4 = [
    	  {lat: 19.50447797989525, lng: -99.18932821658348}, //sup izq.
    	  {lat: 19.504410664096476, lng: -99.18894734290336}, //sup. der.
    	  {lat: 19.503604452815846, lng: -99.18912068066095}, //inf. der.
    	  {lat: 19.503677457611317, lng: -99.189511947901} ];//inf. izq.
    //Se construye el polígono (edif P4)
      var poligonoP4 = new google.maps.Polygon({
          paths: coordsP4,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#9900CC', //
          fillOpacity: 0.3
        });
      poligonoP4.setMap(map);
      
      //espacio edificio Q
      var coordsQ = [
    	  {lat: 19.504587328466535, lng: -99.19054627475236}, //sup izq.
    	  {lat: 19.504537078698764, lng: -99.19022776243185},
    	  {lat: 19.503943877429446, lng: -99.190344438524},
    	  {lat: 19.503956202890855, lng: -99.19043261614536} ];//inf. izq.
    //Se construye el polígono (edif Q)
      var poligonoQ = new google.maps.Polygon({
          paths: coordsQ,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FFCC00', //
          fillOpacity: 0.3
        });
      poligonoQ.setMap(map);
      
      //espacio edificio R
      var coordsR = [
    	  {lat: 19.503302952142768, lng: -99.18978519794439}, //sup izq.
    	  {lat: 19.50321446127252, lng: -99.18932385799383}, //sup. der.
    	  {lat: 19.502735661617187, lng: -99.18942276445125}, //inf. der.
    	  {lat: 19.502855756713398, lng: -99.18987941053604} ];//inf. izq.
    //Se construye el polígono (edif R)
      var poligonoR = new google.maps.Polygon({
          paths: coordsR,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#00FFFF', //
          fillOpacity: 0.3
        });
      poligonoR.setMap(map);
      
      //espacio edificio S
      var coordsS = [
    	  {lat: 19.50438443308182, lng: -99.18880350944505}, //sup izq.
    	  {lat: 19.504339871911842, lng: -99.18855104652152}, //sup. der.
    	  {lat: 19.50395904722797, lng: -99.18863017168746}, //inf. der.
    	  {lat: 19.50400803302593, lng: -99.18888196405874} ];//inf. izq.
    //Se construye el polígono (edif S)
      var poligonoS = new google.maps.Polygon({
          paths: coordsS,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF0000', //
          fillOpacity: 0.3
        });
      poligonoS.setMap(map);
      
      //espacio edificio T
      var coordsT = [
    	  {lat: 19.504548139969675, lng: -99.1876535123298}, //sup izq.
    	  {lat: 19.504441635700502, lng: -99.18709494230245}, 
    	  {lat: 19.504049117877326, lng: -99.18717473802064}, 
    	  {lat: 19.504090518147073, lng: -99.18743323568992},
    	  {lat: 19.503819042575245, lng: -99.18748922702764},
    	  {lat: 19.50387687686061, lng: -99.18779399280243} ];//inf. izq.
    //Se construye el polígono (edif T)
      var poligonoT = new google.maps.Polygon({
          paths: coordsT,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#006600', //
          fillOpacity: 0.3
        });
      poligonoT.setMap(map);
      
      //espacio edificio W
      var coordsW = [
    	  {lat: 19.503283989817547, lng: -99.18914213833307}, //sup izq.
    	  {lat: 19.503177800754983, lng: -99.18856009897684}, //sup. der.
    	  {lat: 19.502824468789047, lng: -99.18863654193376}, //inf. der.
    	  {lat: 19.502928761846782, lng: -99.18921053466295} ];//inf. izq.
    //Se construye el polígono (edif W)
      var poligonoW = new google.maps.Polygon({
          paths: coordsW,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF6666', //
          fillOpacity: 0.3
        });
      poligonoW.setMap(map);
        
      //espacio Plaza de Egresados
      var coordsPEgresados = [
    	  {lat: 19.50275620420576, lng: -99.18672915604805}, //sup izq.
    	  {lat: 19.502690168879234, lng: -99.18667886462902}, 
    	  {lat: 19.502736942782548, lng: -99.18659839835857}, 
    	  {lat: 19.502707867114495, lng: -99.18657828179096},
        {lat: 19.502796358261847, lng: -99.18644551244472},
        {lat: 19.50296953093281, lng: -99.18641097900365},         
        {lat: 19.502878827603308, lng: -99.18592013475399},
        {lat: 19.502250539729122, lng: -99.18604753968219},
    	  {lat: 19.502387701374616, lng: -99.18680425790046}];//inf. izq.
    //Se construye el polígono (P.Egresados)
      var poligonoPEgresados = new google.maps.Polygon({
          paths: coordsPEgresados,
          visible: false });
      poligonoPEgresados.setMap(map);
      
      //espacio Plaza Roja
      var coordsPRoja = [
    	  {lat: 19.503725495380785, lng: -99.1860270878384}, //sup izq.
    	  {lat: 19.503593707527447, lng: -99.18532166688647}, //sup. der.
    	  {lat: 19.50292180898728, lng: -99.18545678316559}, //inf. der.
    	  {lat: 19.503055493632306, lng: -99.18617025076355} ];//inf. izq.
    //Se construye el polígono (P.Roja)
      var poligonoPRoja = new google.maps.Polygon({
          paths: coordsPRoja,
          visible: false });
      poligonoPRoja.setMap(map);
      
    //espacio Plaza de Biblioteca 
      var coordsPBiblioteca = [
    	 {lat: 19.503772285990607, lng: -99.18724481073116}, //sup izq.
       {lat: 19.50374447466022, lng: -99.18713282850473},
    	 {lat: 19.503661040640154, lng: -99.18666478303163},       	  
    	 {lat: 19.503161050688146, lng: -99.18675530758594},
    	 {lat: 19.503253213880683, lng: -99.18724145796989},
    	 {lat: 19.503292539870046, lng: -99.18723475244735}, 
    	 {lat: 19.50331053707225, lng: -99.1873376822183}];//inf. izq.
    //Se construye el polígono (P.Biblioteca)
      var poligonoPBiblioteca = new google.maps.Polygon({
          paths: coordsPBiblioteca,
          visible: false });
      poligonoPBiblioteca.setMap(map);
      
      //espacio &Aacuterea Deportiva
      var coordsADeportiva = [
    	  {lat: 19.505018401305243, lng: -99.1901285206983}, //sup izq.
    	{lat: 19.504822775284048, lng: -99.1890988877127},
    	{lat: 19.504765888836076, lng: -99.18911196348165},
    	{lat: 19.504755459651708, lng: -99.18904960212205},
    	{lat: 19.504811081960234, lng: -99.18903686162923},
    	  {lat: 19.504801600077375, lng: -99.18898791037475},
    	  {lat: 19.504431838568316, lng: -99.18906234261487},
    	  {lat: 19.504511163718032, lng: -99.18951865342353},
    	  {lat: 19.503814618046963, lng: -99.18966315743421},
    	  {lat: 19.503943877429446, lng: -99.190344438524}, ];//inf. izq.
    //Se construye el polígono (A.Deportiva)
      var poligonoADeportiva = new google.maps.Polygon({
          paths: coordsADeportiva,
          visible: false });
      poligonoADeportiva.setMap(map);
      
       //espacio Canchas Basquetball
      var coordsCBasquet = [
    	  {lat: 19.503956202890855, lng: -99.19043261614536}, //sup izq.
    	  {lat: 19.50383389634772, lng: -99.18976575192903}, //sup. der.
    	  {lat: 19.5035753773037, lng: -99.18982174304222}, //inf. der.
    	  {lat: 19.503672717041166, lng: -99.19038165417408} ];//inf. izq.
    //Se construye el polígono (C.Basquetball)
      var poligonoCBasquet = new google.maps.Polygon({
          paths: coordsCBasquet,
          visible: false });
      poligonoCBasquet.setMap(map);
      
    //espacio Cancha Fútbol
      var coordsCFutbol = [
    	  {lat: 19.505117653391295, lng: -99.19064350482915}, //sup izq.
    	  {lat: 19.505018401305243, lng: -99.1901285206983}, //sup. der.
    	  {lat: 19.504537078698764, lng: -99.19022776243185}, //inf. der.
    	  {lat: 19.504587328466535, lng: -99.19054627475236}, ];//inf. izq.
    //Se construye el polígono (C.Futbol)
      var poligonoCFutbol = new google.maps.Polygon({
          paths: coordsCFutbol,
          visible: false });
      poligonoCFutbol.setMap(map);
      
   //espacio Estacionamiento de Profesores NorEste
      var coordsEProfsNE = [
    	  {lat: 19.504149933737665, lng: -99.18556340095495}, //sup izq.
    	  {lat: 19.503739734092143, lng: -99.18340154048894},
    	{lat: 19.50341546189361, lng: -99.18347630706523},
    	{lat: 19.503429367587728, lng: -99.18356113192533},
    	{lat: 19.503315593691752, lng: -99.18357990738843},
    	  {lat: 19.50356905653951, lng: -99.18493107017963}, 
    	  {lat: 19.503652508003253, lng: -99.18491430626989},
    	  {lat: 19.50378965106396, lng: -99.18564587888216}];//inf. izq.
    //Se construye el polígono (E. Profesores NE)
      var poligonoEProfsNE = new google.maps.Polygon({
          paths: coordsEProfsNE,
          visible: false });
      poligonoEProfsNE.setMap(map);
      
    //espacio Estacionamiento de Profesores Sur
      var coordsEProfsSur = [
    	  {lat: 19.50322267828406, lng: -99.1885490348647}, //sup izq.
    	  {lat: 19.503063710642802, lng: -99.18766960558389},
    	  {lat: 19.502562155649716, lng: -99.1877695178697}, 
    	  {lat: 19.502280563601495, lng: -99.18621350136493},
    	  {lat: 19.501911427603957, lng: -99.18628457990383},
    	  {lat: 19.502545089478986, lng: -99.18869555053209}];//inf. izq.
    //Se construye el polígono (E. Profesores Sur)
      var poligonoEProfsSur = new google.maps.Polygon({
          paths: coordsEProfsSur,
          visible: false });
      poligonoEProfsSur.setMap(map);
      
      //espacio Estacionamiento de Alumnos SurOeste
      var coordsEAlumsSO = [
    	  {lat: 19.503315593691738, lng: -99.18930642363523}, //sup izq.
    	  {lat: 19.503283989817547, lng: -99.18914213833307},
    	  {lat: 19.502928761846782, lng: -99.18921053466295},
    	  {lat: 19.502824468789047, lng: -99.18863654193376},  
    	  {lat: 19.502545089478986, lng: -99.18869555053209},
    	  {lat: 19.502735661617187, lng: -99.18942276445125},];//inf. izq.
    //Se construye el polígono (E. Alumnos SO)
      var poligonoEAlumsSO = new google.maps.Polygon({
          paths: coordsEAlumsSO,
          visible: false });
      poligonoEAlumsSO.setMap(map);
      
    //espacio Estacionamiento de Alumnos SurEste
      var coordsEAlumsSE = [
    	  {lat: 19.502280563601495, lng: -99.18621350136493}, //sup izq.
    	  {lat: 19.501980640667668, lng: -99.18462462779974},
    	  {lat: 19.502958785593293, lng: -99.184424467952},
    	    {lat: 19.502826997106386, lng: -99.18367814329366},
    	    {lat: 19.50273692577657, lng: -99.18369893041347},
    	    {lat: 19.502726496461456, lng: -99.18363455739711},
    	      {lat: 19.50188298387058, lng: -99.18382901755069},
    	      {lat: 19.50190352656742, lng: -99.18396346327756},
    	      {lat: 19.50177047305396, lng: -99.18398995009159},
    	      {lat: 19.501743925546467, lng: -99.18386086878274},
    	  {lat: 19.501301155908514, lng: -99.18396212217306},
    	  {lat: 19.501911427603957, lng: -99.18628457990383}];//inf. izq.
    //Se construye el polígono (E. Alumnos SO)
      var poligonoEAlumsSE = new google.maps.Polygon({
          paths: coordsEAlumsSE,
          visible: false });
      poligonoEAlumsSE.setMap(map);
      
      //espacio Entrada 2
      var coordsEntrada2 = [
    	  {lat: 19.50190352656742, lng: -99.18396346327756}, //sup izq.
    	  {lat: 19.50188298387058, lng: -99.18382901755069}, //sup. der.
    	  {lat: 19.501743925546467, lng: -99.18386086878274}, //inf. der.
    	  {lat: 19.50177047305396, lng: -99.18398995009159} ];//inf. izq.
    //Se construye el polígono (Entrada 2)
      var poligonoEntrada2 = new google.maps.Polygon({
          paths: coordsEntrada2,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF0000', //
          fillOpacity: 0.3
        });
      poligonoEntrada2.setMap(map);
      
      //espacio Entrada 4
      var coordsEntrada4 = [
    	  {lat: 19.502906007003503, lng: -99.18366037365888}, //sup izq.
    	  {lat: 19.502894629580737, lng: -99.18359600064252}, //sup. der.
    	  {lat: 19.502726496461456, lng: -99.18363455739711}, //inf. der.
    	  {lat: 19.50273692577657, lng: -99.18369893041347} ];//inf. izq.
    //Se construye el polígono (Entrada 4)
      var poligonoEntrada4 = new google.maps.Polygon({
          paths: coordsEntrada4,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF0000', //
          fillOpacity: 0.3
        });
      poligonoEntrada4.setMap(map);
      
      //espacio Entrada 5
      var coordsEntrada5 = [
    	  {lat: 19.503429367587728, lng: -99.18356113192533}, //sup izq.
    	  {lat: 19.50341546189361, lng: -99.18347630706523}, //sup. der.
    	  {lat: 19.503227418867265, lng: -99.18352022823785}, //inf. der.
    	  {lat: 19.503239112305504, lng: -99.18359298315738} ];//inf. izq.
    //Se construye el polígono (Entrada 5)
      var poligonoEntrada5 = new google.maps.Polygon({
          paths: coordsEntrada5,           
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF0000', //
          fillOpacity: 0.3
        });
      poligonoEntrada5.setMap(map);
      
      //espacio Entrada 6
      var coordsEntrada6 = [
    	  {lat: 19.504822775284048, lng: -99.1890988877127}, //sup izq.
    	  {lat: 19.504811081960234, lng: -99.18903686162923}, //sup. der.
    	  {lat: 19.504755459651708, lng: -99.18904960212205}, //inf. der.
    	  {lat: 19.504765888836076, lng: -99.18911196348165} ];//inf. izq.
    //Se construye el polígono (Entrada 6)
      var poligonoEntrada6 = new google.maps.Polygon({
          paths: coordsEntrada6,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF0000', //
          fillOpacity: 0.3
        });
      poligonoEntrada6.setMap(map);        
      
    //espacio Entrada 7
      var coordsEntrada7 = [
    	  {lat: 19.50302294158044, lng: -99.19018182960247}, //sup izq.
    	  {lat: 19.5029963942785, lng: -99.1900661593387}, //sup. der.
    	  {lat: 19.502913275912128, lng: -99.19009633419012}, //inf. der.
    	  {lat: 19.502953429927732, lng: -99.19025190230263}];//inf. izq.
    //Se construye el polígono (Entrada 7)
      var poligonoEntrada7 = new google.maps.Polygon({
          paths: coordsEntrada7,
          strokeColor: '#FFFF00', //
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF0000', //
          fillOpacity: 0.3
        });
      poligonoEntrada7.setMap(map);
      
       //espacio Kiosko B  
      var coordsKioskoB = [
    	  {lat: 19.503552323519084, lng: -99.1851084312508}, //sup izq.
    	  {lat: 19.503522931959267, lng: -99.18493978735904},
    	  {lat: 19.50356905653951, lng: -99.18493107017963},
    	  {lat: 19.503497315848566, lng: -99.18454885539506},
    	  {lat: 19.503176536599025, lng: -99.18459210601543},
    	  {lat: 19.50328432286218, lng: -99.1851620754311}];//inf. izq.
    //Se construye el polígono (Kiosko B)
      var poligonoKioskoB = new google.maps.Polygon({
          paths: coordsKioskoB,
          visible: false });
      poligonoKioskoB.setMap(map);
      
    //espacio Kiosko Canchas  
      var coordsKioskoCanchas = [
    	  {lat: 19.50383389634772, lng: -99.18976575192903}, //sup izq.
    	  {lat: 19.503814618046963, lng: -99.18966315743421},
    	  {lat: 19.503557380130967, lng: -99.18971613106226},
    	  {lat: 19.5035753773037, lng: -99.18982174304222}];//inf. izq.
    //Se construye el polígono (Kiosko Canchas)
      var poligonoKioskoCanchas = new google.maps.Polygon({
          paths: coordsKioskoCanchas,
          visible: false });
      poligonoKioskoCanchas.setMap(map);
      
     //espacio Áreas Verdes B 
      var coordsAVerdesB = [
    	  {lat: 19.503497315848566, lng: -99.18454885539506}, //sup izq.
    	    {lat: 19.503315593691752, lng: -99.18357990738843},
    	    {lat: 19.503239112305504, lng: -99.18359298315738},
    	    {lat: 19.503227418867265, lng: -99.18352022823785},
    	      {lat: 19.502894629580737, lng: -99.18359600064252},
    	      {lat: 19.502906007003503, lng: -99.18366037365888},
    	      {lat: 19.502826997106386, lng: -99.18367814329366},
    	  {lat: 19.502893681462158, lng: -99.18405532893632},
    	  {lat: 19.50306941635431, lng: -99.18402347770427},
    	  {lat: 19.503176536599025, lng: -99.18459210601543}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesB = new google.maps.Polygon({
          paths: coordsAVerdesB,
          visible: false });
      poligonoAVerdesB.setMap(map);
     
    //espacio Áreas Verdes C/D
      var coordsAVerdesCD = [
    	  {lat: 19.503099423068907, lng: -99.1851996263573}, //sup izq.
    	  {lat: 19.502958785593293, lng: -99.184424467952},
    	  {lat: 19.50234029528903, lng: -99.18455120232795},
    	  {lat: 19.502484000166795, lng: -99.18532468435262}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesCD = new google.maps.Polygon({
          paths: coordsAVerdesCD,
          visible: false });
      poligonoAVerdesCD.setMap(map);
      
    //espacio Áreas Verdes D 
      var coordsAVerdesD = [
    	  {lat: 19.502604505028728, lng: -99.18597512003879}, //sup izq.
    	  {lat: 19.502554903731465, lng: -99.18569985833858},
    	  {lat: 19.502421833747555, lng: -99.1857250040481},
    	  {lat: 19.50221577523821, lng: -99.1845766833136},
    	  {lat: 19.501980640667668, lng: -99.18462462779974},
    	  {lat: 19.502250539729122, lng: -99.18604753968219}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesD = new google.maps.Polygon({
          paths: coordsAVerdesD,
          visible: false });
      poligonoAVerdesD.setMap(map);
      
    //espacio Áreas Verdes E
      var coordsAVerdesE = [
    	  {lat: 19.502878827603308, lng: -99.18592013475399}, //sup izq.
    	  {lat: 19.50279888657962, lng: -99.18548259940837},
    	  {lat: 19.502524292249124, lng: -99.1855365788648},
    	  {lat: 19.502604505028728, lng: -99.18597512003879},];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesE = new google.maps.Polygon({
          paths: coordsAVerdesE,
          visible: false });
      poligonoAVerdesE.setMap(map);
      
    //espacio Áreas Verdes G/I
      var coordsAVerdesGI = [
    	  {lat: 19.504332287030657, lng: -99.18651960846876}, //sup izq.
    	  {lat: 19.504253277830237, lng: -99.18611593601213},
    	  {lat: 19.503093119291957, lng: -99.18636974004005},
    	  {lat: 19.503161050688146, lng: -99.18675530758594},      	   
    	    {lat: 19.503764701082854, lng: -99.18664600756853},
    	    {lat: 19.503759012401733, lng: -99.18659236338823},      	 
    	    {lat: 19.50387468221161, lng: -99.18656755295484},
    	    {lat: 19.503886059565485, lng: -99.18662253823965}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesGI = new google.maps.Polygon({
          paths: coordsAVerdesGI,
          visible: false });
      poligonoAVerdesGI.setMap(map);
      
    //espacio Áreas Verdes H/HP
      var coordsAVerdesHHP = [
    	  {lat: 19.503063710642802, lng: -99.18766960558389}, //sup izq.
    	  {lat: 19.50301219624447, lng: -99.18757908102964},
    	   {lat: 19.502869679461607, lng: -99.18747983929609},
    	   {lat: 19.50288864183544, lng: -99.18744899389242},
    	   {lat: 19.502815952723687, lng: -99.18740473744367},
    	   {lat: 19.502864622828174, lng: -99.18732225951646},
    	    {lat: 19.502672470641997, lng: -99.1873614868233},
    	    {lat: 19.502562488695876, lng: -99.18676871863101},
    	    {lat: 19.502387701374616, lng: -99.18680425790046},
    	    {lat: 19.502562155649716, lng: -99.1877695178697}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesHHP = new google.maps.Polygon({
          paths: coordsAVerdesHHP,
          visible: false });
      poligonoAVerdesHHP.setMap(map);
      
    //espacio Áreas Verdes I/T
      var coordsAVerdesIT = [
        {lat: 19.504090518147073, lng: -99.18743323568992}, //sup izq.
        {lat: 19.504030172645383, lng: -99.18708320763795},      	  
        {lat: 19.50374447466022, lng: -99.18713282850473},
        {lat: 19.503819042575245, lng: -99.18748922702764}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesIT = new google.maps.Polygon({
          paths: coordsAVerdesIT,
          visible: false });
      poligonoAVerdesIT.setMap(map);
      
    //espacio Áreas Verdes J/L
      var coordsAVerdesJL = [
        {lat: 19.50387687686061, lng: -99.18779399280243}, //sup izq.
        {lat: 19.50385319165202, lng: -99.18767396417354},
        {lat: 19.503388282578957, lng: -99.18776482400392},
        {lat: 19.503412634837023, lng: -99.18789088767687}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesJL = new google.maps.Polygon({
          paths: coordsAVerdesJL,
          visible: false });
      poligonoAVerdesJL.setMap(map);
      
    //espacio Áreas Verdes K
      var coordsAVerdesK = [
        {lat: 19.50333994567653, lng: -99.18839681950305}, //sup izq.
        {lat: 19.503182857378558, lng: -99.18753147181963},
        {lat: 19.50301219624447, lng: -99.18757908102964},
        {lat: 19.50301219624447, lng: -99.18757908102964},
        {lat: 19.503063710642802, lng: -99.18766960558389},
        {lat: 19.503199923482104, lng: -99.18842330631708}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesK = new google.maps.Polygon({
          paths: coordsAVerdesK,
          visible: false });
      poligonoAVerdesK.setMap(map);
      
    //espacio Áreas Verdes P/W
      var coordsAVerdesPW = [
        {lat: 19.50347803750773, lng: -99.18928127792572}, //sup izq.
        {lat: 19.503318672669195, lng: -99.188402380367},
        {lat: 19.503199923482104, lng: -99.18842330631708},
        {lat: 19.50322267828406, lng: -99.1885490348647},
        {lat: 19.503177800754983, lng: -99.18856009897684},
        {lat: 19.503315593691738, lng: -99.18930642363523}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesPW = new google.maps.Polygon({
          paths: coordsAVerdesPW,
          visible: false });
      poligonoAVerdesPW.setMap(map);
      
    //espacio Áreas Verdes P/R
      var coordsAVerdesPR = [
        {lat: 19.503557380130967, lng: -99.18971613106226}, //sup izq.
        {lat: 19.50347803750773, lng: -99.18928127792572},
        {lat: 19.50321446127252, lng: -99.18932385799383},
        {lat: 19.503302952142768, lng: -99.18978519794439}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesPR = new google.maps.Polygon({
          paths: coordsAVerdesPR,
          visible: false});
      poligonoAVerdesPR.setMap(map);
      
    //espacio Áreas Verdes R/Canchas Basquet
      var coordsAVerdesRCB = [
        {lat: 19.503672717041166, lng: -99.19038165417408}, //sup izq.
        {lat: 19.503557380130967, lng: -99.18971613106226},
        {lat: 19.503302952142768, lng: -99.18978519794439},
        {lat: 19.502855756713398, lng: -99.18987941053604},
        {lat: 19.502913275912128, lng: -99.19009633419012},
        {lat: 19.5029963942785, lng: -99.1900661593387},
        {lat: 19.50302294158044, lng: -99.19018182960247},
        {lat: 19.502953429927732, lng: -99.19025190230263}];//inf. izq.
    //Se construye el polígono 
      var poligonoAVerdesRCB = new google.maps.Polygon({
          paths: coordsAVerdesRCB,
          visible: false});
      poligonoAVerdesRCB.setMap(map);
   
   //MARCADORES QUE SERÁN MOSTRADOS DE ACUERDO AL TIPO DE INCIDENTE
      var mkGreen = document.getElementById("imgRV").src; //Robo a vehículo
      var mkDarkBlue = document.getElementById("imgRT").src; //Robo a transeúnte
      var mkPurple = document.getElementById("imgRI").src; //Robo a instalación
      var mkBrown = document.getElementById("imgA").src; //Agresión
      var mkRed = document.getElementById("imgB").src; //Bloqueo   
      var mkOrange = document.getElementById("imgI").src; //Incendio
      var mkYellow = document.getElementById("imgFG").src; //Fuga de gas
      var mkSkyBlue = document.getElementById("imgFQ").src; //Fuga de otro químico
      
      //Se obtendrán los valores de la tabla que se muestra en cada consulta de la vista
      var tblIncidente = document.getElementById("tablaIncidente");
      var infoWindow;      
      var infoWindowContent = [];
      var rep;
      var reporte = [];
      
     //Se recorre cada una de las filas de la tabla consultada y cada columna se asigna a una variable, quitando los saltos de línea
      for(var i=1; i < tblIncidente.rows.length; i++){
    	  var id = tblIncidente.rows[i].cells[0].innerText;
    	  var idReporte = id.split("\n").join("");
    	  var incid = tblIncidente.rows[i].cells[1].innerText;
    	  var incidente = incid.split("\n").join("");
    	  var lug = tblIncidente.rows[i].cells[2].innerText;
    	  var lugar = lug.split("\n").join("");
    	  var fec = tblIncidente.rows[i].cells[3].innerText;
    	  var fecha = fec.split("\n").join("");
    	  var hor = tblIncidente.rows[i].cells[4].innerText;
    	  var hora = hor.split("\n").join("");
    	  var latitud = parseFloat(tblIncidente.rows[i].cells[5].innerText);
    	  var longitud = parseFloat(tblIncidente.rows[i].cells[6].innerText);
    	  var desc = tblIncidente.rows[i].cells[7].innerText;
    	  var descripcion = desc.split("\n").join("");	  
    	  
    	  //Contenido que tendrá la ventana de información en cada marcador    	  
    	  infoWindowContent[i] = ('<p style="color:#1653B7"><left><small>No. Rep.: '+idReporte+'</small></left></p>'+'<center><h4 style="color:#1653B7"><strong>'+incidente+'</strong></h4></center>' + '<p><strong>Fecha: </strong>'+fecha+'</p>' + '<p><strong>Hora: </strong>'+hora+'</p>' + '<p><strong>Descripci\u00F3n: </strong>'+descripcion+'</p>');
    	  reporte[i]=idReporte;    	  
    	  //De acuerdo al tipo de incidente se agrega el marcador correspondiente
    	  if( incidente == "Robo a veh\u00EDculo"){
    		 var icono = mkGreen}
    	  else if( incidente == "Robo a transe\u00FAnte"){
    		 var icono = mkDarkBlue}
    	  else if( incidente == "Robo a instalaci\u00F3n"){
    		 var icono = mkPurple}
    	  else if( incidente == "Agresi\u00F3n"){
    		 var icono = mkBrown}
    	  else if( incidente == "Bloqueo"){
     		 var icono = mkRed}
    	  else if( incidente == "Incendio"){
    		 var icono = mkOrange}
    	  else if( incidente == "Fuga de gas"){
    		 var icono = mkYellow}
    	  else if( incidente == "Fuga de otro qu\u00EDmico"){
    		 var icono = mkSkyBlue}
    	  //Se agrega el marcador
    	  var marker = new google.maps.Marker({
    				map: map,
    				position: {lat: latitud, lng: longitud},
    				draggable: false,
    				icon: icono });    	      	  
     	  	
    	  //Evento que mostrará las ventanas de información al hacer click en cada marcador
    	  (function(i, marker){
    		  google.maps.event.addListener(marker, 'click', function() {      			  
    			    			  
       		  if(!infoWindow) {
       			infoWindow = new google.maps.InfoWindow();
       		  }         		
       		infoWindow.setContent(infoWindowContent[i]);
       		infoWindow.open(map, marker);       		
       		rep = document.getElementById("idReporteFK").setAttribute("value", reporte[i]);  
    		  });    		  
           })(i, marker);
      } 
     
      
}

