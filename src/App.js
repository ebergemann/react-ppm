import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Products from './Products'
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1 id="title">PPM - Project Product Management</h1>
            <ul className="heading-nav">
              <li className="heading-nav-entry"><NavLink exact to="/" activeStyle={{ fontWeight: 'bold', color: 'red' }}>Home</NavLink></li>
              <li className="heading-nav-entry"><NavLink exact to="/products" activeStyle={{ fontWeight: 'bold', color: 'red' }}>Product List</NavLink></li>
              <li className="heading-nav-entry"><NavLink to="/products/new" activeStyle={{ fontWeight: 'bold', color: 'red' }}>Product Creation</NavLink></li>
            </ul>
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/new" component={AddProduct} />
            <Route path="/products/:id/edit" component={EditProduct} />
          </main>
        </div>
      </Router>
    );
  }
}

const Home = (props) => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Project Product Management. Here we can manage a set of products. You are able to create new products, remove old products, and edit products.</p>
  </div>
)

export default App;
