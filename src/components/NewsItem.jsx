import {
  Box,
  Flex,
  HStack,
  Link,
  Spacer,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import Loader from './Loader';

const NewsItem = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allData, setAllData] = useState([]);
  const [story, setStory] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [points, setPoints] = useState('');

  const baseUrl = 'https://hacker-news.firebaseio.com/v0';

  const storyFetch = useCallback(
    async (id) => {
      setIsLoading(true);
      try {
        const story = await axios.get(`${baseUrl}/item/${id}.json`);

        const allNewsData = {
          newsStory: story.data.title,
          newsAuthor: story.data.by,
          newsUrl: story.data.url,
          newsPoints: +story.data.score,
        };
        setAllData((prevData) => [...prevData, allNewsData]);
        console.log(allData);

        setStory(allNewsData.newsStory);
        setAuthor(allNewsData.newsAuthor);
        setUrl(allNewsData.newsUrl);
        setPoints(allNewsData.newsPoints);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    },
    [allData]
  );

  useEffect(() => {
    storyFetch(id);
  }, [id, storyFetch]);

  const boxColor = useColorModeValue('gray.400', 'blue.800');
  const storyColor = useColorModeValue('gray.700', 'gray.100');
  const authorBg = useColorModeValue('gray.700', 'blue.700');
  const authorColor = useColorModeValue('gray.300', 'gray.100');
  const linksColor = useColorModeValue('black', 'gray.100');

  const { hasCopied, onCopy } = useClipboard(url);

  return (
    <>
      {!isLoading && (
        <Box
          px={4}
          py={2}
          rounded='lg'
          shadow='lg'
          bg={boxColor}
          w={{ base: 'xs', sm: 'lg', md: '3xl', lg: '4xl', xl: '5xl' }}
        >
          <HStack
            justifyContent='space-between'
            mt='2'
            mb='4'
            alignItems='center'
          >
            <chakra.p
              color={storyColor}
              fontWeight={{ base: 'normal', sm: 'bold' }}
              fontSize={{ base: 'xs', md: 'sm', lg: 'xl' }}
            >
              {story}
            </chakra.p>
            <Spacer />
            <Spacer />
            <Flex
              alignItems='center'
              justifyContent='space-between'
              fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}
            >
              <chakra.p mr='2'>by</chakra.p>
              <Spacer />
              <chakra.p
                px={{ base: '1', md: '2' }}
                py={{ base: '0', sm: '1' }}
                bg={authorBg}
                color={authorColor}
                rounded='md'
              >
                {author}
              </chakra.p>
            </Flex>
          </HStack>

          <HStack
            mt={4}
            justifyContent='space-between'
            fontSize={{ base: 'xs', sm: 'sm', lg: 'md', xl: 'lg' }}
            color={linksColor}
          >
            <Flex justifyContent='center' alignItems='baseline'>
              <Link isExternal href={url} fontWeight='semibold' mr='3'>
                Read more
              </Link>
              <chakra.button onClick={onCopy} cursor='pointer'>
                {hasCopied ? 'Copied!' : 'Copy link'}
              </chakra.button>
            </Flex>
            <Spacer />
            <chakra.p ml='10'>{`${points} ${
              points === 1 ? 'Point' : 'Points'
            }`}</chakra.p>
          </HStack>
        </Box>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default memo(NewsItem);
