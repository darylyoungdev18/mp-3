import {styled} from "styled-components";

const CalculatorSection = styled.div`
    background-color: #300741;
    padding: 5% 3%;
    border-radius: 15%;
    border: 4px solid white;

    h3 {
        margin: auto auto 8%;

        @media screen and (max-width: 900px) {
            font-size: calc(2px + 5.5vw);
        }
    }
`;

const NumEntrySection = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const BtnCmd = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 55%;
    margin: 4% auto;

    @media screen and (max-width: 900px) {
        width: unset;
    }
`;

const CalcButton = styled.button`
    margin: 10% 10%;
    padding: 5%;
    border-radius: 100%;
    font-size: calc(4px + 1.2vw);
    width: 60%;
    height: 60%;

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 3.5vw);
    }
`;

const Result = styled.div`
    p {
        font-size: calc(4px + 1.2vw);
    }

    #result {
        font-size: calc(4px + 3vw);
        font-style: italic;
    }
`;

export {CalculatorSection, NumEntrySection, BtnCmd, CalcButton, Result};