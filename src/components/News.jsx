import { Stack, Text } from '@chakra-ui/layout';
import Card from './Card';

const News = () => {
  return (
    <Card minW='5xl' shadow='xl' bgColor='gray.700' opacity='80%'>
      <Stack spacing='4'>
        <Text textColor='gray.300' opacity='100' fontSize='2xl'>
          HackerNews
        </Text>
        <Text textColor='gray.100' opacity='100' fontSize='md'>
          HackerNews 2
        </Text>
      </Stack>
    </Card>
  );
};

export default News;
