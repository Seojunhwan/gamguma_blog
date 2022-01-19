import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    headerColor: string;
    accentColor: string;
    defaultShadow: string;
    blockquoteColor: string;
    fontColor: {
      contentColor: string;
      hashTag: string;
    };
  }
}
