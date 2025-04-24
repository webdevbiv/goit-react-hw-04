const ImageCard = ({ image, onClick }) => {
  console.log(image);

  return (
    <div onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
