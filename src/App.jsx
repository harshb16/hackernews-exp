import { useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <VStack spacing={8}>
      <ColorModeSwitcher
        alignSelf='flex-end'
        m={5}
        isRound='true'
        color='gray.500'
        _hover={{
          backgroundColor: useColorModeValue('blue.900', 'blue.300'),
        }}
      />
      ;
    </VStack>
  );
}

export default App;
