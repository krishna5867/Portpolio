import './App.css';
import ModalBox from "./Page/model";
import Protected from './Page/protected';
import Navbar from './Page/Navbar';
import Home from "./Page/Home"
import About from "./Page/About"
import Login from './Page/Login';
import Logout from './Page/Logout';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Protected Component ={Home}/>} />
        <Route exact path="/about" element={<Protected Component ={About}/>} />
        <Route exact path="/modalbox" element={<Protected Component ={ModalBox}/>} />
        <Route exact path="/login" element={<Protected Component ={Login}/>} />
        <Route exact path="/logout" element={<Protected Component ={Logout}/>} />
      </Routes>
    </div>
  );
}

export default App;
