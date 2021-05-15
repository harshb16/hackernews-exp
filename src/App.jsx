import { Spacer, VStack } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';
import NewsContext from './store/news-context';

const App = () => {
  const newsCtx = useContext(NewsContext);

  const { fetchNews: newsFetch } = newsCtx;

  useEffect(() => {
    newsFetch();

    // return () => {};
  }, [newsFetch]);
  return (
    <VStack spacing='4' m='10'>
      <Navbar />
      <Header />
      <Spacer />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </VStack>
  );
};

export default App;
