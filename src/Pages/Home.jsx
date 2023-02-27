import { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import { apiGet } from '../misc/config';
const Home = () => {
  const [Input, setInput] = useState('');
  const [results, setresults] = useState(null);
  const [SearchOption, setSearchOption] = useState('shows');

  const InputOnChange = ev => {
    setInput(ev.target.value);
  };
  const onkeydown = ev => {
    if (ev.keyCode === 13) {
      OnSearch();
    }
  };
  const OnSearch = () => {
    const result = apiGet(`/search/${SearchOption}?q=${Input}`).then(result => {
      setresults(result);
    });
  };
  const rendorResult = () => {
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
      <button type="button" onClick={OnSearch}>
        Search
      </button>
      {rendorResult()}
    </MainPageLayout>
  );
};

export default Home;
