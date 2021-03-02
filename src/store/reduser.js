export const initialState = {
  players: ['player A', 'player B'],
  score: [0, 0]
};

export const actionsTypes = {
  setUserName: 'SET-USER-NAME',
};

export const actionCreators = {
  setUserName: (player, name) => ({type: actionsTypes.setUserName, data: {player, name}}),
};

const reduser = (state, action) => {
  let newValues;
  switch (action.type) {
    case actionsTypes.setUserName:
      console.log(action);
      newValues = [...state.players];
      newValues[action.data.player === 'playerA' ? 0 : 1] = action.data.name;
      // console.log('newValues: ', newValues);
      return {...state, players: [...newValues]};
  
    default:
      return state;
  }
}

export default reduser;