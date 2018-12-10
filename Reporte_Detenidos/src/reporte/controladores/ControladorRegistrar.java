package reporte.controladores;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import reporte.objetos.Reporte;
import reporte.objetos.Usuario;
import reporte.operaciones.RegistroReporte;

@Controller
public class ControladorRegistrar {
	// Admin
	@RequestMapping("registrar_main") //
	public ModelAndView cargarFormReporte() {
		// System.out.println("Mapeando datos de reporte en la forma");
		ModelAndView modelo = new ModelAndView("/registro_main_vista");
		Reporte reporte = new Reporte();
		modelo.addObject("reporteFrm", reporte);
		return modelo;
	}

	@RequestMapping(value = "registrado", method = RequestMethod.POST)
	public ModelAndView registrarReporte(@ModelAttribute("reporteFrm") Reporte reporte) {

		RegistroReporte reg = new RegistroReporte();
		reg.insertarReporte(reporte);
		return new ModelAndView("/registrado_main");
	}

	// User
	@RequestMapping("registrar_user") //
	public ModelAndView cargarFormReporteUser() {
		// System.out.println("Mapeando datos de reporte en la forma");
		ModelAndView modelo = new ModelAndView("/registro_user_vista");
		Reporte reporte = new Reporte();
		modelo.addObject("reporteFrmUser", reporte);
		return modelo;
	}

	@RequestMapping(value = "registrado_user", method = RequestMethod.POST)
	public ModelAndView registrarReporteUser(@ModelAttribute("reporteFrmUser") Reporte reporte) {

		RegistroReporte reg = new RegistroReporte();
		reg.insertarReporte(reporte);
		return new ModelAndView("/registrado_usuario");
	}

	@RequestMapping("tramitar_main")
	public ModelAndView clickTramitar() {
		return new ModelAndView("/tramitar_main_vista");
	}

	@RequestMapping("tramitar_user")
	public ModelAndView clickTramitarUser() {
		return new ModelAndView("/tramitar_user_vista");
	}

	@RequestMapping("impresion_continuadas")
	public ModelAndView clickImprimir() {
		return new ModelAndView("/continuadas_pdf_vista");
	}

	@RequestMapping("impresion_tramitados")
	public ModelAndView clickImprimirTramitados() {
		return new ModelAndView("/tramitados_pdf_main");
	}

	@RequestMapping("impresion_tramitadosPDF")
	public ModelAndView clickImprimirTramitadosUser() {
		return new ModelAndView("/tramitados_pdf_user");
	}

	@RequestMapping("editar_main")
	public ModelAndView clickEditar() {
		return new ModelAndView("/editando_main_vista");
	}
	
	//Modificación reportes.
	@RequestMapping("editar_reporte")
	public ModelAndView clickEditReport() {
		return new ModelAndView("/editar_reporte_vista");
	}
	
	//Líneas para modificar datos del reporte (Mapeo)
	@RequestMapping("modificar_main")
	public ModelAndView clickModificar() {
		return new ModelAndView("/modificar_main");
	}

	@RequestMapping("editar_user")
	public ModelAndView clickEditarUser() {
		return new ModelAndView("/editando_user_vista");
	}

	@RequestMapping("reportes")
	public ModelAndView clickEditado() {
		return new ModelAndView("/tramitados_vista");
	}

	@RequestMapping("reportes_user")
	public ModelAndView clickEditadoUser() {
		return new ModelAndView("/tramitados_vista_user");
	}

	@RequestMapping("opcion_main")
	public ModelAndView clickbotonLoguin() {
		return new ModelAndView("/opcion_main_vista");
	}

	@RequestMapping("opcion_user")
	public ModelAndView clickbotonLoguin2() {
		return new ModelAndView("/opcion_user_vista");
	}

	@RequestMapping("login")
	public ModelAndView log() {
		return new ModelAndView("/login_vista");
	}
}
