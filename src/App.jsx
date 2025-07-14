import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updated) => {
    setUsers(users.map((u) => (u.id === updated.id ? updated : u)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
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
