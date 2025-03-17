
import { SkillTitleSection, SkillsCategory, SkillsList, SkillItem} from "./technical-skills-style.tsx";

const skillCategories = [
    { title: "Frontend", skills: ["HTML5", "JavaScript", "CSS3", "Sass"] },
    { title: "Backend", skills: ["Node.js", "PHP", "C#", "Ruby on Rails", ".NET", "Visual Basic"] },
    { title: "Content Management Systems", skills: ["WordPress", "Kentico", "Shopify"] },
    { title: "Database Management", skills: ["MySQL", "MongoDB", "SQL", "Oracle"] },
    { title: "Version Control", skills: ["Git", "GitHub", "Bitbucket"] },
    { title: "Other", skills: ["Agile", "Scrum", "RESTful APIs", "CI/CD", "Responsive Design", "Accessibility", "Performance Optimization"] }
];

export default function TechnicalSkills() {
    return(
        <>
            <SkillTitleSection>
                <h2>Technical Skills</h2>
            </SkillTitleSection>

            <div>
                {skillCategories.map((category, index) => (
                    <SkillsCategory key={index}>
                        <h3>{category.title}</h3>
                        <SkillsList>
                            {category.skills.map((skill, i) => (
                                <SkillItem key={i}>{skill}</SkillItem>
                            ))}
                        </SkillsList>
                    </SkillsCategory>
                ))}
            </div>
        </>
    )
}