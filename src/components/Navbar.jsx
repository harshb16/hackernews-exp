import { HStack, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import HackernewsLink from './HackernewsLink';

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' alignItems='center' w='full' p='4'>
      <HackernewsLink />
      <Spacer />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
