import { createContext } from 'react';

const NewsContext = createContext({
  story: '',
  author: '',
  url: '',
  // newsData: {},
  fetchNews: () => {},
});

export default NewsContext;
