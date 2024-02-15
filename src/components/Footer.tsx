import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <Nav className="flex-column align-items-center justify-content-center p-4 ">
      <Nav.Item>
        <p className=" fw-light text-primary m-0">
          <i className="bi bi-c-circle text-primary"></i> Lee D{" "}
          {new Date().getFullYear()}
        </p>
      </Nav.Item>
    </Nav>
  );
};
export default Footer;
