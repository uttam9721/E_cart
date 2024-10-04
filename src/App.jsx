import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Product from './component/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';
import SearchItem from './component/SearchItem';
import Cart from './component/Cart';
import { items } from './component/Data';


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}/>} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/search/:term' element={<SearchItem />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
