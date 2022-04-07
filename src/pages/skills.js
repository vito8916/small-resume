import React from 'react';
import Layout from "../components/Layouts/layout";

import ListSkills from "../components/ListSkills/ListSkills"
import SoftSkills from "../components/SoftSkills/SoftSkills";
import { skills } from "../utils/skills"
import { softSkills } from "../utils/softSkills"

import "./skills.scss"

function Skills() {
    return (
        <Layout navColor="#e16c6c">
            <ListSkills skills={skills} />
            <SoftSkills skills={softSkills} />
        </Layout>
    );
}

export default Skills;