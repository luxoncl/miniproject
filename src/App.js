import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [admin, setAdmin] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Admin" element={<Admin adm={admin} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
