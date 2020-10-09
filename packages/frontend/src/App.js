import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
const Heroes = lazy(() => import('./pages/Heroes'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/superheroes">Superheroes</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/superheroes" component={Heroes} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
