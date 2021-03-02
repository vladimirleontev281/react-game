export const getPlayerName = (stateValue, player) => player === 'playerA' ? stateValue[0] : stateValue[1];

export const getPlayerScore = (stateValue, player) => player === 'playerA' ? stateValue[0] : stateValue[1];