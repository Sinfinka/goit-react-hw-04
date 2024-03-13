import Modal from "react-modal";
import { MdClose } from "react-icons/md";

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
      <div>
        <MdClose onClick={onRequestClose} />

        <img src={imgUrl} alt={alt_description} />
        <p>{description}</p>
        <p>{user?.username}</p>
        <img
          src={user?.profile_image.small}
          alt={alt_description ?? "Description is not available"}
        />
        <p>{likes}</p>
      </div>
    </Modal>
  );
}
