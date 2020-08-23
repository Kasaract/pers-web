import React from 'react';

import filler from '../../share/images/filler_bg.jpg';

const ProjectCard = props => (
	<div className="text-center p-5">
		<img src={props.img} alt="filler" className="w-100 rounded" />
		<h3 className="my-2">{props.name}</h3>
		<p className="my-3" style={{ fontSize: '1.1rem', color: '#6b6b6b' }}>
			{props.desc}
		</p>
		{!!props.link ? (
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				<div
					className="btn btn-primary btn-md w-50"
					style={{ backgroundColor: '#475cb3', border: 'none' }}
				>
					{props.action}
				</div>
			</a>
		) : (
			<div
				className="btn btn-primary btn-md w-50"
				style={{
					backgroundColor: '#475cb3',
					border: 'none',
					color: '#9e9e9e'
				}}
			>
				{props.action}
			</div>
		)}
	</div>
);

export default ProjectCard;
