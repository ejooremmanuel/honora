import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Service from "./components/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/service/:id" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
