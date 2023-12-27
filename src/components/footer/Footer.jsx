import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-background text-white pt-5">
      <div className="text-center">
        <p style={{ fontSize: "2.5rem", fontWeight: 700 }}>Bored Tunnelers</p>
      </div>
      <div className="d-flex justify-content-center align-items-center py-3">
        <a
          className="social-links"
          href="https://www.facebook.com/bored.tunnelers"
        >
          <img
            className="social-icons mx-3"
            src="/icons/facebook_bw.png"
            alt="Facebook"
          />
        </a>
        <a
          className="social-links"
          href="https://www.instagram.com/boredtunnelers/"
        >
          <img
            className="social-icons mx-3"
            src="/icons/instagram_bw.png"
            alt="Instagram"
          />
        </a>
        <a
          className="social-links"
          href="https://www.linkedin.com/company/bored-tunnelers-bd/"
        >
          <img
            className="social-icons mx-3"
            src="/icons/linkedin_bw.png"
            alt="LinkedIn"
          />
        </a>
        {/* <a className="social-links" href="/"> */}
        {/* <img className="social-icons mx-3" src="/icons/gmail_bw.png" alt="gmail" /> */}
        {/* </a> */}
        <a className="social-links" href="/">
          <img
            className="social-icons mx-3"
            src="/icons/whatsapp_bw.png"
            alt="WhatsApp"
          />
        </a>
        <a className="social-links" href="/">
          <img
            className="social-icons mx-3"
            src="/icons/messenger_bw.png"
            alt="Messenger"
          />
        </a>
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
