import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");

  const handleSearch = (newTopic) => {
    setImages([]);
    setPage(1);
    setTopic(newTopic);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages() {}
    getImages();
  }, []);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
    </>
  );
}
