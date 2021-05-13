import { Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';

function App() {
  return (
    <VStack spacing='2'>
      <Navbar />
      <Header />
      <Spacer />
      <NewsItem />
    </VStack>
  );
}

export default App;
