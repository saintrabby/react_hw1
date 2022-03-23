// import logo from './logo.svg';

import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './Home'
import Score from './Score'
import NotFound from './NotFound';

import './App.css';

function App() {
  return (
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/score/:weekDay' element={<Score />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
