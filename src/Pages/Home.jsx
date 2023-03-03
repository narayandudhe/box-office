import { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import { searchForShows } from '../misc/config';
const Home = () => {
  const [Input, setInput] = useState('');
  const [results, setresults] = useState(null);
  const [SearchOption, setSearchOption] = useState('shows');
  const [apiResultError, setapiResultError] = useState(null);

  const InputOnChange = ev => {
    setInput(ev.target.value);
  };
  const onkeydown = ev => {
    if (ev.keyCode === 13) {
      OnSearch();
    }
  };
  const OnSearch = ev => {
    ev.preventDefault();
    try {
      setapiResultError(null);
      searchForShows(Input).then(result => {
        setresults(result);
      });
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
  const OnRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const isShowsSearch = SearchOption === 'shows';

  return (
    <MainPageLayout>
      <form onSubmit={OnSearch}>
        <input
          type="text"
          placeholder="Serarh for Something"
          onChange={InputOnChange}
          onKeyDown={onkeydown}
          value={Input}
        />
        <div>
          <label htmlFor="shows-search">
            Shows
            <input
              type="radio"
              id="shows-search"
              checked={isShowsSearch}
              onChange={OnRadioChange}
              value="shows"
            />
          </label>

          <label htmlFor="actors-search">
            Actors
            <input
              type="radio"
              id="actors-search"
              checked={!isShowsSearch}
              onChange={OnRadioChange}
              value="people"
            />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
      {rendorResult()}
    </MainPageLayout>
  );
};

export default Home;
