import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import About from './Pages/About';
import Home from './Pages/Home';
import ShowShows from './components/shows/ShowShows';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/show/:showId" element={<ShowShows />}></Route>
          <Route>this is 404 page</Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
