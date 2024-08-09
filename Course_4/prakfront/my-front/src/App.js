import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link, Outlet} from "react-router-dom";
import {
    Navbar,
    Container,
    Nav
} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Главная</Link>
                        <Link to="/profile" className="nav-link">Профиль</Link>
                        {/*<Link to="/apartment/" className="nav-link">Квартира</Link>*/}
                    </Nav>
                    <Nav className="justify-content-end">
                        <Link to="/registration" className="nav-link">Регистрация</Link>
                        <Link to="/login" className="nav-link">Войти</Link>
                        <Link to="/logout/1" className="nav-link">Выход</Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container>
                <Outlet/>
            </Container>
        </div>
    )
        ;
}

export default App;
