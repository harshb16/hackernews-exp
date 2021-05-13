import { HStack, Link } from '@chakra-ui/react';
import { FaHackerNewsSquare } from 'react-icons/fa';

const HackernewsLink = () => {
  return (
    <HStack color='gray.500'>
      <Link
        fontSize={{ base: 'xs', sm: 'sm' }}
        href='https://news.ycombinator.com'
        isExternal
        d='flex'
        alignItems='center'
        color='gray.500'
      >
        Take me to Hackernews
      </Link>
      <FaHackerNewsSquare />
    </HStack>
  );
};

export default HackernewsLink;
