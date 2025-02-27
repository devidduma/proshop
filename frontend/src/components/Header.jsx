import {Badge, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import logo from '../assets/logo.png'
import {useSelector} from "react-redux";

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const logoutHandler = () => {
        console.log("Logout");
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="ProShop" width="40px" height="40px" style={{padding: "4px", margin: "0 2px 0 0"}} />
                        ProShop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/cart">
                                <FaShoppingCart /> Cart
                                {
                                    cartItems.length > 0 && (
                                        <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                                            { cartItems.reduce((a, c) => a + c.qty, 0) }
                                        </Badge>
                                    )
                                }
                            </Nav.Link>
                            { userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link as={Link} to="/login"><FaUser /> Sign in</Nav.Link>
                            ) }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header
