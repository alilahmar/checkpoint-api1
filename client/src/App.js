import React from "react";
import PeopleList from "./Components/PeopleList";
import Add from "./Components/Add";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFalse } from "./Redux/Actions/Edit";
import { Button } from "semantic-ui-react";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* NavBar */}
      <Link to="/add">
        <Button inverted color="blue" onClick={() => dispatch(toggleFalse())}>
          Add User
        </Button>
      </Link>

      <Link to="/">
        <Button inverted color="blue">
          User List
        </Button>
      </Link>

      <Switch>
        <Route exact path="/" component={PeopleList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
