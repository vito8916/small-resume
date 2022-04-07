import React from 'react';

import "./Technologies.scss"

const techs = [
    {
        name: "JavaScript",
        icon: "",
        label: "javascript",
    },
    {
        name: "Html 5",
        icon: "",
        label: "html",
    },
    {
        name: "React Js",
        icon: "",
        label: "react",
    },
    {
        name: "Android",
        icon: "",
        label: "android",
    },
    {
        name: "CSS 3",
        icon: "",
        label: "css",
    }
]

function Technologies(props) {
    return (
        <div>
            {
                techs.map((tech, index) => (
                        <span key={index} className={tech.label + " tech me-2"}>
                            {tech.name}
                        </span>
                    )
                )}
        </div>
    );
}

export default Technologies;