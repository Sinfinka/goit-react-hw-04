import SearchBar from "../searchBar/SearchBar";
import ImageGallery from "../imageGallery/ImageGallery";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchImages } from "../../images-api";

import ErrorMessage from "../errorMassege/ErrorMessage";
import Loader from "../loader/Loader";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query, page]);

  const handleSearch = (newSearchText) => {
    setQuery(newSearchText);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loading && <Loader />}
    </>
  );
}

export default App;
