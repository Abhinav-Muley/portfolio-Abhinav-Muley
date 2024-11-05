import React from 'react';
import '../index.css';

const Modal = ({ isVisible }) => {
  return isVisible ? (
    <div className="modal">
      <div className="modal-content">
        <p>Thank you for contacting us!</p>
      </div>
    </div>
  ) : null;
};

export default Modal;