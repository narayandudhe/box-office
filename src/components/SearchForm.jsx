import { useState } from 'react';
const SearchForm = ({ OnSearch }) => {
  const [Input, setInput] = useState('');
  const [SearchOption, setSearchOption] = useState('shows');

  const InputOnChange = ev => {
    setInput(ev.target.value);
  };
  const onkeydown = ev => {
    if (ev.keyCode === 13) {
      OnSearch();
    }
  };
  const OnRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const isShowsSearch = SearchOption === 'shows';

  const query = {
    Input,
    SearchOption,
  };
  const Onsubmit = ev => {
    ev.preventDefault();
    OnSearch(query);
  };

  return (
    <form onSubmit={Onsubmit}>
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
            name="search-option"
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
            name="search-option"
            checked={!isShowsSearch}
            onChange={OnRadioChange}
            value="people"
          />
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
