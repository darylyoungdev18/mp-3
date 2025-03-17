import {createBrowserRouter, RouterProvider, Route,  Routes,} from "react-router-dom";
import ResumeHeader from "./Component/resume-header";
import Navbar from "./Component/resume-nav";
import ResumeFooter from "./Component/resume-footer";
import ResumeIndex from "./Component/resume-index";
import About from "./Component/about";
import Education from "./Component/education";
import Projects from "./Component/projects";
import TechnicalSkills from "./Component/technical-skills";
import WorkExperience from "./Component/work-experience";
import {ContentWrapper, MainContent, TopWrapper} from "./Component/wrapper-style";




function Root() {
    return(
        <>
            <TopWrapper>
                <div id="wrapper">
                    <ResumeHeader />
                    <ContentWrapper>
                        <Navbar/>
                        <MainContent>
                            <Routes>
                                <Route path="*" element={<ResumeIndex/>} />
                                <Route path="/about" element={<About/>} />
                                <Route path="/education" element={<Education/>} />
                                <Route path="/projects" element={<Projects/>} />
                                <Route path="/technical-skills" element={<TechnicalSkills/>} />
                                <Route path="/work-experience" element={<WorkExperience/>} />
                            </Routes>
                        </MainContent>
                    </ContentWrapper>
                </div>
                <ResumeFooter/>
            </TopWrapper>
        </>
    );
}

const router = createBrowserRouter(
    [{path:"*", Component:Root }]
)

export default function App() {
    return(
        <RouterProvider router={router}/>

    );
}


// can use useParams in the calculator so that the param is used for calculations
