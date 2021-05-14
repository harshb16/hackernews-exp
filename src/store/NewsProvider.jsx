import axios from 'axios';
import { useCallback, useState } from 'react';
import NewsContext from './news-context';

const NewsProvider = ({ children }) => {
  const [story, setStory] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [points, setPoints] = useState('');

  const fetchHackerNews = useCallback(async () => {
    try {
      const newsIds = await axios.get(
        'https://hacker-news.firebaseio.com/v0/topstories.json'
      );

      const topstory = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${newsIds.data[0]}.json`
      );
      console.log(topstory);

      const allNewsData = {
        newsStory: topstory.data.title,
        newsAuthor: topstory.data.by,
        newsUrl: topstory.data.url,
        newsPoints: +topstory.data.score,
      };

      setStory(allNewsData.newsStory);
      setAuthor(allNewsData.newsAuthor);
      setUrl(allNewsData.newsUrl);
      setPoints(allNewsData.newsPoints);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const newsContext = {
    // newsData: {},
    story: story,
    author: author,
    url: url,
    points: points,
    fetchNews: fetchHackerNews,
  };

  return (
    <NewsContext.Provider value={newsContext}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
