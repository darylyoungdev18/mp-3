import { styled } from "styled-components";

const SkillTitleSection = styled.div`
h2{
    font-size: calc(5px + 2vw);
    @media screen and (max-width: 900px){
        font-size: calc(5px + 7vw);
    }
}
`;

const SkillsCategory = styled.div`
    margin: 5% auto;
    
    h3 {
        font-size: calc(4px + 1.5vw);

        @media screen and (max-width: 900px) {
            font-size: calc(2px + 5.5vw);
        }
    }
`;

const SkillsList = styled.ul`
    width: 50%;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    margin: auto;

    @media screen and (max-width: 900px) {
        display: block;
        max-width: none;
    }
`;

const SkillItem = styled.li`
    display: inline-block;
    font-size: calc(2px + 1.1vw);
    margin: auto auto 8% auto;

    @media screen and (max-width: 900px) {
        display: block;
        font-size: calc(1px + 4vw);
        margin: auto auto 6% auto;
    }
`;

export {SkillTitleSection, SkillsCategory, SkillsList, SkillItem };