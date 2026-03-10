import {useState, useEffect} from 'react'
import { getUsers } from "../services/api"
import UsersTable from '../components/UsersTable'
import StatCard from '../components/StatCard'


function DashboardWithFunction() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch(error) {
            setError("Failed to fetch users")
        } finally {
            setLoading(false);
        }
    }

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>

  return (
    <div>
        <h1>AMMC Dashboard</h1>

        <div className="cards">
            <StatCard title="Total Users" value={users.length} />
            <StatCard title="Filtered Users" value={filteredUsers.length} />        
        </div>


        <div>
            <input text="text" placeholder="Search here..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>

        <UsersTable users={filteredUsers}/>
    </div>
  )
}

export default DashboardWithFunction