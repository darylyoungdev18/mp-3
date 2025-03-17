import { styled } from "styled-components";

const WorkTitleSection = styled.div`
h2{
    font-size: calc(5px + 2vw);
    @media screen and (max-width: 900px){
        font-size: calc(5px + 7vw);
    }
}
`;

const WorkRole = styled.h3`
    font-size: calc(4px + 1.5vw);
    @media screen and (max-width: 900px){
        font-size: calc(2px + 5.5vw);
    }

`;

const WorkLocation = styled.div `
    display:flex;
    justify-content: space-evenly;
    max-width: 60%;
    margin:auto;
@media screen and (max-width: 900px){
    display: block;
    max-width: none;
    p{
        font-size: calc(1px + 4vw); 
    }
}
`;

const WorkDescriptionSection = styled.div`
     text-align: left;
     ul{
         line-height:1.5;  
     }
    li{
        margin:auto auto 3% auto;
        font-size: calc(2px + 1.1vw);
        list-style-type: square;
            
    }
    @media screen and (max-width: 900px){
        li{
            font-size: calc(1px + 3vw);
            margin: auto auto 6% auto
        }
    }
`



export{WorkTitleSection, WorkRole, WorkLocation, WorkDescriptionSection};