import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppImg from "../../assets/appImg.svg";
import "./More.css";

class More extends Component {
    render() {
        return(
            <Container fluid className="whitebg negativepush">
                <Col md={{span: 8, offset: 2}}>
                    <Row>
                        <Col md={6}>
                            <img src={AppImg} alt="" className="appImg" />
                        </Col>
                        <Col md={6}>
                            Do you want to create professional<br/>
                            live streams? <br/><br/>
                            Do you want to connect better with<br/>
                            your audience?<br/><br/>
                            Do you want to get maximum results?<br/><br/>
                            <span className="try-now b7">Try one now!</span>
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default More;