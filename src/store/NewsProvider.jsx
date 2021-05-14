import axios from 'axios';
import { useState } from 'react';
import NewsContext from './news-context';

const NewsProvider = ({ children }) => {
  const [storyTitle, setStoryTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const fetchHackerNews = async () => {
    try {
      const newsIds = await axios.get(
        'https://hacker-news.firebaseio.com/v0/topstories.json'
      );

      const topstory = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${newsIds.data[0]}.json`
      );
      console.log(topstory);

      const story = await topstory.data.title;
      const author = await topstory.data.by;
      const url = await topstory.data.url;

      setStoryTitle(story);
      setAuthor(author);
      setUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  const newsContext = {
    // newsData: {},
    story: storyTitle,
    author: author,
    url: url,
    fetchNews: fetchHackerNews,
  };

  return (
    <NewsContext.Provider value={newsContext}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
