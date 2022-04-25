import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/useReducer/Counter';
import Latihan_UseContext from './pages/useContext/ThemedButton';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='useReducer' element={<Counter />} />
          <Route path='/useContext' element={<Latihan_UseContext />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
