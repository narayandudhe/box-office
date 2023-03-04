import { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import { searchForShows, searchForActors } from '../misc/config';
import { useQuery } from '@tanstack/react-query';

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

  return (
    <MainPageLayout>
      <SearchForm OnSearch={OnSearch} />

      {rendorResult()}
    </MainPageLayout>
  );
};

export default Home;
