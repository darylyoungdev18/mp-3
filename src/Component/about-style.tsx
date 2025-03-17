import { styled } from "styled-components";

const AboutSection = styled.div`
h2{
    font-size: calc(5px + 2vw);
    @media screen and (max-width: 900px){
        font-size: calc(5px + 7vw);
    }
}
p{
    font-size: calc(2px + 1.5vw);
    line-height:1.5;
    @media screen and (max-width: 900px){
        font-size: calc(1px + 4vw);
    }
}
`

export{AboutSection}