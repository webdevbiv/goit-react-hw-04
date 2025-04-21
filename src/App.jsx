import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageCard from "./components/ImageCard/ImageCard";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <ErrorMessage />
      <ImageCard />
      <ImageGallery />
      <ImageModal />
      <Loader />
      <LoadMoreBtn />
      <SearchBar />
    </>
  );
}

export default App;
