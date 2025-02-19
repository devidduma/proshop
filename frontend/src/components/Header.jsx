import {Container, Nav, Navbar} from "react-bootstrap";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="ProShop" width="40px" height="40px" style={{padding: "4px", margin: "0 2px 0 0"}} />
                        ProShop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
                            <Nav.Link href="/login"><FaUser /> Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header
