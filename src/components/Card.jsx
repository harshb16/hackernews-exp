import { Box } from '@chakra-ui/layout';

const Card = ({ children, ...props }) => {
  return (
    <Box p='5' rounded='md' {...props}>
      {children}
    </Box>
  );
};

export default Card;
