package reporte.operaciones;

import java.util.LinkedList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;

import reporte.conexion.CrearConexion;
import reporte.objetos.CT;
import reporte.objetos.Delito;
import reporte.objetos.Remite;
import reporte.objetos.Reporte2;
import reporte.objetos.Tramite;

public class FiltradoReporte {
	
	public List<Reporte2> reporteTramite(Reporte2 rep){
		
		List<Object[]>listaTramite;
		List<Reporte2>listaReporte = new LinkedList<>();
		
		Session sesion = null;
		
		try{
			sesion=CrearConexion.getSessionFactory().openSession();
		} catch (ExceptionInInitializerError ex) {
			System.err.println("No se pudo crear la session");
			throw new ExceptionInInitializerError(ex);
		}
		/*Consulta en MySQL
		SELECT reporte.Id, ct.Tipo_CT, reporte.Carpteta_Investigacion, reporte.Hora, reporte.Fecha_Inicio, delito.Tipo_Delito, 
		reporte.Lugar_Hechos, remite.Tipo_Remite, reporte.Probable_Responsable, reporte.M, reporte.F, reporte.Denunciante, 
		reporte.Descripcion, tramite.Tipo_Tramite, reporte.Tiene_Antecedentes, reporte.Fecha, reporte.Turno
		FROM reporte, ct, delito, remite, tramite
		WHERE reporte.CT_Id_CT = ct.Id_CT
		AND reporte.Delito_Id_Delito = delito.Id_Delito
		AND reporte.Tramite_Id_Tramite = tramite.Id_Tramite
		AND reporte.Remite_Id_Remite = remite.Id_Remite
		AND reporte.Tramite_Id_Tramite = 15 ORDER BY ct.Tipo_CT asc, reporte.Id asc;*/
		
		String sentencia = "SELECT REP.idReporte, CTE.tipoCT, REP.carpetaInvestigacion, REP.hora, REP.fechaInicio, DEL.tipoDelito, REP.lugarHechos, REM.tipoRemite, REP.probableResponsable, REP.masculino, REP.femenino, REP.denunciante, REP.descripcion, TRA.tipoTramite, REP.tieneAntecedentes, REP.fecha, REP.turno "
				+ "FROM Reporte as REP, CT as CTE, Delito as DEL, Remite as REM, Tramite as TRA "
				+ "WHERE REP.idCTFK = CTE.idCT "
				+ "AND REP.idDelitoFK = DEL.idDelito "
				+ "AND REP.idTramiteFK = TRA.idTramite "
				+ "AND REP.idRemiteFK = REM.idRemite "
				+ "AND REP.idTramiteFK = '15' ORDER BY CTE.tipoCT ASC, REP.idReporte ASC";
				
		Query query = sesion.createQuery(sentencia);
		listaTramite = query.list();
		
		for(int i=0; i<listaTramite.size();i++){
			Object[] datosRecuperados = listaTramite.get(i);
			Reporte2 repor = new Reporte2();
			
			repor.setIdReporte((int)datosRecuperados[0]);
			repor.setTipoCT((String)datosRecuperados[1]);//
			repor.setCarpetaInvestigacion((String)datosRecuperados[2]);
			repor.setHora((String)datosRecuperados[3]);
			repor.setFechaInicio((String)datosRecuperados[4]);
			repor.setTipoDelito((String)datosRecuperados[5]);//			
			repor.setLugarHechos((String)datosRecuperados[6]);
			repor.setTipoRemite((String)datosRecuperados[7]);//
			repor.setProbableResponsable((String)datosRecuperados[8]);
			repor.setMasculino((int)datosRecuperados[9]);
			repor.setFemenino((int)datosRecuperados[10]);
			repor.setDenunciante((String)datosRecuperados[11]);
			repor.setDescripcion((String)datosRecuperados[12]);
			repor.setTipoTramite((String)datosRecuperados[13]);//
			repor.setTieneAntecedentes((String)datosRecuperados[14]);
			repor.setFecha((String)datosRecuperados[15]);
			repor.setTurno((String)datosRecuperados[16]);
			listaReporte.add(repor);
			
		}
		return listaReporte;
	}

}
