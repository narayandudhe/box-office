import { useState, useReducer } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import { searchForShows, searchForActors } from '../misc/config';
import { useQuery } from '@tanstack/react-query';

const reducerfn = (currentCounter, action) => {
  switch (action.type) {
    case 'Increment':
      return currentCounter + 1;
    case 'Decrement':
      return currentCounter - 1;
    case 'Reset':
      return 0;
  }
  return 0;
};
const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: results, error: apiResultError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.SearchOption === 'shows'
        ? searchForShows(filter.Input)
        : searchForActors(filter.Input),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const OnSearch = async ({ Input, SearchOption }) => {
    setFilter({ Input, SearchOption });
    console.log(filter);
  };
  const rendorResult = () => {
    if (apiResultError) {
      return <div>{apiResultError.message}</div>;
    }
    if (results && results.length === 0) {
      return <div>No Result Found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  const [counter, dispatch] = useReducer(reducerfn, 0);
  const onIncrement = () => {
    dispatch({ type: 'Increment' });
  };
  const onDecrement = () => {
    dispatch({ type: 'Decrement' });
  };
  const onReset = () => {
    dispatch({ type: 'Reset' });
  };
  return (
    <MainPageLayout>
      <SearchForm OnSearch={OnSearch} />
      <div>
        <p>counter: {counter}</p>
        <button type="button" onClick={onIncrement}>
          Increment
        </button>
        <button type="button" onClick={onDecrement}>
          Decrement
        </button>
        <button type="button" onClick={onReset}>
          Reset
        </button>
      </div>
      {rendorResult()}
    </MainPageLayout>
  );
};

export default Home;
