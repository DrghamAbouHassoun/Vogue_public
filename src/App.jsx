import React from 'react';
import './style/App.scss';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from './pages/Products';
import { useSelector } from 'react-redux/es/exports';
import Beauty from './pages/Beauty';
import AllProducts from './pages/AllProducts';
import Grid from './pages/Grid';
import Arts from './pages/Arts';

function App() {
  const lang = useSelector(state => state.lang.language)

  return (
      <div className={`App ${lang ? "" : "ar"}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="all" element={<AllProducts />} />
          <Route path="grid" element={<Grid />} />
          <Route path='arts' element={<Arts />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
