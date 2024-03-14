import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({
  isOpen,
  onRequestClose,
  image: { imgUrl, description, alt_description, user, likes },
}) {
  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div className={css.modal}>
        <MdClose className={css.closeBtn} onClick={onRequestClose} />

        <img className={css.image} src={imgUrl} alt={alt_description} />
        <div className={css.userWrapper}>
          <img
            className={css.userAvatar}
            src={user?.profile_image.small}
            alt={alt_description ?? "Description is not available"}
          />
          <p className={css.userName}>{user?.username}</p>
          <FcLike className={css.heart} />
          <p className={css.likes}>{likes}</p>
        </div>
        <p className={css.description}> {description}</p>
      </div>
    </Modal>
  );
}
