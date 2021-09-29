import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup/SignupForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/login" exact><Login /></Route>
          <Route path="/signup" exact><Signup /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
