import{WorkTitleSection, WorkDescriptionSection, WorkRole, WorkLocation} from "./work-experience-style.tsx";

export default function WorkExperience() {
    return(
        <>
            <WorkTitleSection>
                <h2>Work Experience</h2>
                <WorkRole>Frontend Developer</WorkRole>
                <WorkLocation>
                    <p>Pannos Marketing, Manchester, USA</p>
                    <p>December 2021 - Current</p>
                </WorkLocation>
            </WorkTitleSection>
            <WorkDescriptionSection>
                <ul>
                    <li>Produce appropriate results for internet and web-based marketing initiatives by transforming
                        creative concepts into working websites and interfaces using Modern Technology.</li>
                    <li>Spearheaded the integration of dynamic content on WordPress CMS, enhancing user engagement by
                        20% for 3 different organizations.</li>
                    <li>Developed responsive websites and ADA-compliant components, improving accessibility scores by
                        28% for 17 different organizations.</li>
                    <li>Created cross-browser compatible HTML templates, reducing development time by 22%.</li>
                    <li>Streamlined codebase with optimized PHP and JavaScript, improving page load speeds by 37% for 5
                        websites.</li>
                    <li>Provided quality assurance on all deliverables and ensured consistency with clients' branding.</li>
                    <li>Collaborated effectively with cross-functional teams, including designers and project managers.</li>
                    <li>Coded using HTML, CSS, and JavaScript to develop features for both mobile and desktop platforms.</li>
                    <li>Designed and updated layouts to meet usability and performance requirements.</li>
                    <li>Conceived and built optimized landing pages in HTML and CSS for integration and cross-browser
                        compatibility.</li>
                    <li>Optimized web applications for speed, scalability, and security.</li>
                    <li>Boosted web traffic by improving navigation and rectifying bottlenecks.</li>
                </ul>
            </WorkDescriptionSection>
        </>

    );
}