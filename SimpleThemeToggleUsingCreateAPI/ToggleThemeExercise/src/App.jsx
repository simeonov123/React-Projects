import React from 'react';
import ThemeContextProvider from './store/ThemeContextProvider'; // Update the import path as necessary
import Page from './component/Header'; // Ensure this path is correct

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;