import { Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route>this is 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
