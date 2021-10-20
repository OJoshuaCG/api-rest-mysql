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

INSERT INTO Personas (Persona, Mes, Monto) VALUES
	('Jameson', 'Enero', 125.2),
	('Cesar', 'Febrero', 35.5),
	('Jorge', 'Enero', 30.1),
	('Cesar', 'Marzo', 55.8),
	('Jorge', 'Abril', 25.0),
	('Jameson', 'Abril', 30.1),
	('Jameson', 'Enero', 55.8),
	('Jorge', 'Febrero', 25.0),
	('Cesar', 'Enero', 55.8) ;