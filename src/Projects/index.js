import React from 'react';

import ProjectCard from './ProjectCard';
import filler from '../share/images/filler_bg.jpg';
import data from './projects.json';
import './Projects.scss';

const Projects = () => (
	<div className="my-3" style={{ background: '#f7f7f7' }}>
		<h1 className="text-center pt-5 pb-3">Projects & Experiences</h1>

		{data.projects.map(row => (
			<div className="row">
				<div className="col-1" />
				{row.row.map(project => (
					<div className="col">
						{project.name.length > 0 ? (
							<ProjectCard
								img={project.img}
								name={project.name}
								desc={project.desc}
								action={project.action}
								link={project.link}
							/>
						) : (
							<div />
						)}
					</div>
				))}
				<div className="col-1" />
			</div>
		))}
	</div>
);

export default Projects;
