import { Link } from "react-router-dom";
import { styled } from "styled-components";

const navContainerStyle = styled.nav`
            text-align: center;
            background: #c3c3c3;
    `;
const navUlStyle = styled(navContainerStyle)`
            margin: 0;
            list-style-type: none;
            padding: 0;`;
const navLiStyle = styled(navUlStyle)`
            width: 80%;
            padding: 6% 3%;
            margin: 10%;
            background: linear-gradient(to right, #0b00cf, #ff2d2b);
            color: white;
            border-radius: 3rem;`;

const navLinksStyle = styled.link`
            text-decoration: none;
            color: white;
            font-weight: 700;
            font-size: calc(2px + 1.2vw);
    
    &:hover {
        text-decoration: underline;
    }
    `;
<navContainerStyle>
    <nav>
        <navUlStyle>

            <navLiStyle>
                <navLinksStyle to="/" >
                Home
            </navLinksStyle>
        </navLiStyle>
        <navLiStyle>
            <navLinksStyle to="/education">
            Education
        </navLinksStyle>
    </navLiStyle>
    <navLiStyle>
        <navLinksStyle to="/work-experience">
        Work Experience
    </navLinksStyle>
</navLiStyle>
<navLiStyle>
    <navLinksStyle to="/work-experience">
    Technical Skills</navLinksStyle>
</navLiStyle>
<navLiStyle>
    <navLinksStyle to="/projects">
    Projects </navLinksStyle>
</navLiStyle>
<navLiStyle>
    <navLinksStyle to="/about">
    About </navLinksStyle>
</navLiStyle>
        </navUlStyle>
           

</nav>
</navContainerStyle>
   