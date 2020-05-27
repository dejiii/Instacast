import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";
import Fade from "react-reveal";


class LandingPage extends Component {
  render() {
    return (
        <Container fluid className="landing-page-container">
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
                        <center>
                            <div className="landing-page-wrapper">
                                <Fade bottom duration={100}>
                                    <div>
                                        <i className="mediumText">Introducing</i>
                                        <span className="mediumText b6"> Instacast</span> {" "}
                                        <sup className=" pb-3 ">&reg;</sup>
                                    </div>
                                </Fade>
                                <Fade bottom duration={700}>
                                    <span className="bigText bold b6">Enjoy Live Stream</span>
                                </Fade>
                                <Fade bottom duration={900}>
                                    <div className="smallText ig-videos">Instagram Videos from PC</div>
                                </Fade>
                                <Fade bottom duration={1200}>
                                    <span className="get-access b7">Get full access NOW for just 0.99EUR</span>                    
                                </Fade>
                            </div>
                        </center>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
  }
}

export default LandingPage;
