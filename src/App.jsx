import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  const [users, setUsers] = useState([]);

  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error al traer usuarios:", err));
  }, []);

const addUser = (user) => {
  fetch("http://localhost:8081/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((response) => {
      const newUser = { ...user, id: response.id };
      setUsers(prevUsers => [...prevUsers, newUser]);
    })
    .catch((err) => console.error("Error al agregar usuario:", err));
};

const updateUser = (updated) => {
  fetch(`http://localhost:8081/users/${updated.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated),
  })
    .then((res) => res.json())
    .then(() => {
      setUsers(prevUsers =>
        prevUsers.map(u => (u.id === updated.id ? updated : u))
      );
      setEditingUser(null);
    })
    .catch((err) => console.error("Error al actualizar usuario:", err));
};

const deleteUser = (id) => {
  fetch(`http://localhost:8081/users/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      setUsers(prevUsers => prevUsers.filter(u => u.id !== id));
    })
    .catch((err) => console.error("Error al eliminar usuario:", err));
};


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>CRUD de Usuarios</h1>
      <UserForm onSubmit={editingUser ? updateUser : addUser} user={editingUser} />
      <UserTable users={users} onEdit={setEditingUser} onDelete={deleteUser} />
    </div>
  );
};

export default App;
