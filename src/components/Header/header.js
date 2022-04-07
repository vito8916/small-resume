import * as React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import "./Header.scss"

import { graphql } from "gatsby"

const mainNavItems = [
    {url: '/skills/', label: 'Skills'},
    {url: '/projects', label: 'Projects'},
    {url: '/', label: 'Home'},
]

const Header = ({siteTitle, navColor}) => (
    <header className={"header"} style={{ backgroundColor: navColor || "transparent" }}>
        <div className="wallpaper"/>
        <div className="navigation">
            <div className="navigation-inner">
                <nav>
                    {mainNavItems.map((item) => (
                        <Link to={item.url} key={item.label} activeClassName="active">
                            <div className="tooltip">{item.label}</div>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
