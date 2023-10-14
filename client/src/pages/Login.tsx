import {
  Container,
  Button,
  Row as BootstrapRow,
  Col,
  Form,
  Card
} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from 'components/logo';

const Login = () => {
  return (
    <LoginContainer fluid>
      <Row>
        <Col style={{ height: "100%", background: "#ffa000" }} />
        <Col style={{ padding: "60px" }}>
          <Card>
            <Card.Body className='text-center'>
              <Logo />
              <Card.Title as="h1">Hello!</Card.Title>
              <Card.Text>
                Please login
              </Card.Text>
              <Form className='text-left'>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button style={{ width: "100%" }}>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </LoginContainer>
  )
}

export default Login;


const LoginContainer = styled(Container)`
  height: 100%
`

const Row = styled(BootstrapRow)`
  height: 100%;
  align-items: center;
`