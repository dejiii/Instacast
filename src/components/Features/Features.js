import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import sideImage from '../../assets/sideimage.svg';
import Feather from '../../assets/Icon feather-user-check.svg';
import Option from '../../assets/Icon material-live-tv.svg';
import Infinite from '../../assets/Icon metro-infinite.svg';
import Iconic from '../../assets/Icon ionic-md-options.svg';
class Features extends Component {
    render() {
        return(
            <Container fluid className="whitebg spacing">
                <Col md={{span: 8, offset: 2}}>
                <center>
                    <Row className="pb-5">
                        <Col>
                            <h2 className="b6">Intacast Features</h2>
                            <span>
                                Here are some outstanding features on our service. However,<br/>
                                there are many interesting features not yet listed here
                            </span>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-space-between">
                        <Col className="br">
                            <div>
                                <h5>Live stream on Instagram <br/>from Desktop</h5>
                                <span>Broadcast from PC with any software what <br/>support RTMP like OBS Studio</span>
                            </div>
                            <div>
                                <h5>Live stream videos from<br/>Youtube</h5>
                                <span>Engage your followers on Instagram <br/>with videos from YouTube</span>
                            </div>
                            <div>
                                <h5>Analytics performance of <br/>your posts</h5>
                                <span>
                                    You can see the results of all your posts and the<br/>
                                    increase they provide. This allows for easy audience<br/>
                                    analysis and targeting
                                </span>
                            </div>
                        </Col>
                        <Col className="br-r">
                            <div>
                                <h5>Live stream videos on <br/>Instagram</h5>
                                <span>Upload and schedule any videos as <br/>live on your Instagram page</span>
                            </div>
                            <div>
                                <h5>Schedule your posts</h5>
                                <span>
                                    With a few clicks, you can select a timeframe of<br/>
                                    when and what you want to post on each of<br/>
                                    your IG accounts.
                                </span>
                            </div>
                            <div>
                                <h5>Direct <br/>Message</h5>
                                <span>
                                    Chat directly to your clients. This allows and <br/>
                                    helps you to easily manage your inbox on all<br/>
                                    Instagram accounts.
                                </span>
                            </div>
                        </Col>

                    </Row>
                </center>
                </Col>
                <Container fluid>
                    <Row>
                        <Col md={6}>
                            <img src={sideImage} alt="" className="style"/>
                        </Col>
                        <Col md={6}>
                            <h1>Amazing Live Stream<br/>Features</h1>
                            <p>
                                Now you have an amazing opportunity to engage at<br/>
                                maximum with your followers, increase conversion<br/>
                                and bring the new ones
                            </p>
                            <Row>
                                <Col md={4}>
                                    <img src={Feather} alt=""/>
                                    <p>User Friendly</p>
                                    <div>
                                        You can easy see your live,<br/>
                                        comments and interact with<br/>
                                        your viewers like you do from<br/>
                                        Instagram app
                                    </div>
                                </Col>
                                <Col md={4}>                                    
                                    <img src={Option} alt=""/>
                                    <p>Advance options</p>
                                    <div>
                                        Rotate videos for full screen<br/>
                                        experience, enable/disable<br/>
                                        comments, pin comments,<br/>
                                        auto stop live, save live to<br/>
                                        highlights and much more
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img src={Infinite} alt=""/>
                                    <p>Unlimited Posibility</p>
                                    <div>
                                        Now you can live stream on<br/>
                                        instagram from PC using OBS,<br/>
                                        which allow a lot of features<br/>  
                                        and possibilities
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <img src={Iconic} alt=""/>
                                    <p>Super Fast and Simple</p>          
                                    <div>
                                        With just a few clicks, you are<br/>
                                        going live                          
                                    </div>                          
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default Features;