import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div>
        <img
          src={image?.urls.full}
          alt={image?.alt_description}
          className={css.img}
        />
        <div className={css.textContainer}>
          <p className={css.author}>Author: {image?.user.name}</p>
          <p className={css.likes}>Likes: {image?.likes}</p>
        </div>
        <button onClick={onClose} className={css.btn}>
          Close
        </button>
      </div>
    </Modal>
  );
}
