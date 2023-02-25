import { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
const Home = () => {
  const [Input, setInput] = useState('');
  const InputOnChange = ev => {
    setInput(ev.target.value);
  };
  const onkeydown = ev => {
    if (ev.keyCode === 13) {
      OnSearch();
    }
  };
  const OnSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${Input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
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
    </MainPageLayout>
  );
};

export default Home;
