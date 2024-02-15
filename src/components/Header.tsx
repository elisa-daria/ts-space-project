import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <Navbar expand="sm">
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-2 fw-bold text-primary">
          <i className="bi bi-rocket-takeoff me-3"></i>EpiSpace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={`fw-bold nav-link ${
                location.pathname === "/" ? "active" : " text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/detail/:city"
              className={`fw-bold nav-link ${
                location.pathname === "/detail/:city"
                  ? "active"
                  : "text-primary"
              }`}
            >
              Details
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
