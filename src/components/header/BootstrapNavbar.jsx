import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logos from "../../assets/images/logo.png";
import "./BootstrapNavbar.css";

const BootstrapNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <nav
        className={`navigation-bar navbar pb-2 ${scrolled ? "scrolled" : ""}  ${
          showAlert ? "pt-0" : "pt-2"
        }`}
        data-bs-theme="dark"
        // style={{ marginTop: showAlert ? "auto" : "0" }}
      >
        {showAlert && (
          <div
            className="alert alert-warning border-0 rounded-0 ps-3 pe-5"
            style={{
              fontSize: "15px",
              padding: "10px",
              fontFamily: "Helvetica",
              // position: "fixed",
              // top: 0,
              width: "100%",
              zIndex: 1000,
            }}
          >
            We are looking for donations to support our project. Please consider
            contributing if possible.{" "}
            <Link to="/#gofundme-section" style={{ color: "#f2cc63" }}>
              Click here
            </Link>
            <button
              type="button"
              className="btn-close"
              style={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={handleCloseAlert}
            ></button>
          </div>
        )}
        <div className="container-xxl container-fluid">
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand className="d-flex align-items-center gap-2">
              <img
                className="myLogo"
                src={logos}
                alt="logo"
                width="60"
                height="60"
              />
              <p className="logo-header">Bored Tunnelers</p>
            </Navbar.Brand>
          </Link>

          <div className="sidebar">
            <div
              className="offcanvas-xxl offcanvas-end"
              tabIndex="-1"
              id="sidebarMenu"
            >
              <div className="offcanvas-header">
                <Navbar.Brand className="ms-3" href="/">
                  <span className="logo-header">Bored Tunnelers</span>
                </Navbar.Brand>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                ></button>
              </div>

              <div className="offcanvas-body py-2 d-flex mx-2 overflow-y-auto">
                <ul className="nav flex-column flex-xxl-row align-items-xxl-center">
                  {/* Home Link */}
                  <li className="nav-item">
                    <Link className="nav-link text-white hover-line" to="/">
                      Home
                    </Link>
                  </li>

                  {/* Other navigation links like About, Team, etc. */}
                  <li className="nav-item mt-2 mt-xxl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item mt-2 mt-xxl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/timeline"
                    >
                      Timeline
                    </Link>
                  </li>
                  {/* <li className="nav-item mt-2 mt-xxl-0">
                    <Link className="nav-link text-white hover-line" to="/team">
                      Team
                    </Link>
                  </li> */}
                  <li className="nav-item mt-2 mt-xxl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/featured-in"
                    >
                      Featured
                    </Link>
                  </li>
                  <li className="nav-item mt-2 mt-xxl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/technology"
                    >
                      Technology
                    </Link>
                  </li>

                  {/* Gallery MUI Dropdown */}
                  {/* <li className="nav-item mt-2 mt-xxl-0">
                    <div
                      className="nav-link text-white hover-line"
                      onClick={handleMenuClick}
                    >
                      Gallery
                    </div>
                    <Menu
                      id="gallery-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleMenuClose}
                    >
                      <MenuItem
                        onClick={() =>
                          navigateToLink("https://flic.kr/s/aHBqjBeTBf")
                        }
                      >
                        Team At Work - Bitac
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          navigateToLink("https://flic.kr/s/aHBqjBga6i")
                        }
                      >
                        BITAC Team Photoshoot
                      </MenuItem>
                    </Menu>
                  </li> */}

                  {/* Media */}
                  <li className="nav-item mt-2 mt-xxl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/media"
                    >
                      Media
                    </Link>
                  </li>

                  {/* Sponsorship and Contact Us */}
                  <li className="nav-item mt-2 mt-xxl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/sponsorship"
                    >
                      Sponsorship
                    </Link>
                  </li>
                  <li className="nav-item mt-4 mt-xxl-0">
                    <Link
                      className="nav-link ms-2 p-0 text-white"
                      to="/contact"
                    >
                      <button className="btn btn-primary rounded rounded-3">
                        Contact Us
                      </button>
                    </Link>
                  </li>
                  {/* <li className="nav-item mt-4 mt-xxl-0">
                    <Link
                      className="nav-link ms-2 p-0 text-white"
                      to="https://form.jotform.com/241035103871446"
                    >
                      <button className="btn btn-primary rounded rounded-3">
                        Join Us
                      </button>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <ul class="navbar-nav flex-row d-xxl-none">
            <li class="nav-item text-nowrap">
              <button
                class="nav-link px-3 text-white  border-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebarMenu"
              >
                <i class="bi bi-list fs-4"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default BootstrapNavbar;
