import { actionCreators } from "./reduser";
import { getRandomPlayer, getNewScore } from "../utils";
import api from "../api/api";

const thunkCreators = {
    initGame: (state, dispatch) => () => {
        const lastGame = api.init();
        if (lastGame) setGameResults(lastGame, dispatch);
    },
    findAndSetResults: (state, dispatch) => (playerA, playerB) => {
        const results = api.findResults(playerA, playerB);
        if (results) setGameResults(results, dispatch) 
        else dispatch(actionCreators.setScore([0, 0]));
    },
    makeGameMove: (state, dispatch) => data => {
        dispatch(actionCreators.setGameMove(data));
        dispatch(actionCreators.toggleActivePlayer());
        dispatch(actionCreators.toggleActiveIcon())
    },
    addWinning: (state, dispatch) => winning => {
        const newScore = getNewScore(state.score, state.game[state.game.length - 1].player);
        dispatch(actionCreators.setWinning(winning));
        dispatch(actionCreators.setScore(newScore));
        api.saveResults({playerA: state.players[0], playerB: state.players[1], score: newScore});
    },
    newGame: (state, dispatch) => () => {
        dispatch(actionCreators.setWinning(null));
        dispatch(actionCreators.toggleActiveIcon('cross'));
        dispatch(actionCreators.toggleActivePlayer(getRandomPlayer()));
        dispatch(actionCreators.setWinning(null));
        dispatch(actionCreators.setGameMove(null));

        dispatch(actionCreators.setGameSession(false));
    },
    saveResults: (state, dispatch) => () => {
        api.saveResults({playerA: state.players[0], playerB: state.players[1], score: state.score})
    },
    clearBase: (state, dispatch) => () => {
        api.clearBase();
    },

    // 111: (state, dispatch) => () => {
        
    // },
};
export default thunkCreators;

function setGameResults(results, dispatch) {
    dispatch(actionCreators.setPlayers([results.playerA, results.playerB]));
    dispatch(actionCreators.setScore(results.score));
}