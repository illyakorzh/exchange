export const muteReducer = (state = [], action) => {

  if (action.type === 'MUTE_TICKER') {
    if (!state.includes(action.ticker)) {
      return [...state, action.ticker];
    }else{
      return state
    }
  }
  if (action.type === 'UNMUTE_TICKER') {
    if (state.includes(action.ticker)) {
    return [...state.filter(ticker => ticker !== action.ticker)];
    }else{
      return state
    }
  }

  return state;
};

export const muteTickerState = (ticker) => ({ type: 'MUTE_TICKER', ticker });
export const unmuteTickerState = (ticker) => ({ type: 'UNMUTE_TICKER', ticker });
