import { useState, useEffect } from "react";
import { getUsers } from './../services/api';
import UsersTable from './../components/UsersTable';
import StatCard from './../components/StatCard';

function Dashboard() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers().then(data => {
            setUser(data);
            setLoading(false)
        })
    }, []);

    if(loading) return <p>Loading...</p>

  return (
    <div>
        <h1>AMMC Dashboard</h1>
        
        <div className="cards">
            <StatCard title="Total User" value={user.length}/>
            <StatCard title="Active User" value={20}/>       
        </div>

        <UsersTable users={user}/>    
    </div>
  )
}

export default Dashboard;