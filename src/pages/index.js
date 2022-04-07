import * as React from "react"

import Layout from "../components/Layouts/layout"
import Seo from "../components/seo"
import Profile from "../components/Profile/Profile";
import AboutMe from "../components/AboutMe/AboutMe";

const IndexPage = () => (
    <Layout navColor="#000000" navActive="active">
        <Seo title="Home"/>
        <Profile/>
        <AboutMe/>
    </Layout>
)

export default IndexPage
