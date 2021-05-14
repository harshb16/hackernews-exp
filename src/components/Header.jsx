import { Heading, useColorModeValue } from '@chakra-ui/react';

const Header = () => {
  return (
    <Heading
      fontWeight='light'
      fontSize={{ base: '2xl', sm: '3xl', lg: '5xl', xl: '6xl' }}
      bgGradient={useColorModeValue(
        'linear(to-r, gray.600, gray.800)',
        'linear(to-r, blue.300, blue.500)'
      )}
      bgClip='text'
    >
      Hackernews
    </Heading>
  );
};

export default Header;
