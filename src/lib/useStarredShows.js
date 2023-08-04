import { useReducer, useEffect } from "react";

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    //initial state only once: when mounted
    const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initial; //localstorage works only with strings
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case "STAR":
      return currentStarred.concat(action.showId);
    case "UNSTAR":
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      currentStarred;
  }
};

export const useStarredShows = () => {
  return usePersistedReducer(starredShowsReducer, [], "starredShows");
};
