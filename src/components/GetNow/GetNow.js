import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import HeroImg from '../../assets/heroimg.svg';
class GetNow extends Component {
    render() {
        return(
            <Container fluid className="greybg">
                <Container>
                    <Col md={{span: 10, offset: 1}}>
                        <Row>
                            <Col md={4}>
                                <h3>Join us and try all <br/>the features</h3>
                                <p>Just a few clicks and you’ll already be <br/>streaming live</p>
                                <span className=" b7">Try one now!</span>
                                <form action="">
                                    <input type="email" name="" id=""/><br/>
                                    <button type="submit">Get Now</button>
                                </form>
                            </Col>
                            <Col md={8}>
                                <img src={HeroImg} alt="" className="style" />
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </Container>
        )
    }
}

export default GetNow;