import { Box, HStack, Link, Spacer, useColorModeValue } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { memo, useContext, useEffect } from 'react';
import NewsContext from '../store/news-context';
import Loader from './Loader';

const NewsItem = ({ id }) => {
  const newsCtx = useContext(NewsContext);
  const { fetchStory: storyFetch } = newsCtx;

  useEffect(() => {
    storyFetch(id);
  }, [id, storyFetch]);

  const boxColor = useColorModeValue('gray.400', 'blue.800');
  const storyColor = useColorModeValue('gray.700', 'gray.100');
  const authorBg = useColorModeValue('gray.700', 'blue.700');
  const authorColor = useColorModeValue('gray.300', 'gray.100');
  const linksColor = useColorModeValue('black', 'gray.100');

  return (
    <>
      {!newsCtx.loadingState && (
        <Box
          px={4}
          py={2}
          rounded='lg'
          shadow='lg'
          bg={boxColor}
          maxW={{ base: '90%', sm: '95%', lg: '110%' }}
        >
          <HStack
            justifyContent='space-between'
            mt='2'
            mb='4'
            alignItems='center'
          >
            <chakra.p
              color={storyColor}
              fontWeight={{ base: 'normal', md: 'bold' }}
              fontSize={{ base: 'xs', md: 'sm', lg: 'xl' }}
            >
              {newsCtx.story}
            </chakra.p>
            <Spacer />
            <chakra.p
              px={{ base: '1', md: '2' }}
              py={{ base: '0', sm: '1' }}
              bg={authorBg}
              color={authorColor}
              fontSize='xs'
              rounded='md'
            >
              {newsCtx.author}
            </chakra.p>
          </HStack>

          <HStack
            mt={4}
            justifyContent='space-between'
            fontSize={{ base: 'xs', sm: 'sm', lg: 'md', xl: 'lg' }}
            color={linksColor}
          >
            <Link isExternal href={newsCtx.url} fontWeight='hairline' mr='10'>
              Read more
            </Link>
            <Spacer />
            <chakra.p ml='10'>{`${newsCtx.points} ${
              newsCtx.points === 1 ? 'Point' : 'Points'
            }`}</chakra.p>
          </HStack>
        </Box>
      )}

      {newsCtx.loadingState && <Loader />}
    </>
  );
};

export default memo(NewsItem);
