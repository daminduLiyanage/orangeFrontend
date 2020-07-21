import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {MyInfo} from './MyInfo' ;
import {EmployeeData} from './EmployeeData';
import {Leave} from './Leave';
//import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Login} from './Login';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <div>
              <NavigationBar/>
              <Route exact path="/myinfo" component={MyInfo} />
              <Route exact path="/employeedata" component={EmployeeData} />
              <Route exact path="/leave" component={Leave} />
            </div>
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
