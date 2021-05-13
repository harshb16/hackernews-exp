import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';

const NewsItem = () => {
  return (
    <Box
      mx='auto'
      px={4}
      py={2}
      rounded='lg'
      shadow='lg'
      bg={useColorModeValue('gray.400', 'blue.800')}
      maxW='5xl'
    >
      <Box mt={2}>
        <Flex justifyContent='space-between' mb='4'>
          <chakra.p
            fontSize='lg'
            color={useColorModeValue('gray.700', 'gray.100')}
            fontWeight='bold'
            letterSpacing='wide'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </chakra.p>
          <chakra.p
            px={2}
            py={1}
            bg={useColorModeValue('gray.700', 'blue.700')}
            color={useColorModeValue('gray.300', 'gray.100')}
            fontSize='xs'
            rounded='md'
          >
            Category
          </chakra.p>
        </Flex>
        <chakra.p
          mt={2}
          fontSize='sm'
          color={useColorModeValue('gray.900', 'gray.400')}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </chakra.p>
      </Box>

      <Flex justifyContent='space-between' alignItems='center' mt={6}>
        <Link color={useColorModeValue('black', 'gray.100')}>Read more</Link>
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
