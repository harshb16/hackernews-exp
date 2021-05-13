import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';

const NewsItem = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const descColor = useColorModeValue('gray.900', 'gray.400');

  return (
    <Box
      px={4}
      py={2}
      rounded='lg'
      shadow='lg'
      bg={useColorModeValue('gray.400', 'blue.800')}
      maxW={{ base: '90%', sm: '95%', md: '3xl' }}
    >
      <Box mt={2}>
        <Flex justifyContent='space-between' mb='4' alignItems='center'>
          <chakra.p
            color={useColorModeValue('gray.700', 'gray.100')}
            fontWeight={{ base: 'normal', md: 'bold' }}
            fontSize={{ base: 'xs', md: 'sm', lg: 'xl' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </chakra.p>
          <chakra.p
            px={{ base: '1', md: '2' }}
            py={{ base: '0', sm: '1' }}
            bg={useColorModeValue('gray.700', 'blue.700')}
            color={useColorModeValue('gray.300', 'gray.100')}
            fontSize='xs'
            rounded='md'
          >
            Category
          </chakra.p>
        </Flex>
        {isLargerThan768 && (
          <chakra.p mt={2} fontSize='sm' color={descColor}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </chakra.p>
        )}
      </Box>

      <Flex
        justifyContent='space-between'
        alignItems='center'
        mt={6}
        fontSize={{ base: 'xs', sm: 'sm', lg: 'md', xl: 'lg' }}
      >
        <Link
          fontWeight='hairline'
          color={useColorModeValue('black', 'gray.100')}
        >
          Read more
        </Link>
        <chakra.p
          color={useColorModeValue('black', 'gray.100')}
          fontWeight='semibold'
        >
          News
        </chakra.p>
      </Flex>
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
