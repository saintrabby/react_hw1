// import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home'
import Score from './Score'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/score/:weekDay' element={<Score />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
