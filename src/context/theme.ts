import { createContext, SetStateAction } from "react";

// Using 2 types of theme - light and dark and using them as styles
export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark'
};

interface IContext {
  theme: string,
  toggleTheme: React.Dispatch<SetStateAction<void>>
}

// Making use of ThemeContext to be used by any component through out the app
const ThemeContext = createContext({
  theme: THEMES.LIGHT,
  toggleTheme: () => { }
} as IContext);

export default ThemeContext;