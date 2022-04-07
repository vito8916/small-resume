import React from "react"
import { Container, Card, Button, Row, Col } from "react-bootstrap"
import "./AboutMe.scss"
import { StaticImage } from "gatsby-plugin-image"
import Cv from "../../static/cv-victor-alvarado_En.pdf"

function AboutMe() {
  return (
    <section className={"about"}>
      <Container className={"box"}>
        <Row>
          <Col>
            <StaticImage
              src="../../images/bnner.jpeg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="fluid h-100"
              style={{ marginBottom: `1.45rem`, borderRadius: `16px` }}
            />
          </Col>
          <Col>
            <div className="section_title">
              <h5 className="sub_title">About</h5>
              <h3 className="main_title">Why You Hire Me?</h3>
            </div>
            <hr className={"my-3"} />
            <p>
              I'm a software engineer based in Honduras with more than 5 years
              of work experience as a software developer using different
              languages and technologies, developing web and mobile applications
              for national and international companies. I am also an UI
              enthusiast which led me to take a nano degree in Graphic Design to
              understand the fundamentals and design basics. Currently I am
              dedicated to the design and development of web platforms using
              different technologies such as Yii2 framework, Laravel, MySql,
              ReactJs, NodeJs, GatsbyJs, Git, GitHub, and more...
            </p>
            <a className={"btn btn-outline-success"} download href={Cv}>
              Download CV
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutMe
