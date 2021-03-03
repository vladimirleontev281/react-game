import { getRandomPlayer } from "../utils";

const DEFAULT_PLAYERS_NAMES = ['player A', 'player B'];

export const initialState = {
  players: DEFAULT_PLAYERS_NAMES,
  score: [0, 0],
  gameSession: false,
  activePlayer: getRandomPlayer(),
  activeIcon: 'cross',
  game: [],
  winning: null,
};

const actionsTypes = {
  setPlayers: 'SET-PLAYERS',
  setScore: 'SET-SCORE',
  setGameSession: 'SET-GAME-SESSION',
  setPlayerName: 'SET-USER-NAME',
  setGameMove: 'SET-GAME-MOVE',
  setWinning: 'SET-WINNING',
  toggleActivePlayer: 'TOGGLE-ACTIVE-PLAYER',
  toggleActiveIcon: 'TOGGLE-ACTIVE-ICON',
};

export const actionCreators = {
  setPlayers: value => ({type: actionsTypes.setPlayers, value: value}),
  setScore: value => ({type: actionsTypes.setScore, value: value}),
  setGameSession: value => ({type: actionsTypes.setGameSession, value: value}),
  setPlayerName: (player, name) => ({type: actionsTypes.setPlayerName, data: {player, name}}),
  setGameMove: gameMoveObj => ({type: actionsTypes.setGameMove, data: gameMoveObj}),
  toggleActivePlayer: value => ({type: actionsTypes.toggleActivePlayer, value: value}),
  toggleActiveIcon: value => ({type: actionsTypes.toggleActiveIcon, value: value}),
  setWinning: value => ({type: actionsTypes.setWinning, value: value}),
};

const reduser = (state, action) => {
  let newValues, index, reverseIndex;
  switch (action.type) {
    case actionsTypes.setGameSession: return {...state, gameSession: action.value};
    case actionsTypes.setPlayers: return {...state, players: action.value};
    case actionsTypes.setScore: return {...state, score: action.value};

    case actionsTypes.setPlayerName:
      newValues = [...state.players];
      index = action.data.player === 'playerA' ? 0 : 1;
      reverseIndex = index ? 0 : 1;
      newValues[index] = action.data.name !== state.players[reverseIndex] 
        ? action.data.name
        : action.data.name !== DEFAULT_PLAYERS_NAMES[0] 
          ? DEFAULT_PLAYERS_NAMES[0] 
          : DEFAULT_PLAYERS_NAMES[1];
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
  
    default:
      return state;
  }
}

export default reduser;