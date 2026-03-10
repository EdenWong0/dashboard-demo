function UsersTable({ users = [] }) {
  return (
    <table border="1" cellPadding="10">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.company.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default UsersTable;

