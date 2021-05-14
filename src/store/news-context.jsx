import { createContext } from 'react';

const NewsContext = createContext({
  story: '',
  // newsData: {},
  fetchNews: () => {},
});

export default NewsContext;
