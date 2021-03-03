import React, { useEffect, useReducer } from 'react';
import reducer, { initialState, actionCreators } from "./store/reduser";
import thunkCreators from "./store/thunkCreators";
import { getWinning } from "./utils";

import Header from "./components/Header/Header";
import GamePlace from "./components/GamePlace/GamePlace";
import Footer from "./components/Footer/Footer";
import slyles from './App.module.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunks = Object.keys(thunkCreators).reduce((ac, key) => {
    ac[key] = thunkCreators[key](state, dispatch);
    return ac;
  }, {});
  
  const winning = getWinning(state.game);
  
  useEffect(() => {
    if (winning) {
      thunks.addWinning(winning);
      setTimeout(() => {
        thunks.newGame();
      }, 2000);
    }

  }, [winning]);

  useEffect(() => {
    console.log(state);
  });

  return (
    <div className={slyles.App}>
      <Header />
      <GamePlace  players={state.players} 
                  score={state.score} 
                  activePlayer={state.activePlayer}
                  activeIcon={state.activeIcon}
                  dispatch={dispatch} 
                  thunks={thunks}
                  gameSession={state.gameSession}
                  winning={state.winning}
      />
      <Footer />
    </div>
  );
};

export default App;
