# MySQL api-rest CRUD
### Elaborado por: Orlando Joshua Carrasco García

<br>

## Herramientas a Necesitar
- [Node.js](https://nodejs.org/es/)
- [Visual Studio Code](https://code.visualstudio.com/) o cualquier editor de código (opcional)

<br>

## Como ejecutar el proyecto
Primeramente vamos a ir a nuestro xampp, iniciar el servidor MySQL y Apache. 
Tendremos que asegurarnos de tener una Base de Datos llamada **prueba** y una tabla denominada **Personas**
~~~
-- Creamos la base de datos
CREATE DATABASE prueba;

-- Usamos la base de datos
USE prueba;

-- Creamos la tabla
CREATE TABLE Personas(
  CodPersona SMALLINT PRIMARY KEY AUTO_INCREMENT,
  Persona VARCHAR(35),
  Mes VARCHAR(10),
  Monto DECIMAL (5,2)
);
~~~

Para poder ejecutar nuestro proyecto, necesitamos ejecutar la siguiente linea de código en el cmd, este debe apuntar a la carpeta del proyecto.
~~~
npm run dev
~~~

Una vez que hayamos ejecutado el comando anterior, iremos a nuestro navegador e ingresamos a la siguiente URL
[localhost:3000](http://localhost:3000/)

