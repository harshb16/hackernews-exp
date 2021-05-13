import { VStack, Spacer } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <VStack spacing='4'>
      <Navbar />
      <Header />
      <Spacer />
      <News />
    </VStack>
  );
}

export default App;
