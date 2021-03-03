const BASE_KEY = 'react-game';

const getBase = () => JSON.parse(localStorage.getItem(BASE_KEY));
const setBase = value => localStorage.setItem(BASE_KEY, JSON.stringify(value));

const api = {
    init: () => {
        const base = getBase();
        if (base) return base[base.length - 1];
        return null;
    },
    findResults: (playerA, playerB) => {
        const base = getBase();
        if (base) return base.find(item => item.playerA === playerA && item.playerB === playerB)
        return null;
    },
    saveResults: results => {
        const base = getBase() || [];
        const newBase = base.filter(item => !(item.playerA === results.playerA && item.playerB === results.playerB));
        setBase([...newBase, results]);
    },
    clearBase: () => {
        setBase([]);
    }
};

export default api;