import { Link } from "react-router-dom";

const ResumeHero = () => {
    
  return (
    <div className="text-center 2xl:p-36 lg:p-24 md:p-16 p-8 text-main-v1 min-h-screen grid place-content-center">
      <p className="font-open uppercase tracking-widest font-semibold">
        Online Resume Builder
      </p>
      <div className="pt-10 flex flex-col items-center">
        <p className="text-5xl font-young w-3/5">
          Only 2% of resumes make it past the first round. Be in the top 2%
        </p>
        <p className="text-xl py-3 w-1/2">
          Use professional field-tested resume templates that follow the exact
          ‘resume rules’ employers look for. Easy to use and done within minutes
          - try now for free!
        </p>
        <Link
          className="border-2 border-main-v1 py-2 px-4 font-bold text-sm text-white bg-main-v1 hidden md:block"
          to="/template"
        >
          Create Resume
        </Link>
      </div>
    </div>
  );
};

export default ResumeHero;
