import{ProjectImage, ProjectDescription, ProjectInfo, ProjectTitleSection, RepoLink, TechUsed} from "./projects-style.tsx";
import Calculator from "./calculator";
const projects = [
    {
        title: "Oops All Travel",
        image: "assets/oops-all-travel-pic.JPG",
        alt: "Oops All Travel",
        description: [
            "Create a social network website exclusively catered to anyone interested in traveling.",
            "Blogs and vlogs were created by different users, assigned to a specified location in the world and shared for all to see.",
            "A guest could view travel blogs and vlogs from different places in the world, but can only like a blog or vlog if they are a registered user."
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MySQL"]
    },
    {
        title: "New Haven Bank Website",
        image: "assets/nhb-img.JPG",
        alt: "New Haven Bank",
        description: [
            "Created a new website for a credit union in New Haven, CT.",
            "The website was designed to market to individuals looking to open a new account and provide visitors with information on the services the bank offers."
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"]
    }
];

export default function Projects() {
    return (
        <>
            <ProjectTitleSection>
                <h2>Projects</h2>
            </ProjectTitleSection>

            {projects.map((project, index) => (
                <ProjectInfo key={index}>
                    <h3>{project.title}</h3>
                    <ProjectImage>
                        <img src={project.image} alt={project.alt} />
                    </ProjectImage>
                    <ProjectDescription>
                        <h3>Overview</h3>
                        {project.description.map((desc, i) => (
                            <p key={i}>{desc}</p>
                        ))}
                        <TechUsed>Technologies Used</TechUsed>
                        <ul>
                            {project.technologies.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </ProjectDescription>
                </ProjectInfo>
            ))}

            <RepoLink>
                <p>
                    Check out <a href="https://github.com/darylyoungdev18">my repo</a> to see more projects.
                </p>
            </RepoLink>

            <Calculator/>
        </>
    )
}