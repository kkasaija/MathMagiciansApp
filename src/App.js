import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quote.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
