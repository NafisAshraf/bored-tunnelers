import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logos from "../../assets/images/logo.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./BootstrapNavbar.css";

const BootstrapNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null); // Used for MUI Menu
  // const open = Boolean(anchorEl);

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

  // const handleMenuClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <nav
        className={`navigation-bar navbar flex-xl-nowrap py-2 ${
          scrolled ? "scrolled" : ""
        }`}
        data-bs-theme="dark"
      >
        <div className="container-xl container-fluid">
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
              className="offcanvas-xl offcanvas-end"
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
                <ul className="nav flex-column flex-xl-row align-items-xl-center">
                  {/* Home Link */}
                  <li className="nav-item">
                    <Link className="nav-link text-white hover-line" to="/">
                      Home
                    </Link>
                  </li>

                  {/* Other navigation links like About, Team, etc. */}
                  <li className="nav-item mt-2 mt-xl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item mt-2 mt-xl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/timeline"
                    >
                      Timeline
                    </Link>
                  </li>
                  {/* <li className="nav-item mt-2 mt-xl-0">
                    <Link className="nav-link text-white hover-line" to="/team">
                      Team
                    </Link>
                  </li> */}
                  <li className="nav-item mt-2 mt-xl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/featuredPage"
                    >
                      Featured
                    </Link>
                  </li>
                  <li className="nav-item mt-2 mt-xl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/technology"
                    >
                      Technology
                    </Link>
                  </li>

                  {/* Gallery MUI Dropdown */}
                  {/* <li className="nav-item mt-2 mt-xl-0">
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
                  <li className="nav-item mt-2 mt-xl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/media"
                    >
                      Media
                    </Link>
                  </li>

                  {/* Sponsorship and Contact Us */}
                  <li className="nav-item mt-2 mt-xl-0">
                    <Link
                      className="nav-link text-white hover-line"
                      to="/sponsorship"
                    >
                      Sponsorship
                    </Link>
                  </li>
                  <li className="nav-item mt-4 mt-xl-0">
                    <Link
                      className="nav-link ms-2 p-0 text-white"
                      to="/contact"
                    >
                      <button className="btn btn-primary rounded rounded-3">
                        Contact Us
                      </button>
                    </Link>
                  </li>
                  {/* <li className="nav-item mt-4 mt-xl-0">
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
          <ul class="navbar-nav flex-row d-xl-none">
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
