import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Router, Route, Switch, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  // const isLoggedIn = async() =>{
  //   try {
  //     const res = await fetch("/auth", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "Application/json",
  //       },
  //      credentials:"include"
  //     });
  //     if (res.status === 200 ) {
  //       setauth(true)
  //       setauth(false)
  //     }
  //     if (res.status === 401 ){
  //       setauth(false)
  //       setauth(true)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
