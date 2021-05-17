import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: (props) => ({
    'html, body': {
      bgColor: props.colorMode === 'light' ? 'blue.600' : 'blue.900',
      fontFamily: 'mono',
    },
  }),
};

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles });
export default theme;
