import React from 'react';
import ThemeContextProvider from './store/ThemeContextProvider'; // Update the import path as necessary
import Page from './component/Header'; // Ensure this path is correct
import NavBar from './component/NavBar';
import NavContextProvider from './store/NavBarContextProvider';

function App() {
  return (
    <ThemeContextProvider>
      <Page />

      <NavContextProvider>  
         <NavBar/>
      </NavContextProvider>
    
    </ThemeContextProvider>
  );
}

export default App;