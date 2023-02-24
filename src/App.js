import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is Homepage
      </Route>
      <Route exact path="/about">
        this is about page
      </Route>
      <Route>this is 404 page</Route>
    </Switch>
  );
}

export default App;
