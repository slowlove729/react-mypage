import './App.css';
import H_logo from './H_logo.svg'
import { Navbar, Jumbotron, Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={H_logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Hong's DEV Blog
          </Navbar.Brand>
        </Navbar>

        <Jumbotron fluid>
          <Container>
            <h1>Hong's DEV blog</h1>
            <p>
              리액트 개발 블로그
            </p>
          </Container>
        </Jumbotron>
    </div>
  );
}

export default App;
