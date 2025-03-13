import ResumeHeader from "./resume-header";
import ResumeFooter from "./resume-footer";
import Navbar from "./resume-nav.tsx";


export default function PageWrapper() {
    return(
        <div className="top-wrapper">
            <div id="wrapper">
                <ResumeHeader />
                <div className="content-wrapper">
                    <Navbar/>
                    <main>

                    </main>

                </div>
            </div>
            <ResumeFooter/>
        </div>
    );
}