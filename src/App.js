import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Service from "./components/Service";
import AboutComponent from "./components/AboutComponent";
import Contact from "./pages/contact";
import { Toaster } from "react-hot-toast";
import Messages from "./pages/Messages";

// import Chat from "./pages/showMessage";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: "auto" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/our-service/:heading/:id" element={<Service />} />
          <Route exact path="/about" element={<AboutComponent />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin/message" element={<Messages />} />
          {/* <Route exact path="/chat" element={<Chat />} /> */}
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
