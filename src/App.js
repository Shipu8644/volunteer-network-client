
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Authprovider from './pages/context/Authprovider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Events from './pages/Events/Events';
import Admin from './pages/Admin/Admin';
import AddEvent from './pages/AddEvent/AddEvent';
function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/register'>
              <Registration></Registration>
            </PrivateRoute>
            <PrivateRoute path='/register/:id'>
              <Registration></Registration>
            </PrivateRoute>
            <PrivateRoute path='/events'>
              <Events></Events>
            </PrivateRoute>
            <PrivateRoute path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path='/addevent'>
              <AddEvent></AddEvent>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
