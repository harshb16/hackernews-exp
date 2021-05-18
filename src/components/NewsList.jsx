import { useContext, useEffect } from 'react';
import NewsContext from '../store/news-context';
import NewsItem from './NewsItem';

const NewsList = () => {
  const newsCtx = useContext(NewsContext);

  const { fetchIds: idsFetch, ids: newsIds } = newsCtx;
  useEffect(() => {
    idsFetch();

    // return () => {};
  }, [idsFetch]);

  const ids = newsIds.slice(0, 100);
  // console.log(ids);

  return (
    <>
      {ids.map((id) => (
        <NewsItem key={id} id={id} />
      ))}
    </>
  );
};

export default NewsList;
