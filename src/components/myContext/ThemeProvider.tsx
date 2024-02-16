import { createContext } from "react";
import { theme } from "./theme";


export const ThemeContext = createContext(theme);

export const ThemeContextComponent = () => {
    return <div style={{color:theme.light,background:theme.dark}}>Current theme: {}</div>
}
