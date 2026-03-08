function UsersTable({ users = [] }) {
  return (
    <table border="1" cellPadding="20">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Company</th>
                <th>Phone</th>
            </tr>
        </thead>

        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.company?.name}</td>
                    <td>{user.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default UsersTable;