import React, {useEffect, useState} from 'react';
import { getUsers } from '../services/api';
import StatCard from '../components/StatCard';
import UsersTable from '../components/UsersTable';

function Dashboard() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [sortByAsc, setSortByAsc] = useState(true);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch(error) {
            setError("Failed to load users");
        } finally {
            setLoading(false);
        }
    }

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase)
    );

    const sortedUsers = [...filteredUsers].sort((a,b) => 
        sortByAsc 
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    );

    if (loading) return <p>loading...</p>;
    if (error) return <p>{error}</p>;

  return (
    <div>
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="cards">
            <StatCard title="Total Users" value={users.length}/>
            <StatCard title="Filtered Users" value={sortedUsers.length} />
        </div>

        <div className="controls">
            <input text="input" placeholder="Seach Users...." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => setSortByAsc(!sortByAsc)} />
        </div>

        <UsersTable users={sortedUsers} />
    </div>
  )
}

export default Dashboard;