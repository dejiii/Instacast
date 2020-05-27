import React, { Component } from "react";
import "./HeroImg.css";
import { Container, Col } from "react-bootstrap"
import HeroImage from "../../assets/heroimg.svg";
import Fade from "react-reveal";


class HeroImg extends Component {
    render() {
        return (
            <Container fluid className="i-homepage-pattern">
                <Container>
                    <Col md={{span: 8, offset: 2}}>
                        <Fade bottom duration={1500}>
                            <img src={HeroImage} alt="" className="style spacing"/>
                        </Fade>
                    </Col>
                </Container>
            </Container>
        )
    }
}

export default HeroImg;