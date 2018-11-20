package reporte.operaciones;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import reporte.conexion.CrearConexion;
import reporte.objetos.Reporte;

public class RegistroReporte {

	public void insertarReporte(Reporte reporte){
		SessionFactory sf = CrearConexion.getSessionFactory();
		Session  sesion=sf.openSession();
		try{
			
			sesion.beginTransaction();
			sesion.save(reporte);
			sesion.getTransaction().commit();
			
			System.out.println("REPORTE REGISTRADO!!");
			System.out.println("DATOS REGISTRADOS: " + reporte.toString()+"\n");
			
		} catch(Throwable ex){
			System.out.println("No se pudo abrir la conexion");
			throw new ExceptionInInitializerError(ex);
		}finally{
			sesion.close();
			
		}		
	}
}
