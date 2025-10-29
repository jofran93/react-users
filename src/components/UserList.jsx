export default function UserList({ users }) {
  return (
    <div className="user-list">
      {users.length === 0 ? (
        <p className="empty-message">No hay usuarios registrados aún.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
