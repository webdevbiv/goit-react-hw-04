import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.scss";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
