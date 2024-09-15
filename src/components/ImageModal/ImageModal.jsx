// import React from 'react';
import Modal from 'react-modal';

export default function ImageModal({ isOpen, onRequestClose, image })  {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <button onClick={onRequestClose} className="close-btn">X</button>
          {image && (
            <div>
              <img src={image.url} alt={image.alt_description} className="modal-image" />
              <p>{image.description || "No description available"}</p>
            </div>
          )}
        </div>
      </Modal>
    );
  }