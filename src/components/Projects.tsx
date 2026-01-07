import "../App.css";

const projectsData = [
	{
		id: 1,
		name: "Floppy Fish",
		tech: "Java",
		description:
			"Floppy Fish is a twist of Floppy Bird built in Java. Instead of gravity pulling the bird down, the buoyancy of the water pushes the fish up.",
		image: "https://via.placeholder.com/300x200?text=Floppy+Fish",
		link: "https://github.com/yourusername/floppy-fish",
	},
	{
		id: 2,
		name: "Circles",
		tech: "Swift, Firebase",
		description:
			"Circles is a photo sharing app with daily prompts to encourage small groups of families and friends to stay in touch.",
		image: "https://via.placeholder.com/300x200?text=Circles",
		link: "https://github.com/yourusername/circles",
	},
	{
		id: 3,
		name: "Github Issues",
		tech: "Swift, Github REST API",
		description:
			"Github Issues is an iOS mobile application to streamline open/closed Github Issues posted in popular open-source repos for simple access.",
		image: "https://via.placeholder.com/300x200?text=Github+Issues",
		link: "https://github.com/yourusername/github-issues",
	},
	{
		id: 4,
		name: "Chibi Lufty",
		tech: "Swift, Github REST API",
		description:
			"Chibi Lufty is an Instagram bot that reposts anime memes scraped from Reddit.",
		image: "https://via.placeholder.com/300x200?text=Chibi+Lufty",
		link: "https://github.com/yourusername/chibi-lufty",
	},
	{
		id: 5,
		name: "Functional Adventure",
		tech: "Haskell",
		description:
			"Functional Adventure is a text-based adventure game with the goal of traversing the map to find a specific item.",
		image: "https://via.placeholder.com/300x200?text=Functional+Adventure",
		link: "https://github.com/yourusername/functional-adventure",
	},
];

function Projects() {
	return (
		<section className="Projects-section">
			<h2 className="Projects-title">Projects</h2>
			<div className="Projects-grid">
				{projectsData.map((project) => (
					<a
						key={project.id}
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="Project-card"
					>
						<img
							src={project.image}
							alt={project.name}
							className="Project-image"
						/>
						<h3 className="Project-name">{project.name}</h3>
						<p className="Project-tech">{project.tech}</p>
						<p className="Project-description">{project.description}</p>
					</a>
				))}
			</div>
		</section>
	);
}

export default Projects;