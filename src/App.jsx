import { useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';

function App() {
  return (
    <VStack>
      <ColorModeSwitcher
        alignSelf='flex-end'
        m={3}
        isRound='true'
        color='gray.500'
        _hover={{
          backgroundColor: useColorModeValue('blue.900', 'blue.300'),
        }}
      />
      <Header />
    </VStack>
  );
}

export default App;
