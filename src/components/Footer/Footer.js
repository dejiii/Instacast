import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
class Footer extends Component {
    render() {
        return(
            <Container>
                <center>
                    <h3>Instacast</h3>
                    <div>
                        <span>Home</span>
                        <span>About</span>
                        <span>Pricing</span>
                        <span>Testimonial</span>
                        <span>FAQ</span>
                    </div>
                    <div>Copyright © 2020 Instacast - Modern Platform for Live Streaming & Promotion on Instagram.</div>
                </center>
            </Container>
        )
    }
}

export default Footer;