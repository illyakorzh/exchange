import { useSelector } from 'react-redux';

export const tickersReducer = (state = {}, action) => {

  if (action.type === 'ADD_CHATS') {

    const mute = localStorage.getItem("mute");
    const newTickers = { ...state };
    action.tickers.forEach(el => {

      if (!mute.includes(el.ticker)) {
        newTickers[el.ticker] = el;
      } else {
        delete newTickers[el.ticker];
      }
    });
    return newTickers;
  }

  return state;
};

export const addTickers = (tickers) => ({ type: 'ADD_CHATS', tickers });

