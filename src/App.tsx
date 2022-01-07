import React, { useEffect } from 'react';
import "reflect-metadata";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Catalog from './containers/Catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './components/ProductDetails';
import Login from './pages/Login';
import LoginStore from './stores/LoginStore';
import ownTypes from './ioc/ownTypes';
import { types, useInjection } from './ioc';
import { observer } from 'mobx-react-lite';
import Basket from './components/Basket';


function App() {
  const store = useInjection<LoginStore>(ownTypes.loginStore);
  useEffect(() =>{
     const userId = localStorage.getItem("logged_userid");
     if (userId){
            store.setUser(userId)
     }
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="catalog" element={<Catalog />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="basket" element={<Basket />} />
          <Route path="login" element={<Login />} />
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
          <Link to="/catalog">
            <img
              src="/images/nfk.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />{' '}
            Mobiles
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/catalog'>Catalog</Link>
            </Nav>
            <Nav className="justify-content-end">
              <Link to='/basket'>Basket</Link>
              <LoginNav />
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

const LoginNav = observer(() => {
  const store = useInjection<LoginStore>(types.loginStore)
  return(
    <Link to="/login">{store.user ? store.user.firstName : "Login"}</Link>
  )
})

export default App;
