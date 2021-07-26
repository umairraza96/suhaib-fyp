import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { signOutSuccess } from "redux/user/user.actions";

import "./navbar.scss";
export default function NavigationBar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const [showHover, setShowHover] = React.useState(false);

  const user = useSelector((state) => state.user.currentUser);
  const signOut = () => {
    dispatch(signOutSuccess());
    setShowHover(false);
    history.push("/landing-page");
  };

  return (
    <>
      <Navbar
        className={"fixed-top " + color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/landing-page" id="navbar-brand" tag={Link}>
              <span>CMS• </span>
              Club Management System
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Designed and Coded by Suhaib Mushtaq
            </UncontrolledTooltip>
            <button
              aria-expanded={collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + collapseOut}
            navbar
            isOpen={collapseOpen}
            onExiting={onCollapseExiting}
            onExited={onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    CMS
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    onClick={toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
              {user && (
                <NavItem onClick={() => setShowHover(!showHover)}>
                  <Button
                    className="nav-link d-none d-lg-block"
                    color="primary"
                    // target="_blank"
                    // href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-examples-navbar-upgrade-pro"
                  >
                    <i className="tim-icons icon-spaceship" /> {user.userName}
                  </Button>
                </NavItem>
              )}
              {!user && (
                <NavItem>
                  <NavLink tag={Link} to="/register-page">
                    Sign In/ Sign Up
                  </NavLink>
                </NavItem>
              )}
              {/* <NavItem>
              <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                Have an issue?
              </NavLink>
            </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {showHover && (
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowHover(true)}
        >
          <div className="sign-out-hover">
            <Button type="primary" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
