
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";


function App() {

 
  return (
    <div className=" background-body ">
    <Navbar></Navbar>
    <Outlet></Outlet>
   
     
      
    </div>
  );
}

export default App;
