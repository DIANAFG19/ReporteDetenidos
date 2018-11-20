<%@ page contentType="application/pdf; charset=ISO-8859-1"%>
<%@ page trimDirectiveWhitespaces="true"%>

<%@ page import="net.sf.jasperreports.engine.*"%>
<%@ page import="net.sf.jasperreports.view.JasperViewer"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.FileNotFoundException"%>
<%@ page import="java.io.InputStream"%>
<%@ page import="java.io.OutputStream"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.SQLException"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Map"%>

<%@page session="true"%>

<%
        HttpSession sesion = request.getSession();
		String usuario;
		String nivel;
		
		//Atributos de Login.jsp
		if(sesion.getAttribute("user")!=null && sesion.getAttribute("level")!=null){
			usuario = sesion.getAttribute("user").toString();
			nivel = sesion.getAttribute("level").toString();
		}else{
			out.print("<script>location.replace('login');</script>");
		}
	%>

<%
	Connection conn = null;

	try{
		//Conexion a la BD MySQL
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://172.33.31.45:3306/bd_reportes?user=root&password=");
		
		//Cargando el archivo Jasper Report del archivo local del sistema
		String jrxmlFile = session.getServletContext().getRealPath("/reporte_tramitados_main.jrxml");
		InputStream input = new FileInputStream(new File(jrxmlFile));
		
		//Generando el reporte
		JasperReport jasperReport = JasperCompileManager.compileReport(input);
		
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("Image", this.getServletContext().getRealPath("/")+"images/CDMX_PGJ.png");
		
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, data, conn);
		
		//Exportando el reporte como un PDF
		JasperExportManager.exportReportToPdfStream(jasperPrint, response.getOutputStream());
		
		response.getOutputStream().flush();
		response.getOutputStream().close();
	} catch (Exception e){
		e.printStackTrace();
	} finally{
		if(conn!=null){
			conn.close();
		}
	}

%>





