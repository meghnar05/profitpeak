// SimplePopup.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SimplePopup = ({ onClose }) => {
  return (
    <div>
      <div>
        <p>Your popup content goes here!</p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  }
};

export default SimplePopup;
