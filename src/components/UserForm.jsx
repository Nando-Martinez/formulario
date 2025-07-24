import React, { useState, useEffect } from "react";

const UserForm = ({ onSubmit, user }) => {
  const [tipo, setTipo] = useState("Alumno");
  const [nombre_completo, setNombreCompleto] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    if (user) {
      setTipo(user.tipo);
      setNombreCompleto(user.nombre_completo);
      setCorreo(user.correo);
      setTelefono(user.telefono);
    } else {
      setTipo("Alumno");
      setNombreCompleto("");
      setCorreo("");
      setTelefono("");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre_completo || !correo || !telefono) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const nuevoUsuario = {
      tipo,
      nombre_completo,
      correo,
      telefono,
    };

    if (user && user.id) {
      nuevoUsuario.id = user.id; 
    }

    onSubmit(nuevoUsuario);

    setTipo("Alumno");
    setNombreCompleto("");
    setCorreo("");
    setTelefono("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Tipo de Usuario:</label>
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        style={styles.input}
      >
        <option value="Alumno">Alumno</option>
        <option value="Administrador">Administrador</option>
      </select>

      <label style={styles.label}>Nombre completo:</label>
      <input
        type="text"
        value={nombre_completo}
        onChange={(e) => setNombreCompleto(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Correo electrónico:</label>
      <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Número de teléfono:</label>
      <input
        type="tel"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        {user ? "Actualizar usuario" : "Agregar usuario"}
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto 30px",
    padding: "20px",
    backgroundColor: "#f3f3f3",
    borderRadius: "8px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default UserForm;
