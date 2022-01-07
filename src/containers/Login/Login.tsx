import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { useInjection } from '../../ioc/ioc.react';
import ownTypes from '../../ioc/ownTypes';
import LoginStore from '../../stores/LoginStore';
import { useTranslation } from 'react-i18next';

const Login = observer(() => {
  const store = useInjection<LoginStore>(ownTypes.loginStore);
  const { t } = useTranslation(['login']);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={4} md={6} xs>
          <Form onSubmit={(ev) => {
            ev.preventDefault();
            store.login(email,password);
          }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder={t('placeholder.email')}
                value={email}
                onChange={(ev) => { setEmail(ev.target.value) }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder={t('placeholder.password')}
                value={password}
                onChange={(ev) => { setPassword(ev.target.value) }}
              />
            </Form.Group>
            {!!store.error && (
              <p style={{ color: 'red', fontSize: 14 }}>{store.error}</p>
            )}
            <Button variant="primary" type="submit">
              {store.isLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                `${t('submit')}`
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
});

export default Login
