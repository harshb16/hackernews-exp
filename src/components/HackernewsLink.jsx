import { HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { FaHackerNewsSquare } from 'react-icons/fa';

const HackernewsLink = () => {
  return (
    <HStack color='gray.500'>
      <Link
        fontSize={{ base: 'xx-small', sm: 'md', md: 'lg' }}
        href='https://news.ycombinator.com'
        isExternal
        d='flex'
        alignItems='center'
        color={useColorModeValue('gray.900', 'gray.500')}
      >
        Take me to Hackernews &nbsp;
        <FaHackerNewsSquare />
      </Link>
    </HStack>
  );
};

export default HackernewsLink;
