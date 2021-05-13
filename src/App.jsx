import { VStack } from '@chakra-ui/layout';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <VStack m={3} p={3} spacing={8}>
      <ColorModeSwitcher alignSelf='flex-end' />;
    </VStack>
  );
}

export default App;
