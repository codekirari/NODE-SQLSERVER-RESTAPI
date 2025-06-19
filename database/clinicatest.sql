-- CREATE DATABASE clinicatest


--   // en sqlserver no sirve AUTO_INCREMENT

USE clinicatest;

CREATE TABLE Paciente (
    id_paciente INT PRIMARY KEY IDENTITY(1,1), 
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    telefono VARCHAR(15),
    email VARCHAR(100)
);