import { Spacer, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <VStack spacing='4' m='10'>
      <Navbar />
      <Header />
      <Spacer />
      <NewsList />
    </VStack>
  );
};

export default App;
