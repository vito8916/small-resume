import React from 'react';
import {Container} from "react-bootstrap";
import "./Footer.scss"

function Footer() {
    return (
        <footer className={"footer"}>
            <Container>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </Container>
        </footer>
    );
}

export default Footer;