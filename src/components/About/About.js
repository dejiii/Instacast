import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
    render() {
        return(
            <Container fluid className="spacingabout bgcolor white">
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
                            <center>
                                <h2 className="b6">About Instacast</h2>
                                <span>
                                Instacast helps you manage your Instagram page automatically and efficiently.<br/>
                                Schedule and post planning, live streaming, statistics, direct messages and<br/>
                                much more. All of this will quickly help you grow your brand, attract potential<br/>
                                customers and get results.
                                </span>
                            </center> 
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default About;