import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Router from "next/router";
// import { useDispatch } from "react-redux";
import Link from "next/link";

const Sidebar = () => {
  // const [show, setShow] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");
  // const dispatch = useDispatch();

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  const logOut = async () => {};

  useEffect(() => {
    setActiveTab(Router.pathname);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" className={styles.navbar} fixed="top">
      <Navbar.Brand href="/">Shop</Navbar.Brand>
      <Nav className="mr-auto" onSelect={handleSelect}>
        <Link href={"/todos"} passHref>
          <Nav.Link className={activeTab === "/todos" ? "active" : ""}>
            Todos
          </Nav.Link>
        </Link>
        <Link href={"/products"} passHref>
          <Nav.Link className={activeTab === "/products" ? "active" : ""}>
            Products
          </Nav.Link>
        </Link>
        <Link href={"/lessons"} passHref>
          <Nav.Link className={activeTab === "/lessons" ? "active" : ""}>
            Lessons Quiz app
          </Nav.Link>
        </Link>
        <Link href={"/quiz-game"} passHref>
          <Nav.Link
            className={activeTab === "/quiz-game" ? "active" : ""}
            disabled
          >
            Quiz game
          </Nav.Link>
        </Link>
        <Link href={"/shopping-cart"} passHref>
          <Nav.Link
            className={activeTab === "/quiz-game" ? "active" : ""}
            disabled
          >
            Shopping cart
          </Nav.Link>
        </Link>
      </Nav>
      <Form inline>
        {/*<Dropdown as={ButtonGroup}>*/}
        {/*  <Button variant="outline-info">*/}
        {/*    <i className="fas fa-user-alt fa-2x" />*/}
        {/*  </Button>*/}
        {/*  <Dropdown.Toggle split variant="outline-info" />*/}
        {/*  /!*<Dropdown.Menu className={styles.dropdown_navigator}>*!/*/}
        {/*  /!*  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>*!/*/}
        {/*  /!*  <Dropdown.Divider />*!/*/}
        {/*  /!*  <Dropdown.Item onClick={logOut}>*!/*/}
        {/*  /!*    <i className="fas fa-sign-out-alt" /> Log out*!/*/}
        {/*  /!*  </Dropdown.Item>*!/*/}
        {/*  /!*</Dropdown.Menu>*!/*/}
        {/*</Dropdown>*/}
        <Button variant="outline-info">
          <i className="fas fa-sign-in-alt" /> Sign In Google
          <i className={`fab fa-google ${styles.icon_google} ml-1`} />
        </Button>
      </Form>
    </Navbar>
  );
};

export default Sidebar;
