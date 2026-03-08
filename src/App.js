import Dashboard from "./page/Dashboard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <aside>
        <Sidebar />
      </aside>

      <div className="main-section">
        <Header />       
        <main>
          <Dashboard />
        </main> 
      </div>
    </div>
  );
}

export default App;