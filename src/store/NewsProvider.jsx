import axios from 'axios';
import { useCallback, useState } from 'react';
import NewsContext from './news-context';

const NewsProvider = ({ children }) => {
  const [newsIds, setNewsIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = 'https://hacker-news.firebaseio.com/v0';

  const fetchHackerIds = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data: ids } = await axios.get(`${baseUrl}/topstories.json`);
      setNewsIds(ids);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  const newsContext = {
    ids: newsIds,
    fetchIds: fetchHackerIds,
    loadingState: isLoading,
  };

  return (
    <NewsContext.Provider value={newsContext}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
