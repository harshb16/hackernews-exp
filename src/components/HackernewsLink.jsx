import { Link } from '@chakra-ui/react';
import { FaHackerNewsSquare } from 'react-icons/fa';

const HackernewsLink = () => {
  return (
    <Link
      href='https://news.ycombinator.com'
      isExternal
      d='flex'
      alignItems='center'
      color='gray.500'
    >
      Take me to Hackernews <FaHackerNewsSquare ml='2' bgColor='blue.300' />
    </Link>
  );
};

export default HackernewsLink;
