import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Counter from './pages/useReducer/Counter';
import Latihan_UseContext from './pages/useContext/ThemedButton';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './pages/Login';

const ProtectedUserRoute = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />;
}

const HandleLoginSuccessfully = () => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" replace />
  }
  return <Outlet />;
}

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedUserRoute />}>
            <Route path="/" element={<Home />} />
            <Route path='useReducer' element={<Counter />} />
            <Route path='/useContext' element={<Latihan_UseContext />} />
            <Route path="profile" element={<h1>Halaman Home</h1>} />
          </Route>

          <Route element={<HandleLoginSuccessfully />}>
            <Route element={<HandleLoginSuccessfully />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
