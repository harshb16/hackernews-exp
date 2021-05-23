import { useContext, useEffect } from 'react';
import NewsContext from '../store/news-context';
import NewsItem from './NewsItem';

const NewsList = () => {
  const newsCtx = useContext(NewsContext);

  const { fetchIds: idsFetch, ids: newsIds } = newsCtx;
  useEffect(() => {
    idsFetch();
  }, [idsFetch]);

  const ids = newsIds;
  // const ids = newsIds.slice(0, 100);

  return (
    <>
      {ids.map((id) => (
        <NewsItem key={id} id={id} />
      ))}
    </>
  );
};

export default NewsList;
