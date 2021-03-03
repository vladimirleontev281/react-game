export const getPlayerName = (stateValue, player) => player === 'playerA' ? stateValue[0] : stateValue[1];

export const getPlayerScore = (stateValue, player) => player === 'playerA' ? stateValue[0] : stateValue[1];

export const getRandomPlayer = () => {
    const random = getRandomIntInclusive(0, 1);
    return random ? 'playerB' : 'playerA';
};

export const getNewScore = (oldScore, player) => {
    return !player 
        ? [0, 0]
        :  player === 'playerA'
            ? [oldScore[0] + 1, oldScore[1]]
            : [oldScore[0], oldScore[1] + 1];
};

export const getWinning = game => {
    if (game.length < 5) return null;
    const winnings = {
        '012': 'horizontal-1',
        '345': 'horizontal-2',
        '678': 'horizontal-3',
        '036': 'vertical-1',
        '147': 'vertical-2',
        '258': 'vertical-3',
        '048': 'diagonal-left',
        '246': 'diagonal-right',
    };
    const winningsKeys = Object.keys(winnings);
    const player = game[game.length - 1].player;
    const gameMoves = new Set(game.filter(el => el.player === player).map(i => i.cell));
    for (let i = 0; i < winningsKeys.length; i++) {
        const arrayToCheck = winningsKeys[i].split('');
        if (gameMoves.has(arrayToCheck[0]) && gameMoves.has(arrayToCheck[1]) && gameMoves.has(arrayToCheck[2])) 
            return winnings[winningsKeys[i]]
    }
    return null;
};


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }