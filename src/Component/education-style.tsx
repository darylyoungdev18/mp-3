import { styled } from "styled-components";

const EducationTitle = styled.div`
h2{
    font-size: calc(5px + 2vw);
    @media screen and (max-width: 900px){
        font-size: calc(5px + 7vw);
    }
}
`
const DegreeInfo = styled.div`
    border: 5px solid white;
    margin: auto auto 5% auto;
`;
const Degree = styled.p`
    border-bottom:2px solid white;
    margin:0;
    padding: 3% 0 3% 0;
    background-color: #1d1da3;
`

const School = styled.p`
    border-bottom:2px solid white;
    margin:0;
    padding: 3% 0 3% 0;
    background-color: #9b1197;
`;
const GradDate = styled.p`
    margin:0;
    padding: 3% 0 3% 0;
    background-color: #7911ad;
`;



export {EducationTitle, DegreeInfo,Degree, School, GradDate};