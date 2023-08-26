import React from "react";
import { Navbar } from "react-bootstrap";
import logos from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

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
              <p className="logo-header pb-1" style={{ fontSize: "1.7rem" }}>
                Bored Tunnelers
              </p>
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

              <div class="offcanvas-body d-flex mx-2 overflow-y-auto">
                <ul class="nav flex-column flex-lg-row mb-auto">
                  <li class="nav-item my-1">
                    <Link class="nav-link text-white" to="/">
                      Home
                    </Link>
                  </li>

                  <li class="nav-item my-1">
                    <Link class="nav-link text-white" to="/test">
                      About
                    </Link>
                  </li>

                  <li class="nav-item my-1">
                    <Link class="nav-link text-white" to="/team">
                      Team
                    </Link>
                  </li>

                  <li class="nav-item my-1">
                    <Link class="nav-link text-white" to="/test">
                      Partners
                    </Link>
                  </li>

                  <li class="nav-item my-1">
                    <Link class="nav-link text-white" to="/test">
                      Technology
                    </Link>
                  </li>

                  <li class="nav-item my-1">
                    <Link class="nav-link text-white" to="/test">
                      News
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
