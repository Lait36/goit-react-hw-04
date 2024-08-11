import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1)
  const [topic, setTopic] = useState("ss");
  console.log(topic);
const handleSearch = (newTopic) => {
  setArticles([])
  setPage(1)
  setTopic(newTopic)
  console.log(topic);
}
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}
