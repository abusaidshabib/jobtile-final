import { Link } from "react-router-dom";
import PersonalDetails from "../../Features/HomePage/EditResume/AllForms/PersonalDetails";
import WorkingExperience from "../../Features/HomePage/EditResume/AllForms/WorkingExperience";
import EducationAdd from "../../Features/HomePage/EditResume/AllForms/EducationAdd";
import SkillsAdd from "../../Features/HomePage/EditResume/AllForms/SkillsAdd";
import AddProject from "../../Features/HomePage/EditResume/AllForms/AddProject";
import WebsiteLinks from "../../Features/HomePage/EditResume/AllForms/WebsiteLinks";
import AddLanguage from "../../Features/HomePage/EditResume/AllForms/AddLanguage";
import ReviewResume from "../../Features/HomePage/EditResume/ReviewResume";
import AddCertificate from "../../Features/HomePage/EditResume/AllForms/AddCertificate";

const EditResume = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1">
      <div className="md:p-16 p-8">
        <Link
          className="text-blue-600 font-semibold underline hover:text-blue-800 transition-all delay-100 duration-300"
          to="/"
        >
          Back to home
        </Link>
        <br />
        <br />
        <form>
          <p className="pb-5 text-2xl font-young">Personal Details</p>
          <PersonalDetails />
          <br />
          <br />
          <p className="text-2xl font-young">Working Experience</p>
          <p className="pb-5">
            Show your relevant experience (last 10 years). Use bullet points to
            note your achievements, if possible - use numbers/facts (Achieved X,
            measured by Y, by doing Z).
          </p>
          <WorkingExperience />
          <br />
          <br />
          <p className="text-2xl font-young">Education</p>
          <p className="pb-5">
            A varied education on your resume sums up the value that your
            learnings and background will bring to job.
          </p>
          <EducationAdd />
          <br />
          <br />
          <p className="text-2xl font-young">Skills</p>
          <p className="pb-5">
            Choose 5 important skills that show you fit the position. Make sure
            they match the key skills mentioned in the job listing (especially
            when applying via an online system).
          </p>
          <SkillsAdd />
          <br />
          <br />
          <p className="text-2xl font-young">Projects</p>
          <p className="pb-5">
            Choose 5 important skills that show you fit the position. Make sure
            they match the key skills mentioned in the job listing (especially
            when applying via an online system).
          </p>
          <AddProject />
          <br />
          <br />
          <p className="text-2xl font-young">Websites & Social Links</p>
          <p className="pb-5">
            You can add links to websites you want hiring managers to see!
            Perhaps It will be a link to your portfolio, LinkedIn profile, or
            personal website
          </p>
          <WebsiteLinks />
          <br />
          <br />
          <p className="text-2xl font-young pb-5">Language</p>
          <AddLanguage />
          <br />
          <br />
          <p className="text-2xl font-young pb-5">Certificate</p>
          <AddCertificate />
        </form>
      </div>
      <ReviewResume />
    </div>
  );
};

export default EditResume;
