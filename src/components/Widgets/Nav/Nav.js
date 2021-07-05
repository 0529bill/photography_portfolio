import { Container, Row } from "react-bootstrap";
import "./index.css";

function Nav({ opacityNum }) {
  return (
    <Container className="nav" fluid>
      <Row
        className="nav_row ml-auto"
        style={{ opacity: `${opacityNum}`, transition: "opacity  ease-in" }}
      >
        <span>Main page</span>
        <span>Portrait</span>
        <span>Street</span>
        <span>Contact</span>
      </Row>
    </Container>
  );
}

export default Nav;
