export const DARK = 'dark';
export const INITIAL_THEME_CSS_PROP = '--initial-theme';
export const LIGHT = 'light';
export const THEME_KEY = 'theme';

const colors = {
  text: {
    [LIGHT]: '#333',
    [DARK]: '#fff',
  },
  background: {
    [LIGHT]: '#fff',
    [DARK]: '#1e1e1e',
  },
  link: {
    [LIGHT]: '#0984e3',
    [DARK]: '#3398e6',
  },
  'item-hover': {
    [LIGHT]: '#f5f5f5',
    [DARK]: '#333',
  },
  'secondary-item-hover': {
    [LIGHT]: '#333',
    [DARK]: '#fff',
  },
  'experience-date-background': {
    [LIGHT]: '#f5f5f5',
    [DARK]: '#333',
  },
  'experience-line': {
    [LIGHT]: '#d9dee7',
    [DARK]: '#333',
  },
  'experience-diamond': {
    [LIGHT]: '#333',
    [DARK]: '#9e9e9e',
  },
};

export default colors;
