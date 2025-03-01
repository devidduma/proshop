import { Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className="justify-content-center mb-4">
            <Nav.Item>
                { step1 ? (
                    <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
                ) : (
                    <Nav.Link disabled>Sign in</Nav.Link>
                ) }
            </Nav.Item>
            <Nav.Item>
                { step2 ? (
                    <Nav.Link as={Link} to="/shipping">Shipping</Nav.Link>
                ) : (
                    <Nav.Link disabled>Shipping</Nav.Link>
                ) }
            </Nav.Item>
            <Nav.Item>
                { step3 ? (
                    <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
                ) : (
                    <Nav.Link disabled>Payment</Nav.Link>
                ) }
            </Nav.Item>
            <Nav.Item>
                { step4 ? (
                    <Nav.Link as={Link} to="/placeorder">Place order</Nav.Link>
                ) : (
                    <Nav.Link disabled>Place order</Nav.Link>
                ) }
            </Nav.Item>
        </Nav>
    )
}
export default CheckoutSteps
