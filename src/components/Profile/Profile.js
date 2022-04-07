import React from 'react';
import {Row, Col, Button} from "react-bootstrap"
import "./Profile.scss"
import {StaticImage} from "gatsby-plugin-image";

import SocialIcons from "./Social/Social"
import Technologies from "./Technologies/Technologies";

const data = [
    {
        title: "Age:",
        info: "32 years old",
    },
    {
        title: "Address:",
        info: "Tegucigalpa, Honduras.",
    },
    {
        title: "E-Mail:",
        info: "example@gmail.com",
    }
]

function Profile() {
    return (
        <section className="profile">
            <div className="box">
                <div className="info">
                    <Row>
                        <Col xs={12} md={4}>
                            <StaticImage
                                src="../../images/vic-art-yellow 2.png"
                                width={300}
                                quality={95}
                                formats={["auto", "webp", "png"]}
                                alt="Victor Alvarado profile photo"
                                className="fluid"
                                style={{marginBottom: `1.45rem`, height: `100%`}}
                            />
                        </Col>
                        <Col xs={12} md={8} className="info__data">
                            <h5 className={'profile-greeting'}>Hello</h5>
                            <h1 className="profile-title">
                                <span>I'm </span>
                                Victor Alvarado
                            </h1>
                            <p className={'profile-position'}>Software Engineer & Fullstack Developer</p>
                            <p className={'profile-description'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam.
                            </p>
                            <Technologies/>
                            <hr className={"mt-4"}/>
                            <Button variant="dark" size="lg">Contact Me</Button>{' '}

                        </Col>
                    </Row>
                </div>

                <SocialIcons/>
            </div>
        </section>
    );
}

export default Profile;