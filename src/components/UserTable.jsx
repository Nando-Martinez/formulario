import React from "react";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Tipo</th>
          <th style={styles.th}>Nombre completo</th>
          <th style={styles.th}>Correo</th>
          <th style={styles.th}>Teléfono</th>
          <th style={styles.th}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
              No hay usuarios registrados.
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id} style={styles.tr}>
              <td style={styles.td}>{user.tipo}</td>
              <td style={styles.td}>{user.nombre}</td>
              <td style={styles.td}>{user.correo}</td>
              <td style={styles.td}>{user.telefono}</td>
              <td style={styles.td}>
                <button style={styles.editButton} onClick={() => onEdit(user)}>
                  Editar
                </button>
                <button style={styles.deleteButton} onClick={() => onDelete(user.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    maxWidth: "700px",
    margin: "0 auto",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
  },
  tr: {
    backgroundColor: "#fff",
  },
  editButton: {
    marginRight: "8px",
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default UserTable;
