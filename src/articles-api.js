import axios from "axios";


export const fetchArticles = async (topic, currentPage) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID aPhKoROdag8VDP0hyJHFHA7aifwg9NXMPj0LeO--twE`,
    },
    params: {
      query: topic, // Поисковой запрос (например, "горы")
      per_page: 5, // Количество фотографий в ответе
      page: currentPage, // Номер страницы
    },
  });

  return res.data.results;
};
