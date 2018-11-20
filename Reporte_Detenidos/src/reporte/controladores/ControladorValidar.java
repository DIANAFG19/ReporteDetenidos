package reporte.controladores;

import javax.swing.JOptionPane;

import java.util.LinkedList;

//import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import reporte.objetos.Reporte;
import reporte.objetos.Usuario;


@Controller
public class ControladorValidar {

	/*
	@RequestMapping("/")
	public ModelAndView mostrarUsuarioFrm(){
		
		ModelAndView modelo = new ModelAndView("/login");
		//Usuario usuario = new Usuario();
		//modelo.addObject("usuarioFrm", usuario);
		
		return modelo;
	}*/
	/*
	@RequestMapping(value="opcion", method=RequestMethod.POST)
	public ModelAndView AltaReport(@ModelAttribute("usuarioFrm")Usuario usuario, @ModelAttribute("reporteFrm")Reporte reporte) { //HttpSession 
		if(usuario.getUsuario().compareTo("ADMIN")==0 && usuario.getPassword().compareTo("123")==0) {
			System.out.println("Usuario validado");
									
			return new ModelAndView("opciones"); //<--------------
			
		} 
		
		else {
			System.out.println("Datos incorrectos");
			
			return new ModelAndView("/index");
		}		
		
	}
	
	@RequestMapping("logout")
	public ModelAndView salirAplicacion() {
		ModelAndView modelo = new ModelAndView("/index");
		Usuario usuario = new Usuario();
		modelo.addObject("usuarioFrm", usuario);

		
		System.out.println("Saliendo y liberando al cliente de la sesion");
		
		return modelo;
	}		
*/

}
