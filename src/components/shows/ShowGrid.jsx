import { useReducer, useEffect } from 'react';
import ShowsCard from './ShowsCard';
import IMAGE_NOT_FOUND from '../../images/download.jfif';

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
const ShowGrid = ({ data }) => {
  const [staredshows, dispatchstared] = usePersistedReducer(
    staredshowsreducer,
    [],
    'starredShows'
  );
  console.log(staredshows);
  const onStarClick = showId => {
    const isstared = staredshows.includes(showId);
    if (isstared) {
      dispatchstared({ type: 'Unstar', showId });
    } else {
      dispatchstared({ type: 'Star', showId });
    }
  };
  return (
    <div>
      {data.map(({ show }) => (
        <ShowsCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
          onStarClick={onStarClick}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
