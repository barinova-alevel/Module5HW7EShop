import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="catalog" element={< div />} />
          <Route path="product/:id" element={<div />} />
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
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
