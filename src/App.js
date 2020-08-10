import React from 'react';
import './App.css';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import PathfindingVisualizer from './components/PathfindingVisualizer/PathfindingVisualizer';
import Home from './components/Home';

// import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/myNavbar';



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// everything within Router element has ability to use routing
// Route renders out components based on url
// Switch means as soon as find one (specific) matching url, go to that (solves prob of always rendering home page)
  // 'exact' keyword also solves this


function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        
        <main>
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sortingVisualizer" component={SortingVisualizer} />
            <Route path="/pathfindingVisualizer" component={PathfindingVisualizer} />
          </Switch> */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
            <Route path={process.env.PUBLIC_URL + '/sortingVisualizer'} component={SortingVisualizer} />
            <Route path={process.env.PUBLIC_URL + '/pathfindingVisualizer'} component={PathfindingVisualizer} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
