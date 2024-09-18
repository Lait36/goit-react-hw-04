import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchArticles } from "../../articles-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  // const [images, setImages] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [topic, setTopic] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false); // Стан для модального вікна
  // const [selectedImage, setSelectedImage] = useState(null); // Стан для вибраного зображення
  const [images, setImages] = useState([]);
  const [topic, setTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (newTopic) => {
    setImages([]);
    setCurrentPage(1);
    setTopic(newTopic);
    setError(false);
  };
  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        const data = await fetchArticles(topic, currentPage);
        setImages((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [currentPage, topic]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} onImageClick={openModal} />}
      {images.length > 0 && <LoadMoreBtn loadMore={handleLoadMore} />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}
