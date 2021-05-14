import { useColorModeValue } from '@chakra-ui/color-mode';
import { Spinner } from '@chakra-ui/spinner';

const Loader = () => {
  return (
    <Spinner
      speed='1s'
      size='xl'
      color={useColorModeValue('gray.700', 'gray.100')}
    />
  );
};

export default Loader;
