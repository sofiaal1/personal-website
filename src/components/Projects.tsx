import { Link } from 'react-router-dom';
import "../App.css";
import c2payImage from "../images/c2payImage.png";
import cinelogImage from "../images/cinelogImage.png";
import filmSocietyImage from "../images/filmSocietyImage.png";
import cs40Image from "../images/cs40Image.png";
import villageFoodHubImage from "../images/villageFoodHubImage.png";
import jumbuddyImage from "../images/jumbuddyImage.png";

const projectsData = [
    {
        id: 1,
        name: "C2Pay",
        tech: "React Native, Expo, Git",
        description:
            "A mobile payment security SDK that verifies transactions are legitimate by checking device signals and user behavior, only adding extra authentication steps when something seems risky.",
        image: c2payImage,
        githubLink: "https://github.com/sofiaal1/C2Pay",
        devpostLink: "https://devpost.com/software/c2pay?_gl=1*1isr26i*_gcl_au*MTkzMzUwNDAxNy4xNzY3NTM5NDcw*_ga*MTc1NTI0MTIyOS4xNzY3NTM5NDcw*_ga_0YHJK3Y10M*czE3Njc5MTE2ODckbzIkZzEkdDE3Njc5MTIyNjUkajYwJGwwJGgw",
        award: "Winner of Best Financial Hack @ HackHarvard '25",
    },
    {
        id: 2,
        name: "Cinelog",
        tech: "HTML, CSS, JavaScript, Node.js, NoSQL, MongoDB",
        description:
            "A web app that lets users log movies they've watched, rate them, write short reflections, and build a personal movie history.",
        image: cinelogImage,
        presentationLink: "https://docs.google.com/presentation/d/1hSpGcmLWPzAGR50J4AVykjKA3A9zkaUoEHAZJe0X9mc/edit?usp=sharing",
        githubLink: "https://github.com/kubsgok/cinelog",
        award: "Web Programming Final Project",
    },
    {
        id: 3,
        name: "C & Assembly Projects",
        tech: "C, Assembly",
        description:
            "I did pair programming on 8 different long-term projects for my Machine Structure & Assembly Language Class.",
        image: cs40Image,
        learnMoreLink: "/projects/c-assembly",
        award: "Fall 2025",
    },
    {
        id: 4,
        name: "Film Society Database Management System",
        tech: "React, Supabase (PostgreSQL), Figma, Git, Vercel",
        description:
            "A web app that serves as a portal and database management system for school chapters of film honor societies.",
        image: filmSocietyImage,
        githubLink: "https://github.com/kubsgok/Honor-Society-Of-Cinematic-Arts",
        databaseLink: "https://www.figma.com/design/2YJyjg48ZRYbaQifVLEAcE/Entity-Relationship-Diagram-Template--Community-?node-id=0-1&p=f&t=p3xl0pMHHvvsAQQt-0",
        award: "Fall 2025",
    },
    {
        id: 5,
        name: "JumboCode: Village Food Hub",
        tech: "Typescript, React, Neon (PostgreSQL), Prisma, Next.js",
        description:
            "I worked with a team of developers to create a web app that that keeps track of the org's pantry inventory and collects demographics of the food pantry customers.",
        image: villageFoodHubImage,
        githubLink: "https://github.com/JumboCode/village-food-hub",
        presentationLink: "https://jumbocode.org/projects/village-food-hub",
        award: "Sep 2024 - May 2025",
    },
    {
        id: 6,
        name: "JumBuddy",
        tech: "React Native, Expo, Figma, Airtable",
        description:
            "A mobile app that allows Tufts students to meet other students based on shared interests and classes, and post and join events at Tufts.",
        image: jumbuddyImage,
        githubLink: "https://github.com/rakshitranga/jumbuddy",
        devpostLink: "https://devpost.com/software/jumbuddy?_gl=1*efz72v*_gcl_au*MTkzMzUwNDAxNy4xNzY3NTM5NDcw*_ga*MTc1NTI0MTIyOS4xNzY3NTM5NDcw*_ga_0YHJK3Y10M*czE3Njc5MjUxOTckbzMkZzEkdDE3Njc5MjUyMTUkajQyJGwwJGgw",
        award: "Built @ Tufts JumboHack '25",
    },
];

function Projects() {
    return (
        <section id="projects" className="Projects-section">
            <h2 className="Projects-title">Projects</h2>
            <div className="Projects-grid">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="Project-card"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="Project-image"
                        />
                        <h3 className="Project-name">{project.name}</h3>

                        <div className="Project-meta">
                            <p className="Project-tech">{project.tech}</p>
                            {project.award && <p className="Project-award">{project.award}</p>}
                        </div>

                        <p className="Project-description">{project.description}</p>

                        {(project.githubLink || project.devpostLink || project.presentationLink || project.databaseLink || project.learnMoreLink) && (
                            <div className="Project-links">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Project-link"
                                    >
                                        Github
                                    </a>
                                )}
                                {project.devpostLink && (
                                    <a
                                        href={project.devpostLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Project-link"
                                    >
                                        Devpost
                                    </a>
                                )}
                                {project.presentationLink && (
                                    <a
                                        href={project.presentationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Project-link"
                                    >
                                        Presentation
                                    </a>
                                )}
                                {project.databaseLink && (
                                    <a
                                        href={project.databaseLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Project-link"
                                    >
                                        Database
                                    </a>
                                )}
                                {project.learnMoreLink && (
                                    <Link
                                        to={project.learnMoreLink}
                                        className="Project-link Project-learn-more"
                                    >
                                        Learn more →
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;