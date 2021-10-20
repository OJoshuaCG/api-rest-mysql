-- creando la base de datos
CREATE DATABASE prueba;

-- usando la base de datos
USE prueba;

-- creando la tabla
CREATE TABLE Personas(
	CodPersona SMALLINT PRIMARY KEY AUTO_INCREMENT,
	Persona VARCHAR(35),
	Mes VARCHAR(10),
	Monto DECIMAL (5,2)
);