package reporte.controladores;

import java.util.List;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import reporte.objetos.Reporte;
import reporte.objetos.Usuario;
import reporte.operaciones.FiltradoReporte;



public class ControladorFiltrado {
	
	/*@RequestMapping("tramitar_reporte")
	public ModelAndView mostrarFrmReporte(){
		ModelAndView modelo = new ModelAndView("/tramitar_reporte_vista2");
		Reporte rep = new Reporte();
		modelo.addObject("TramiteFORM", rep);
		return modelo;
	}*/
	/*
	@RequestMapping(value="consultarTramite", method=RequestMethod.POST)
	public ModelAndView mostrarFiltrado(@ModelAttribute("TramiteFORM")Reporte rep){ 
		System.out.println("Tipo de tramite seleccionado: "+rep.getIdTramiteFK());
		
		FiltradoReporte sel = new FiltradoReporte();
		List<Reporte>lista=sel.reporteTramite(rep); //
				
		if(lista.size()!=0){
			System.out.println("CONSULTA POR TRAMITE: "); 
			for (int i = 0; i < lista.size(); i++) {
				Reporte repoInci = lista.get(i);
				System.out.println(repoInci.toString());				
			}
			System.out.println("\n");
		} else {
			System.out.println("No hay datos del id incidente: "+rep.getIdTramiteFK());
		}
				
		return new ModelAndView("/tramitar_reporte_vista");
	}
*/
}
