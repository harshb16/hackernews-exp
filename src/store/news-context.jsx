import { createContext } from 'react';

const NewsContext = createContext({
  // newsData: {},
  story: '',
  author: '',
  url: '',
  points: 1,
  fetchNews: () => {},
  loadingState: true,
});

export default NewsContext;
