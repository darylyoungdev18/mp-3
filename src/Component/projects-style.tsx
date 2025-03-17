import { styled } from "styled-components";

const ProjectTitleSection = styled.div`
    text-align: center;
    h2{
    font-size: calc(5px + 2vw);
    @media screen and (max-width: 900px){
        font-size: calc(5px + 7vw);
    }
}
`;

const ProjectInfo = styled.div`
    margin: 7% auto;
    
    h3 {
        font-size: calc(4px + 1.5vw);

        @media screen and (max-width: 900px) {
            font-size: calc(2px + 5.5vw);
        }
    }
`;

const ProjectDescription = styled.div`
    width: 70%;
    margin: 5% auto;
    text-align: left;

    h3 {
        font-size: calc(4px + 1.5vw);

        @media screen and (max-width: 900px) {
            font-size: calc(2px + 5.5vw);
        }
    }

    ul li {
        font-size: calc(2px + 1.1vw);

        @media screen and (max-width: 900px) {
            font-size: calc(1px + 4vw);
        }
    }
`;

const ProjectImage = styled.div`
    img {
        width: 80%;
        border-radius: 5%;
    }
`;

const RepoLink = styled.div`
    a {
        font-weight: 600;
        color: #210b77;
    }
`;

const TechUsed = styled.p`
    font-size: calc(4px + 1.5vw);
    font-weight: 600;
`;

export{ProjectTitleSection, ProjectInfo, ProjectDescription, ProjectImage, RepoLink, TechUsed};