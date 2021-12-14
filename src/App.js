import "./App.css";

import DashBord from "./Component/DashBord";
import Navbar from "./NavBar/Navbar";
import SideBar from "./Component/SideBar/SideBar";

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
