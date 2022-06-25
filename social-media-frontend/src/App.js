import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import styled from "styled-components";
function App() {
  return (
    <AppStyled className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile/:username" exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </AppStyled>
  );
}
const AppStyled = styled.div`

`;
export default App;
