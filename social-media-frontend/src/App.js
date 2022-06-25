import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <AppStyled className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppStyled>
  );
}
const AppStyled = styled.div``;
export default App;
