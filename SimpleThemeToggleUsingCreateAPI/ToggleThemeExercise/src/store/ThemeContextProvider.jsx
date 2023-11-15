import { createContext, useState } from "react"; 

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  labelText: 'Default texat',
  changeLabelText: () =>{},
});
 
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [labelText, setLabelText] = useState("Default text");

  const changeLabelText = () => {
    console.log("1");
    setLabelText((prevLabel) => {
      return prevLabel === 'Default text' ? 'New text' : 'Default text';
    })
  }

  const toggleTheme = () => {
    console.log("1");
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, labelText, changeLabelText }}>
      {children}
    </ThemeContext.Provider>
  );
}