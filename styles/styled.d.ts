import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    headerColor: string;
    accentColor: string;
    shadow: {
      defaultShadow: string;
      buttonShadow: string;
    };
    blockquoteColor: string;
    fontColor: {
      contentColor: string;
      hashTag: string;
    };
    codeColor: string;
    codeBackground: string;
  }
}
