import { createContext } from "react";
import { theme } from "./Theme";

type ThemeContextProviderProps = {
    children : JSX.Element
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}:ThemeContextProviderProps) => {
   return <ThemeContext.Provider value={theme}>
    {children}
   </ThemeContext.Provider>
}