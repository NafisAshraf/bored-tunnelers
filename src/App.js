import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import "./App.css";
import "./styles/global.css";

// Custom Components
import TeamPage from "./pages/team/TeamPage";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/testPage/TestPage";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/header/Header";
// import Timeline from "./components/TimelineSection";
import BootstrapNavbar from "./components/header/BootstrapNavbar";
import Contactpage from "./pages/contactpage/Contactpage";
import AdminHome from "./pages/adminPage/adminHome";
import TechnologyPage from "./pages/technology/TechnologyPage";
import FeaturedPage from "./pages/FeaturedPage";
import SponsorshipPage from "./pages/sponsorshipPage/SponsorshipPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import ScrollToTop from "./pages/ScrollToTop";
import MediaPage from "./pages/MediaPage";
// import TeamLoading from "./pages/teamLoading/TeamLoading";
// import SensorPage from "./pages/sensorPage/SensorPage";
import CylinderPage from "./pages/cylinderPage/CylinderPage";
import TimelinePage from "./pages/TimelinePage";

function App() {
  // const xRotation = Math.PI / 4; // 45 degrees in radians
  // const yRotation = Math.PI / 4; // 45 degrees in radians
  // const zRotation = 0; // No rotation around the z-axis

  return (
    <React.Fragment>
      <ScrollToTop />
      <BootstrapNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/featured-in" element={<FeaturedPage />} />
        <Route path="/sponsorship" element={<SponsorshipPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/test" element={<TestPage />} />
        {/* <Route path="/sensor" element={<SensorPage />} /> */}
        <Route path="/cylinder" element={<CylinderPage />} />

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
