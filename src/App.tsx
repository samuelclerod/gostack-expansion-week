import React from 'react';
import Cards from './components/Cards';
import VideoHeader from './components/VideoHeader';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <GlobalStyle />
      <VideoHeader />
      <Cards />
    </>
  );
}

export default App;
