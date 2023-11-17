import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.js";
import Footer from "./Components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Expense from "./pages/expense.js";
import Calender from "./pages/calender.js";
import Login from "./pages/logreg.js";
import Register from "./pages/register.js"; 
import TestimonialPage from "./pages/TestimonialPage.js";
import VisionPage from "./pages/VisionPage.js";
import Dashboard from "./pages/dashboard.js";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route index element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
