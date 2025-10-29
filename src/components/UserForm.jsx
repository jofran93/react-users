import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";

export default function UserForm({ addUser, cancelForm }) {
  const [user, setUser] = useState({ name: "", email: "" });
  const validator = useRef(new SimpleReactValidator());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.current.allValid()) {
      addUser(user);
      setUser({ name: "", email: "" });
      validator.current.hideMessages();
    } else {
      validator.current.showMessages();
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <span className="error">
            {validator.current.message("nombre", user.name, "required|alpha_space")}
          </span>
        </div>

        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <span className="error">
            {validator.current.message("correo", user.email, "required|email")}
          </span>
        </div>

        <button type="submit">Guardar</button>
        <button type="button" onClick={cancelForm} className="cancel-btn">
          Cancelar
        </button>
      </form>
    </div>
  );
}
