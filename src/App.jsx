import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewProducts from './containers/ViewProducts';
import Cart from './containers/Cart';

const App = () => (
  <div>
    <Router>
      <Route exact path="/products">
        <ViewProducts />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Router>
  </div>
);

export default App;
