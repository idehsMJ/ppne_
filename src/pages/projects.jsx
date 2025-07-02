import React from 'react';


const Projects = () => {
    return (
        <div className="projects-container nav-space">
            <h1 className="projects-title" style={{color:"#c23b22"}}>Projects</h1>
            <p className="projects-description">Here are some of the projects we've been working on.</p>
            <div className="projects-content">
                <div className="project-section ongoing">
                    <h2>Ongoing Projects</h2>
                    <p>Explore our current ongoing projects.</p>
                    <a href="/projects/ongoing" className="project-button">View Ongoing Projects</a>
                </div>
                <div className="project-section completed">
                    <h2>Completed Projects</h2>
                    <p>Check out the projects we’ve successfully completed.</p>
                    <a href="/projects/completed" className="project-button">View Completed Projects</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
