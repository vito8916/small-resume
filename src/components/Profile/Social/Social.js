import React from 'react';
import "./Social.scss"
import IcTw from "../../../images/icons/twitter.svg"
import IcGhb from "../../../images/icons/github.svg"
import IcLkn from "../../../images/icons/linkedin.svg"

const socialMedia = [
    {
        icon: <IcTw/>,
        link: 'https://twitter.com/vicbox_'
    },
    {
        icon: <IcGhb/>,
        link: 'https://github.com/vito8916'
    },
    {
        icon: <IcLkn/>,
        link: 'https://linkedin.com/in/victor-alvaradohn'
    }
]

function Social(props) {
    return (
        <div className={"social"}>
            {
                socialMedia.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {social.icon}
                    </a>
                ))
            }
        </div>
    );
}

export default Social;