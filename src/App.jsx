import { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <h1>Gestión de Usuarios</h1>

      {!showForm ? (
        <>
          <UserList users={users} />
          <button onClick={() => setShowForm(true)} className="add-btn">
            Agregar Usuario
          </button>
        </>
      ) : (
        <UserForm addUser={addUser} cancelForm={() => setShowForm(false)} />
      )}
    </div>
  );
}
