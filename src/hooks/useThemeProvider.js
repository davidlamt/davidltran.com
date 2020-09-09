import { useContext } from 'react';

import { ThemeContext } from '../components/ThemeProvider';

const useThemeProvider = () => {
  const themeProvider = useContext(ThemeContext);

  if (!themeProvider) {
    throw new Error(
      'useThemeProvider must be used within an ThemeProvider consumer'
    );
  }

  return themeProvider;
};

export default useThemeProvider;
