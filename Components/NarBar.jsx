import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/esm/Button';

function NavBar() {
    return (
        <div>


            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Herams Pawn Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/" >Login</Nav.Link>
                            <Nav.Link href="/Products" >Home</Nav.Link>
                            <Nav.Link href="/PickUpLeftOff">Pick up Where you Left off</Nav.Link>
                            <Nav.Link href="/Explore">Explore</Nav.Link>
                            <Nav.Link href="/JustForYou">Just For You</Nav.Link>
                            <Nav.Link href="/TopDeals">Top Deals</Nav.Link>
                            <Nav.Link href="/MainProducts">Main Products</Nav.Link>
                            <Nav.Link href="Cart">Cart</Nav.Link>
                            <Nav.Link href="ApiProducts">API Products</Nav.Link>
                            {/* <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Shopping Cart</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {productsCount > 0 ? (
                                        <>
                                            <p>Items in your cart: </p>
                                            {cart.items.map((currentProduct, idx) => (
                                                <CartProduct
                                                    key={idx}
                                                    title={currentProduct.title}
                                                    price={currentProduct.price}
                                                    id={currentProduct.id}
                                                    quantity={currentProduct.quantity}
                                                ></CartProduct>
                                            ))}

                                            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

                                            <Button variant="success">Purchase items!</Button>
                                        </>
                                    ) : (
                                        <h1>There are no items in your cart!</h1>
                                    )}
                                </Modal.Body>
                            </Modal> */}
                            {/* <Button className="Grid2Container" onClick={handleShow}>
                                Cart ({productsCount}) items
                            </Button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;