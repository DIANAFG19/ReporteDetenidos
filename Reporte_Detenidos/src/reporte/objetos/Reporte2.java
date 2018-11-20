package reporte.objetos;

public class Reporte2 {
	private int idReporte;
	private String carpetaInvestigacion;
	private String hora;
	private String fechaInicio;
	private String lugarHechos;
	private String probableResponsable;
	private String denunciante;
	private String descripcion;	
	private String fecha;
	private int masculino;
	private int femenino;
	
	//secciones de la C.I.
	private String fiscalia;
	private String coord;
	private String conDetenido;
	private String folio;
	private String mes;
	private String anhio;
	private String bis;
	private String relacionada;
	
	private int idCTFK; //FK
	private int idDelitoFK; //FK
	private int idTramiteFK; //FK
	private int idRemiteFK; //FK
	
	private String tipoCT;
	private String tipoDelito;
	private String tipoRemite;
	private String tipoTramite;
	
	private String tieneAntecedentes;
	private String turno;
	
	public int getIdReporte() {
		return idReporte;
	}
	public void setIdReporte(int idReporte) {
		this.idReporte = idReporte;
	}
	public String getCarpetaInvestigacion() {
		return carpetaInvestigacion;
	}
	public void setCarpetaInvestigacion(String carpetaInvestigacion) {
		this.carpetaInvestigacion = carpetaInvestigacion;
	}
	public String getHora() {
		return hora;
	}
	public void setHora(String hora) {
		this.hora = hora;
	}
	public String getFechaInicio() {
		return fechaInicio;
	}
	public void setFechaInicio(String fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	public String getLugarHechos() {
		return lugarHechos;
	}
	public void setLugarHechos(String lugarHechos) {
		this.lugarHechos = lugarHechos;
	}
	public String getProbableResponsable() {
		return probableResponsable;
	}
	public void setProbableResponsable(String probableResponsable) {
		this.probableResponsable = probableResponsable;
	}
	public String getDenunciante() {
		return denunciante;
	}
	public void setDenunciante(String denunciante) {
		this.denunciante = denunciante;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}	
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public int getMasculino() {
		return masculino;
	}
	public void setMasculino(int masculino) {
		this.masculino = masculino;
	}
	public int getFemenino() {
		return femenino;
	}
	public void setFemenino(int femenino) {
		this.femenino = femenino;
	}
	public int getIdCTFK() {
		return idCTFK;
	}
	public void setIdCTFK(int idCTFK) {
		this.idCTFK = idCTFK;
	}
	public int getIdDelitoFK() {
		return idDelitoFK;
	}
	public void setIdDelitoFK(int idDelitoFK) {
		this.idDelitoFK = idDelitoFK;
	}
	public int getIdTramiteFK() {
		return idTramiteFK;
	}
	public void setIdTramiteFK(int idTramiteFK) {
		this.idTramiteFK = idTramiteFK;
	}
	public int getIdRemiteFK() {
		return idRemiteFK;
	}
	public void setIdRemiteFK(int idRemiteFK) {
		this.idRemiteFK = idRemiteFK;
	}
			
	public String getTurno() {
		return turno;
	}
	public void setTurno(String turno) {
		this.turno = turno;
	}
	public String getFiscalia() {
		return fiscalia;
	}
	public void setFiscalia(String fiscalia) {
		this.fiscalia = fiscalia;
	}	
	public String getCoord() {
		return coord;
	}
	public void setCoord(String coord) {
		this.coord = coord;
	}
	public String getConDetenido() {
		return conDetenido;
	}
	public void setConDetenido(String conDetenido) {
		this.conDetenido = conDetenido;
	}
	public String getFolio() {
		return folio;
	}
	public void setFolio(String folio) {
		this.folio = folio;
	}
	public String getMes() {
		return mes;
	}
	public void setMes(String mes) {
		this.mes = mes;
	}
	public String getAnhio() {
		return anhio;
	}
	public void setAnhio(String anhio) {
		this.anhio = anhio;
	}
	public String getBis() {
		return bis;
	}
	public void setBis(String bis) {
		this.bis = bis;
	}	
	public String getRelacionada() {
		return relacionada;
	}
	public void setRelacionada(String relacionada) {
		this.relacionada = relacionada;
	}
	
	public String getTieneAntecedentes() {
		return tieneAntecedentes;
	}
	public void setTieneAntecedentes(String tieneAntecedentes) {
		this.tieneAntecedentes = tieneAntecedentes;
	}
	public String toString(){
		String mensaje = "Id Reporte:" + idReporte + ", C.T.:" + idCTFK + ", Carpeta Investigacion:" + carpetaInvestigacion 
						+ ", Hora:" + hora + ", Fecha de Inicio:" + fechaInicio + ", Id Delito:" + idDelitoFK 
						+ ", Lugar de los Hechos:" + lugarHechos + ", Id Remite:" + idRemiteFK + ", Probable Responsable:" + probableResponsable 
						+ ", M:" + masculino + ", F:" + femenino +  ", Denunciante:" + denunciante + ", Descripcion:" + descripcion 
						+ ", Id Tramite:" + idTramiteFK + ", Antecedentes:" + tieneAntecedentes 
						+ ", Fecha:" + fecha + ", Id Turno:" + turno;
		return mensaje;
	}
	public String getTipoCT() {
		return tipoCT;
	}
	public void setTipoCT(String tipoCT) {
		this.tipoCT = tipoCT;
	}
	public String getTipoDelito() {
		return tipoDelito;
	}
	public void setTipoDelito(String tipoDelito) {
		this.tipoDelito = tipoDelito;
	}
	public String getTipoRemite() {
		return tipoRemite;
	}
	public void setTipoRemite(String tipoRemite) {
		this.tipoRemite = tipoRemite;
	}
	public String getTipoTramite() {
		return tipoTramite;
	}
	public void setTipoTramite(String tipoTramite) {
		this.tipoTramite = tipoTramite;
	}
	
	
	
	

}
