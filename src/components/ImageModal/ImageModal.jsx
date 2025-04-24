import ReactModal from "react-modal";

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <ReactModal
      contentLabel="Minimal Modal Example"
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
    </ReactModal>
  );
};

export default ImageModal;
