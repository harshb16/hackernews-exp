import { createContext } from 'react';

const NewsContext = createContext({
  ids: [],
  fetchIds: () => {},
  loadingState: true,
});

export default NewsContext;
