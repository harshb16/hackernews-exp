import { Box, HStack, Link, Spacer, useColorModeValue } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { useContext, useEffect } from 'react';
import NewsContext from '../store/news-context';

const NewsItem = () => {
  const newsCtx = useContext(NewsContext);
  const newsFetch = newsCtx.fetchNews;

  useEffect(() => {
    newsFetch();
    return () => {};
  }, [newsFetch]);

  return (
    <Box
      px={4}
      py={2}
      rounded='lg'
      shadow='lg'
      bg={useColorModeValue('gray.400', 'blue.800')}
      maxW='4xl'
      // maxW={{ base: '90%', sm: '95%', md: '3xl' }}
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

      <Link
        isExternal
        href={newsCtx.url}
        fontWeight='hairline'
        mt={6}
        fontSize={{ base: 'xs', sm: 'sm', lg: 'md', xl: 'lg' }}
        color={useColorModeValue('black', 'gray.100')}
      >
        Read more
      </Link>
    </Box>
  );
};

export default NewsItem;

// const News = () => {
//   return (
//     <Card minW='5xl' shadow='xl' bgColor='blue.700' opacity='80%'>
//       <Stack spacing='4'>
//         <Text textColor='gray.400' opacity='100' fontSize='2xl'>
//           HackerNews
//         </Text>
//         <Text textColor='gray.300' opacity='100' fontSize='md'>
//           HackerNews 2
//         </Text>
//       </Stack>
//     </Card>
//   );
// };

// export default News;
