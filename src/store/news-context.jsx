import { createContext } from 'react';

const NewsContext = createContext({
  story: '',
  author: '',
  url: '',
  points: 1,
  // newsData: {},
  fetchNews: () => {},
});

export default NewsContext;
