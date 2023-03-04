import { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import { searchForShows, searchForActors } from '../misc/config';
const Home = () => {
  const [apiResultError, setapiResultError] = useState(null);
  const [results, setresults] = useState(null);

 
  const OnSearch = ({Input,SearchOption}) => {
    try {
      setapiResultError(null);
      if (SearchOption === 'shows') {
        searchForShows(Input).then(result => {
          setresults(result);
        });
      } else {
        searchForActors(Input).then(result => {
          setresults(result);
        });
      }
    } catch (error) {
      setapiResultError(error);
    }
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
     <SearchForm OnSearch={OnSearch}/>
      {rendorResult()}
    </MainPageLayout>
  );
};

export default Home;
