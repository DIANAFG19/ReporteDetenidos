/*
 * Modificación: Ing. Flores Garcia Diana Laura.
 * Fecha: 30/10/18.
 * Corrigiendo errores y documentando código.
 */

package reporte.conexion;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CraerConexion {
	
	private static final SessionFactory sessionFactory = buildSessionFactory();
	
	private static SessionFactory buildSessionFactory(){
		try {
			// Crea una sesion basado en hibernate.cfg.xml
			return new
			Configuration().configure().buildSessionFactory();
			}
			catch (Throwable ex) {
			System.err.println("Error al crear sessionFactory: " + ex);
			throw new ExceptionInInitializerError(ex);
			}		
	}
	
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
		}
	
	public static void closeSessionFactory(){
    	sessionFactory.close();
    }
}
