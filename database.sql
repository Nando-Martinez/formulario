-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS crud_usuarios_db;
USE crud_usuarios_db;

-- Crear tabla usuarios
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo ENUM('Alumno', 'Administrador') NOT NULL,
  nombre_completo VARCHAR(150) NOT NULL,
  correo VARCHAR(150) NOT NULL UNIQUE,
  telefono VARCHAR(20) NOT NULL
);

-- Insertar datos de ejemplo
INSERT INTO usuarios (tipo, nombre_completo, correo, telefono) VALUES
('Alumno', 'Juan Pérez', 'juan.perez@example.com', '555-123-4567'),
('Administrador', 'María Gómez', 'maria.gomez@example.com', '555-987-6543'),
('Alumno', 'Luis Martínez', 'luis.martinez@example.com', '555-555-5555');
