import { useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <VStack
      minH='100vh'
      spacing={8}
      bg={useColorModeValue('blue.300', 'blue.900')}
    >
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
