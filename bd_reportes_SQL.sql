SET SQL_SAFE_UPDATES=0;
-- Crea la base de datos
CREATE DATABASE IF NOT EXISTS bd_reportes CHARACTER SET utf8 COLLATE utf8_general_ci;

-- Usa la base de datos 
USE bd_reportes;

-- Creación de las tablas
CREATE TABLE login (
	id INT PRIMARY KEY,
	usuario VARCHAR(13),
	contra VARCHAR(10),
	nivel INT
) ENGINE=InnoDB;

CREATE TABLE CT (
	Id_CT INT AUTO_INCREMENT PRIMARY KEY, 
    Tipo_CT VARCHAR(5)
) ENGINE=InnoDB;

CREATE TABLE Delito (
	Id_Delito INT AUTO_INCREMENT PRIMARY KEY, 
    Tipo_Delito VARCHAR(70)
) ENGINE=InnoDB;

CREATE TABLE Tramite (
	Id_Tramite INT AUTO_INCREMENT PRIMARY KEY,
    Tipo_Tramite VARCHAR(50)    
) ENGINE=InnoDB;

CREATE TABLE Remite (
	Id_Remite INT AUTO_INCREMENT PRIMARY KEY,
    Tipo_Remite VARCHAR(6)    
) ENGINE=InnoDB;

CREATE TABLE Reporte (
	Id INT AUTO_INCREMENT PRIMARY KEY,
	Carpeta_Investigacion VARCHAR(40),
	Hora VARCHAR(5),    
	Fecha_Inicio DATE,
	Lugar_Hechos VARCHAR(255),
	Probable_Responsable VARCHAR(700),
	Denunciante VARCHAR(255),
	Descripcion VARCHAR(400),
	Fecha DATE,
    M INT,
    F INT,
    Total_Imputados INT,
    Fiscalia VARCHAR(7),
    Coord VARCHAR(5),
    Con_Detenido VARCHAR(6),
    Folio VARCHAR(5),
    Mes VARCHAR(2),
    Anhio VARCHAR(4),
    Bis VARCHAR(3),
    Relacionada VARCHAR(3),
    Tiene_Antecedentes VARCHAR(1500),
    Turno VARCHAR(2),
    
    CT_Id_CT INT NOT NULL,  -- FK  
	Delito_Id_Delito INT NOT NULL,  -- FK  
	Tramite_Id_Tramite INT NOT NULL, -- FK
	Remite_Id_Remite INT NOT NULL, -- FK
        
    CONSTRAINT Reporte_CT
	FOREIGN KEY (CT_Id_CT) 
	REFERENCES CT(Id_CT)
     ON DELETE CASCADE ON UPDATE CASCADE,

    CONSTRAINT Reporte_Delito
	FOREIGN KEY (Delito_Id_Delito) 
	REFERENCES Delito(Id_Delito)
     ON DELETE CASCADE ON UPDATE CASCADE,
    
    CONSTRAINT Reporte_Tramite
	FOREIGN KEY (Tramite_Id_Tramite) 
	REFERENCES Tramite(Id_Tramite)
	 ON DELETE CASCADE ON UPDATE CASCADE,

    CONSTRAINT Reporte_Remite
	FOREIGN KEY (Remite_Id_Remite) 
	REFERENCES Remite(Id_Remite)
     ON DELETE CASCADE ON UPDATE CASCADE

) ENGINE=InnoDB;

-- Insertar datos en las tablas login, CT, Delito, Tramite, Remite, Turno y Genero
INSERT INTO bd_reportes.login (id,usuario,contra,nivel) VALUES 
(1,'Administrador','123',1);

INSERT INTO bd_reportes.login VALUES 
(2,'Usuario','234',2);

INSERT INTO bd_reportes.CT (Id_CT, Tipo_CT) VALUES 
(1, 'GAM-1'),
(2, 'GAM-2'),
(3, 'GAM-3'),
(4, 'GAM-4'),
(5, 'GAM-5'),
(6, 'GAM-6'),
(7, 'GAM-7'),
(8, 'GAM-8'),
(9, 'H-5');

