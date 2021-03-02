import React, { useReducer } from 'react';
import reducer, { initialState } from "./store/reduser";

import Header from "./components/Header/Header";
import GamePlace from "./components/GamePlace/GamePlace";
import Footer from "./components/Footer/Footer";
import slyles from './App.module.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const props = {dispatch};

  return (
    <div className={slyles.App}>
      <Header {...props} />
      <GamePlace  players={state.players} 
                  score={state.score} 
                  dispatch={dispatch} 
                  gameSession={state.gameSession}
      />
      <Footer />
    </div>
  );
};

export default App;
