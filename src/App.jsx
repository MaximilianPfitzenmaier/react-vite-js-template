// import React
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import Components
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

// import helper
import * as Helper from './utils/helper';

// import global styling
import './assets/scss/global.scss';


/**
 * The App
 * @return {App} The sum of the two numbers.
 */
const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Header></Header>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
