import { useState } from 'react';

export type ThemeOptions = 'autumn' | 'default' | 'summer' | 'winter';

const useThemeMode = (): [ThemeOptions, (theme: ThemeOptions) => void] => {
   const [theme, setTheme] = useState<ThemeOptions>('default');

   const toggleTheme = (selectedTheme: ThemeOptions) => {
      if (selectedTheme !== theme) {
         setTheme(selectedTheme);
      }
   };

   return [theme, toggleTheme];
};

export default useThemeMode;