INSERT INTO bd_reportes.Delito (Id_Delito, Tipo_Delito) VALUES 
(1, 'ABANDONO DE PERSONAS'),
(2, 'ABORTO'),
(3, 'ABUSO DE AUTORIDAD'),
(4, 'ABUSO DE CONFIANZA'),
(5, 'ALLANAMIENTO DE MORADA'),
(6, 'ATAQUE A LAS VÍAS DE COMUNICACIÓN'),
(7, 'COALICIÓN DE SERVIDORES PÚBLICOS'),
(8, 'COHECHO'),
(9, 'DAÑO EN PROPIEDAD AJENA'),
(10, 'DAÑO EN PROPIEDAD AJENA POR TRANSITO VEHICULAR'),
(11, 'DELITOS CONTRA LA SALUD'),
(12, 'DENUNCIA DE HECHOS'),
(13, 'DISPARO DE ARMA DE FUEGO'),
(14, 'ABUSO DE AUTORIDAD'),
(15, 'ENCUBRIMIENTO'),
(16, 'ENCUBRIMIENTO POR RECEPTACION'),
(17, 'EVASIÓN DE PRESOS'),
(18, 'EXTORSIÓN'),
(19, 'FALSEDAD EN DECLARACIONES JUD. Y EN INFORMES DADOS A UNA AUT.'),
(20, 'FALSIFICACIÓN DE DOCUMENTOS EN GENERAL'),
(21, 'FRAUDE'),
(22, 'HOMICIDIO DOLOSO POR ARMA BLANCA'),
(23, 'HOMICIDIO DOLOSO POR D.A.F.'),
(24, 'HOMICIDIO CULPOSO'),
(25, 'HOMICIDIO CULPOSO POR T.V.'),
(26, 'LESIONES CULPOSAS'),
(27, 'LESIONES CULPOSAS POR T.V.'),
(28, 'LESIONES DOLOSAS'),
(29, 'LESIONES POR ARMA BLANCA'),
(30, 'LESIONES POR ARMA DE FUEGO'),
(31, 'OTROS DELITOS'),
(32, 'PLAGIO O SECUESTRO'),
(33, 'PORTACIÓN DE ARMAS PROHIBIDAS'),
(34, 'PRIVACIÓN ILEGAL DE LA LIBERTAD'),
(35, 'QUEBRANTAMIENTO DE SELLOS'),
(36, 'RESPONSABILIDAD PROFESIONAL'),
(37, 'ROBO SIMPLE'),
(38, 'ROBO A CASA HABITACIÓN CON VIOLENCIA'),
(39, 'ROBO A CASA HABITACIÓN SIN VIOLENCIA'),
(40, 'ROBO A CUENTAHABIENTE (BANCO O CAJERO)'),
(41, 'ROBO A NEGOCIO SIN VIOLENCIA'),
(42, 'ROBO A NEGOCIO CON VIOLENCIA'),
(43, 'ROBO A REPARTIDOR'),
(44, 'ROBO A TRANSEUNTE'),
(45, 'ROBO A TRANSPORTISTA'),
(46, 'ROBO DE ACCESORIOS DE AUTOMÓVIL'),
(47, 'ROBO DE AUTO C/V'),
(48, 'ROBO DE AUTO S/V'),
(49, 'ROBO A BORDO DE TRANSPORTE PUBLICO'),
(50, 'TENTATIVA DE HOMICIDIO'),
(51, 'TENTATIVA DE ROBO'),
(52, 'VIOLACIÓN'),
(53, 'VIOLENCIA FAMILIAR');

INSERT INTO bd_reportes.Tramite (Id_Tramite, Tipo_Tramite) VALUES 
(1, 'DELITO QUE NO TENGA PENA PRIVATIVA DE LIBERTAD'),
(2, 'DELITO PATRIMONIAL O CULPOSO'),
(3, 'ART. 100 PERDÓN'),
(4, 'ART. 140 CNPP'),
(5, 'ART. 148 FALTA DE QUERELLA'),
(6, 'ART. 149 NO FLAGRANCIA'),
(7, 'ART. 149 ILEGAL DETENCIÓN'),
(8, 'ART. 186 ACUERDOS REPARATORIOS'),
(9, 'P.G.R.'),
(10, 'A PGJ DE ESTADOS'),
(11, 'A FISCALIAS CENTRALES'),
(12, 'A FISCALIAS DESCONCENTRADAS'),
(13, 'A OTRAS ÁREAS DE LA PGJ'),
(14, 'JUEZ CÍVICO / OTRAS ÁREAS'),
(15, 'CONTINUADA'),
(16, 'JUDICIALIZADA');

INSERT INTO bd_reportes.Remite (Id_Remite, Tipo_Remite) VALUES 
(1, 'S.S.P.'),
(2, 'P.D.I.'),
(3, 'OTROS'); 


-- CONSULTAR TABLAS
SELECT*FROM login;
SELECT*FROM CT;
SELECT*FROM Delito;
SELECT*FROM Tramite;
SELECT*FROM Remite;

-- TOTAL DE REPORTES
SELECT reporte.Id, ct.Tipo_CT, reporte.Carpeta_Investigacion, reporte.Hora, reporte.Fecha_Inicio as 'Fecha_Inicio', delito.Tipo_Delito, 
reporte.Lugar_Hechos, remite.Tipo_Remite, reporte.Probable_Responsable, reporte.Total_Imputados, reporte.M, reporte.F, reporte.Denunciante, 
reporte.Descripcion, tramite.Tipo_Tramite, reporte.Tiene_Antecedentes, DATE_FORMAT(reporte.Fecha, '%d/%m/%Y') as Fecha, reporte.Turno
FROM reporte, ct, delito, remite, tramite
WHERE reporte.CT_Id_CT = ct.Id_CT
AND reporte.Delito_Id_Delito = delito.Id_Delito
AND reporte.Tramite_Id_Tramite = tramite.Id_Tramite
AND reporte.Remite_Id_Remite = remite.Id_Remite
ORDER BY ct.Tipo_CT asc, reporte.Id asc;

SELECT * FROM reporte;
