import "./App.css";
import Navbar from "./Component/NavBar/Navbar";

import SideBar from "./Component/SideBar/SideBar";
import DashBord from "./Page/DashBord";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="sidebar">
        <SideBar></SideBar>
      </div>
      <div className="dashbord">
        <DashBord></DashBord>
      </div>
    </div>
  );
}

export default App;
