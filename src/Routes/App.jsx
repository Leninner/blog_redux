import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from '../components/users';
import Home from '../containers/Home';
import '../assets/styles/Global.scss';
import Layout from '../containers/Layout';
import Publications from '../components/publications';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/users' element={<Users />} />
          <Route path='/publications/:key' element={<Publications />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
