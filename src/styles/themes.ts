import { DefaultTheme } from 'styled-components';

export type ThemeColors = {
   background: string;
   nextButton: string;
   button: string;
   text: string;
};

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: ThemeColors;
   }
}

const themes: {
   [key: string]: DefaultTheme;
} = {
   default: {
      colors: {
         background: '#ddedc4',
         nextButton: '#655E96',
         button: '#ffc105',
         text: '#fff'
      }
   },
   summer: {
      colors: {
         background: '#F3DE8A',
         nextButton: '#FCD400',
         button: '#3E567A',
         text: '#ddedc4'
      }
   },
   autumn: {
      colors: {
         background: '#f1f1f1',
         nextButton: '#e7a127',
         button: '#824d30',
         text: '#f2e8e3'
      }
   },
   winter: {
      colors: {
         background: '#e8eaed',
         nextButton: '#a7becd',
         button: '#6c7a89',
         text: '#fff'
      }
   }
};

export default themes;
