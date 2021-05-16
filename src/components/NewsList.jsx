import { memo, useContext, useEffect } from 'react';
import NewsContext from '../store/news-context';
import NewsItem from './NewsItem';

const NewsList = () => {
  const newsCtx = useContext(NewsContext);

  const { fetchStory: storyFetch, fetchIds: idsFetch } = newsCtx;
  useEffect(() => {
    idsFetch();
    storyFetch(27173717);

    // return () => {};
  }, [idsFetch, storyFetch]);

  return (
    <>
      {}
      <NewsItem />
    </>
  );
};

export default memo(NewsList);
