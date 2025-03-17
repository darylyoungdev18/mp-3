import {EducationTitle, DegreeInfo,Degree, School, GradDate} from './education-style.tsx';

export default function Education(){
    return(
        <>
            <div>
                <EducationTitle>
                    <h2>Education</h2>
                </EducationTitle>
                <div className="education-section">
                    <DegreeInfo>
                        <Degree>Master of Science in Computer Informations Systems: Web Development </Degree>
                        <School>Boston University</School>
                        <GradDate>May 2027 (Projected)</GradDate>
                    </DegreeInfo>
                    <DegreeInfo>
                        <Degree>Bachelor of Science in Technology Management</Degree>
                        <School>University of New Hampshire</School>
                        <GradDate>May 2022</GradDate>
                    </DegreeInfo>
                    <DegreeInfo>
                        <Degree>Associate of Applied Science in Electronics System Technology</Degree>
                        <School>Communtity College of the Airforce</School>
                        <GradDate>April 2018</GradDate>
                    </DegreeInfo>
                </div>

            </div>

        </>

    );
}