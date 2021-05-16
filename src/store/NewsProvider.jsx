import axios from 'axios';
import { useCallback, useState } from 'react';
import NewsContext from './news-context';

const NewsProvider = ({ children }) => {
  const [story, setStory] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [points, setPoints] = useState('');
  const [newsIds, setNewsIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = 'https://hacker-news.firebaseio.com/v0';

  const fetchHackerIds = useCallback(async () => {
    // setIsLoading(true);
    try {
      const { data: ids } = await axios.get(`${baseUrl}/topstories.json`);
      setNewsIds(ids);
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(false);
  }, []);

  const fetchHackerStory = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const story = await axios.get(`${baseUrl}/item/${id}.json`);
      console.log(story);

      const allNewsData = {
        newsStory: story.data.title,
        newsAuthor: story.data.by,
        newsUrl: story.data.url,
        newsPoints: +story.data.score,
      };

      setStory(allNewsData.newsStory);
      setAuthor(allNewsData.newsAuthor);
      setUrl(allNewsData.newsUrl);
      setPoints(allNewsData.newsPoints);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  const newsContext = {
    story: story,
    author: author,
    url: url,
    points: points,
    ids: newsIds,
    fetchStory: fetchHackerStory,
    fetchIds: fetchHackerIds,
    loadingState: isLoading,
  };

  return (
    <NewsContext.Provider value={newsContext}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
