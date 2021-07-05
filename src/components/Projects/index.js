import React, { useState } from 'react';
import Projects from '../../assets/projects.json';

function Projects() {
    const [projectList] = useState(Projects);
    
    return (
        <div className='projects'>
            <h2 id='projects'>My Projects</h2>
            <div className='project list'>
                {projectList.map((Projects) => {
                    <Projects projects={projects} key={Projects.id} />
                })}
            </div>
        </div>

    );
};

export default Projects;