import { actionCreators } from "./reduser";
import { getRandomPlayer, increaseScore } from "../utils";
import api from "../api/api";

const thunkCreators = {
    initGame: (state, dispatch) => () => {
        const lastGame = api.init();
        if (lastGame) {
          const players = Object.keys(lastGame);
          delete players.score;
          dispatch(actionCreators.setPlayers(players));
          setGameResults(lastGame, players, dispatch)
        };
    },
    findAndSetResults: (state, dispatch) => (playerA, playerB) => {
        const results = api.findResults(playerA, playerB);
        if (results) setGameResults(results, state.players, dispatch) 
        else dispatch(actionCreators.setScore([0, 0]));
    },
    makeGameMove: (state, dispatch) => data => {
        dispatch(actionCreators.setGameMove(data));
        dispatch(actionCreators.toggleActivePlayer());
        dispatch(actionCreators.toggleActiveIcon())
    },
    addWinning: (state, dispatch) => winning => {
        const newScore = increaseScore(state.score, state.game[state.game.length - 1].player);
        dispatch(actionCreators.setWinning(winning));
        dispatch(actionCreators.setScore(newScore));
        api.saveResults({playerA: state.players[0], playerB: state.players[1], score: newScore});
    },
    newGame: (state, dispatch) => () => {
        dispatch(actionCreators.setWinning(null));
        dispatch(actionCreators.toggleActiveIcon('cross'));
        dispatch(actionCreators.toggleActivePlayer(getRandomPlayer()));
        dispatch(actionCreators.setGameMove(null));
        dispatch(actionCreators.setGameSession(false));
    },
    resetScore: (state, dispatch) => () => {
      dispatch(actionCreators.setScore([0, 0]));
      api.saveResults({playerA: state.players[0], playerB: state.players[1], score: [0, 0]})
    },
    clearBase: (state, dispatch) => () => {
        api.clearBase();
        dispatch(actionCreators.setScore([0, 0]));
    },

    // 111: (state, dispatch) => () => {
        
    // },
};
export default thunkCreators;

function setGameResults(results, players, dispatch) {
    dispatch(actionCreators.setScore([results[players[0]], results[players[1]]]));
}