import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import UsersContainer from '../containers/UsersContainer';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/about" component={AboutUs} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
)

export default App;
