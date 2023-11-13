import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import styles from "../../styles/Contactpage.module.css";

import locationpic from "./location.png";
import callpic from "./call.png";
import emailpic from "./mail.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Contactpage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !mobileNumber || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, "Messages"), {
        firstName,
        lastName,
        email,
        mobileNumber,
        message,
      });

      setShowModal(true);

      // Clear form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobileNumber("");
      setMessage("");
    } catch (error) {
      alert("Error adding document: " + error.message);
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div>
            <h2>Contact Info</h2>
            <ul className={styles.info}>
              <li>
                <span>
                  <img src={locationpic} alt="Location" />
                </span>
                <span>
                  184 Rankin Street
                  <br />
                  Wari, Dhaka 1203
                  <br />
                  11472
                </span>
              </li>
              <li>
                <span>
                  <img src={emailpic} alt="Email" />
                </span>
                <span>
                  <a href="mailto:sample@gmail.com">sample@gmail.com</a>
                </span>
              </li>
              <li>
                <span>
                  <img src={callpic} alt="Phone" />
                </span>
                <span>01723344565</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contactForm}>
          <h2>Send us a Message</h2>
          <div className={styles.formBox}>
            <div className={styles.inputBox + " " + styles.w50}>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <span>First Name</span>
            </div>
            <div className={styles.inputBox + " " + styles.w50}>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <span>Last Name</span>
            </div>
            <div className={styles.inputBox + " " + styles.w50}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>Email Address</span>
            </div>
            <div className={styles.inputBox + " " + styles.w50}>
              <input
                type="text"
                name="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
              <span>Mobile Number</span>
            </div>
            <div className={styles.inputBox + " " + styles.w100}>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <span>Write your message here...</span>
            </div>
            <div className={styles.inputBox + " " + styles.w100}>
              <input type="submit" value="Send" onClick={handleSubmit} />
            </div>
          </div>
        </div>
        {/* Bootstrap Modal for Success Message */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Message Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you for submitting your message. We will get back to you soon.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default Contactpage;
