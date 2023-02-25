import { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
const Home = () => {
  const [Input, setInput] = useState('');
  const [results, setresults] = useState(null);
  const InputOnChange = ev => {
    setInput(ev.target.value);
  };
  const onkeydown = ev => {
    if (ev.keyCode === 13) {
      OnSearch();
    }
  };
  const OnSearch = () => {
    const result = apiGet(`/search/shows?q=${Input}`).then(result => {
      setresults(result);
      console.log(result);
    });
  };
  const rendorResult = () => {
    if (results && results.length === 0) {
      return <div>No Result Found</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={InputOnChange}
        onKeyDown={onkeydown}
        value={Input}
      />
      <button type="button" onClick={OnSearch}>
        Search
      </button>
      {rendorResult()}
    </MainPageLayout>
  );
};

export default Home;
