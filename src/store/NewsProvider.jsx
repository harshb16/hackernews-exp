import axios from 'axios';
import { useState } from 'react';
import NewsContext from './news-context';

const NewsProvider = ({ children }) => {
  const [storyTitle, setStoryTitle] = useState('');

  const fetchHackerNews = async () => {
    try {
      const newsIds = await axios.get(
        'https://hacker-news.firebaseio.com/v0/topstories.json'
      );

      const topstory = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${newsIds.data[0]}.json`
      );

      const news = await topstory.data.title;
      setStoryTitle(news);
      console.log(topstory);
    } catch (error) {
      console.log(error);
    }
  };

  const newsContext = {
    // newsData: {},
    story: storyTitle,
    fetchNews: fetchHackerNews,
  };

  return (
    <NewsContext.Provider value={newsContext}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
