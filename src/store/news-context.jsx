import { createContext } from 'react';

const NewsContext = createContext({
  fetchNews: () => {},
});

export default NewsContext;
