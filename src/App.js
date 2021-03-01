import React from 'react';
import Header from "./components/Header/Header";
import GamePlace from "./components/GamePlace/GamePlace";
import Footer from "./components/Footer/Footer";
import slyles from './App.module.css';

const App = () => {
  return (
    <div className={slyles.App}>
      <Header />
      <GamePlace />
      <Footer />
    </div>
  );
};

export default App;
