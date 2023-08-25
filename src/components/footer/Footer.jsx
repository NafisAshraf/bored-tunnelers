import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="row justify-content-center py-4">
        <div className="col-12 col-md-3 col-lg-2 text-center mt-4">
          <h4 className="mb-4">FOLLOW US</h4>
          <div className=" d-flex flex-row justify-content-center mt-4">
            <a
              href="https://www.facebook.com/bored.tunnelers"
              className="social-icons mx-3"
              target="_blank"
            >
              <i className="bi bi-facebook fs-4"></i>
              {/* <p className="">Bored Tunnelers</p> */}
            </a>
            <a
              href="https://www.instagram.com/bored.tunnelers/"
              className="social-icons mx-3"
              target="_blank"
            >
              <i className="bi bi-instagram fs-4"></i>
              {/* <p className="">bored.tunnelers</p> */}
            </a>
            <a
              href="https://www.linkedin.com/company/bored-tunnelers/about/"
              className="social-icons mx-3"
              target="_blank"
            >
              <i className="bi bi-linkedin fs-4"></i>
              {/* <p className="">Bored Tunnelers</p> */}
            </a>
          </div>
        </div>

        <div className="col-12 col-md-3 col-lg-2 text-center mt-4">
          <h4 className="mb-4">CONTACT</h4>
          <div className=" d-flex flex-row justify-content-center mt-4">
            <a href="/" className="social-icons mx-3">
              <i className="bi bi-envelope-fill fs-4"></i>
              {/* <p className="">Gmail ID</p> */}
            </a>
            <a href="/" className="social-icons mx-3">
              <i className="bi bi-whatsapp fs-4"></i>
              {/* <p className="">WhatsApp</p> */}
            </a>
            <a href="/" className="social-icons mx-3">
              <i className="bi bi-messenger fs-4"></i>
              {/* <p className="">Messenger</p> */}
            </a>
          </div>
        </div>
      </div>
      <div className="row py-4">
        <p className="text-center">
          &copy; 2023 Bored Tunnelers. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
