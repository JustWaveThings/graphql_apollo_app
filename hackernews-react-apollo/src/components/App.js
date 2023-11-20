import React from 'react';
import CreateLink from './CreateLink';
import LinkList from './LinkList';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Search from './Search';

const App = () => {
  return (
    <div className='center w85'>
      <Header />
      <div className='ph3 pv2 background-gray'>
        <Routes>
          <Route
            path='/'
            element={<LinkList />}
          />
          <Route
            path='/create'
            element={<CreateLink />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/search'
            element={<Search />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;