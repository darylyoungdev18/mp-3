import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavContainerStyle = styled.nav`
            text-align: center;
            background: #c3c3c3;
    `;
const NavUlStyle = styled.ul`
            margin: 0;
            list-style-type: none;
            padding: 0;`;
const NavLiStyle = styled.li`
            width: 80%;
            padding: 6% 3%;
            margin: 10%;
            background: linear-gradient(to right, #0b00cf, #ff2d2b);
            color: white;
            border-radius: 3rem;`;

const NavLinksStyle = styled(Link)`
            text-decoration: none;
            color: white;
            font-weight: 700;
            font-size: calc(2px + 1.2vw);
    
    &:hover {
        text-decoration: underline;
    }
    `;
export {NavContainerStyle, NavUlStyle, NavLiStyle, NavLinksStyle};