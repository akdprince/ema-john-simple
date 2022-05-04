import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Review from './components/Review/Review'
import Manage from './components/Manage/Manage'
import NotFound from './components/NotFound/NotFound';
import ProductsDetail from './components/ProductsDetail/ProductsDetail';



function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/manage" element={<Manage />} />
          <Route exact path="/" element={<Shop />} />
          <Route path="/product/:productKey" element={<ProductsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
