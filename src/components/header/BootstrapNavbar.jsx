import React from "react";
import { Navbar } from "react-bootstrap";
import logos from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./BootstrapNavbar.css";

const BootstrapNavbar = () => {
  return (
    <>
      <nav class="navbar bg-dark flex-lg-nowrap py-2" data-bs-theme="dark">
        <div className="container-lg container-fluid">
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

          <div class="sidebar ">
            <div
              class="offcanvas-lg offcanvas-end"
              tabindex="-1"
              id="sidebarMenu"
            >
              <div class="offcanvas-header">
                {/* Off Canvas Heading */}
                <Navbar.Brand className="ms-3" href="/">
                  <span className="logo-header">Bored Tunnelers</span>
                </Navbar.Brand>
                {/* Off Canvas Close Button */}
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                ></button>
              </div>

              <div class="offcanvas-body py-2 d-flex mx-2 overflow-y-auto">
                <ul class="nav flex-column flex-lg-row align-items-lg-center">
                  <li class="nav-item ">
                    <Link class="nav-link text-white hover-line" to="/">
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Home
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mt-lg-0 ">
                    <Link
                      class="nav-link text-white hover-line"
                      to="/our-story"
                    >
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Our Story
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mt-lg-0">
                    <Link class="nav-link text-white hover-line" to="/team">
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Team
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mt-lg-0">
                    <Link class="nav-link text-white hover-line" to="/featuredPage">
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Featured
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mt-lg-0">
                    <Link
                      class="nav-link text-white hover-line"
                      to="/technology"
                    >
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Technology
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-4 mt-lg-0">
                    <Link class="nav-link ms-2 p-0 text-white" to="/contact">
                      <button
                        className="btn btn-primary rounded rounded-3"
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Contact Us
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul class="navbar-nav flex-row d-lg-none">
            <li class="nav-item text-nowrap">
              <button
                class="nav-link px-3 text-white bg-dark border-0"
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
