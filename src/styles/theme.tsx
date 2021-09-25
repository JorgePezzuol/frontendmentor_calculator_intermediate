import React, { createContext, useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "../utils/usePersistedState";
import { dark } from "./themes/dark";
import { light } from "./themes/light";
import { violet } from "./themes/violet";

interface ThemeContextData {
  changeTheme: (title: string) => void;
  theme: DefaultTheme;
}

const themes: { [key: string]: DefaultTheme } = {
  dark: dark,
  light: light,
  violet: violet,
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const changeTheme = (title: string) => {
    setTheme(themes[title]);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
