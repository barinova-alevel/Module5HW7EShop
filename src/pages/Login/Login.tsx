import React from 'react'
import Login from '../../containers/Login'
import { types, useInjection } from '../../ioc'
import LoginStore from '../../stores/LoginStore'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import { Button, Container, Grid, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import ownTypes from '../../ioc/ownTypes'
import { User } from '../../models/User'

const LoginPage = observer(() => {
  const store = useInjection<LoginStore>(ownTypes.loginStore);

  return (
    <Container>
      {!!store.user
        ? <Account />
        : <Login />
      }
    </Container>
  )
})


const Account = () => {
  const store = useInjection<LoginStore>(ownTypes.loginStore);
  const navigate = useNavigate()
  const user = store.user!
  return (
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
        <h6>
          Logged as {user.firstName} {user.lastName} - <strong>{user.email}</strong>
        </h6>
        <Button variant="contained" onClick={() => navigate('/')}>
          Go Home page
        </Button>
        <Button variant="contained" onClick={() => store.logOut()}>
          Log out
        </Button>
      </Col>
    </Row>
  )
}

export default LoginPage
