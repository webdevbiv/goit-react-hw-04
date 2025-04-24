import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./api/api";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    if (!query) return;

    const getImages = async () => {
      try {
        const images = await fetchImages(query, page, abortController.signal);
        console.log(images);
        setImages(images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    getImages();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleModalClose = () => {
    setModalImage(null);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={handleModalClose} />
      )}
      {/* <Loader /> */}
      {/* <LoadMoreBtn /> */}
      {/* <ErrorMessage /> */}
    </>
  );
}

export default App;
