import React from 'react';
import './App.css';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import PathfindingVisualizer from './components/PathfindingVisualizer/PathfindingVisualizer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// everything within Router element has ability to use routing
// Route renders out components based on url
// Switch means as soon as find one (specific) matching url, go to that (solves prob of always rendering home page)
  // 'exact' keyword also solves this


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sortingVisualizer" component={SortingVisualizer} />
          <Route path="/pathfindingVisualizer" component={PathfindingVisualizer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
