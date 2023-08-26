import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";

// Custom Components
import TeamPage from "./pages/team/TeamPage";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import testPage from "./pages/testPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import BootstrapNavbar from "./components/header/BootstrapNavbar";

function App() {
  return (
    <React.Fragment>
      <BootstrapNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/test" element={<testPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
