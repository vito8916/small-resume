import React from 'react';
import './SoftSkills.scss'
import {Col, Row} from "react-bootstrap";


function SoftSkills(props) {

    const {skills} = props


    return (
        <section className="soft-skills">
            <div className="box">
                <div className="box-header">
                    <div className="section-title">
                        <h1 className="soft-skills-title">Soft Skills</h1>
                        <p className="soft-skills-description" style={{width: '325px'}}>
                            A full stack allaround designer that tristique est placerat in massa consectetur quisque
                            lobortis vitae faucibus diam
                        </p>
                    </div>
                    <hr className={"my-3"}/>
                    <Row className={"mt-5"}>
                        {
                            skills.map((skill, index) => (

                                <Col xs={12} md={3} key={index}>
                                    <h5>
                                        {skill.title}
                                    </h5>
                                </Col>

                            ))
                        }
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default SoftSkills;