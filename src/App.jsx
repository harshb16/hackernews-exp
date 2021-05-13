import { HStack, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import HackernewsLink from './components/HackernewsLink';
import Header from './components/Header';

function App() {
  return (
    <VStack>
      <HStack justifyContent='space-between' alignItems='center' w='full' p='4'>
        <HackernewsLink />
        <Spacer />
        <ColorModeSwitcher />
      </HStack>
      <Header />
    </VStack>
  );
}

export default App;
