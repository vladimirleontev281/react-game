import { getRandomPlayer } from "../utils";

export const initialState = {
  players: ['player A', 'player B'],
  score: [0, 0],
  gameSession: false,
  activePlayer: getRandomPlayer(),
  activeIcon: 'cross',
  game: [],
  winning: null,
};

const actionsTypes = {
  setGameSession: 'SET-GAME-SESSION',
  setUserName: 'SET-USER-NAME',
  setGameMove: 'SET-GAME-MOVE',
  setWinning: 'SET-WINNING',
  toggleActivePlayer: 'TOGGLE-ACTIVE-PLAYER',
  toggleActiveIcon: 'TOGGLE-ACTIVE-ICON',
  changeScore: 'CHANGE-SCORE',

};

export const actionCreators = {
  setGameSession: value => ({type: actionsTypes.setGameSession, value: value}),
  setUserName: (player, name) => ({type: actionsTypes.setUserName, data: {player, name}}),
  setGameMove: gameMoveObj => ({type: actionsTypes.setGameMove, data: gameMoveObj}),
  toggleActivePlayer: value => ({type: actionsTypes.toggleActivePlayer, value: value}),
  toggleActiveIcon: value => ({type: actionsTypes.toggleActiveIcon, value: value}),
  setWinning: value => ({type: actionsTypes.setWinning, value: value}),
  changeScore: value => ({type: actionsTypes.changeScore, value: value}),
};

const reduser = (state, action) => {
  let newValues;
  switch (action.type) {
    case actionsTypes.setGameSession: return {...state, gameSession: action.value};

    case actionsTypes.setUserName:
      newValues = [...state.players];
      newValues[action.data.player === 'playerA' ? 0 : 1] = action.data.name;
      return {...state, players: [...newValues]};

    case actionsTypes.setGameMove:
      newValues = action.data ? [...state.game, action.data] : [];
      return {...state, 
        game: [...newValues], 
        gameSession: !(newValues.length >= 9)
      };

    case actionsTypes.toggleActivePlayer:
      return {
        ...state, 
        activePlayer: action.value ? action.value : state.activePlayer === 'playerA' ? 'playerB' : 'playerA'
      };

    case actionsTypes.toggleActiveIcon:
      return {...state, activeIcon: action.value ? action.value : state.activeIcon === 'cross' ? 'zero' : 'cross'};

    case actionsTypes.setWinning: return {...state, winning: action.value};

    case actionsTypes.changeScore:
      newValues = !action.value 
        ? [0, 0] 
        : action.value === 'playerA' 
          ? [state.score[0] + 1, state.score[1]] 
          : [state.score[0], state.score[1] + 1];
      return {...state, score: newValues};
  
    default:
      return state;
  }
}

export default reduser;