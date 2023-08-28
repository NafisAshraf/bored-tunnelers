import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './adminHome.module.css'

const AdminHome = () => {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);

  useEffect(() => {
    // Fetch documents from Firestore collection
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, 'Messages'));
      const messageData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messageData);
    };

    fetchMessages();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setMessageToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (messageToDelete) {
      try {
        await deleteDoc(doc(db, 'Messages', messageToDelete));
        setMessages(messages.filter((message) => message.id !== messageToDelete));
        handleCloseModal();
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    }
  };

  const showDeleteConfirmation = (messageId) => {
    setMessageToDelete(messageId);
    setShowModal(true);
  };

  return (
    <div>
      <h2 className={styles.heading}>Messages Received From Users</h2>
      <Table className={styles.table} striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.firstName}</td>
              <td>{message.lastName}</td>
              <td>{message.email}</td>
              <td>{message.mobileNumber}</td>
              <td>{message.message}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => showDeleteConfirmation(message.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Bootstrap Modal for Delete Confirmation */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this message?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminHome;