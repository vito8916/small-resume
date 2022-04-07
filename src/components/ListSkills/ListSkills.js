import React from "react"
import "./ListSkills.scss"
import {Col, Row} from "react-bootstrap";

export default function ListSkills(props) {
    const {skills} = props

    return (
        <section className="list-skills">
            <div className="box">
                <div className="info">
                    <div className="section_title">
                        <h1 className="skills-main-title">Professional Skills</h1>
                        <p className={'profile-description'} style={{width: '325px'}}>
                            A full stack allaround designer that tristique est placerat in massa consectetur quisque
                            lobortis vitae faucibus diam
                        </p>
                    </div>
                    <hr className={"my-3"}/>
                    <Row className={"mt-5"}>
                        {
                            skills.map((skill, index) => (
                                <Col xs={12} md={4}  key={index}>
                                    <div className="service" >
                                        <div className="service-icon">

                                        </div>
                                        <h3 className="service-title">{skill.language}</h3>
                                        <p className="service-sub-title">{skill.technologies}</p>
                                        <div className="service-cont" key={'service-cont' + index}>
                                            <hr style={
                                                {
                                                    width: '100%',
                                                    height: '4px',
                                                    maxWidth: '130px',
                                                    display: 'inline-block',
                                                    backgroundColor: skill.bgColor,
                                                    opacity: '.55'
                                                }
                                            }/>
                                            <p>
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
        </section>
    )
}