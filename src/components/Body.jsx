import MyEducation from "./EducationData"
import MyProject from "./ProjectData"
import MySkill from "./SkillData"
import LandingPage from "./LandingPage"
import MyContact from "./Contact"
import ResumeButton from "./ResumeButton"




export default function Body(){
    return (
        <div>
            <LandingPage />
            <MyProject />
            <MyEducation />
            <MySkill />
            <MyContact />
            <ResumeButton />
        </div>
            
    )
}











