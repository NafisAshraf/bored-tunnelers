import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";
import "./styles/global.css";

// Custom Components
import TeamPage from "./pages/team/TeamPage";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import testPage from "./pages/testPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Timeline from "./components/timeline/Timeline";
import BootstrapNavbar from "./components/header/BootstrapNavbar";
import Contactpage from "./pages/contactpage/Contactpage";
import AdminHome from "./pages/adminPage/adminHome";
import TechnologyPage from "./pages/technology/TechnologyPage";
import FeaturedPage from "./pages/featuredPage/FeaturedPage";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <React.Fragment>
      <BootstrapNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/our-story" element={<Timeline />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/featuredPage" element={<FeaturedPage />} />
        <Route path="/test" element={<testPage />} />
        <Route path="/about" element={<AboutUs />} />

        {/* <Route
          path="/*"
          element={() => {
            navigate("/");
            return null;
          }}
        /> */}
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
