import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
          <Switch>
              <Route path='/reg' render={() => <Registration/>}/>
              <Route path='/login' render={() => <Login/>}/>
              <Redirect to='/reg'/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
