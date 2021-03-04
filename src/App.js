/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useRef } from 'react';
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

  const players = state.players;
  const gameSession = state.gameSession;
  const previousPlayers = useRef(players);
  const previousGameSession = useRef(gameSession);

  useEffect(() => {
    thunks.initGame();
  }, []);

  const winning = getWinning(state.game);
  useEffect(() => {
    if (winning) {
      thunks.addWinning(winning);
      setTimeout(thunks.newGame, 1000);
    }
  }, [winning]);

  useEffect(() => {
    if (state.game.length !== 0 && !gameSession) {
      dispatch(actionCreators.setGameSession(true));
    }
    if (state.game.length >= 9) {
      setTimeout(thunks.newGame, 1000);
    }
  }, [state.game]);

  useEffect(() => {
    if (players[0] !== previousPlayers.current[0] || players[1] !== previousPlayers.current[1]) {
      thunks.findAndSetResults(state.players[0], state.players[1]);
    }
    previousPlayers.current = players;
  }, [players]);

  useEffect(() => {
    if (!gameSession && previousGameSession.current) thunks.newGame();
    previousGameSession.current = gameSession;
  }, [gameSession]);

  return (
    <div className={slyles.App}>
      <Header dispatch={dispatch} thunks={thunks} />
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
