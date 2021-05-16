import { createContext } from 'react';

const NewsContext = createContext({
  story: '',
  author: '',
  url: '',
  points: 1,
  ids: [],
  fetchStory: () => {},
  fetchIds: () => {},
  loadingState: true,
});

export default NewsContext;
