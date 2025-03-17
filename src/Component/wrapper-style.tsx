import { styled } from "styled-components";

const TopWrapper = styled.div`
width: 100%;
height: 100%;
`;

const Header = styled.header`
    h1 {
        background: #93cdfe;
        margin: 0;
        padding: 3rem 1rem;
        text-align: center;
        font-size: calc(5px + 2vw);

        @media screen and (max-width: 900px) {
            font-size: calc(5px + 7vw);
        }
    }
`;

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    min-height: 82vh;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const MainContent = styled.main`
    background: #bb2a2a;
    color: white;
    text-align: center;
    padding: 2% 3%;
`;

const MainHeading = styled.h2`
    font-size: calc(4px + 1.5vw);

    @media screen and (max-width: 900px) {
        font-size: calc(5px + 3.4vw);
    }
`;

const SubHeading = styled.h3`
    font-size: calc(4px + 1.3vw);
`;


const MainText = styled.p`
    font-size: calc(2px + 1.1vw);

    @media screen and (max-width: 900px) {
        font-size: calc(5px + 3vw);
    }
`;

const ResumeImage = styled.div`
    img {
        max-width: 70%;
    }
`;
export{TopWrapper, Header, ContentWrapper, MainContent, SubHeading, MainHeading, MainText, ResumeImage};