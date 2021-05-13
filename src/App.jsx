import { HStack, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <VStack>
      <Navbar />
      <Header />
    </VStack>
  );
}

export default App;
