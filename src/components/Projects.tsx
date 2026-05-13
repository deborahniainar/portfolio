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
		category: ['Website'],
		featured: true,
	},
	{
		id: 2,
		title: 'Gestion AO',
		description:
			"Plateforme intelligente de gestion des appels d'offres : analyse automatique de DAO (PDF), extraction NLP des données clés, génération de réponses structurées et gestion complète du cycle de vie (matériels, personnels, documents, soumissions).",
		image: 'https://images.pexels.com/photos/7793118/pexels-photo-7793118.jpeg',
		attribution: 'Yan Krukau on Pexels',
		photographerUrl: 'https://www.pexels.com/@yankrukov',
		link: undefined,
		source: 'https://github.com/deborahniainar/Gestion_AO',
		technologies: ['React', 'Vite', 'FastAPI', 'Python', 'MUI', 'JWT', 'SQLite', 'Electron'],
		category: ['Web App', 'Desktop App'],
		featured: false,
	},
	{
		id: 3,
		title: 'Inventaire de Stock',
		description:
			"Application web complète de gestion de stock avec 12 catégories d'articles, suivi des entrées/sorties, export Excel professionnel avec logo et mise en forme, et interface responsive moderne.",
		image: 'https://images.pexels.com/photos/4484149/pexels-photo-4484149.jpeg',
		attribution: 'Tiger Lily on Pexels',
		photographerUrl: 'https://www.pexels.com/@tiger-lily',
		link: undefined,
		source: 'https://github.com/deborahniainar/Inventaire-de-Stock',
		technologies: ['Vue 3', 'Vite', 'TailwindCSS', 'Node.js', 'Express'],
		category: ['Web App'],
		featured: false,
	},
	{
		id: 4,
		title: "Gestion d'Entretien",
		description:
			"Système complet de gestion d'entretien de véhicules avec authentification JWT, calendrier des entretiens, rappels automatiques par email/SMS, statistiques et interface Material-UI responsive.",
		image: 'https://images.pexels.com/photos/33814733/pexels-photo-33814733.jpeg',
		attribution: 'Renee Razumov on Pexels',
		photographerUrl: 'https://www.pexels.com/@renee-razumov-2155050841',
		link: undefined,
		source: 'https://github.com/deborahniainar/Gestion-d-Entretien',
		technologies: ['React', 'Node.js', 'MUI', 'SQLite', 'JWT', 'Nodemailer', 'Electron'],
		category: ['Web App', 'Desktop App'],
		featured: false,
	},
];

export default function Projects() {
	const [activeProject, setActiveProject] = useState<number | null>(null);
	const [filter, setFilter] = useState('Tous');
	const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

	const categories = ['Tous', 'Website', 'Web App', 'Desktop App'];

	const filteredProjects = filter === 'Tous'
		? projects
		: projects.filter((project) => project.category.includes(filter));

	return (
		<section
			className={`bg-gradient-to-br from-[#DDD9B0] to-[#D4D0A0] dark:bg-[#0F0F23] dark:bg-gradient-to-br dark:from-[#0F0F23] dark:via-[#1a1a3a] dark:to-[#0F0F23] relative section ${isVisible ? '[&_.project-card]:animate-slideInUp' : ''
				}`}
			id="projects"
			ref={elementRef}
		>
			<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(15,15,35,0.3)_70%,rgba(15,15,35,0.6)_100%)] pointer-events-none z-[0]"></div>
			<div className="container relative z-[1]">
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
										{project.link ? (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="px-6 py-3 rounded-[50px] font-semibold transition-all duration-300 cursor-pointer bg-white text-primary border-none hover:-translate-y-0.5"
											>
												Voir le projet
											</a>
										) : (
											<button
												disabled
												className="px-6 py-3 rounded-[50px] font-semibold transition-all duration-300 cursor-not-allowed bg-white/60 text-primary/60 border-none"
											>
												Voir le projet
											</button>
										)}
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
								<div className="flex flex-wrap gap-2 mb-4">
									{project.category.map((cat) => (
										<span key={cat} className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-[20px] text-xs font-semibold uppercase tracking-wider">
											{cat}
										</span>
									))}
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

				<div className="flex justify-center mt-16">
					<a
						href="https://github.com/deborahniainar"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 px-8 py-4 border-2 border-glass-border rounded-[50px] font-semibold text-base text-text-secondary transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-glow"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
						</svg>
						Voir mon profil GitHub
					</a>
				</div>
			</div>
		</section>
	);
}