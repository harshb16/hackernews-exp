import {
  Box,
  Flex,
  HStack,
  Link,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { useContext } from 'react';
import NewsContext from '../store/news-context';

const NewsItem = () => {
  const newsCtx = useContext(NewsContext);

  return (
    <Box
      px={4}
      py={2}
      rounded='lg'
      shadow='lg'
      bg={useColorModeValue('gray.400', 'blue.800')}
      maxW='4xl'
    >
      <HStack justifyContent='space-between' mt='2' mb='4' alignItems='center'>
        <chakra.p
          color={useColorModeValue('gray.700', 'gray.100')}
          fontWeight={{ base: 'normal', md: 'bold' }}
          fontSize={{ base: 'xs', md: 'sm', lg: 'xl' }}
        >
          {newsCtx.story}
        </chakra.p>
        <Spacer />
        <chakra.p
          px={{ base: '1', md: '2' }}
          py={{ base: '0', sm: '1' }}
          bg={useColorModeValue('gray.700', 'blue.700')}
          color={useColorModeValue('gray.300', 'gray.100')}
          fontSize='xs'
          rounded='md'
        >
          {newsCtx.author}
        </chakra.p>
      </HStack>

      <Flex
        mt={6}
        justifyContent='space-between'
        fontSize={{ base: 'xs', sm: 'sm', lg: 'md', xl: 'lg' }}
        color={useColorModeValue('black', 'gray.100')}
      >
        <Link isExternal href={newsCtx.url} fontWeight='hairline'>
          Read more
        </Link>
        <chakra.p>{`${newsCtx.points} ${
          newsCtx.points === 1 ? 'Point' : 'Points'
        }`}</chakra.p>
      </Flex>
    </Box>
  );
};

export default NewsItem;
