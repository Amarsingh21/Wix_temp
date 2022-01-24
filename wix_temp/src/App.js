import React from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Team from './Components/Team';
import Footer from './Components/Footer';
import Product from './Components/Product';
import {
  BrowserRouter as Routes,
  Link,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Team} />
          <Route exact path="/product" component={Product} />
          <Footer />
      </Routes>
    </div>
  );

}

export default App;
