import { useReducer, useEffect } from 'react';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};

const staredshowsreducer = (currentstared, action) => {
  switch (action.type) {
    case 'Star':
      return currentstared.concat(action.showId);
    case 'Unstar':
      return currentstared.filter(showId => showId !== action.showId);
    default:
      currentstared;
  }
};
export const useStaredShows = () => {
  return usePersistedReducer(staredshowsreducer, [], 'starredShows');
};
