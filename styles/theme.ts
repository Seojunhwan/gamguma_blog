import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  bgColor: '#FFF9F9',
  headerColor: '#BAABDA',
  accentColor: '#D6E5FA',
  blockquoteColor: '#eee8e8',
  defaultShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  fontColor: {
    contentColor: '#2F3135',
    hashTag: '#000',
  },
};

const darkTheme: DefaultTheme = {
  bgColor: '#2F3135',
  headerColor: '#615C5C',
  accentColor: '#8B8696',
  blockquoteColor: '#53555A',
  defaultShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  fontColor: {
    contentColor: '#cbcbcb',
    hashTag: '#000',
  },
};

export { lightTheme, darkTheme };
