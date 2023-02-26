import React from 'react';
import BottomNavigator from './src/navigation/BottomNavigator';
import ImageProvider from './src/context/Provider';

const App = () => {
  return (
    <ImageProvider>
      <BottomNavigator />
    </ImageProvider>
  )
}

export default App;
