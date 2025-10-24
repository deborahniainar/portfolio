'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import bgWebsite from '../Image/bg-website.png';

const projects = [
	{
		id: 1,
		title: 'Site Vitrine - STC',
		description:
			'Site vitrine pour une entreprise de terrassement et de construction - Comores',
		image: bgWebsite.src,
		attribution: 'https://stc-ten.vercel.app/',
		photographerUrl: 'https://stc-ten.vercel.app/',
		link: 'https://stc-ten.vercel.app/',
		source: 'https://github.com/deborahniainar/STC-Project',
		technologies: ['React', 'TailwindCSS', 'NodeJS'],
		category: 'Website',
		featured: true,
	},
	// {
	// 	id: 2,
	// 	title: 'Mobile Banking App',
	// 	description:
	// 		'Application de Rapprochement Bancaire mobile et desktop avec authentification biométrique et gestion des finances personnelles.',
	// 	image:
	// 		'https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBVSSUyMGRlc2lnbnxlbnwwfDF8fHwxNzU4MTgyNzIxfDA&ixlib=rb-4.1.0&q=85',
	// 	attribution: 'Maccy on Unsplash',
	// 	photographerUrl: 'https://unsplash.com/@jizhidexiaohailang',
	// 	link: undefined,
	// 	source: 'https://github.com/deborahniainar/Gestion_AO',
	// 	technologies: ['React Native', 'Node.js', 'JWT'],
	// 	category: 'Mobile App',
	// },
	// {
	// 	id: 3,
	// 	title: 'Mobile Banking App',
	// 	description:
	// 		'Application de Rapprochement Bancaire mobile et desktop avec authentification biométrique et gestion des finances personnelles.',
	// 	image:
	// 		'https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBVSSUyMGRlc2lnbnxlbnwwfDF8fHwxNzU4MTgyNzIxfDA&ixlib=rb-4.1.0&q=85',
	// 	attribution: 'Maccy on Unsplash',
	// 	photographerUrl: 'https://unsplash.com/@jizhidexiaohailang',
	// 	technologies: ['React', 'Node.js', 'Electron', 'JWT'],
	// 	category: 'Desktop App',
	// 	source: 'https://github.com/yourusername/desktop-banking-app',
	// },
	// {
	// 	id: 4,
	// 	title: 'Analytics Dashboard',
	// 	description:
	// 		'Dashboard analytique en temps réel avec visualisations interactives et rapports personnalisés.',
	// 	image:
	// 		'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBjaGFydHMlMjBncmFwaHMlMjBpbnRlcmZhY2V8ZW58MHwwfHx8MTc1ODE4MjcyMnww&ixlib=rb-4.1.0&q=85',
	// 	attribution: 'Luke Chesser on Unsplash',
	// 	photographerUrl: 'https://unsplash.com/@lukechesser',
	// 	technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
	// 	category: 'Dashboard',
	// 	source: 'https://github.com/yourusername/analytics-dashboard',
	// },
];

export default function Projects() {
	const [activeProject, setActiveProject] = useState<number | null>(null);
	const [filter, setFilter] = useState('All');
	const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

	const categories = ['All', 'Website', 'Web App', 'Desktop App', 'Mobile App'];

	const filteredProjects = filter === 'All'
		? projects
		: projects.filter((project) => project.category === filter);

	return (
		<section
			className={`bg-background relative section ${isVisible ? '[&_.project-card]:animate-slideInUp' : ''
				}`}
			id="projects"
			ref={elementRef}
		>
			<div className="container">
				<div className={`text-center mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					} transition-all duration-800`}>
					<h2 className="heading-lg mb-4 fade-in">
						Mes <span className="gradient-text">Projets</span>
					</h2>
					<p className="body-lg text-text-secondary mb-12 max-w-[600px] mx-auto fade-in">
						Découvrez une sélection de mes réalisations les plus récentes
					</p>

					<div className="flex justify-center gap-4 flex-wrap fade-in">
						{categories.map((category) => (
							<button
								key={category}
								className={`px-6 py-3 border-2 rounded-[50px] bg-transparent font-medium transition-all duration-300 cursor-pointer ${
									filter === category
										? 'border-primary text-primary bg-primary/10 shadow-glow'
										: 'border-glass-border text-text-secondary hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-glow'
								}`}
								onClick={() => setFilter(category)}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-12">
					{filteredProjects.map((project, index) => (
						<div
							key={project.id}
							className={`project-card glass rounded-[20px] overflow-hidden transition-all duration-400 cursor-pointer relative ${
								project.featured ? 'md:col-span-2' : ''
							} hover:-translate-y-2.5 hover:[transform:translateY(-10px)_rotateX(5deg)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]`}
							style={{ animationDelay: `${index * 0.2}s` }}
							onMouseEnter={() => setActiveProject(project.id)}
							onMouseLeave={() => setActiveProject(null)}
						>
							<div className="relative h-[250px] overflow-hidden">
								<img
									src={project.image}
									alt={`${project.title} - ${project.attribution}`}
									width={400}
									height={250}
									className={`w-full h-full object-cover transition-transform duration-400 ${
										activeProject === project.id ? 'scale-110' : ''
									}`}
								/>
								<div className={`absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center transition-opacity duration-300 ${
									activeProject === project.id ? 'opacity-100' : 'opacity-0'
								}`}>
									<div className="flex gap-4">
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="px-6 py-3 rounded-[50px] font-semibold transition-all duration-300 cursor-pointer bg-white text-primary border-none hover:-translate-y-0.5"
										>
											Voir le projet
										</a>
										{project.source ? (
											<a
												href={project.source}
												target="_blank"
												rel="noopener noreferrer"
												className="px-6 py-3 rounded-[50px] font-semibold transition-all duration-300 cursor-pointer bg-transparent text-white border-2 border-white hover:-translate-y-0.5"
											>
												Code source
											</a>
										) : (
											<button
												disabled
												className="px-6 py-3 rounded-[50px] font-semibold transition-all duration-300 cursor-not-allowed bg-transparent text-white/60 border-2 border-white/30"
											>
												Code source
											</button>
										)}
									</div>
								</div>
								{activeProject === project.id && (
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
										{[...Array(8)].map((_, i) => (
											<div
												key={i}
												className="absolute w-1.5 h-1.5 rounded-full animate-trailExplosion"
												style={{
													animationDelay: `${i * 0.1}s`,
													backgroundColor:
														i % 2 === 0
															? 'var(--primary)'
															: 'var(--secondary)',
													transform:
														i === 0
															? 'translate(0, -30px)'
															: i === 1
																? 'translate(21px, -21px)'
																: i === 2
																	? 'translate(30px, 0)'
																	: i === 3
																		? 'translate(21px, 21px)'
																		: i === 4
																			? 'translate(0, 30px)'
																			: i === 5
																				? 'translate(-21px, 21px)'
																				: i === 6
																					? 'translate(-30px, 0)'
																					: 'translate(-21px, -21px)',
												}}
											/>
										))}
									</div>
								)}
							</div>

							<div className="p-8">
								<div className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-[20px] text-xs font-semibold uppercase tracking-wider mb-4">
									{project.category}
								</div>
								<h3 className="heading-sm mb-4 text-text-primary">
									{project.title}
								</h3>
								<p className="body-md text-text-secondary mb-6 leading-relaxed">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-4 py-2 bg-glass-bg border border-glass-border rounded-[20px] text-sm text-text-secondary transition-all duration-300 hover:text-primary hover:border-primary hover:shadow-[0_0_10px_rgba(99,102,241,0.3)]"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}