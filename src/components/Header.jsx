import { Heading } from '@chakra-ui/layout';

const Header = () => {
  return (
    <Heading
      fontWeight='light'
      fontSize={{ base: 'xl', sm: '2xl', lg: '3xl', xl: '5xl' }}
      bgGradient='linear(to-r, blue.600, blue.400)'
      bgClip='text'
    >
      Hackernews
    </Heading>
  );
};

export default Header;
