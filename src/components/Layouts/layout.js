/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "../Header/header"
import { Container } from "react-bootstrap"
import Footer from "../Footer/Footer"
import "./layout.css"

const Layout = ({children, navColor}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <Header navColor={navColor} siteTitle={data.site.siteMetadata?.title || `Title`}/>
            <main className="main">
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
