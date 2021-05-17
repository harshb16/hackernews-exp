import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size='lg'
      fontSize='lg'
      aria-label={`Switch to ${text} mode`}
      variant='ghost'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      alignSelf='flex-end'
      isRound='true'
      m='5'
      color={useColorModeValue('gray.900', 'gray.500')}
      _hover={{
        backgroundColor: useColorModeValue('transparent', 'blue.600'),
      }}
      {...props}
    />
  );
};
