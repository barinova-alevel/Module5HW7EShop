import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/catalog">
            <img
              src="/images/nfk.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />{' '}
            Mobiles
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/catalog'>Catalog</Nav.Link>
              <Nav.Link href='/basket'>Basket</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="pt-4 pb-4">
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
