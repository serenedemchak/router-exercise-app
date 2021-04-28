import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import User from "./User"

function NoMatch() {
  const location = useLocation();

  return (
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  );
}
function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function BackButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.goBack()}>
      Go Back
    </button>
  );
}

function ForwardButton() {
    const history = useHistory();
    return (
      <button type="button" onClick={() => history.goForward()}>
        Go Forward
      </button>
    );
  }

  function GoHomeButton() {
    const history = useHistory();
    return (
      <button type="button" onClick={() => history.push("/")}>
        Go Home
      </button>
    );
  }

function App() {
  return (
    <Router>
      <div className="App">
        <div>
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:userId">
            <User />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App