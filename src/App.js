import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Service from "./components/Service";
import Footer from "./components/Footer";
import AboutComponent from "./components/AboutComponent";
import Contact from "./pages/contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/service/:id" element={<Service />} />
        <Route exact path="/about" element={<AboutComponent />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
