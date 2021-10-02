import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Login from './components/Login';
import Signup from './components/Signup/SignupForm';
import ListingPage from './components/ListingPage';
import Userprofile from './components/UserProfile';
import MutualFundDetailsPage from './components/MutualFundDetails/MutualFundDetailsPage';

function App({ loginStatus }) {
  console.log(loginStatus)
  return (
    <div>
      <Router>
        <Switch>
          {(!loginStatus && <Route path="/" exact><Home /></Route>)}
          {(!loginStatus && <Route path="/login" exact><Login /></Route>)}
          {(!loginStatus && <Route path="/signup" exact><Signup /></Route>)}
          {loginStatus && <Route path="/" exact><ListingPage /></Route>}
          {loginStatus && <Route path="/mutual-funds-detail-page/:schemeCode" component={MutualFundDetailsPage} />}
          {loginStatus && <Route path="/listing" exact><ListingPage /></Route>}
          {loginStatus && <Route path="/user-profile" exact><Userprofile /></Route>}
        </Switch>
      </Router>
    </div>
  );
}


const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
})


export default connect(mapStateToProps, null)(App)

