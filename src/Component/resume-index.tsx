import {ResumeImage} from "./wrapper-style.tsx";
export default function ResumeIndex(){
    return(
        <>
        <div>
            <h2>Welcome To My Resume Site</h2>
            <p>I'm an experienced full-stack web developer with expertise in creating responsive, accessible, and
                high-performance websites. Proficient in front-end technologies like Typescript, JavaScript,
                and Sass, as well as back-end languages such as PHP, Node.JS, and C#. Skilled at utilizing CMS
                platforms like WordPress and Kentico to deliver dynamic and user-friendly solutions.
                Committed to staying current in the rapidly evolving field of web development through
                continuous learning and adaptation.
            </p>
        </div>
    <div>
        <h2>Additional Info </h2>
        <p>Manchester, NH 03104</p>
        <p>718-407-9749</p>
        <p>darylyoung18@yahoo.com</p>
        <ResumeImage>
            <img alt="" src="./assets/IMG_4485.jpg"/>
        </ResumeImage>
    </div>
            </>
    )
}