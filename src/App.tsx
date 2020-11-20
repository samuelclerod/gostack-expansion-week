import React from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import VideoHeader from './components/VideoHeader';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <GlobalStyle />
      <VideoHeader />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
