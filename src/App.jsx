import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import ShowShows from './components/shows/ShowShows';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/show/:showId" element={<ShowShows />}></Route>
        <Route>this is 404 page</Route>
      </Routes>
    </div>
  );
}

export default App;