import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Catalog from './containers/Catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './components/ProductDetails';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="catalog" element={<Catalog />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="basket" element={<div />} />
          <Route path="login" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Container className="pt-4 pb-4">
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
