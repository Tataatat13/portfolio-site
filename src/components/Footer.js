import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/T.Natalia.svg";
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                    <img src={logo} alt="Logo"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                    <p>ⓒT.Natalia</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}