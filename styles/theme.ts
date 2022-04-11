import { DefaultTheme } from 'styled-components';

const defaultTheme = {
  shadow: {
    defaultShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    buttonShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
};

const lightTheme: DefaultTheme = {
  ...defaultTheme,
  bgColor: '#FFF9F9',
  headerColor: '#BAABDA',
  accentColor: '#f0e9c8',
  blockquoteColor: '#eee8e8',
  fontColor: {
    contentColor: '#2F3135',
    hashTag: '#000',
  },
  codeColor: '#c7254e',
  codeBackground: '#f9f2f4',
};

const darkTheme: DefaultTheme = {
  ...defaultTheme,
  bgColor: '#2F3135',
  headerColor: '#615C5C',
  accentColor: '#8B8696',
  blockquoteColor: '#53555A',
  fontColor: {
    contentColor: '#cbcbcb',
    hashTag: '#000',
  },
  codeColor: '#bbb',
  codeBackground: '#454545',
};

export { lightTheme, darkTheme };
