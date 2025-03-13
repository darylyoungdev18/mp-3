import{ NavContainerStyle, NavUlStyle, NavLiStyle, NavLinksStyle } from "./nav-style"
export default function Navbar(){
    return(
        <NavContainerStyle>
            <NavUlStyle>
                <NavLiStyle>
                    <NavLinksStyle to="/" >
                        Home
                    </NavLinksStyle>
                </NavLiStyle>
                <NavLiStyle>
                    <NavLinksStyle to="/education">
                        Education
                    </NavLinksStyle>
                </NavLiStyle>
                <NavLiStyle>
                    <NavLinksStyle to="/work-experience">
                        Work Experience
                    </NavLinksStyle>
                </NavLiStyle>
                <NavLiStyle>
                    <NavLinksStyle to="/work-experience">
                        Technical Skills</NavLinksStyle>
                </NavLiStyle>
                <NavLiStyle>
                    <NavLinksStyle to="/projects">
                        Projects </NavLinksStyle>
                </NavLiStyle>
                <NavLiStyle>
                    <NavLinksStyle to="/about">
                        About </NavLinksStyle>
                </NavLiStyle>
            </NavUlStyle>
    </NavContainerStyle>
    );
}
