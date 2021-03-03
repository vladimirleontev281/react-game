import { actionCreators } from "./reduser";
import { getRandomPlayer } from "../utils";

export default {
    makeGameMove: (state, dispatch) => data => {
        dispatch(actionCreators.setGameMove(data));
        dispatch(actionCreators.toggleActivePlayer());
        dispatch(actionCreators.toggleActiveIcon())
    },
    addWinning: (state, dispatch) => winning => {
        dispatch(actionCreators.setWinning(winning));
        dispatch(actionCreators.changeScore(state.game[state.game.length - 1].player));
    },
    newGame: (state, dispatch) => () => {
        dispatch(actionCreators.setWinning(null));
        dispatch(actionCreators.toggleActiveIcon('cross'));
        dispatch(actionCreators.toggleActivePlayer(getRandomPlayer()));
        dispatch(actionCreators.setWinning(null));
        dispatch(actionCreators.setGameMove(null));

        dispatch(actionCreators.setGameSession(false));
    },

    // 111: (state, dispatch) => () => {
        
    // },
};