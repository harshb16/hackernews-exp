import NewsContext from './news-context';

const newsContext = {};

const NewsProvider = ({ children }) => {
  return (
    <NewsContext.Provider value={newsContext}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
